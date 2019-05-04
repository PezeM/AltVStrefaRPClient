/// <reference path="../altv.d.ts" />
/// <reference path="../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import chat from 'chat';
import { drawText, showUi, draw3DText } from 'src/Helpers/uiHelper.js';
import mainUi from 'src/Modules/Ui/mainUi.js';
import Animations from 'src/Modules/animations.js';
import ZoneNames from 'src/Modules/ui/zoneNames.js';
import menusManager from 'src/Modules/Ui/menusManager.js';
import raycast from 'src/Modules/raycast.js';

const controlsIds = {
    Alt: 0x12,
    F6: 0x75,
    G: 0x47,
    Tilde: 0xC0,
    N: 0x4E,
};

const HUDElementsToHide = [1, 2, 3, 4, 6, 7, 8, 9];

let cursorShown = false;
const localPlayer = alt.getLocalPlayer();
const localPlayerId = localPlayer.scriptID;
let animations = new Animations();
let zoneNames = new ZoneNames(localPlayerId);

let lastKeyPressedTime = 0;
let circleMenuOpened = false;
let circleMenuName = '';

function openCircleMenu(menuName) {
    if (circleMenuOpened) return;

    mainUi.emitUiEvent('openCircleMenu', menuName);
    circleMenuOpened = true;
    circleMenuName = menuName;
    showUi(false);
    alt.showCursor(true);
    mainUi.focusView();
}

function closeCircleMenu(hideMenu = false) {
    if (hideMenu)
        mainUi.emitUiEvent("closeCircleMenu");

    circleMenuOpened = false;
    showUi(true);
    alt.showCursor(false);
}

alt.on('keydown', (key) => {
    if (chat.isOpen() || menusManager.viewOpened) return;

    switch (key) {
        case controlsIds.Alt:
            if (game.isPedInAnyVehicle(localPlayerId, false) || game.isEntityDead(localPlayerId) || new Date().getTime() - lastKeyPressedTime < 500) return;
            if (raycast.entityHit == null) return;
            alt.log('Clicked Alt key entity: ' + JSON.stringify(entityHit));
            break;
        case controlsIds.F6:
            cursorShown = !cursorShown;
            alt.log('Cursor shown = ' + cursorShown);
            alt.showCursor(cursorShown);
            break;
        case controlsIds.G:
            if (game.isEntityDead(localPlayerId) || new Date().getTime() - lastKeyPressedTime < 500) return;
            if (circleMenuOpened) {
                closeCircleMenu(true);
            } else {
                openCircleMenu("animations");
            }
            lastKeyPressedTime = new Date().getTime();
            break;
        case controlsIds.Tilde:
            if (game.isEntityDead(localPlayerId) || new Date().getTime() - lastKeyPressedTime < 500) return;
            lastKeyPressedTime = new Date().getTime();
            animations.forceAnimationStop();
            break;
    }
});

alt.on('update', () => {
    if (zoneNames.realZoneName && zoneNames.streetName) {
        drawText(zoneNames.streetName, [zoneNames.minimap.rightX, zoneNames.minimap.bottomY - 0.065], 4, [255, 255, 255, 255], 0.5, true, false);
        drawText(zoneNames.realZoneName, [zoneNames.minimap.rightX, zoneNames.minimap.bottomY - 0.035], 4, [255, 255, 255, 255], 0.55, true, false);
    }

    HUDElementsToHide.forEach((hudElement) => {
        game.hideHudComponentThisFrame(hudElement);
    });

    var myPosition = game.getEntityCoords(localPlayer.scriptID, true);
    alt.players.forEach((player) => {
        var playerPosition = game.getEntityCoords(player.scriptID, true);
        if (game.getDistanceBetweenCoords(myPosition.x, myPosition.y, myPosition.z, playerPosition.x, playerPosition.y, playerPosition.z, true) > 35) return;
        if (typeof player.isTalking === 'undefined') player.isTalking = false;

        if (player.isTalking) {
            draw3DText('~g~Rozmawia', [playerPosition.x, playerPosition.y, playerPosition.z + 1], 4, [255, 255, 255, 255], 0.6, false, false);
        } else {
            draw3DText('~r~Nie rozmawia', [playerPosition.x, playerPosition.y, playerPosition.z + 1], 4, [255, 255, 255, 255], 0.6, false, false);
        }
    });

    if (game.isControlJustPressed(0, 249)) {
        localPlayer.isTalking = true;
    }
    else if (game.isControlJustReleased(0, 249)) {
        localPlayer.isTalking = false;
    }

    if (!game.isPedInAnyVehicle(localPlayerId, false) && !game.isPlayerDead(localPlayerId) && menusManager.viewOpened) {
        if (!circleMenuOpened)
            raycast.poitingAt(4);
    }
    else {
        raycast.entityHit = null;
    }

    if (raycast.entityHit != null && !game.isPedInAnyVehicle(localPlayerId, false)) {
        var hitEntityPosition = game.getEntityCoords(raycast.entityHit, true);
        draw3DText('[ ALT ]', [hitEntityPosition.X, hitEntityPosition.Y, hitEntityPosition.Z], 4, [255, 255, 255, 200], 0.5);
    }
});

mainUi.onServerEvent('showNotification', (type, title, message, duration, icon) => {
    mainUi.showCefNotification(type, title, message, duration, icon == null ? true : icon);
});

mainUi.onClientEvent('showNotification', (type, title, message, duration) => {
    alt.log('Triggering client-side showNotification')
    mainUi.showCefNotification(type, title, message, duration);
});

mainUi.onServerEvent('showConfirmModal', (title, message, type, args) => {
    alt.log(`Args: ${JSON.stringify(args)}`);
    switch (type) {
        case 1: // Business invite
            alt.showCursor(true);
            mainUi.showConfirmModal(title, message, "acceptBusinessInvite", null, args);
            break;

        default:
            mainUi.showConfirmModal(title, message, null, null);
            break;
    }
});

mainUi.onUiEvent('acceptBusinessInvite', (businessId) => {
    if (businessId) {
        alt.emitServer('AcceptInviteToBusiness', businessId);
    }

    if (menusManager.viewOpened) {
        menusManager.focusView();
    } else if (uiView.uiFocused) {
        uiView.focusView();
    } else {
        alt.showCursor(false);
    }
});

mainUi.onUiEvent('defaultCancelModalCallback', () => {
    if (menusManager.viewOpened) {
        menusManager.focusView();
    } else if (uiView.uiFocused) {
        uiView.focusView();
    } else {
        alt.showCursor(false);
    }
});

mainUi.onUiEvent('circleMenuCallback', (option) => {
    alt.log(`Circle menu callback: ${option}`);
    if (option === 'close') {
        closeCircleMenu();
        return;
    }

    closeCircleMenu();
    switch (circleMenuName) {
        case "animations":
            animations.findAnimation(option);
            break;
    }
});


