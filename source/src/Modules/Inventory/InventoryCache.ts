import * as alt from 'alt';
import { IInventoryItem } from "source/src/Constans/interfaces";

class InventoryCache {
    cachedItems: IInventoryItem[] | null;
    cachedEquippedItems: any[] | null;
    constructor() {
        this.cachedItems = null;
        this.cachedEquippedItems = null;
    }
    setItems(items: any) {
        this.cachedItems = items;
    }

    setEquippedItems(equippedItems: any) {
        this.cachedEquippedItems = equippedItems;
    }

    getItemWithId(itemId: number) {
        if (this.cachedItems === null) return null;
        return this.cachedItems.find(i => i.Id === itemId);
    }

    stackItems(itemToStackId: number, itemToStackFromId: number) {
        // Implement stacking items
        if (this.cachedItems === null) return;
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
            this.cachedItems = this.cachedItems.filter(i => i.Id !== itemToStackFrom.Id);
        }
    }

    moveItem(selectedItemId: number, selectedItemSlotId: number) {
        if (this.cachedItems == null) return;
        const itemToMove = this.getItemWithId(selectedItemId);
        if (itemToMove == null) return;
        itemToMove.SlotId = selectedItemSlotId;
        alt.log(`Moved item ${selectedItemId} to ${selectedItemSlotId}`);
    }

    swapItems(selectedItemId: number, selectedItemSlotId: number, itemToSwapId: number, itemToSwapSlotId: number) {
        if (this.cachedItems == null) return;
        const selectedItem = this.getItemWithId(selectedItemId);
        const itemToSwap = this.getItemWithId(itemToSwapId);
        if (itemToSwap == null || selectedItem == null) return;
        selectedItem.SlotId = selectedItemSlotId;
        itemToSwap.SlotId = itemToSwapSlotId;
        alt.log(`Swapped slot of item ${selectedItemId} to ${selectedItemSlotId} and ${itemToSwapId} to ${itemToSwapSlotId}`);
    }

    dropItem(itemToDropId: number, quantity: number) {
        if (this.cachedItems == null) return;
        const itemToDrop = this.getItemWithId(itemToDropId);
        if (itemToDrop == null) return;
        if (itemToDrop.Quantity < quantity) return;
        itemToDrop.Quantity -= quantity;
        if (itemToDrop.Quantity <= 0) {
            this.cachedItems = this.cachedItems.filter(i => i.Id !== itemToDrop.Id);
        }
    }
}

const inventoryCache = new InventoryCache();
export default inventoryCache;