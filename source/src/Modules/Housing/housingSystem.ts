import * as alt from 'alt';
import * as native from 'natives';
import mainUi from 'source/src/Modules/Ui/mainUi';
import { NotificationTypes } from 'source/src/Constans/notificationTypes';

const localPlayer = alt.Player.local;
let insideHouseDoorColshape = false;
alt.onServer('inHouseEnterColshape', onInHouseEnterColshape);

function onInHouseEnterColshape(entered: boolean) {
    if (entered) {
        insideHouseDoorColshape = true;
        mainUi.showCefNotification(NotificationTypes.Info, "Mieszkanie", "Naciśnij [E] aby otworzyć menu mieszkania", 3000, "house");
    } else {
        insideHouseDoorColshape = false;
    }
}

class HousingSystem {

}

const housingSystem = new HousingSystem();
export default housingSystem;