import * as alt from 'alt';
import mainUi from 'source/src/Modules/Ui/mainUi';
import debug from 'source/src/Modules/Debug/debug';
import { AdminHelper } from 'source/src/Modules/Admin/AdminHelper';
import { AdminLevel } from 'source/src/Constans/AdminLevels';
import { toggleFlying } from 'source/src/Modules/Admin/noclip';

export default class AdminDebugMenu {
    localPlayer: alt.Player;
    constructor(localPlayer: alt.Player) {
        this.localPlayer = localPlayer;

        mainUi.onUiEvent('adminMenu::toggleDebugMode', this.toggleDebugMode.bind(this));
        mainUi.onUiEvent('adminMenu::toggleNoclipMode', this.toggleNoclipMode.bind(this));

        mainUi.onUiEvent('adminMenu::loadIplName', this.loadIpl.bind(this));
        mainUi.onUiEvent('adminMenu::activateInteriorAtPlayerPosition', this.activateInteriorAtPlayerPosition.bind(this));
        mainUi.onUiEvent('adminMenu::activate3DSound', this.activate3DSound.bind(this));
    }

    toggleDebugMode() {
        if (!AdminHelper.hasAdminLevel(this.localPlayer, AdminLevel.SuperModerator)) return;
        debug.debugEnabled = !debug.debugEnabled;

        mainUi.emitUiEvent('adminMenu::toggledDebugMode', debug.debugEnabled);
    }

    toggleNoclipMode() {
        if (!AdminHelper.hasAdminLevel(this.localPlayer, AdminLevel.Moderator)) return;

        mainUi.emitUiEvent('adminMenu::toggledNoclipMode', toggleFlying());
    }

    loadIpl(iplName: string) {
        debug.loadIpl(iplName);
    }

    activateInteriorAtPlayerPosition() {
        debug.activateInteriorAtPlayerCoords();
    }

    activate3DSound() {
        debug.test3DSound();
    }
}