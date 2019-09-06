import * as alt from 'alt';
import mainUi from 'source/src/Modules/Ui/mainUi';
import debug from 'source/src/Modules/Debug/debug';

export default class AdminDebugMenu {
    localPlayer: alt.Player;
    constructor(localPlayer: alt.Player) {
        this.localPlayer = localPlayer;

        mainUi.onUiEvent('toggleDebugMode', this.toggleDebugMode.bind(this));
    }

    toggleDebugMode() {
        debug.debugEnabled = !debug.debugEnabled;

        mainUi.emitUiEvent('toggledDebugMode', debug.debugEnabled);
    }
}