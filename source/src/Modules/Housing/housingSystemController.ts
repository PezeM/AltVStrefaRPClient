import * as alt from 'alt';
import * as native from 'natives';
import mainUi from 'source/src/Modules/Ui/mainUi';
import { NotificationTypes } from 'source/src/Constans/notificationTypes';
import sounds from 'source/src/Modules/Core/soundsController';
import { HouseMenu } from 'source/src/Constans/interfaces';

const localPlayer = alt.Player.local;

class HousingSystemController {
    insideHouseDoorColshape: boolean = false;

    constructor() {
        alt.log('Initialized housing system');
        alt.onServer('inHouseEnterColshape', this.inHouseEnterColshape.bind(this));
        alt.onServer('successfullyToggledHouseLock', this.successfullyToggledHouseLock.bind(this));
        alt.onServer('showHouseEnterInteractionMenu', this.showHouseEnterInteractionMenu.bind(this));
        alt.onServer('showInteriorExitMenu', this.showInteriorExitMenu.bind(this));

        mainUi.onUiEvent('tryEnterHouse', this.tryEnterHouse.bind(this));
        mainUi.onUiEvent('tryOpenHouseDoor', this.tryOpenHouseDoor.bind(this));
        mainUi.onUiEvent('tryCloseHouseDoor', this.tryOpenHouseDoor.bind(this));
        mainUi.onUiEvent('tryBuyHouse', this.tryBuyHouse.bind(this));
        mainUi.onUiEvent('tryRentHotelRoom', this.tryRentHotelRoom.bind(this));
        mainUi.onUiEvent('closeEnterHouseInteractionMenu', this.closeEnterHouseInteractionMenu.bind(this));
    }

    tryOpenHouseDoor(hotelRoom?: number) {
        if (hotelRoom) {
            alt.emitServer('TryOpenHouseDoor', hotelRoom);
        } else {
            alt.emitServer('TryOpenHouseDoor');
        }
    }

    tryCloseHouseDoor(hotelRoom?: number) {
        if (hotelRoom) {
            alt.emitServer('TryCloseHouseDoor', hotelRoom);
        } else {
            alt.emitServer('TryCloseHouseDoor');
        }
    }

    inHouseEnterColshape(entered: boolean) {
        if (entered) {
            this.insideHouseDoorColshape = true;
            mainUi.showCefNotification(NotificationTypes.Info, "Mieszkanie", "Naciśnij [E] aby otworzyć menu mieszkania", 3000, "house");
        } else {
            this.insideHouseDoorColshape = false;
        }
    }

    onKeyPress() {
        if (this.insideHouseDoorColshape) {
            alt.emitServer('HouseEnterInteractionMenu');
            return true;
        }
        return false;
    }

    showInteriorExitMenu(state: boolean) {
        if (state) {
            // Show
        } else {
            // Hide
        }
    }

    showHouseEnterInteractionMenu(house: HouseMenu) {
        alt.log(`House data: ${JSON.stringify(house, null, 2)}`);
        const [_, streetHash, crossingRoad] = native.getStreetNameAtCoord(house.position.x, house.position.y, house.position.z, 0, 0);
        house.streetName = native.getStreetNameFromHashKey(streetHash);
        mainUi.openMenu("showHouseEnterInteractionMenu", true, true, house);
    }

    successfullyToggledHouseLock(isLocked: boolean) {
        mainUi.showCefNotification(NotificationTypes.Info, "Zamek", `Pomyślnie ${isLocked ? 'zamknięto' : 'otwarto'} mieszkanie`);
        // Play some sound on lock/unlock
        sounds.playCefSound('houseDoorLock.mp3', 0.5, false);
        if (mainUi.viewOpened) {
            alt.log('Emiting toggle house lock event');
            mainUi.emitUiEvent('toggleHouseLock', isLocked);
        }
    }

    tryEnterHouse(hotelRoom?: number) {
        if (hotelRoom) {
            alt.emit('TryEnterHouse', hotelRoom);
        } else {
            alt.emit('TryEnterHouse');
        }
    }

    tryBuyHouse() {
        alt.emitServer('TryBuyHouse');
    }

    tryRentHotelRoom(hotelRoom: number) {
        alt.emitServer('TryRentHotelRoom', hotelRoom);
    }

    closeEnterHouseInteractionMenu() {
        mainUi.closeMenu();
    }
}

const housingSystemController = new HousingSystemController();
export default housingSystemController;