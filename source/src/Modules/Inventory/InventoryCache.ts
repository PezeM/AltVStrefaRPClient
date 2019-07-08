import { IInventoryItem } from "source/src/Constans/interfaces";

export class InventoryCache {
    items: IInventoryItem[] | null;
    equippedItems: any[] | null;
    constructor() {
        this.items = null;
        this.equippedItems = null;
    }

    setItems(items: any) {
        this.items = items;
    }

    setEquippedItems(equippedItems: any) {
        this.equippedItems = equippedItems;
    }
}
