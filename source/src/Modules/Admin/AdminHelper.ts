import * as alt from 'alt';
import { AdminLevel } from 'source/src/Constans/AdminLevels';
import mainUi from 'source/src/Modules/Ui/mainUi';
import { NotificationTypes } from 'source/src/Constans/notificationTypes';

const PLAYER_ADMIN_META = "playerAdminLevel";
export class AdminHelper {
    static getAdminLevel(localPlayer: alt.Player): AdminLevel {
        const adminObject = localPlayer.getSyncedMeta(PLAYER_ADMIN_META);
        if (adminObject == null || typeof adminObject === 'undefined' || adminObject === 0) {
            return AdminLevel.None;
        }

        const adminLevel = adminObject as AdminLevel;
        alt.log('Admin level is ' + JSON.stringify(adminLevel));
        if (adminLevel == null || typeof adminLevel === 'undefined') {
            return AdminLevel.None;
        }

        return adminLevel;
    }

    static hasAdminLevel(localPlayer: alt.Player, adminLevel: AdminLevel): boolean {
        if (this.getAdminLevel(localPlayer) <= adminLevel) {
            mainUi.showCefNotification(NotificationTypes.Error, "Brak uprawnień",
                "Nie posiadasz odpowiednich uprawnień do wykonania tej akcji", 3500);
            return false;
        }
        return true;
    }
}