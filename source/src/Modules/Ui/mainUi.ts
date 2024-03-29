import * as alt from 'alt';
import * as game from 'natives';
// import Animations from 'source/src/Modules/animations.js';
// const animations = new Animations();
import { showUiAndFreezePlayer, showUi } from 'source/src/Helpers/uiHelper';

class MainUi {
    tablet: null;
    tabletView: null;
    viewOpened: boolean;
    viewLoaded: boolean;
    uiView: alt.WebView;
    constructor() {
        alt.log('Initialized MenusView Class');
        this.tablet = null;
        this.tabletView = null;
        this.viewOpened = false;
        this.viewLoaded = false;

        this.uiView = new alt.WebView('http://resource/client-ui/dist/index.html#', false);
    }

    onClientEvent(eventName: string, callback: Function) {
        alt.on(eventName, callback);
    }

    onUiEvent(eventName: string, callback: Function) {
        this.uiView.on(eventName, callback);
    }

    emitUiEvent(eventName: string, ...args: any[]) {
        if (this.viewLoaded)
            this.uiView.emit(eventName, ...args);
    }

    openMenu(menuName: string, hideUi: boolean, freezePlayer: boolean, ...args: any[]) {
        if (hideUi && freezePlayer) {
            showUiAndFreezePlayer(false);
        } else if (hideUi) {
            showUi(false);
        } else if (freezePlayer) {
            game.freezeEntityPosition(alt.Player.local.scriptID, true);
        }

        // var localPlayer = alt.Player.local.scriptID;
        // let position = game.getEntityCoords(localPlayer, true);
        // this.tablet = game.createObject(game.getHashKey('xm_prop_x17_sec_panel_01'), position.x, position.y, position.z + 0.5, 0, 0, 0);
        // alt.log('Exists ' + alt.isTextureExistInArchetype(game.getHashKey('xm_prop_x17_sec_panel_01'), 'script_rt_prop_x17_p_01'));
        // game.attachEntityToEntity(this.tablet, localPlayer, game.getPedBoneIndex(localPlayer, 60309),
        //     0.035, 0.015, 0.012, 0.0, 0, 0, true, true, false, true, 1, true);

        this.uiView.emit(menuName, ...args);
        this.viewOpened = true;
        this.uiView.isVisible = true;
        alt.showCursor(true);
        this.uiView.focus();

        alt.log('View loaded and focused');
        // let inter = alt.setInterval(() => {
        //     if (alt.isTextureExistInArchetype(game.getHashKey('xm_prop_x17_sec_panel_01'), 'script_rt_prop_x17_p_01')) {
        //         this.tabletView = new alt.WebView("http://resources/AltVStrefaRPClient/mainUi/menus.html", 
        //                                              game.getHashKey('xm_prop_x17_sec_panel_01'), 'script_rt_prop_x17_p_01');
        //         this.tabletView.emit(name, ...args);
        //         alt.clearInterval(inter);
        //         return;
        //     }
        // }, 10);

        // animations.loadAnimDict("amb@world_human_clipboard@male@base").then(() => {
        //     game.taskPlayAnim(localPlayer, "amb@world_human_clipboard@male@base", "base", 8.0, 1.0, -1, 63, 0, false, false, false);
        // });
    }

    closeMenu(displayUi = true, unFreezePlayer = true, showCursor = false) {
        if (showUi && unFreezePlayer) {
            showUiAndFreezePlayer(displayUi);
        } else if (showUi) {
            showUi(displayUi)
        } else if (unFreezePlayer) {
            game.freezeEntityPosition(game.playerPedId(), false);
        }

        // alt.setTimeout(() => {
        //     game.clearPedSecondaryTask(alt.Player.local.scriptID);
        //     game.detachEntity(this.tablet, true, true);
        //     game.deleteObject(this.tablet);
        //     this.tabletView.destroy();
        // }, 0);
        this.uiView.emit('closeMenu');
        // this.uiView.unfocus();
        this.viewOpened = false;
        alt.showCursor(showCursor);
    }

    showCefNotification(type: number, title: string, message: string, duration = 5000, icon: string | boolean = true) {
        try {
            this.uiView.emit('showNotification', type, title, message, duration, icon);
        } catch (error) {
            alt.log('mainUi -> showCefNotification -> ' + error);
        }
    }

    showConfirmModal(title: string, message: string, confirmCallback: string | null = null, cancelCallback: string | null = null, args = null) {
        try {
            if (typeof message === 'string') {
                alt.log(`[CONFIRM MODAL] ConfirmCallback = ${JSON.stringify(confirmCallback)} type = ${typeof confirmCallback} 
                        CancelCallback = ${JSON.stringify(cancelCallback)} type = ${typeof cancelCallback}`);
                this.uiView.emit('showConfirmModal', title, message, confirmCallback, cancelCallback, args);
                this.viewOpened = true;
                this.uiView.focus();
            }
        } catch (error) {
            alt.log('mainUi -> showConfirmModal -> ' + error);
        }
    }

    focusView() {
        if (this.viewOpened)
            this.uiView.focus();
    }

    unfocusView() {
        this.uiView.unfocus();
    }
}

const mainUi = new MainUi();

mainUi.onUiEvent('viewLoaded', () => {
    mainUi.viewLoaded = true;
});

export default mainUi;
