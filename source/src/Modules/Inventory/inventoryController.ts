import * as alt from 'alt';
import * as game from 'natives';
import inventoryCache from 'source/src/Modules/Inventory/InventoryCache';
import serverCallbacks from 'source/src/Modules/serverCallbacks';
import mainUi from 'source/src/Modules/Ui/mainUi';
import itemStreamer from 'source/src/Modules/Streaming/itemStreamer';
import animationController from 'source/src/Modules/animations';
import { IInventoryItem, IInventoryContainer } from 'source/src/Constans/interfaces';

const NUMBER_OF_INVENTORY_OPENINGS_TO_REFRESH_CACHE = 15;

class InventoryController {
    openedInventoryCount: number;
    isInventoryOpened: boolean;

    constructor() {
        this.openedInventoryCount = 0;
        this.isInventoryOpened = false;
        mainUi.onUiEvent('closeInventory', this.closeInventory.bind(this));
        mainUi.onUiEvent('inventoryStackItems', this.inventoryStackItems);
        mainUi.onUiEvent('inventoryMoveItem', this.inventoryMoveItem);
        mainUi.onUiEvent('inventorySwapItems', this.inventorySwapItems);
        mainUi.onUiEvent('inventoryDropItem', this.inventoryTryDropItem.bind(this));
        alt.onServer('inventoryAddNewItem', this.inventoryAddNewItem.bind(this));
        alt.onServer('updateInventoryItemQuantity', this.updateInventoryItemQuantity.bind(this));
        alt.onServer('populateAddonationalInventoryContainer', this.populateAddonationalInventoryContainer.bind(this));
    }

    populateAddonationalInventoryContainer(inventoryContainer: IInventoryContainer, personalInventory: IInventoryContainer | null,
        equippedInventory: IInventoryContainer | null) {
        if (personalInventory) {
            inventoryCache.setInventory(personalInventory);
        }
        if (equippedInventory) {
            inventoryCache.setEquippedInventory(equippedInventory);
        }

        this.populateInventoryInUi(inventoryContainer);
    }

    openInventory() {
        if (inventoryCache.cachedInventory !== null && inventoryCache.cachedEquippedInventory !== null) {
            if (this.needToRefreshCache()) {
                alt.log(`Refreshing inventory`);
                this.openInventoryFromServer();
                return;
            }
            alt.log(`Items: ${JSON.stringify(inventoryCache.cachedInventory, null, 4)}`);
            this.populateInventoryInUi();
        } else {
            this.openInventoryFromServer();
        }
        this.openedInventoryCount++;
        this.isInventoryOpened = true;
    }

    openInventoryFromServer() {
        this.getInventoryFromServer((inventory: IInventoryContainer, equippedItems: IInventoryContainer) => {
            alt.log(`Got inventory from server`);
            inventoryCache.setInventory(inventory);
            inventoryCache.setEquippedInventory(equippedItems);
            this.populateInventoryInUi(null);
        });
    }

    openVehicleInventory(vehicleToOpenInventory: alt.Vehicle) {
        const getPersonalInventory = inventoryCache.cachedInventory == null || inventoryCache.cachedEquippedInventory == null;
        alt.emitServer('OpenVehicleInventory', vehicleToOpenInventory, getPersonalInventory);
    }

    pickupItem() {
        if (!itemStreamer.canPickupItem || itemStreamer.nearestItem == null) return false;
        animationController.findAndPlayAnimation("pickup2");
        alt.setTimeout(() => {
            if (itemStreamer.nearestItem == null) return false;
            alt.log(`Picked up item with id ${itemStreamer.nearestItem.item.id} and network object id ${itemStreamer.nearestItem.id}`);
            alt.emitServer('PickupDroppedItem', itemStreamer.nearestItem.id, itemStreamer.nearestItem.item.id);
        }, 500);
        return true;
    }

    populateInventoryInUi(addonationalInventoryContainer: object | null = null) {
        mainUi.openMenu('openPlayerInventory', true, false, inventoryCache.cachedInventory, inventoryCache.cachedEquippedInventory,
            addonationalInventoryContainer);
        game.transitionToBlurred(150);
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
            alt.log(`Typeof cached inventory = ${typeof inventoryCache.cachedInventory}`);
            inventoryCache.stackItems(itemToStackId, itemToStackFromId);
            alt.emitServer('InventoryTryToStackItems', itemToStackId, itemToStackFromId);
        } catch (error) {
            alt.log(`Error stacking items: ${error}`);
        }
    }

    inventoryMoveItem(selectedInventoryId: number, selectedItemId: number, newSlotNumber: number) {
        // Move item to empty slot
        alt.emitServer('InventoryMoveItem', selectedInventoryId, selectedItemId, newSlotNumber);
        inventoryCache.moveItem(selectedInventoryId, selectedItemId, newSlotNumber);
    }

    inventorySwapItems(selectedItemId: number, selectedItemSlotId: number, itemToSwapId: number, itemToSwapSlotId: number) {
        // Swap items slots
        alt.emitServer('InventorySwapItems', selectedItemId, selectedItemSlotId, itemToSwapId, itemToSwapSlotId);
        inventoryCache.swapItems(selectedItemId, selectedItemSlotId, itemToSwapId, itemToSwapSlotId);
    }

    inventoryTryDropItem(itemToDropId: number, quantity: number) {
        alt.log(`Dropping item id ${itemToDropId} quantity ${quantity}`);
        serverCallbacks.callback("InventoryDropItem", "inventoryItemDropResponse", [itemToDropId, quantity], (wasDropped: boolean, itemId: number) => {
            this.inventoryDropItem(wasDropped, itemId, quantity);
        });
    }

    inventoryDropItem(wasDropped: boolean, itemId: number, quantity: number) {
        alt.log(`Inventory drop item callback`);
        if (wasDropped) {
            alt.log(`Item with id ${itemId} quantity ${quantity} was dropped`);
            inventoryCache.dropItem(itemId, quantity);
        } else {
            alt.log(`Item with id ${itemId} quantity ${quantity} was not dropped`);
            // If the item was not dropped then not remove it from inventory and also propably restore it in the UI
        }
    }

    inventoryAddNewItem(newItems: IInventoryItem | IInventoryItem[]) {
        alt.log(`New item = ${JSON.stringify(newItems, null, 4)}`);
        if (Object.prototype.toString.call(newItems) === '[object Array]') {
            alt.log(`Added multiple items`);
            (newItems as IInventoryItem[]).forEach(item => {
                inventoryCache.addNewItem(item);
                mainUi.emitUiEvent('inventoryAddNewItem', item);
            });
        } else {
            alt.log(`Added one new item ${JSON.stringify(newItems, null, 4)}`);
            inventoryCache.addNewItem(newItems as IInventoryItem);
        }

        if (this.isInventoryOpened) {
            mainUi.emitUiEvent('inventoryAddNewItem', newItems);
        }
    }

    updateInventoryItemQuantity(itemId: number, itemQuantity: number) {
        inventoryCache.updateInventoryItemQuantity(itemId, itemQuantity);

        if (this.isInventoryOpened) {
            mainUi.emitUiEvent('updateInventoryItemQuantity', itemId, itemQuantity);
        }
    }

    closeInventory() {
        this.isInventoryOpened = false;
        mainUi.closeMenu();
        game.transitionFromBlurred(250);
    }

    private needToRefreshCache() {
        return (this.openedInventoryCount % NUMBER_OF_INVENTORY_OPENINGS_TO_REFRESH_CACHE) === 0;
    }
}

const inventoryController = new InventoryController();
export default inventoryController;