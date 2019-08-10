import * as alt from 'alt';
import * as game from 'natives';
import inventoryCache from 'source/src/Modules/Inventory/InventoryCache';
import serverCallbacks from 'source/src/Modules/serverCallbacks';
import mainUi from 'source/src/Modules/Ui/mainUi';
import itemStreamer from 'source/src/Modules/Streaming/itemStreamer';
import animationController from 'source/src/Modules/animations';
import { IInventoryItem, IInventoryContainer } from 'source/src/Constans/interfaces';

const NUMBER_OF_INVENTORY_OPENINGS_TO_REFRESH_CACHE = 5;

class InventoryController {
    openedInventoryCount: number;
    isInventoryOpened: boolean;

    constructor() {
        this.openedInventoryCount = 0;
        this.isInventoryOpened = false;
        mainUi.onUiEvent('closeInventory', this.closeInventory.bind(this));
        mainUi.onUiEvent('inventoryStackItems', this.inventoryTryStackItems.bind(this));
        mainUi.onUiEvent('inventoryMoveItem', this.inventoryMoveItem.bind(this));
        mainUi.onUiEvent('inventorySwapItems', this.inventorySwapItems.bind(this));
        mainUi.onUiEvent('inventoryTryDropItem', this.inventoryTryDropItem.bind(this));
        alt.onServer('inventoryAddNewItems', this.inventoryAddNewItems.bind(this));
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
                this.openedInventoryCount++;
                this.isInventoryOpened = true;
                return;
            }
            this.populateInventoryInUi();
        } else {
            this.openInventoryFromServer();
        }
        this.openedInventoryCount++;
        this.isInventoryOpened = true;
    }

    openInventoryFromServer() {
        serverCallbacks.callback("GetPlayerInventory", "populatePlayerInventory", undefined,
            (inventory: IInventoryContainer, equippedItems: IInventoryContainer) => {
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
        const currentDateInGame = {
            hours: game.getClockHours(),
            minutes: game.getClockMinutes()
        };

        alt.log(`Current date in game: ${currentDateInGame.hours}:${currentDateInGame.minutes}`);

        mainUi.openMenu('openPlayerInventory', true, false, inventoryCache.cachedInventory, inventoryCache.cachedEquippedInventory,
            addonationalInventoryContainer);
        game.transitionToBlurred(150);
    }

    inventoryTryStackItems(inventoryId: number, itemToStackFromId: number, itemToStackId: number, itemToStackInventoryId: number) {
        if (itemToStackInventoryId == null) {
            // Stacking items in one inventory
            serverCallbacks.callback("InventoryTryStackItem", "inventoryStackItemResponse", [inventoryId, itemToStackFromId, itemToStackId],
                (wasStacked: boolean, amountOfStackedItems: number) => {
                    alt.log(`Inventory stack items respoonse was stacked: ${wasStacked} amount of items: ${amountOfStackedItems}`);
                    this.inventoryStackItems(wasStacked, inventoryId, itemToStackFromId, itemToStackId, amountOfStackedItems);
                });
        } else {
            // Stacking items between inventories
            serverCallbacks.callback("InventoryTryStackItemBetweenInventories", "inventoryStackItemResponse",
                [inventoryId, itemToStackFromId, itemToStackId, itemToStackInventoryId],
                (wasStacked: boolean, amountOfStackedItems: number) => {
                    alt.log(`Inventory stack items between inventories response was stacked: ${wasStacked} amount of items: ${amountOfStackedItems}`);
                    this.inventoryStackItems(wasStacked, inventoryId, itemToStackFromId, itemToStackId, amountOfStackedItems, itemToStackInventoryId);
                });
        }
    }

    inventoryStackItems(wasStacked: boolean, inventoryId: number, itemToStackFromId: number, itemToStackId: number, amountOfStackedItems: number,
        itemToStackInventoryId: number = -1) {
        if (wasStacked) {
            alt.log(`Item with id ${itemToStackId} was stacked`);
            if (this.isInventoryOpened) {
                mainUi.emitUiEvent("inventoryItemWasStackedSuccesfully", inventoryId, itemToStackFromId, itemToStackId, itemToStackInventoryId,
                    amountOfStackedItems);
            }
            inventoryCache.stackItems(inventoryId, itemToStackFromId, itemToStackId, amountOfStackedItems, itemToStackInventoryId);
        } else {
            alt.log(`Item with id ${itemToStackId} was not stacked`);
        }
    }

    inventoryMoveItem(selectedInventoryId: number, selectedItemId: number, newSlotNumber: number) {
        // Move item to empty slot
        alt.emitServer('InventoryMoveItem', selectedInventoryId, selectedItemId, newSlotNumber);
        inventoryCache.moveItem(selectedInventoryId, selectedItemId, newSlotNumber);
    }

    inventorySwapItems(inventoryId: number, selectedItemId: number, selectedItemSlotId: number,
        itemToSwapId: number, itemToSwapSlotId: number, itemToSwapInventoryId: number) {
        // Swap items slots
        // Add inventory callback propably
        alt.emitServer('InventorySwapItems', selectedItemId, selectedItemSlotId, itemToSwapId, itemToSwapSlotId);
        inventoryCache.swapItems(inventoryId, selectedItemId, selectedItemSlotId, itemToSwapId, itemToSwapSlotId);
    }

    inventoryTryDropItem(inventoryId: number, itemToDropId: number, quantity: number) {
        alt.log(`Dropping item id ${itemToDropId} quantity ${quantity} from inventory id ${inventoryId}`);
        serverCallbacks.callback("InventoryDropItem", "inventoryItemDropResponse", [inventoryId, itemToDropId, quantity],
            (wasDropped: boolean, itemId: number) => {
                this.inventoryDropItem(wasDropped, inventoryId, itemId, quantity);
            });
    }

    inventoryDropItem(wasDropped: boolean, inventoryId: number, itemId: number, quantity: number) {
        alt.log(`Inventory drop item callback`);
        if (wasDropped) {
            alt.log(`Item with id ${itemId} quantity ${quantity} was dropped`);
            if (this.isInventoryOpened) {
                alt.log(`Inventory was opened calling UI event`);
                mainUi.emitUiEvent("inventoryItemWasDroppedSuccessfully", inventoryId, itemId, quantity);
            }
            inventoryCache.dropItem(inventoryId, itemId, quantity);
        } else {
            alt.log(`Item with id ${itemId} quantity ${quantity} was not dropped`);
            // If the item was not dropped then not remove it from inventory and also propably restore it in the UI
        }
    }

    inventoryAddNewItems(newItems: IInventoryItem[]) {
        alt.log(`New items = ${JSON.stringify(newItems, null, 4)}`);
        if (this.isInventoryOpened) {
            mainUi.emitUiEvent('inventoryAddNewItems', newItems);
        }
        newItems.forEach(item => {
            inventoryCache.addNewItem(item);
        });
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