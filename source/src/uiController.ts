import * as alt from 'alt';
import * as game from 'natives';
import chat from 'chat';
import circleMenu from 'source/src/Modules/CircleMenu/circleMenu';
import { getGameState } from 'source/src/gameState';
import { drawText, draw3DText } from 'source/src/Helpers/uiHelper';
import animations from 'source/src/Modules/animations';
import ZoneNames from 'source/src/Modules/Ui/zoneNames';
import mainUi from 'source/src/Modules/Ui/mainUi';
import raycast from 'source/src/Modules/CircleMenu/raycast';
import { IControlsIds } from './Constans/interfaces';

const controlsIds: IControlsIds = {
    Alt: 0x12,
    F6: 0x75,
    G: 0x47,
    Tilde: 0xC0,
    N: 0x4E,
    U: 0x55,
};

const HUDElementsToHide = [1, 2, 3, 4, 6, 7, 8, 9]; // 14

let cursorShown = false;
const localPlayer = alt.Player.local;
const zoneNames = new ZoneNames();
let lastKeyPressedTime = 0;

alt.on('keydown', (key: number) => {
    if (key === controlsIds.F6) {
        cursorShown = !cursorShown;
        alt.log('Cursor shown = ' + cursorShown);
        alt.showCursor(cursorShown);
        return;
    }
    if (chat.isOpen() || mainUi.viewOpened || getGameState() !== 1) return;

    switch (key) {
        case controlsIds.Alt:
            if (localPlayer.vehicle != null || game.isEntityDead(localPlayer.scriptID) || new Date().getTime() - lastKeyPressedTime < 300) return;
            else if (circleMenu.isMenuOpened) {
                circleMenu.closeMenu(true);
                return;
            }
            else if (!raycast.didRaycastHit) return;
            circleMenu.onKeyPress(raycast.entityHit as number);
            lastKeyPressedTime = new Date().getTime();
            break;
        case controlsIds.G:
            if (game.isEntityDead(localPlayer.scriptID) || new Date().getTime() - lastKeyPressedTime < 500) return;
            if (circleMenu.isMenuOpened) {
                circleMenu.closeMenu(true);
            } else {
                circleMenu.openMenu("animations");
            }
            lastKeyPressedTime = new Date().getTime();
            break;
        case controlsIds.Tilde:
            if (game.isEntityDead(localPlayer.scriptID) || new Date().getTime() - lastKeyPressedTime < 500) return;
            lastKeyPressedTime = new Date().getTime();
            animations.forceAnimationStop();
            break;
    }
});

alt.on('update', () => {
    // if (chat.isOpen() || mainUi.viewOpened) {
    //     game.disableAllControlActions(0);
    //     game.disableAllControlActions(2);
    // } else {
    //     game.enableAllControlActions(0);
    //     game.enableAllControlActions(2);
    // }

    if (zoneNames.realZoneName && zoneNames.streetName && zoneNames.minimap) {
        drawText(zoneNames.streetName, [zoneNames.minimap.rightX, zoneNames.minimap.bottomY - 0.065], 4, [255, 255, 255, 255], 0.5, true, false);
        drawText(zoneNames.realZoneName, [zoneNames.minimap.rightX, zoneNames.minimap.bottomY - 0.035], 4, [255, 255, 255, 255], 0.55, true, false);
    }

    HUDElementsToHide.forEach((hudElement) => {
        game.hideHudComponentThisFrame(hudElement);
    });

    if (localPlayer.vehicle == null && !game.isPlayerDead(localPlayer.scriptID) && !mainUi.viewOpened) {
        if (!circleMenu.isMenuOpened)
            raycast.poitingAt(4);
    }
    else {
        raycast.didRaycastHit = false;
    }

    if (raycast.didRaycastHit && localPlayer.vehicle == null && raycast.endCoords !== null) {
        draw3DText(`[ALT] E: ${raycast.entityHit} T: ${game.getEntityType(raycast.entityHit as number)} M: ${game.getEntityModel(raycast.entityHit as number)}`,
            [raycast.endCoords.x, raycast.endCoords.y, raycast.endCoords.z], 4, [255, 255, 255, 200], 0.5);
    }

    // Disable moving camera/attacking while UI is open
    if (chat.isOpen() || mainUi.viewOpened || circleMenu.isMenuOpened) {
        game.disableControlAction(0, 1, true); // Mouse Look, Left/Right
        game.disableControlAction(0, 2, true); // Mouse Look, Up/Down
        game.disableControlAction(0, 142, true); // Right Click
    } else {
        game.enableControlAction(0, 1, false); // Mouse Look, Left/Right
        game.enableControlAction(0, 2, false); // Mouse Look, Up/Down
        game.enableControlAction(0, 142, false); // Right Click
    }
});

alt.onServer('showNotification', (type: number, title: string, message: string, duration: number, icon: any) => {
    mainUi.showCefNotification(type, title, message, duration, icon == null ? true : icon);
});

alt.onServer('showConfirmModal', (title: string, message: string, type: number, args: any) => {
    alt.log(`Args: ${JSON.stringify(args)}`);
    switch (type) {
        case 1: // Business invite
            alt.showCursor(true);
            mainUi.showConfirmModal(title, message, "acceptBusinessInvite", null, args);
            break;
        case 2: // Fraction invite
            alt.showCursor(true);
            mainUi.showConfirmModal(title, message, "acceptFractionInvite", "cancelFractionInvite", args);
            break;
        default:
            mainUi.showConfirmModal(title, message, null, null);
            break;
    }
});

mainUi.onUiEvent('acceptBusinessInvite', (businessId: number) => {
    if (businessId) {
        alt.emitServer('AcceptInviteToBusiness', businessId);
    }

    mainUi.unfocusView();
    alt.showCursor(false);
});

mainUi.onUiEvent('defaultCancelModalCallback', () => {
    mainUi.unfocusView();
    alt.showCursor(false);
});


// Test cinematic camera off
alt.setInterval(() => {
    game._0x9E4CFFF989258472(); // Disables vehicle idle cam ? 
    game.resetCameraAfkTimer(); // Resets camera afk timer
}, 10000);