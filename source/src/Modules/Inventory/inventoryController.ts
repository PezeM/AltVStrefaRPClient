import * as alt from 'alt';
import * as game from 'natives';
import inventoryCache from 'source/src/Modules/Inventory/InventoryCache';
import serverCallbacks from 'source/src/Modules/serverCallbacks';
import mainUi from 'source/src/Modules/Ui/mainUi';
import itemStreamer from 'source/src/Modules/Streaming/itemStreamer';
import animationController from 'source/src/Modules/animations';
import { IInventoryItem, IInventoryContainer } from 'source/src/Constans/interfaces';
import { NotificationTypes } from 'source/src/Constans/notificationTypes';

const NUMBER_OF_INVENTORY_OPENINGS_TO_REFRESH_CACHE = 5;

class InventoryController {
    openedInventoryCount: number;
    isInventoryOpened: boolean;

    constructor() {
        this.openedInventoryCount = 0;
        this.isInventoryOpened = false;
        mainUi.onUiEvent('closeInventory', this.closeInventory.bind(this));
        mainUi.onUiEvent('inventoryTryStackItem', this.inventoryTryStackItem.bind(this));
        mainUi.onUiEvent('inventoryMoveItem', this.inventoryMoveItem.bind(this));
        mainUi.onUiEvent('inventoryTryTransferItem', this.inventoryTryTransferItem.bind(this));
        mainUi.onUiEvent('inventoryTrySwapItems', this.inventoryTrySwapItems.bind(this));
        mainUi.onUiEvent('inventoryTryDropItem', this.inventoryTryDropItem.bind(this));
        mainUi.onUiEvent('inventoryTryEquipItem', this.inventoryTryEquipItem.bind(this));
        mainUi.onUiEvent('inventoryTryUnequipItem', this.inventoryTryUnequipItem.bind(this));
        mainUi.onUiEvent('inventoryTryUseItem', this.inventoryTryUseItem.bind(this));

        alt.onServer('inventoryAddNewItems', this.inventoryAddNewItems.bind(this));
        alt.onServer('updateInventoryItemQuantity', this.updateInventoryItemQuantity.bind(this));
        alt.onServer('populateAddonationalInventoryContainer', this.populateAddonationalInventoryContainer.bind(this));
        alt.onServer('inventoryUsedItemSuccessfully', this.inventoryUsedItemSuccessfully.bind(this));
    }

