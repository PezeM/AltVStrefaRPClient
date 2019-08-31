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
    }
}

const housingSystemController = new HousingSystemController();
export default housingSystemController;