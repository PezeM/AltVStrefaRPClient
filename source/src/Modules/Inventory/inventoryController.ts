import * as alt from 'alt';
import * as game from 'natives';
import { InventoryCache } from 'source/src/Modules/Inventory/InventoryCache';
import serverCallbacks from 'source/src/Modules/serverCallbacks';
import mainUi from 'source/src/Modules/Ui/mainUi';

class InventoryController {
    private cachedInventory: InventoryCache;
    constructor() {
        this.cachedInventory = new InventoryCache();
    }

    async openInventory() {
        if (mainUi.viewOpened) {
            mainUi.closeMenu();
            game.transitionFromBlurred(300);
            return;
        }
        const startTime = Date.now();
        if (this.cachedInventory.equippedItems !== null && this.cachedInventory.items !== null) {
            alt.log(`Opened inventory`);
            alt.log(`Items: ${JSON.stringify(this.cachedInventory.items, null, 4)}`);
        } else {
            // Make call to server to get current inventory
            await this.getInventoryFromServer((inventory: string, equippedItems: string) => {
                alt.log(`Got inventory from server`);
                alt.log(`Inventory is ${JSON.stringify(JSON.parse(inventory), null, 4)}`);
                // alt.log(`Equipped items is ${JSON.stringify(JSON.parse(equippedItems), null, 4)}`);
                this.cachedInventory.setItems(JSON.parse(inventory));
                // this.cachedInventory.setEquippedItems(JSON.parse(equippedItems));
                alt.log(`Finished openInventory method in ${Date.now() - startTime}ms`);
            });
        }
        mainUi.openMenu('openPlayerInventory', true, true, this.cachedInventory.items);
        game.transitionToBlurred(300);
    }

    async getInventoryFromServer(callback: (...result: any) => void) {
        await serverCallbacks.callback("GetPlayerInventory", "populatePlayerInventory", undefined, (...result: any) => {
            alt.log(`Inside testcallback with result ${JSON.stringify(result)}`);
            callback(...result);
        });
    }
}

const inventoryController = new InventoryController();
export default inventoryController;

