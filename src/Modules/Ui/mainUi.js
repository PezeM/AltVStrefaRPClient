/// <reference path="../../../altv.d.ts" />
/// <reference path="../../../alt.d.ts" />
import alt from 'alt';

class _MainUi {
    constructor() {
        alt.log('Initialized MainUi Class');
        this.uiView = new alt.WebView('http://resources/AltVStrefaRPClient/html/ui.html');
    }

    onServerEvent(eventName, callback) {
        alt.log(`Add server event named ${eventName} with options: ${JSON.stringify(callback)}`);
        alt.onServer(eventName, callback);
    }

    onClientEvent(eventName, callback) {
        alt.on(eventName, callback);
    }

    onUiEvent(eventName, callback) {
        this.uiView.on(eventName, callback);
    }

    emitUiEvent(eventName, ...args) {
        this.uiView.emit(eventName, ...args);
    }

    showCefNotification(type, title, message, duration = 5000, icon = true) {
        try {
            if (typeof type === 'number' && typeof message === 'string') {
                this.uiView.emit('showNotification', type, title, message, duration, icon);
            }
        } catch (error) {
            alt.log('_MainUi -> showCefNotification -> ' + error);
        }
    }

    showConfirmModal(title, message, confirmCallback = null, cancelCallback = null, args = null) {
        try {
            if (typeof message == 'string') {
                alt.log('Ui.mjs confirmCallback = ' + typeof confirmCallback);
                this.uiView.emit('showConfirmModal', title, message, confirmCallback, cancelCallback, args);
            }
        } catch (error) {
            alt.log('_MainUi -> showConfirmModal -> ' + error);
        }
    }

    get testowyTekst() {
        return 'test klasy main ui';
    }

    get isMenuOpened() {
        return true;
    }
}


let MainUi = new _MainUi();
export default MainUi;