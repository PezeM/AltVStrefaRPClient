/// <reference path="../../../alt.d.ts" />
import * as alt from 'alt';

class MainUi {
    constructor() {
        alt.log('Initialized MainUi Class');
        this.uiFocused = false;
        this.uiView = new alt.WebView('http://resources/AltVStrefaRPClient/mainUi/ui.html');

        // alt.onServer('showNotification', this.showCefNotification.bind(this));
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
            alt.log('MainUi -> showCefNotification -> ' + error);
        }
    }

    showConfirmModal(title, message, confirmCallback = null, cancelCallback = null, args = null) {
        try {
            if (typeof message == 'string') {
                alt.log('Confirm callback type = ' + typeof confirmCallback);
                this.uiView.focus();
                this.uiView.emit('showConfirmModal', title, message, confirmCallback, cancelCallback, args);
            }
        } catch (error) {
            alt.log('MainUi -> showConfirmModal -> ' + error);
        }
    }

    focusView() {
        this.uiView.focus();
    }
}


const mainUi = new MainUi();
export default mainUi;