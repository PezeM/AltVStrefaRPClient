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
        return this.cachedInventory.items.find(i => i.id === itemId);
    }

    stackItems(inventoryId: number, itemToStackFromId: number, itemToStackId: number) {
        // Implement stacking items
        // Add checking inventory
        if (this.cachedInventory === null) return;
        const itemToStack = this.getItemWithId(itemToStackId);
        const itemToStackFrom = this.getItemWithId(itemToStackFromId);
        if (itemToStack == null || itemToStackFrom == null) {
            alt.logError(`Stack items error: One of the items was null`);
            return;
        }

        // Stacking logic. Remove item if the quantity of item to stack is 0
        const amountOfItemsToStack = itemToStackFrom.quantity;
        const maxQuantity = itemToStack.stackSize - itemToStack.quantity;
        const toAdd = Math.min(amountOfItemsToStack, maxQuantity);
        if (toAdd <= 0) return;
        itemToStack.quantity += toAdd;
        itemToStackFrom.quantity -= toAdd;
        if (itemToStackFrom.quantity <= 0) {
            alt.log(`Should delete item`);
            this.cachedInventory.items = this.cachedInventory.items.filter(i => i.id !== itemToStackFrom.id);
        }
    }

    moveItem(inventoryId: number, selectedItemId: number, newSlotId: number) {
        // Need to check if iventoryId is personal inventory or equipped inventory
        if (this.cachedInventory == null || this.cachedInventory.inventoryId !== inventoryId) return;
        const itemToMove = this.getItemWithId(selectedItemId);
        if (itemToMove == null) return;
        itemToMove.slotId = newSlotId;
        alt.log(`Moved item ${selectedItemId} to ${newSlotId}`);
    }

    swapItems(inventoryId: number, selectedItemId: number, selectedItemSlotId: number, itemToSwapId: number, itemToSwapSlotId: number) {
        if (this.cachedInventory == null) return;
        const selectedItem = this.getItemWithId(selectedItemId);
        const itemToSwap = this.getItemWithId(itemToSwapId);
        if (itemToSwap == null || selectedItem == null) return;
        selectedItem.slotId = selectedItemSlotId;
        itemToSwap.slotId = itemToSwapSlotId;
        alt.log(`Swapped slot of item ${selectedItemId} to ${selectedItemSlotId} and ${itemToSwapId} to ${itemToSwapSlotId}`);
    }

    dropItem(itemToDropId: number, quantity: number) {
        if (this.cachedInventory == null) return;
        const itemToDrop = this.getItemWithId(itemToDropId);
        if (itemToDrop == null) return;
        if (itemToDrop.quantity < quantity) return;
        itemToDrop.quantity -= quantity;
        if (itemToDrop.quantity <= 0) {
            this.cachedInventory.items = this.cachedInventory.items.filter(i => i.id !== itemToDrop.id);
        }
    }

    addNewItem(newItem: IInventoryItem) {
        if (this.cachedInventory == null) return;
        this.cachedInventory.items.push(newItem);
    }

    updateInventoryItemQuantity(itemId: number, itemQuantity: number) {
        const item = this.getItemWithId(itemId);
        if (item == null) return;
        item.quantity = itemQuantity;
    }
}

const inventoryCache = new InventoryCache();
export default inventoryCache;