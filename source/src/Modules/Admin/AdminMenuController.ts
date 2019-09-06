import * as alt from 'alt';
import * as native from 'natives';
import mainUi from 'source/src/Modules/Ui/mainUi';
import AdminDebugMenu from 'source/src/Modules/Admin/AdminMenus/AdminDebugMenu';

const localPlayer = alt.Player.local;

class AdminMenuController {
    isMenuOpened: boolean;
    adminDebugMenu: AdminDebugMenu;
    constructor() {
        alt.log('Admin menu controller initialized');
        this.isMenuOpened = false;

        this.createMenusControllers();
        alt.onServer('openAdminMenu', this.openAdminMenu.bind(this));
        mainUi.onUiEvent('closeAdminMenu', this.closeAdminMenu.bind(this));
    }

    createMenusControllers() {
        this.adminDebugMenu = new AdminDebugMenu(localPlayer);
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