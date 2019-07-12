import * as alt from 'alt';
import * as game from 'natives';
import inventoryCache from 'source/src/Modules/Inventory/InventoryCache';
import serverCallbacks from 'source/src/Modules/serverCallbacks';
import mainUi from 'source/src/Modules/Ui/mainUi';

class InventoryController {
    constructor() {
        mainUi.onUiEvent('closeInventory', this.closeInventory);
        mainUi.onUiEvent('inventoryStackItems', this.inventoryStackItems);
        mainUi.onUiEvent('inventoryMoveItem', this.inventoryMoveItem);
        mainUi.onUiEvent('inventorySwapItems', this.inventorySwapItems);
        mainUi.onUiEvent('inventoryDropItem', this.inventoryDropItem);
    }

    openInventory() {
        if (inventoryCache.cachedItems !== null && inventoryCache.cachedEquippedItems !== null) {
            alt.log(`Opened inventory`);
            alt.log(`Items: ${JSON.stringify(inventoryCache.cachedItems, null, 4)}`);
            this.populateUi();
        } else {
            this.getInventoryFromServer((inventory: string, equippedItems: string) => {
                alt.log(`Got inventory from server`);
                // alt.log(`Inventory is ${JSON.stringify(JSON.parse(inventory), null, 4)}`);
                // alt.log(`Equipped items is ${JSON.stringify(JSON.parse(equippedItems), null, 4)}`);
                inventoryCache.setItems(JSON.parse(inventory));
                // this.cachedInventory.setEquippedItems(JSON.parse(equippedItems));
                this.populateUi();
            });
        }
    }

    populateUi() {
        mainUi.openMenu('openPlayerInventory', true, true, inventoryCache.cachedItems);
        game.transitionToBlurred(300);
    }

    getInventoryFromServer(callback: (...result: any) => void) {
        serverCallbacks.callback("GetPlayerInventory", "populatePlayerInventory", undefined, (...result: any) => {
            callback(...result);
        });
    }

    inventoryStackItems(itemToStackId: number, itemToStackFromId: number) {
        // Propably make callback to server. If we get successful response then we can 
        // Stack in chached memory. If there was error then we shouldn't stack items and send event 
        // to ui to unstack items 
        try {
            alt.log(`Typeof cached inventory = ${typeof inventoryCache.cachedItems}`);
            inventoryCache.stackItems(itemToStackId, itemToStackFromId);
            alt.emitServer('InventoryTryToStackItems', itemToStackId, itemToStackFromId);
        } catch (error) {
            alt.log(`Error stacking items: ${error}`);
        }
    }

    inventoryMoveItem(selectedItemId: number, selectedItemSlotId: number) {
        // Move item to empty slot
        alt.emitServer('inventoryMoveItem', selectedItemId, selectedItemSlotId);
        inventoryCache.moveItem(selectedItemId, selectedItemSlotId);
    }

    inventorySwapItems(selectedItemId: number, selectedItemSlotId: number, itemToSwapId: number, itemToSwapSlotId: number) {
        // Swap items slots
        alt.emitServer('inventorySwapItems', selectedItemId, selectedItemSlotId, itemToSwapId, itemToSwapSlotId);
        inventoryCache.swapItems(selectedItemId, selectedItemSlotId, itemToSwapId, itemToSwapSlotId);
    }

    inventoryDropItem(itemToDropId: number, quantity: number) {
        alt.emitServer('inventoryDropItem', itemToDropId, quantity);
        inventoryCache.dropItem(itemToDropId, quantity);
    }

    closeInventory() {
        mainUi.closeMenu();
        game.transitionFromBlurred(300);
    }
}

const inventoryController = new InventoryController();
export default inventoryController;