import Actions from "./inventoryActions";
import EventBus from '@/event-bus.js';

export default class InventoryController {
    constructor(personalInventory, playerEquipment, addonationalInventory) {
        this.personalInventory = personalInventory;
        this.playerEquipment = playerEquipment;
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
            case this.playerEquipment:
                console.log('Selected equipped inventory');
                this.selectedInventory = this.playerEquipment;
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

        // Add checking for equiping/deequiping items
        // Stacking items in equipped inventory and dropping
        if (this.itemToSwap == null) {
            // Move to empty slot
            this.newSlotId = Number(eventData.over.parentNode.id);
            if (this.newSlotId >= 0) this.action = Actions.Move;
        } else if (this.itemToSwap != this.selectedItem) {
            // Swap items
            this.action = Actions.Swap;
            // Stack items
            if (this._isItemStackable(this.itemToSwap) && this._isItemStackable(this.selectedItem)) {
                if (this._canStackItems(this.selectedItem, this.itemToSwap)) {
                    this.action = Actions.Stack;
                }
            }
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

        if (this.selectedInventory == this.playerEquipment) {
            EventBus.$emit('showNotification', 3, 'Błąd', 'Musisz najpierw zdjąc przedmiot żeby go wyrzucić.', 5000);
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

        this._removeItemQuantityFromInventory(itemToDrop, quantity, inventory);
    }

    onActionItemMove() {
        if (this.selectedItem == null || this.movingOverInventory == null) return;
        console.log(`Moving item id ${this.selectedItem.id} from inventory ${this.selectedInventory.inventoryId} to inventory ${this.movingOverInventory.inventoryId}`);

        if (!this.isMovingItemsBetweenInventories) {
            // Can't move items inside equipped inventories
            if (this.selectedInventory.inventoryId === this.playerEquipment.inventoryId) return;

            alt.emit('inventoryMoveItem', this.selectedInventory.inventoryId, this.selectedItem.id, this.newSlotId);
            return;
        }

        if (this.movingOverInventory.inventoryId == this.playerEquipment.inventoryId) {
            console.log('Try to equip item');
            this.tryToEquipItem();
            return;
        } else if (this.selectedInventory.inventoryId == this.playerEquipment.inventoryId) {
            console.log('Try to unequip item');
            this.tryToUnequipItem();
            return;
        }

        // Transfering items between inventories
        alt.emit('inventoryTryTransferItem', this.selectedInventory.inventoryId, this.movingOverInventory.inventoryId,
            this.selectedItem.id, this.newSlotId);

        // Temporary for visual
        // this.removeItem(this.selectedItem);
        // this.movingOverInventory.items.push(this.selectedItem);
    }

    tryToEquipItem() {
        if (!this._isItemEquipmentable(this.selectedItem)) return;
        if (!this._isItemEquipmentableAtThisSlot(this.selectedItem, this.newSlotId)) return;

        alt.emit('inventoryTryEquipItem', this.selectedInventory.inventoryId, this.movingOverInventory.inventoryId, this.selectedItem.id, this.newSlotId);
    }

    tryToUnequipItem() {
        if (!this._isItemEquipmentable(this.selectedItem)) return;

        alt.emit('inventoryTryUnequipItem', this.selectedInventory.inventoryId, this.movingOverInventory.inventoryId, this.selectedItem.id, this.newSlotId);
    }

    itemWasMovedSuccessfully(selectedInventoryId, selectedItemId, newSlotNumber) {
        const inventory = this._getInventoryById(selectedInventoryId);
        if (inventory == null) return;
        const itemToMove = this.getItemByIdFromInventoryItems(inventory.items, selectedItemId);
        if (itemToMove == null) return;
        itemToMove.slotId = newSlotNumber;
    }

    itemWasTransferedSuccessfully(inventoryToMoveFromId, inventoryToMoveToId, itemToTransferId, slotId) {
        const source = this._getInventoryById(inventoryToMoveFromId);
        if (source == null) return;
        const receiver = this._getInventoryById(inventoryToMoveToId);
        const itemToTransfer = this.getItemByIdFromInventoryItems(source.items, itemToTransferId);
        if (itemToTransfer == null) return;

        this._removeItemFromInventory(itemToTransfer, source);
        itemToTransfer.slotId = slotId;
        if (receiver != null) {
            receiver.items.push(itemToTransfer);
        }
    }

    itemWasEquippedSuccessfully(selectedInventoryId, playerEquipmentId, itemToEquipId, slotId) {
        if (this.playerEquipment == null || this.playerEquipment.inventoryId != playerEquipmentId) return;
        console.log('Getting inventory');
        const inventory = this._getInventoryById(selectedInventoryId);
        if (inventory == null) return;
        console.log('Gettint item to equip');
        const itemToEquip = this.getItemByIdFromInventoryItems(inventory.items, itemToEquipId);
        if (itemToEquip == null) return;

        console.log(`Equipping item ID ${itemToEquip.id} from inventory ${inventory.inventoryId}`);
        itemToEquip.slotId = slotId;
        this.playerEquipment.items.push(itemToEquip);
        this._removeItemFromInventory(itemToEquip, inventory);
    }

    itemWasUnequippedSuccessfully(playerEquipmentId, selectedInventoryId, equippedItemId, newSlotId) {
        console.log('On item was unequipped succesfully');
        if (this.playerEquipment == null || this.playerEquipment.inventoryId != playerEquipmentId) return;
        const itemToUnequip = this.getItemByIdFromInventoryItems(this.playerEquipment.items, equippedItemId);
        if (itemToUnequip == null) return;
        console.log('Getting inventory where to put item');
        const inventory = this._getInventoryById(selectedInventoryId);
        if (inventory == null) return;

        console.log(`Unequipping item id ${itemToUnequip.id} from inventory ${this.playerEquipment.inventoryId}`);
        this._removeItemFromInventory(itemToUnequip, this.playerEquipment);
        itemToUnequip.slotId = newSlotId;
        inventory.items.push(itemToUnequip);
    }

    onActionItemStack() {
        if (this.selectedItem == null || this.itemToSwap == null) return;
        const maxQuantity = this.itemToSwap.stackSize - this.itemToSwap.quantity;
        const toAdd = Math.min(this.selectedItem.quantity, maxQuantity);
        if (toAdd <= 0) return;

        if (this.isMovingItemsBetweenInventories) {
            console.log(`Stacking item id ${this.selectedItem.id} from inventory ${this.selectedInventory.inventoryName} with item ${this.itemToSwap.id} from inventory ${this.movingOverInventory.inventoryName}`);
            alt.emit('inventoryTryStackItem', this.selectedInventory.inventoryId, this.selectedItem.id, this.itemToSwap.id, this.movingOverInventory.id);
        } else {
            console.log(`Stacked item ${this.selectedItem.id} with item ${this.itemToSwap.id}`);
            alt.emit('inventoryTryStackItem', this.selectedInventory.inventoryId, this.selectedItem.id, this.itemToSwap.id);
        }

        // // Temporary till callbacks from server
        // this.itemToSwap.quantity += toAdd;
        // this.selectedItem.quantity -= toAdd;
        // if (this.selectedItem.quantity <= 0) {
        //     console.log(`Should delete item`);
        //     this.removeItem(this.selectedItem);
        // }
    }

    itemStackedSuccessfully(inventoryId, itemToStackFromId, itemToStackId, itemToStackInventoryId, amountOfStackedItems) {
        const inventory = this._getInventoryById(inventoryId);
        if (inventory == null) {
            console.log('Couldnt stack items on UI. Inventory was null.');
            return;
        }

        const itemToStackFrom = this.getItemByIdFromInventoryItems(inventory.items, itemToStackFromId);

        if (itemToStackInventoryId > -1) {
            // Moving between inventories
            this._removeItemQuantityFromInventory(itemToStackFrom, amountOfStackedItems, inventory);

            const itemToStackInventory = this._getInventoryById(itemToStackInventoryId);
            if (itemToStackInventory == null) {
                console.log('Couldnt stack items on UI. Item to stack inventory was null.');
                return;
            }

            const itemToStack = this.getItemByIdFromInventoryItems(itemToStackInventory.items, itemToStackId);
            this._addItemQuantity(itemToStack, amountOfStackedItems);
        } else {
            const itemToStack = this.getItemByIdFromInventoryItems(inventory.items, itemToStackId);

            console.log('Stacked item on VUE');
            this._removeItemQuantityFromInventory(itemToStackFrom, amountOfStackedItems, inventory);
            this._addItemQuantity(itemToStack, amountOfStackedItems);
        }
    }

    onActionItemSwap() {
        if (this.selectedItem == null || this.itemToSwap == null) return;
        if (this.movingOverInventory == this.playerEquipment || this.selectedInventory == this.playerEquipment) return;

        if (!this.isMovingItemsBetweenInventories) {
            alt.emit('inventoryTrySwapItems', this.selectedInventory.inventoryId, this.selectedItem.id, this.selectedItem.slotId,
                this.itemToSwap.id, this.itemToSwap.slotId, -1);
            return;
        }

        // if (this.movingOverInventory == this.playerEquipment) {
        //     console.log('Try to equip item and unequip');
        //     this.tryToEquipItemAndUnequipItem(this.selectedItem, this.itemToSwap);
        //     return;
        // } else if (this.selectedInventory == this.playerEquipment) {
        //     console.log('Try to unequip item and equip the other');
        //     this.tryToUnequipItemAndEquipItem(this.selectedItem, this.itemToSwap);
        //     return;
        // }

        alt.emit('inventoryTrySwapItems', this.selectedInventory.inventoryId, this.selectedItem.id, this.selectedItem.slotId,
            this.itemToSwap.id, this.itemToSwap.slotId, this.movingOverInventory.inventoryId);
    }

    tryToEquipItemAndUnequipItem(itemToEquip, itemToUnequip) {
        if (!this._isItemEquipmentable(itemToEquip)) return;
        console.log('Item is equipmentable');
        if (!this._isItemEquipmentableAtThisSlot(itemToEquip, itemToUnequip.equipmentSlot)) return;
        console.log('Item is equipmentable at slot ' + itemToUnequip.equipmentSlot);

        alt.emit('inventoryEquipItemAndUnequipItem', this.selectedInventory.id, itemToEquip.id, this.movingOverInventory.id, itemToUnequip.id);
    }

    tryToUnequipItemAndEquipItem(itemToUnequip, itemToEquip) {
        if (!this._isItemEquipmentable(itemToEquip)) return;
        if (!this._isItemEquipmentableAtThisSlot(itemToEquip, itemToUnequip.equipmentSlot)) return;

        alt.emit('inventoryUnequipItemAndEquipItem', this.selectedInventory.id, itemToUnequip.id, this.movingOverInventory.id, itemToEquip.id);
    }

    itemWasSwappedSuccessfully(inventoryId, selectedItemId, selectedItemSlotId, itemToSwapId, itemToSwapSlotId, itemToSwapInventoryId) {
        const inventory = this._getInventoryById(inventoryId);
        if (inventory == null) return;
        const selectedItem = this.getItemByIdFromInventoryItems(inventory.items, selectedItemId);
        if (selectedItem == null) return;

        if (itemToSwapInventoryId > 0) {
            const inventoryToSwap = this._getInventoryById(itemToSwapInventoryId);
            if (inventoryToSwap == null) return;
            const itemToSwap = this.getItemByIdFromInventoryItems(inventoryToSwap.items, itemToSwapId);
            if (itemToSwap == null) return;

            this._removeItemFromInventory(selectedItem, inventory);
            this._removeItemFromInventory(itemToSwap, inventoryToSwap);

            selectedItem.slotId = selectedItemSlotId;
            itemToSwap.slotId = itemToSwapSlotId;

            inventory.items.push(itemToSwap);
            inventoryToSwap.items.push(selectedItem);
        } else {
            const itemToSwap = this.getItemByIdFromInventoryItems(inventory.items, itemToSwapId);
            if (itemToSwap == null) return;

            selectedItem.slotId = selectedItemSlotId;
            itemToSwap.slotId = itemToSwapSlotId;
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

    _addItemQuantity(item, amount) {
        if (item != null) {
            item.quantity += amount;
            if (item.quantity >= item.stackSize)
                item.quantity = item.stackSize;
        }
    }

    _removeItemFromInventory(item, inventory) {
        if (item == null) return;
        inventory.items = inventory.items.filter(i => i.id !== item.id);
    }

    _removeItemQuantityFromInventory(item, amount, inventory) {
        if (item != null) {
            item.quantity -= amount;
            if (item.quantity <= 0) {
                console.log('Item quantity was below 0. Deleting item');
                inventory.items = inventory.items.filter(i => i.id !== item.id);
            }
        }
    }

    _canStackItems(itemToStack, item) {
        return (itemToStack.stackSize > 1 && item.stackSize > 1)
            && (item.quantity < item.stackSize)
            && (itemToStack.id != item.id)
            && (itemToStack.name == item.name);
    }

    _isItemStackable(item) {
        return item.stackSize > 1;
    }

    _isItemEquipmentable(item) {
        return item.equipmentSlot > 0;
    }

    _isItemEquipmentableAtThisSlot(item, slotId) {
        return item.equipmentSlot == slotId;
    }

    _getInventory(inventory) {
        switch (inventory.inventoryId) {
            case this.personalInventory.inventoryId:
                return this.personalInventory;
            case this.playerEquipment.inventoryId:
                return this.playerEquipment;
            case this.addonationalInventory.inventoryId:
                return this.addonationalInventory;
            default:
                console.log(`ERROR in InventoryController. Couldn't get inventory ${JSON.stringify(inventory)}`);
                break;
        }
    }

    _getInventoryById(inventoryId) {
        if (this.personalInventory.inventoryId === inventoryId) return this.personalInventory;
        else if (this.addonationalInventory.inventoryId === inventoryId) return this.addonationalInventory;
        else if (this.playerEquipment.inventoryId === inventoryId) return this.playerEquipment;
        return null;
    }
}