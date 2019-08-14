import * as alt from 'alt';
import { IInventoryItem, IInventoryContainer } from "source/src/Constans/interfaces";

class InventoryCache {
    cachedInventoryId: number;
    cachedEquippedInventoryId: number;
    cachedInventory: IInventoryContainer | null;
    cachedEquippedInventory: IInventoryContainer | null;
    lastOpenedInventory: IInventoryContainer | null;

    constructor() {
        this.cachedInventory = null;
        this.cachedEquippedInventory = null;
        this.lastOpenedInventory = null;
    }

    setInventory(inventory: IInventoryContainer) {
        this.cachedInventory = inventory;
    }

    setEquippedInventory(equippedInventory: IInventoryContainer) {
        this.cachedEquippedInventory = equippedInventory;
    }

    setLastOpenedInventory(lastOpenedInventroy: IInventoryContainer) {
        this.lastOpenedInventory = lastOpenedInventroy;
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
        const inventory = this.getInventory(inventoryId);
        if (inventory == null) return;

        // Moving between inventories
        if (itemToStackInventoryId > -1) {
            const inventoryToStack = this.getInventory(itemToStackInventoryId);
            if (inventoryToStack == null) return;

            this.stackItem(inventory, itemToStackFromId, inventoryToStack, itemToStackId, amountOfStackedItems);
        } else {
            // Stacking items in personal inventory
            this.stackItem(inventory, itemToStackFromId, inventory, itemToStackId, amountOfStackedItems);
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

    equipItem(selectedInventoryId: number, playerEquipmentId: number, itemToEquipId: number, slotId: number) {
        if (this.cachedEquippedInventory == null) return;
        if (playerEquipmentId !== this.cachedEquippedInventory.inventoryId) return;
        const inventory = this.getInventory(selectedInventoryId);
        if (inventory == null) return;
        const itemToEquip = this.getItemFromInventory(inventory, itemToEquipId);
        if (itemToEquip == null) return;

        itemToEquip.slotId = slotId;
        this.cachedEquippedInventory.items.push(itemToEquip);
        this.removeItem(itemToEquip, inventory);
    }

    unequipItem(playerEquipmentId: number, selectedInventoryId: number, equippedItemId: number, newSlotId: number) {
        if (this.cachedEquippedInventory == null) return;
        if (playerEquipmentId !== this.cachedEquippedInventory.inventoryId) return;

        const itemToUnequip = this.getItemFromInventory(this.cachedEquippedInventory, equippedItemId);
        if (itemToUnequip == null) return;
        const inventory = this.getInventory(selectedInventoryId);
        if (inventory == null) return;

        itemToUnequip.slotId = newSlotId;
        this.removeItem(itemToUnequip, this.cachedEquippedInventory);
        inventory.items.push(itemToUnequip);
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

    private stackItem(inventory: IInventoryContainer, itemToStackFromId: number, inventoryToStack: IInventoryContainer, itemToStackId: number,
        amountOfStackedItems: number) {
        const itemToStack = this.getItemFromInventory(inventoryToStack, itemToStackId);
        if (itemToStack != null) {
            this.addItemQuantity(itemToStack, amountOfStackedItems);
        }

        const itemToStackFrom = this.getItemFromInventory(inventory, itemToStackFromId);
        if (itemToStackFrom != null) {
            this.removeItemQuantity(itemToStackFrom, inventory, amountOfStackedItems);
        }
    }

    private addItemQuantity(item: IInventoryItem, amount: number) {
        item.quantity += amount;
        if (item.quantity > item.stackSize)
            item.quantity = item.stackSize;
    }

    private removeItem(item: IInventoryItem, inventory: IInventoryContainer) {
        inventory.items = inventory.items.filter(i => i.id !== item.id);
    }

    private removeItemQuantity(item: IInventoryItem, inventory: IInventoryContainer, quantity: number) {
        item.quantity -= quantity;
        if (item.quantity <= 0) {
            this.removeItem(item, inventory);
        }
    }

    private getInventory(inventoryId: number) {
        if (this.cachedInventory != null && this.cachedInventory.inventoryId === inventoryId) {
            return this.cachedInventory;
        } else if (this.cachedEquippedInventory != null && this.cachedEquippedInventory.inventoryId === inventoryId) {
            return this.cachedEquippedInventory;
        } else if (this.lastOpenedInventory != null && this.lastOpenedInventory.inventoryId === inventoryId) {
            return this.lastOpenedInventory;
        }
        return null;
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