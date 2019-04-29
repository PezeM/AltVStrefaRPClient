/// <reference path="../../../altv.d.ts" />
/// <reference path="../../../alt.d.ts" />
import alt from 'alt';
import { showUiAndFreezePlayer, showUi } from 'src/Helpers/uiHelper.js';

class _MenusManager {
    constructor() {
        alt.log('Initialized MenusView Class');
        this.viewOpened = false;
        this.menusView = new alt.WebView('http://resources/AltVStrefaRPClient/html/menus.html');
    }

    onServerEvent(eventName, callback) {
        alt.onServer(eventName, callback);
    }

    onClientEvent(eventName, callback) {
        alt.on(eventName, callback);
    }

    onUiEvent(eventName, callback) {
        this.menusView.on(eventName, callback);
    }

    emitUiEvent(eventName, ...args) {
        this.menusView.emit(eventName, ...args);
    }

    focusView() {
        this.menusView.focus();
    }

    openMenu(name, hideUi, freezePlayer, ...args) {
        if (hideUi && freezePlayer) {
            showUiAndFreezePlayer(false);
        } else if (hideUi) {
            showUi(false);
        } else if (freezePlayer) {
            game.freezeEntityPosition(alt.getLocalPlayer().scriptID, true);
        }

        this.menusView.emit(name, ...args);
        this.menusView.focus();
        this.viewOpened = true;
        alt.showCursor(true);
    }

    closeMenu(showUi = true, unFreezePlayer = true, hideCursor = true) {
        if (showUi && unFreezePlayer) {
            showUiAndFreezePlayer(showUi);
        } else if (showUi) {
            showUi(showUi)
        } else if (unFreezePlayer) {
            game.freezeEntityPosition(alt.getLocalPlayer().scriptID, true);
        }
        alt.showCursor(!hideCursor);

        this.viewOpened = false;
    }
}


let MenusManager = new _MenusManager();
export default MenusManager;