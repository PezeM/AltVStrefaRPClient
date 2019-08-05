import * as alt from 'alt';
import { IInventoryItem, IInventoryContainer } from "source/src/Constans/interfaces";

class InventoryCache {
    cachedInventoryId: number;
    cachedEquippedInventoryId: number;
    cachedInventory: IInventoryContainer | null;
    cachedEquippedInventory: IInventoryContainer | null;

    constructor() {
        this.cachedInventory = null;
        this.cachedEquippedInventory = null;
    }

    setInventory(inventory: IInventoryContainer) {
        this.cachedInventory = inventory;
    }

    setEquippedInventory(equippedInventory: IInventoryContainer) {
        this.cachedEquippedInventory = equippedInventory;
    }

    getItemWithId(itemId: number) {
        if (this.cachedInventory === null) return null;
        return this.cachedInventory.Items.find(i => i.Id === itemId);
    }

    stackItems(itemToStackId: number, itemToStackFromId: number) {
        // Implement stacking items
        if (this.cachedInventory === null) return;
        const itemToStack = this.getItemWithId(itemToStackId);
        const itemToStackFrom = this.getItemWithId(itemToStackFromId);
        if (itemToStack == null || itemToStackFrom == null) {
            alt.logError(`Stack items error: One of the items was null`);
            return;
        }

        // Stacking logic. Remove item if the quantity of item to stack is 0
        const amountOfItemsToStack = itemToStackFrom.Quantity;
        const maxQuantity = itemToStack.StackSize - itemToStack.Quantity;
        const toAdd = Math.min(amountOfItemsToStack, maxQuantity);
        if (toAdd <= 0) return;
        itemToStack.Quantity += toAdd;
        itemToStackFrom.Quantity -= toAdd;
        if (itemToStackFrom.Quantity <= 0) {
            alt.log(`Should delete item`);
            this.cachedInventory.Items = this.cachedInventory.Items.filter(i => i.Id !== itemToStackFrom.Id);
        }
    }

    moveItem(selectedItemId: number, selectedItemSlotId: number) {
        if (this.cachedInventory == null) return;
        const itemToMove = this.getItemWithId(selectedItemId);
        if (itemToMove == null) return;
        itemToMove.SlotId = selectedItemSlotId;
        alt.log(`Moved item ${selectedItemId} to ${selectedItemSlotId}`);
    }

    swapItems(selectedItemId: number, selectedItemSlotId: number, itemToSwapId: number, itemToSwapSlotId: number) {
        if (this.cachedInventory == null) return;
        const selectedItem = this.getItemWithId(selectedItemId);
        const itemToSwap = this.getItemWithId(itemToSwapId);
        if (itemToSwap == null || selectedItem == null) return;
        selectedItem.SlotId = selectedItemSlotId;
        itemToSwap.SlotId = itemToSwapSlotId;
        alt.log(`Swapped slot of item ${selectedItemId} to ${selectedItemSlotId} and ${itemToSwapId} to ${itemToSwapSlotId}`);
    }

    dropItem(itemToDropId: number, quantity: number) {
        if (this.cachedInventory == null) return;
        const itemToDrop = this.getItemWithId(itemToDropId);
        if (itemToDrop == null) return;
        if (itemToDrop.Quantity < quantity) return;
        itemToDrop.Quantity -= quantity;
        if (itemToDrop.Quantity <= 0) {
            this.cachedInventory.Items = this.cachedInventory.Items.filter(i => i.Id !== itemToDrop.Id);
        }
    }

    addNewItem(newItem: IInventoryItem) {
        if (this.cachedInventory == null) return;
        this.cachedInventory.Items.push(newItem);
    }

    updateInventoryItemQuantity(itemId: number, itemQuantity: number) {
        const item = this.getItemWithId(itemId);
        if (item == null) return;
        item.Quantity = itemQuantity;
    }
}

const inventoryCache = new InventoryCache();
export default inventoryCache;