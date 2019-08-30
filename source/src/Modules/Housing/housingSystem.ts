import * as alt from 'alt';
import mainUi from 'source/src/Modules/Ui/mainUi';
import { NotificationTypes } from 'source/src/Constans/notificationTypes';
import sounds from 'source/src/Modules/Core/soundsController';

const localPlayer = alt.Player.local;

class HousingSystem {
    insideHouseDoorColshape: boolean = false;

    constructor() {
        alt.onServer('inHouseEnterColshape', this.inHouseEnterColshape.bind(this));
        alt.onServer('successfullyToggledHouseLock', this.successfullyToggledHouseLock.bind(this));
    }

    inHouseEnterColshape(entered: boolean) {
        if (entered) {
            this.insideHouseDoorColshape = true;
            mainUi.showCefNotification(NotificationTypes.Info, "Mieszkanie", "Naciśnij [E] aby otworzyć menu mieszkania", 3000, "house");
        } else {
            this.insideHouseDoorColshape = false;
        }
    }

    successfullyToggledHouseLock(isLocked: boolean) {
        mainUi.showCefNotification(NotificationTypes.Info, "Zamek", `Pomyślnie ${isLocked ? 'zamknięto' : 'otwarto'} mieszkanie`);
        // Play some sound on lock/unlock
        sounds.playCefSound('houseDoorLock.mp3', 0.5, false);
    }
}

const housingSystem = new HousingSystem();
export default housingSystem;