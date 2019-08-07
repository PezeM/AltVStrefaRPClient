class Inventory {
    constructor(inventoryData) {
        this.inventoryName = inventoryData.inventoryName;
        this.inventoryId = inventoryData.inventoryId;
        this.inventorySlots = inventoryData.inventorySlots;
        this.items = inventoryData.items;
    }
}

import Actions from "./inventoryActions";

export default class InventoryController {
    constructor(personalInventory, equippedInventory, addonationalInventory) {
        console.log(`Inventory controller initialized`);
        this.personalInventory = personalInventory;
        this.equippedInventory = equippedInventory;
        this.addonationalInventory = addonationalInventory;

        this.selectedInventory = null;
        this.selectedItem = null;
        this.itemToSwap = null;
        this.swappingObject = null;

        this.movingOverInventory = null;
        this.isMovingItemsBetweenInventories = false;

        this.newSlotId = -1;
        this.action = Actions.None;
    }

    setSelectedInventory(inventory) {
        switch (inventory) {
            case this.personalInventory:
                console.log(`Selected personal inventory`);
                this.selectedInventory = this.personalInventory;
                break;
            case this.equippedInventory:
                console.log('Selected equipped inventory');
                this.selectedInventory = this.equippedInventory;
                break;
            case this.addonationalInventory:
                console.log('Selected addonational inventory');
                this.selectedInventory = this.addonationalInventory;
                break;
            default:
                console.log(`ERROR in InventoryController. Couldn't select inventory ${inventory}`);
                break;
        }
    }

    setSelectedItem(itemId, swappingObject) {
        this.selectedItem = this.getItemById(itemId);
        this.swappingObject = swappingObject;
        console.log(`Selected item is ${JSON.stringify(this.selectedItem)}`);
    }

    setItemToSwap(itemId) {
        this.itemToSwap = this.getItemByIdFromInventoryItems(this.movingOverInventory.items, itemId)
        console.log(`Item to swap was ${JSON.stringify(this.itemToSwap)}`);
    }

    setMovingOverInventory(inventory) {
        this.movingOverInventory = this._getInventory(inventory);
        if (this.movingOverInventory == null) {
            this.isMovingItemsBetweenInventories = false;
            console.log(`ERROR in InventoryController. Couldn't set moving over inventory. Moving over inventory = ${JSON.stringify(this.movingOverInventory)}`);
            return;
        }
    }

    setCorrectAction(eventData) {
        console.log('Setting correct action');
        this.action = Actions.None;

        if (this.itemToSwap == null) {
            // Move to empty slot
            console.log('Move to empty slot');
            this.newSlotId = Number(eventData.over.parentNode.id);
            console.log('Slot id = ' + this.newSlotId);
            if (this.newSlotId >= 0) this.action = Actions.Move;
        } else if (this._isItemStackable(this.itemToSwap) && this._isItemStackable(this.selectedItem)) {
            // Stack items
            if (this.canStackItems(this.selectedItem, this.itemToSwap)) {
                this.action = Actions.Stack;
            }
        } else if (this.itemToSwap != this.selectedItem) {
            // Swap items
            this.action = Actions.Swap;
        }

        console.log(`Action = ${this.action}`);
    }

    setDropAction() {
        if (this.selectedItem) {
            this.action = Actions.Drop;
            return true;
        }
        return false;
    }

    canStackItems(itemToStack, item) {
        return (itemToStack.stackSize > 1 && item.stackSize > 1)
            && (item.quantity < item.stackSize)
            && (itemToStack.id != item.id);
    }

    reset() {
        this.selectedInventory = null;
        this.selectedItem = null;
        this.itemToSwap = null;
        this.swappingObject = null;

        this.movingOverInventory = null;
        this.isMovingItemsBetweenInventories = false;

        this.newSlotId = -1;
        this.action = Actions.None;
    }

    removeItem(item) {
        if (item == null) return;
        this.selectedInventory.items = this.selectedInventory.items.filter(i => i.id !== item.id);
        // this.selectedInventory.items.splice(this.selectedInventory.items.indexOf(item), 1);
    }

    getItemById(itemId) {
        for (let i = 0; i < this.selectedInventory.items.length; i++) {
            if (this.selectedInventory.items[i].id == itemId) return this.selectedInventory.items[i];
        }
        return null;
    }

    getItemByIdFromInventoryItems(inventoryItems, itemId) {
        for (let i = 0; i < inventoryItems.length; i++) {
            if (inventoryItems[i].id == itemId) return inventoryItems[i];
        }
        return null;
    }

    _isItemStackable(item) {
        return item.stackSize > 1;
    }

    _getInventory(inventory) {
        switch (inventory.inventoryId) {
            case this.personalInventory.inventoryId:
                return this.personalInventory;
            case this.equippedInventory.inventoryId:
                return this.equippedInventory;
            case this.addonationalInventory.inventoryId:
                return this.addonationalInventory;
            default:
                console.log(`ERROR in InventoryController. Couldn't get inventory ${JSON.stringify(inventory)}`);
                break;
        }
    }
}