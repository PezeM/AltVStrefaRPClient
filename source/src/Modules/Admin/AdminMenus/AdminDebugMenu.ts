import * as alt from 'alt';
import mainUi from 'source/src/Modules/Ui/mainUi';
import debug from 'source/src/Modules/Debug/debug';
import { AdminHelper } from 'source/src/Modules/Admin/AdminHelper';
import { AdminLevel } from 'source/src/Constans/AdminLevels';
import { NotificationTypes } from 'source/src/Constans/notificationTypes';

export default class AdminDebugMenu {
    localPlayer: alt.Player;
    constructor(localPlayer: alt.Player) {
        this.localPlayer = localPlayer;

        mainUi.onUiEvent('adminMenu::toggleDebugMode', this.toggleDebugMode.bind(this));
    }

    toggleDebugMode() {
        if (AdminHelper.getAdminLevel(this.localPlayer) <= AdminLevel.Moderator) {
            mainUi.showCefNotification(NotificationTypes.Error, "Brak uprawnień",
                "Nie posiadasz odpowiednich uprawnień do wykonania tej akcji", 3500);
            return;
        }
        debug.debugEnabled = !debug.debugEnabled;

        mainUi.emitUiEvent('adminMenu::toggledDebugMode', debug.debugEnabled);
    }
}