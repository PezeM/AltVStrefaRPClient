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
}

const inventoryCache = new InventoryCache();
export default inventoryCache;