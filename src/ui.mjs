/// <reference path="../altv.d.ts" />
/// <reference path="../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import chat from 'chat';
import { drawText, showUi } from 'src/Helpers/uiHelper.js';
import { rotToDirection } from 'src/Helpers/mathHelper.js';
import mainUi from 'src/Modules/Ui/mainUi.js';
import Animations from 'src/Modules/animations.js';
import ZoneNames from 'src/Modules/ui/zoneNames.js';
import menusManager from 'src/Modules/Ui/menusManager.js';

const controlsIds = {
    Alt: 0x12,
    F6: 0x75,
    G: 0x47,
    Tilde: 0xC0,
};

let cursorShown = false;
const localPlayer = alt.getLocalPlayer();
const localPlayerId = localPlayer.scriptID;
let animations = new Animations();
let zoneNames = new ZoneNames(localPlayerId);

// Raycasting
let entityHit = null;
// let endPos = null;
// let surface = null;
let didRaycaystHit = false;
let lastKeyPressedTime = 0;
let circleMenuOpened = false;
let circleMenuName = '';

function calculateRaycastDistance(maxDistance = 4) {
    var viewModel = game.getFollowPedCamViewMode();
    var zoomDistance = (viewModel < 4 && viewModel > 0) ? viewModel * 2 : 0;
    return zoomDistance + maxDistance;
}

// Confirmed to be not working by one of the devs
export function poitingAt(maxDistance = 4) {
    var pos = game.getGameplayCamCoord();
    var dir = rotToDirection(game.getGameplayCamRot(2));
    var distance = calculateRaycastDistance(maxDistance);

    var farAway = {
        x: (dir.x * distance) + pos.x,
        y: (dir.y * distance) + pos.y,
        z: (dir.z * distance) + pos.z,
    };

    var rayTest = game.startShapeTestRay(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, 0, localPlayerId, 0);
    game.drawLine(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, 255, 255, 255, 255);
    alt.log(`RayTest = ${JSON.stringify(rayTest)}`);
    // var surface = new alt.Position();
    var surface = { x: 0.0, y: 0.0, z: 0.0 };
    var endPos = { x: 0.0, y: 0.0, z: 0.0 };
    alt.log(`Surface: ${JSON.stringify(surface)} Endpos: ${JSON.stringify(endPos)}`);
    var result = game.getShapeTestResult(rayTest, didRaycaystHit, endPos, surface, entityHit);
    alt.log(`Raycast result: ${result}`);
}

function openCircleMenu(menuName) {
    if (circleMenuOpened) return;

    mainUi.uiView.emit('openCircleMenu', menuName);
    circleMenuOpened = true;
    circleMenuName = menuName;
    showUi(false);
    alt.showCursor(true);
    mainUi.uiView.focus();
}

function closeCircleMenu(hideMenu = false) {
    if (hideMenu)
        mainUi.uiView.emit("closeCircleMenu");

    circleMenuOpened = false;
    showUi(true);
    alt.showCursor(false);
}

alt.on('keydown', (key) => {
    if (chat.isOpen() || menusManager.viewOpened) return;

    switch (key) {
        case controlsIds.Alt:
            if (localPlayer.vehicle != null || game.isEntityDead(localPlayerId) || new Date().getTime() - lastKeyPressedTime < 500) return;
            if (entityHit == null) return;
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
            alt.log('Pressed tilde');
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

    // if (!game.isPedInAnyVehicle(localPlayerId, false) && !game.isPlayerDead(localPlayerId)) {
    //     poitingAt(4);
    // }
    // else {
    //     entityHit = null;
    // }

    if (entityHit != null && localPlayer.vehicle == null) {
        // Draw entity
    }
});

mainUi.onServerEvent('showNotification', (type, title, message, duration, icon) => {
    alt.log('Adding server event named showNotification');
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
        alt.log('Accept business invite client-side, arg is ' + typeof businessId + ' = ' + JSON.stringify(businessId));
        alt.emitServer('AcceptInviteToBusiness', businessId);
    }

    if (menusManager.viewOpened) {
        menusManager.focusView();
    } else if (uiView.uiFocused) {
        uiView.focusView();
    }
});

mainUi.onUiEvent('dismissBusinessInvite', (businessId) => {
    if (menusManager.viewOpened) {
        menusManager.focusView();
    } else if (uiView.uiFocused) {
        uiView.focusView();
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


