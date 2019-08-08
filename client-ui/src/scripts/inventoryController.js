import Actions from "./inventoryActions";
import EventBus from '@/event-bus.js';

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
    }

    setItemToSwap(itemId) {
        this.itemToSwap = this.getItemByIdFromInventoryItems(this.movingOverInventory.items, itemId)
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
        this.action = Actions.None;

        if (this.itemToSwap == null) {
            // Move to empty slot
            this.newSlotId = Number(eventData.over.parentNode.id);
            if (this.newSlotId >= 0) this.action = Actions.Move;
        } else if (this._isItemStackable(this.itemToSwap) && this._isItemStackable(this.selectedItem)) {
            // Stack items
            if (this._canStackItems(this.selectedItem, this.itemToSwap)) {
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

    onDraggableStop(event) {
        switch (this.action) {
            case Actions.Drop:
                this.onActionItemDrop();
                break;
            case Actions.Move:
                this.onActionItemMove();
                break;
            case Actions.Stack:
                this.onActionItemStack();
                break;
            case Actions.Swap:
                this.onActionItemSwap();
                break;
            default:
                break;
        }
        this.reset();
    }

    onActionItemDrop() {
        // TODO: Checking if user has enough of item quantity before dropping
        if (this.selectedItem == null) return;
        if (!this.selectedItem.isDroppable) {
            EventBus.$emit('showNotification', 3, 'Błąd', 'Nie można wyrzucić tego przedmiotu.', 3500);
            return;
        }

        alt.emit('inventoryTryDropItem', this.selectedInventory.inventoryId, this.selectedItem.id, this.selectedItem.quantity);
    }

    itemDroppedSuccessfully(inventoryId, itemId, quantity) {
        const inventory = this._getInventoryById(inventoryId);
        if (inventory == null) return;
        const itemToDrop = this.getItemByIdFromInventoryItems(inventory.items, itemId);
        if (itemToDrop == null) return;

        console.log(`Found inventory ${inventory.inventoryName} and item ${itemToDrop.name}`);

        itemToDrop.quantity -= quantity;
        if (itemToDrop.quantity <= 0) {
            inventory.items.splice(inventory.items.indexOf(itemToDrop), 1);
        }
    }

    onActionItemMove() {
        if (this.selectedItem == null || this.movingOverInventory == null) return;
        if (this.newSlotId > this.movingOverInventory.inventorySlots - 1) return;
        this.selectedItem.slotId = this.newSlotId;

        if (this.isMovingItemsBetweenInventories) {
            // Transfering items between inventories
            console.log(`Moving item id ${this.selectedItem.id} from inventory ${this.selectedInventory.inventoryId} to inventory ${this.movingOverInventory.inventoryId}`);
            alt.emit('inventoryTransferItem', this.selectedInventory.inventoryId, this.movingOverInventory.inventoryId,
                this.selectedItem.id, this.selectedItem.slotId);

            // Temporary for visual
            this.removeItem(this.selectedItem);
            this.movingOverInventory.items.push(this.selectedItem);
        } else {
            alt.emit('inventoryMoveItem', this.selectedInventory.inventoryId, this.selectedItem.id, this.newSlotId);
        }
    }

    onActionItemStack() {
        // Implement stacking items between inventories
        if (this.selectedItem == null || this.itemToSwap == null) return;
        let amountOfItemsToStack = this.selectedItem.quantity;
        const maxQuantity = this.itemToSwap.stackSize - this.itemToSwap.quantity;
        const toAdd = Math.min(amountOfItemsToStack, maxQuantity);
        if (toAdd <= 0) return;

        if (this.isMovingItemsBetweenInventories) {
            console.log(`Stacking item id ${this.selectedItem.id} from inventory ${this.selectedInventory.inventoryName} with item ${this.itemToSwap.id} from inventory ${this.movingOverInventory.inventoryName}`);
            alt.emit('inventoryStackItems', this.selectedInventory.inventoryId, this.selectedItem.id, this.itemToSwap.id, this.movingOverInventory.id);
        } else {
            console.log(`Stacked item ${this.selectedItem.id} with item ${this.itemToSwap.id}`);
            alt.emit('inventoryStackItems', this.selectedInventory.inventoryId, this.selectedItem.id, this.itemToSwap.id);
        }

        // Temporary till callbacks from server
        this.itemToSwap.quantity += toAdd;
        this.selectedItem.quantity -= toAdd;
        if (this.selectedItem.quantity <= 0) {
            console.log(`Should delete item`);
            this.removeItem(this.selectedItem);
        }
    }

    onActionItemSwap() {
        if (this.selectedItem == null || this.itemToSwap == null) return;

        // Temporary
        const temporarySlot = this.itemToSwap.slotId;
        this.itemToSwap.slotId = this.selectedItem.slotId;
        this.selectedItem.slotId = temporarySlot;

        if (this.isMovingItemsBetweenInventories) {
            // Temporary till callbacks
            this.removeItem(this.selectedItem);
            this.selectedInventory.items.push(this.itemToSwap);

            this.movingOverInventory.items = this.movingOverInventory.items.filter(i => i.id != this.itemToSwap.id);
            this.movingOverInventory.items.push(this.selectedItem);

            alt.emit('inventorySwapItems', this.selectedInventory.inventoryId, this.selectedItem.id, this.selectedItem.slotId,
                this.itemToSwap.id, this.itemToSwap.slotId, this.movingOverInventory.inventoryId);
        } else {
            alt.emit('inventorySwapItems', this.selectedInventory.inventoryId, this.selectedItem.id, this.selectedItem.slotId,
                this.itemToSwap.id, this.itemToSwap.slotId);
        }
    }

    reset() {
        console.log('Called inventory controller stop');
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

    _canStackItems(itemToStack, item) {
        return (itemToStack.stackSize > 1 && item.stackSize > 1)
            && (item.quantity < item.stackSize)
            && (itemToStack.id != item.id);
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

    _getInventoryById(inventoryId) {
        if (this.personalInventory.inventoryId === inventoryId) return this.personalInventory;
        else if (this.equippedInventory.inventoryId === inventoryId) return this.equippedInventory;
        else if (this.addonationalInventory.inventoryId === inventoryId) return this.addonationalInventory;
        return null;
    }
}