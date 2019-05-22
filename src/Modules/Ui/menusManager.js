/// <reference path="../../../altv.d.ts" />
/// <reference path="../../../altv-client.d.ts" />

import alt from 'alt';
import game from 'natives';
import Animations from 'src/Modules/animations.js';
let animations = new Animations();
import { showUiAndFreezePlayer, showUi } from 'src/Helpers/uiHelper.js';

class _MenusManager {
    constructor() {
        alt.log('Initialized MenusView Class');
        this.tablet = null;
        this.tabletView = null;
        this.viewOpened = false;
        this.viewLoaded = false;
        // this.menusView = {
        //     uiDebug: true,
        //     on(ev, cb) {
        //         alt.log('Alt on', ev, cb);
        //     },
        //     emit(ev, ...args) {
        //         alt.log('Event triggered', ev, args);
        //     },
        //     focus() {
        //         alt.log('Focus view');
        //     }
        // }
        this.menusView = new alt.WebView('http://resources/AltVStrefaRPClient/client-ui/dist/index.html#');
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

        // var localPlayer = alt.getLocalPlayer().scriptID;
        // let position = game.getEntityCoords(localPlayer, true);
        // this.tablet = game.createObject(game.getHashKey('xm_prop_x17_sec_panel_01'), position.x, position.y, position.z + 0.5, 0, 0, 0);
        // alt.log('Exists ' + alt.isTextureExistInArchetype(game.getHashKey('xm_prop_x17_sec_panel_01'), 'script_rt_prop_x17_p_01'));
        // game.attachEntityToEntity(this.tablet, localPlayer, game.getPedBoneIndex(localPlayer, 60309),
        //     0.035, 0.015, 0.012, 0.0, 0, 0, true, true, false, true, 1, true);

        this.menusView.emit(name, ...args);
        this.viewOpened = true;
        alt.showCursor(true);
        this.menusView.focus();

        // let inter = alt.setInterval(() => {
        //     if (alt.isTextureExistInArchetype(game.getHashKey('xm_prop_x17_sec_panel_01'), 'script_rt_prop_x17_p_01')) {
        //         this.tabletView = new alt.WebView("http://resources/AltVStrefaRPClient/html/menus.html", game.getHashKey('xm_prop_x17_sec_panel_01'), 'script_rt_prop_x17_p_01');
        //         this.tabletView.emit(name, ...args);
        //         alt.clearInterval(inter);
        //         return;
        //     }
        // }, 10);

        // animations.loadAnimDict("amb@world_human_clipboard@male@base").then(() => {
        //     game.taskPlayAnim(localPlayer, "amb@world_human_clipboard@male@base", "base", 8.0, 1.0, -1, 63, 0, false, false, false);
        // });
    }

    closeMenu(showUi = true, unFreezePlayer = true, hideCursor = true) {
        if (showUi && unFreezePlayer) {
            showUiAndFreezePlayer(showUi);
        } else if (showUi) {
            showUi(showUi)
        } else if (unFreezePlayer) {
            game.freezeEntityPosition(alt.getLocalPlayer().scriptID, true);
        }

        // alt.setTimeout(() => {
        //     game.clearPedSecondaryTask(alt.getLocalPlayer().scriptID);
        //     game.detachEntity(this.tablet, true, true);
        //     game.deleteObject(this.tablet);
        //     this.tabletView.destroy();
        // }, 0);
        alt.log('Inside closeMenu function');
        alt.showCursor(!hideCursor);
        // this.menusView.unfocus();
        this.viewOpened = false;
        this.menusView.emit('closeMenu');
        alt.log(`Setting the cursor to ${!hideCursor}`);
    }
}

let MenusManager = new _MenusManager();

MenusManager.onUiEvent('viewLoaded', () => {
    MenusManager.viewLoaded = true;
});

export default MenusManager;
