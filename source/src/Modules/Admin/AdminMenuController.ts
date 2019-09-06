import * as alt from 'alt';
import * as native from 'natives';
import mainUi from 'source/src/Modules/Ui/mainUi';

const localPlayer = alt.Player.local;

class AdminMenuController {
    isMenuOpened: boolean;
    constructor() {
        alt.log('Admin menu controller initialized');
        this.isMenuOpened = false;

        alt.onServer('openAdminMenu', this.tryOpenAdminMenu.bind(this));
        mainUi.onUiEvent('closeAdminMenu', this.closeAdminMenu.bind(this));
    }

    tryOpenAdminMenu() {
        alt.emitServer('TryToOpenAdminMenu');
    }

    openAdminMenu() {
        this.isMenuOpened = true;
        mainUi.openMenu('openAdminMenu', true, true);
    }

    closeAdminMenu() {
        mainUi.closeMenu();
        this.isMenuOpened = false;
    }
}

const adminMenuController = new AdminMenuController();
export default adminMenuController;