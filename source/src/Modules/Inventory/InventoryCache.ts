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

    getItem(itemId: number) {
        if (this.cachedInventory == null) return null;
        for (let i = 0; i < this.cachedInventory.items.length; i++) {
            if (this.cachedInventory.items[i].id === itemId)
                return this.cachedInventory.items[i];
        }
        return null;
    }

    stackItems(inventoryId: number, itemToStackFromId: number, itemToStackId: number, amountOfStackedItems: number, itemToStackInventoryId: number) {
        const inventory = this.getInventory(inventoryId); // We don't have this

        // Moving between inventories
        if (itemToStackInventoryId > -1) {
            if (inventory == null) {
                // Vehicle inv is null
                // itemToStack quantity++
                // check if personal inv is not null
                const itemToStack = this.getItem(itemToStackId);
                if (itemToStack == null) return;

                this.addItemQuantity(itemToStack, amountOfStackedItems);

            } else {
                // Personal inv is inventory
                // Moving to vehicle inventory
                // check if personal inv is not null
                // Decreaase quantity of item itemToStackFrom
                const itemToStackFrom = this.getItem(itemToStackFromId);
                if (itemToStackFrom == null) return;

                this.removeItem(itemToStackFrom, amountOfStackedItems, inventory);
            }

            // // Stacking from personal inventory to addonational inventory
            // if (inventoryToStack == null) { // samochod
            //     if (inventory == null) return; // nasze inventory
            //     const itemToStackFrom = this.getItemFromInventory(inventory, itemToStackFromId);
            //     if (itemToStackFrom == null) return;
            //     itemToStackFrom.quantity -= amountOfStackedItems;

            //     if (itemToStackFrom.quantity <= 0) {
            //         inventory.items = inventory.items.splice(inventory.items.indexOf(itemToStackFrom), 1);
            //     }
            // } else {
            //     // Stacking from addonational inventory to personal inventory
            //     const itemToStack = this.getItemFromInventory(inventoryToStack, itemToStackId);
            //     if (itemToStack == null) return;
            //     itemToStack.quantity += amountOfStackedItems;

            //     if (itemToStack.quantity > itemToStack.stackSize) itemToStack.quantity = itemToStack.stackSize;
            // }
        } else {
            // Stacking items in personal inventory
            if (inventory == null) return;
            const itemToStack = this.getItem(itemToStackId);
            const itemToStackFrom = this.getItem(itemToStackFromId);
            if (itemToStack == null || itemToStackFrom == null) {
                alt.logError(`Stack items error: One of the items was null`);
                return;
            }

            this.addItemQuantity(itemToStack, amountOfStackedItems);
            this.removeItem(itemToStackFrom, amountOfStackedItems, inventory);
        }
    }

    moveItem(inventoryId: number, selectedItemId: number, newSlotId: number) {
        // Need to check if iventoryId is personal inventory or equipped inventory
        if (this.cachedInventory == null || this.cachedInventory.inventoryId !== inventoryId) return;
        const itemToMove = this.getItem(selectedItemId);
        if (itemToMove == null) return;
        itemToMove.slotId = newSlotId;
        alt.log(`Moved item ${selectedItemId} to ${newSlotId}`);
    }

    swapItems(inventoryId: number, selectedItemId: number, selectedItemSlotId: number, itemToSwapId: number, itemToSwapSlotId: number) {
        if (this.cachedInventory == null) return;
        const selectedItem = this.getItem(selectedItemId);
        const itemToSwap = this.getItem(itemToSwapId);
        if (itemToSwap == null || selectedItem == null) return;
        selectedItem.slotId = selectedItemSlotId;
        itemToSwap.slotId = itemToSwapSlotId;
        alt.log(`Swapped slot of item ${selectedItemId} to ${selectedItemSlotId} and ${itemToSwapId} to ${itemToSwapSlotId}`);
    }

    dropItem(inventoryId: number, itemToDropId: number, quantity: number) {
        const inventory = this.getInventory(inventoryId);
        if (inventory == null) return;

        const itemToDrop = this.getItem(itemToDropId);
        if (itemToDrop == null) return;
        if (itemToDrop.quantity < quantity) return;

        itemToDrop.quantity -= quantity;
        if (itemToDrop.quantity <= 0) {
            inventory.items = inventory.items.filter(i => i.id !== itemToDrop.id);
        }
    }

    addNewItem(newItem: IInventoryItem) {
        if (this.cachedInventory == null) return;
        this.cachedInventory.items.push(newItem);
    }

    updateInventoryItemQuantity(itemId: number, itemQuantity: number) {
        const item = this.getItem(itemId);
        if (item == null) return;
        item.quantity = itemQuantity;
    }

    private addItemQuantity(item: IInventoryItem, amount: number) {
        item.quantity += amount;
        if (item.quantity > item.stackSize)
            item.quantity = item.stackSize;
    }

    private removeItem(item: IInventoryItem, amount: number, inventory: IInventoryContainer) {
        item.quantity -= amount;
        if (item.quantity <= 0) {
            inventory.items = inventory.items.splice(inventory.items.indexOf(item), 1);
        }
    }

    private getInventory(inventoryId: number) {
        if (this.cachedInventory != null && this.cachedInventory.inventoryId === inventoryId) {
            return this.cachedInventory;
        } else if (this.cachedEquippedInventory != null && this.cachedEquippedInventory.inventoryId === inventoryId) {
            return this.cachedEquippedInventory;
        }
    }

    private getItemFromInventory(inventory: IInventoryContainer, itemId: number) {
        for (let i = 0; i < inventory.items.length; i++) {
            if (inventory.items[i].id === itemId)
                return inventory.items[i];
        }
        return null;
    }
}

const inventoryCache = new InventoryCache();
export default inventoryCache;