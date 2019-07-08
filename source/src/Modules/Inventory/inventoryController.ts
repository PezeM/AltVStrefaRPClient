import * as alt from 'alt';
import { InventoryCache } from 'source/src/Modules/Inventory/InventoryCache';
import serverCallbacks from '../serverCallbacks';

class InventoryController {
    private cachedInventory: InventoryCache;
    constructor() {
        this.cachedInventory = new InventoryCache();
    }

    async openInventory() {
        const startTime = Date.now();
        if (this.cachedInventory.equippedItems !== null && this.cachedInventory.items !== null) {
            alt.log(`Opened inventory`);
            alt.log(`Items: ${JSON.stringify(this.cachedInventory.items, null, 4)}`);
        } else {
            // Make call to server to get current inventory
            await this.getInventoryFromServer((inventory: string, equippedItems: string) => {
                alt.log(`Got inventory from server`);
                // alt.log(`Inventory is ${JSON.stringify(JSON.parse(inventory), null, 4)}`);
                // alt.log(`Equipped items is ${JSON.stringify(JSON.parse(equippedItems), null, 4)}`);
                // this.cachedInventory.setItems(JSON.parse(inventory));
                // this.cachedInventory.setEquippedItems(JSON.parse(equippedItems));
                alt.log(`Finished openInventory method in ${Date.now() - startTime}ms`);
            });
        }
    }

    async getInventoryFromServer(callback: (...result: any) => void) {
        await serverCallbacks.callback("populatePlayerInventory", "populatePlayerInventory", undefined, (...result: any) => {
            alt.log(`Inside testcallback with result ${JSON.stringify(result)}`);
            callback(...result);
        });
    }
}

const inventoryController = new InventoryController();
export default inventoryController;