    populateAddonationalInventoryContainer(inventoryContainer: IInventoryContainer, personalInventory: IInventoryContainer | null,
        equippedInventory: IInventoryContainer | null) {
        inventoryCache.setLastOpenedInventory(inventoryContainer);

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

    populateInventoryInUi(addonationalInventoryContainer: object | null = null) {
        const localPlayer = alt.Player.local;
        const gameInfo = {
            hours: game.getClockHours(),
            minutes: game.getClockMinutes(),
            health: game.getEntityHealth(localPlayer.scriptID),
            armor: game.getPedArmour(localPlayer.scriptID),
        };

        mainUi.openMenu('openPlayerInventory', true, false, inventoryCache.cachedInventory, inventoryCache.cachedEquippedInventory,
            addonationalInventoryContainer, gameInfo);
        // game.transitionToBlurred(150);
        this.isInventoryOpened = true;
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

    inventoryTryStackItem(inventoryId: number, itemToStackFromId: number, itemToStackId: number, itemToStackInventoryId: number) {
        if (itemToStackInventoryId == null) {
            // Stacking items in one inventory
            serverCallbacks.callback("InventoryTryStackItem", "inventoryStackItemResponse",
                [inventoryId, itemToStackFromId, itemToStackId],
                (wasStacked: boolean, amountOfStackedItems: number) => {
                    alt.log(`Inventory stack items response was stacked: ${wasStacked} amount of items: ${amountOfStackedItems}`);
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
            mainUi.showCefNotification(NotificationTypes.Error, "Błąd", "Połączenie przedmiotu nie powiodło się", 3500);
        }
    }

    inventoryMoveItem(selectedInventoryId: number, selectedItemId: number, newSlotNumber: number) {
        serverCallbacks.callback("InventoryMoveItem", "inventoryMoveItemResponse", [selectedInventoryId, selectedItemId, newSlotNumber],
            (wasMoved: boolean) => {
                if (wasMoved) {
                    if (this.isInventoryOpened) {
                        console.log('Inventory was opened');
                        mainUi.emitUiEvent("inventoryItemWasMovedSuccessfully", selectedInventoryId, selectedItemId, newSlotNumber);
                    }

                    inventoryCache.moveItem(selectedInventoryId, selectedItemId, newSlotNumber);
                } else {
                    alt.logError("Inventory item couldn't be moved");
                    mainUi.showCefNotification(NotificationTypes.Error, "Błąd", "Przeniesienie przedmiotu nie powiodło się", 3500);
                }
            });
    }

    inventoryTryTransferItem(inventoryToMoveFromId: number, inventoryToMoveToId: number, itemToTransferId: number, slotId: number) {
        serverCallbacks.callback("InventoryTryTransferItem", "inventoryTryTransferItemResponse",
            [inventoryToMoveFromId, inventoryToMoveToId, itemToTransferId, slotId],
            (wasTransfered: boolean) => {
                this.inventoryTransferItem(wasTransfered, inventoryToMoveFromId, inventoryToMoveToId, itemToTransferId, slotId);
            });
    }

    inventoryTransferItem(wasTransfered: boolean, inventoryToMoveFromId: number, inventoryToMoveToId: number, itemToTransferId: number, slotId: number) {
        if (wasTransfered) {
            alt.log(`Item ${itemToTransferId} was transfered from inv ${inventoryToMoveFromId} to ${inventoryToMoveToId}`);
            if (this.isInventoryOpened)
                mainUi.emitUiEvent("inventoryItemWasTransferedSuccessfully", inventoryToMoveFromId, inventoryToMoveToId, itemToTransferId, slotId);

            inventoryCache.transferItem(inventoryToMoveFromId, inventoryToMoveToId, itemToTransferId, slotId);
        } else {
            alt.log('Error transfering file');
            mainUi.showCefNotification(NotificationTypes.Error, "Błąd", "Przeniesienie przedmiotu nie powiodło się", 3500);
        }
    }

    inventoryTryEquipItem(selectedInventoryId: number, playerEquipmentId: number, itemToEquipId: number, slotId: number) {
        alt.log(`Trying to equipitem ID ${itemToEquipId} from inventory ${selectedInventoryId}`);
        serverCallbacks.callback("InventoryTryEquipItem", "inventoryTryEquipItemResponse", [selectedInventoryId, playerEquipmentId, itemToEquipId],
            (wasEquipped: boolean) => {
                this.inventoryEquipItem(wasEquipped, selectedInventoryId, playerEquipmentId, itemToEquipId, slotId);
            });
    }

    inventoryEquipItem(wasEquipped: boolean, selectedInventoryId: number, playerEquipmentId: number, itemToEquipId: number, slotId: number) {
        alt.log('Inventory equip item callback');
        if (wasEquipped) {
            alt.log(`Item with id ${itemToEquipId} was equipped`);
            if (this.isInventoryOpened)
                mainUi.emitUiEvent("inventoryItemWasEquippedSuccessfully", selectedInventoryId, playerEquipmentId, itemToEquipId, slotId);

            inventoryCache.equipItem(selectedInventoryId, playerEquipmentId, itemToEquipId, slotId);
        } else {
            alt.log(`Item with id ${itemToEquipId} was not equipped`);
            mainUi.showCefNotification(NotificationTypes.Error, "Błąd", "Zakładanie przedmiotu nie powiodło się", 3500);
        }
    }

    inventoryTryUnequipItem(playerEquipmentId: number, selectedInventoryId: number, equippedItemId: number, newSlotId: number) {
        alt.log(`Trying to unequip item ID ${equippedItemId} from inventory ${playerEquipmentId} to inventory ${selectedInventoryId}`);
        serverCallbacks.callback("InventoryTryUnequipItem", "inventoryTryUnequipItemResponse",
            [playerEquipmentId, selectedInventoryId, equippedItemId, newSlotId],
            (wasUnequipped: boolean, itemSlotId: number) => {
                this.inventoryUnequipItem(wasUnequipped, playerEquipmentId, selectedInventoryId, equippedItemId, itemSlotId);
            });
    }

    inventoryUnequipItem(wasUnequipped: boolean, playerEquipmentId: number, selectedInventoryId: number, equippedItemId: number, newSlotId: number) {
        alt.log('Inventory unequip item callback');
        if (wasUnequipped) {
            alt.log(`Item with id ${equippedItemId} was unequipped`);
            if (this.isInventoryOpened)
                mainUi.emitUiEvent("inventoryItemWasUnequippedSuccessfully", playerEquipmentId, selectedInventoryId, equippedItemId, newSlotId);

            inventoryCache.unequipItem(playerEquipmentId, selectedInventoryId, equippedItemId, newSlotId);
        } else {
            alt.log(`Item with id ${equippedItemId} was not unequipped`);
            mainUi.showCefNotification(NotificationTypes.Error, "Błąd", "Zdejmowanie przedmiotu nie powiodło się", 3500);
        }
    }

    inventoryTrySwapItems(inventoryId: number, selectedItemId: number, selectedItemSlotId: number,
        itemToSwapId: number, itemToSwapSlotId: number, itemToSwapInventoryId: number) {
        // Swap items slots
        // Add inventory callback propably
        serverCallbacks.callback("InventoryTrySwapItems", "inventorySwapItemsResponse",
            [inventoryId, selectedItemId, selectedItemSlotId, itemToSwapId, itemToSwapSlotId, itemToSwapInventoryId],
            (wasSwapped: boolean, selectedItemNewSlotId: number, swappedItemNewSlotId: number) => {
                this.inventorySwapItems(wasSwapped, inventoryId, selectedItemId, selectedItemNewSlotId, itemToSwapId,
                    swappedItemNewSlotId, itemToSwapInventoryId);
            });
    }

    inventorySwapItems(wasSwapped: boolean, inventoryId: number, selectedItemId: number, selectedItemSlotId: number,
        itemToSwapId: number, itemToSwapSlotId: number, itemToSwapInventoryId: number) {
        alt.log('Item swap callback');
        if (wasSwapped) {
            alt.log('Item was sawpped');
            if (this.isInventoryOpened) {
                alt.log('Calling UI event');
                mainUi.emitUiEvent("inventoryItemWasSwappedSuccessfully",
                    inventoryId, selectedItemId, selectedItemSlotId, itemToSwapId, itemToSwapSlotId, itemToSwapInventoryId);
            }

            inventoryCache.swapItems(inventoryId, selectedItemId, selectedItemSlotId, itemToSwapId, itemToSwapSlotId, itemToSwapInventoryId);
        } else {
            alt.logError('Item was not swapped');
            mainUi.showCefNotification(NotificationTypes.Error, "Błąd", "Zamiana przedmiotów miejscami nie powiodła się", 3500);
        }
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
            mainUi.showCefNotification(NotificationTypes.Error, "Błąd", "Wyrzucenie przedmiotu nie powiodło się", 3500);
        }
    }

    inventoryTryUseItem(inventoryId: number, itemId: number) {
        alt.emitServer("InventoryTryUseItem", inventoryId, itemId);
    }

    inventoryUsedItemSuccessfully(inventoryId: number, itemId: number, quantity: number) {
        alt.log('On used item successfully');
        if (this.isInventoryOpened) {
            mainUi.emitUiEvent('inventoryItemWasUsedSuccessfully', inventoryId, itemId, quantity);
        }
        inventoryCache.usedItem(inventoryId, itemId, quantity);
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
        // game.transitionFromBlurred(250);
    }

    private needToRefreshCache() {
        return (this.openedInventoryCount % NUMBER_OF_INVENTORY_OPENINGS_TO_REFRESH_CACHE) === 0;
    }
}

const inventoryController = new InventoryController();
export default inventoryController;