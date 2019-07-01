/// <reference path="../../../alt.d.ts" />
import * as alt from 'alt';

class MainUi {
    constructor() {
        alt.log('Initialized MainUi Class');
        this.uiFocused = false;
        this.uiView = new alt.WebView('http://resources/AltVStrefaRPClient/mainUi/ui.html', false);

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
                alt.log(`[CONFIRM MODAL] ConfirmCallback = ${JSON.stringify(confirmCallback)} type = ${typeof confirmCallback} CancelCallback = ${JSON.stringify(cancelCallback)} type = ${typeof cancelCallback}`);
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

    unfocusView() {
        this.uiView.unfocus();
    }
}


const mainUi = new MainUi();
export default mainUi;