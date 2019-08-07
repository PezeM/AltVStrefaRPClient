class Inventory {
    constructor(inventoryData) {
        this.inventoryName = inventoryData.inventoryName;
        this.inventoryId = inventoryData.inventoryId;
        this.inventorySlots = inventoryData.inventorySlots;
        this.items = inventoryData.items;
    }
}

export default class InventoryController {
    constructor(a, equippedInventory, addonationalInventory) {
        console.log(`Inventory controller initialized`);
        this.personalInventory = a;
        this.equippedInventory = equippedInventory;
        this.addonationalInventory = addonationalInventory;
        this.cos = new Inventory(addonationalInventory);

        this.selectedInventory = null;
        this.selectedItem = null;
        this.swappingObject = null;
    }

    setSelectedInventory(inventoryName) {
        switch (inventoryName) {
            case this.personalInventory.inventoryName:
                console.log(`Selected personal inventory`);
                this.selectedInventory = this.personalInventory;
                break;
            case this.equippedInventory.inventoryName:
                console.log('Selected equipped inventory');
                this.selectedInventory = this.equippedInventory;
                break;
            case this.addonationalInventory.inventoryName:
                console.log('Selected addonational inventory');
                this.selectedInventory = this.addonationalInventory;
                break;
            default:
                console.log(`ERROR in InventoryController. Couldn't select inventory named ${inventoryName}`);
                break;
        }
    }

    setSelectedItem(item, swappingObject) {
        this.selectedItem = item;
        this.swappingObject = swappingObject;
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
}