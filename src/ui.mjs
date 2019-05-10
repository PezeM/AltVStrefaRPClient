/// <reference path="../altv.d.ts" />
/// <reference path="../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import chat from 'chat';
import { drawText, showUi, draw3DText } from 'src/Helpers/uiHelper.js';
import mainUi from 'src/Modules/Ui/mainUi.js';
import Animations from 'src/Modules/animations.js';
import banking from 'src/Modules/banking.js';
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
            alt.log('Clicked alt');
            if (game.isPedInAnyVehicle(localPlayer.scriptID, false) || game.isEntityDead(localPlayer.scriptID) || new Date().getTime() - lastKeyPressedTime < 500) return;
            alt.log('Clicked alt 2');
            if (circleMenuOpened) closeCircleMenu(true);
            if (!raycast.didRaycastHit) return;
            onAltKeydown();
            alt.log('Clicked Alt key entity: ' + raycast.entityHit);
            lastKeyPressedTime = new Date().getTime();
            break;
        case controlsIds.F6:
            cursorShown = !cursorShown;
            alt.log('Cursor shown = ' + cursorShown);
            alt.showCursor(cursorShown);
            break;
        case controlsIds.G:
            alt.log('Clicked g');
            if (game.isEntityDead(localPlayer.scriptID) || new Date().getTime() - lastKeyPressedTime < 500) return;
            if (circleMenuOpened) {
                closeCircleMenu(true);
            } else {
                openCircleMenu("animations");
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

function onAltKeydown() {
    var entityType = game.getEntityType(raycast.entityHit);
    switch (entityType) {
        case 1:
            onPedFound();
            break;
        case 2:
            onVehicleFound();
            break;
        case 3:
            onObjectFound();
            break;
    }
}

function onPedFound() {
    alt.log('Ped found');
    var isPlayer = false;
    isPlayer = alt.players.some(p => p.scriptID === raycast.entityHit);
    // alt.players.forEach((player) => {
    //     if (player.scriptID === raycast.entityHit) {
    //         isPlayer = true;
    //         return;
    //     }
    // });
    alt.log(JSON.stringify(alt.players));
    if (isPlayer) {
        alt.log('Found player');
        openCircleMenu("player");
    } else if (banking.pedList.includes(raycast.entityHit)) {
        alt.log('Ped is in bank pedlist');
        openCircleMenu("bank");
    }
}

function onVehicleFound() {
    alt.log('Vehicle found');
    openCircleMenu("vehicle");
}

function onObjectFound() {
    let entityModel = game.getEntityModel(raycast.entityHit);
    alt.log(`Entity model found: ${entityModel}`);

    if (banking.atmModels.includes(entityModel)) {
        alt.log('Found atm hash');
        openCircleMenu("atm");
    }
}

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
        case "bank":
            bankCircleMenuCallback(option);
            break;
        case "atm":
            atmCircleMenuCallback(option);
            break;
    }
});

function bankCircleMenuCallback(option) {
    switch (option) {
        case "openBank":
            alt.emitServer("TryToOpenBankMenu");
            break;
        case "createAccount":
            alt.emitServer("CreateBankAccount");
            break;
        case "information":
            mainUi.showCefNotification(0, "Bank", "Widzisz bankiera, możesz u niego zarządzać aktualnym kontem bankowym lub założyć nowe", 6000);
            break;
    }
}

function atmCircleMenuCallback(option) {
    switch (option) {
        case "openAtm":
            alt.emitServer("TryToOpenBankMenu");
            break;
        case "information":
            mainUi.showCefNotification(0, "Bankomat", "Widzisz bankomat w którym możesz zarządząć swoim kontem bankowym.", 5500);
            break;
    }
}

alt.on('update', () => {
    if (zoneNames.realZoneName && zoneNames.streetName) {
        drawText(zoneNames.streetName, [zoneNames.minimap.rightX, zoneNames.minimap.bottomY - 0.065], 4, [255, 255, 255, 255], 0.5, true, false);
        drawText(zoneNames.realZoneName, [zoneNames.minimap.rightX, zoneNames.minimap.bottomY - 0.035], 4, [255, 255, 255, 255], 0.55, true, false);
    }

    HUDElementsToHide.forEach((hudElement) => {
        game.hideHudComponentThisFrame(hudElement);
    });

    // var myPosition = game.getEntityCoords(localPlayer.scriptID, true);
    alt.players.forEach((player) => {
        // var playerPosition = game.getEntityCoords(player.scriptID, true);
        if (game.getDistanceBetweenCoords(localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z, player.pos.x, player.pos.y, player.pos.z, true) > 35) return;
        if (typeof player.isTalking === 'undefined') player.isTalking = false;
        if (typeof player.remoteId === 'undefined' || player.remoteId == null) {
            player.remoteId = player.getSyncedMeta("remoteId");
        }

        if (player.isTalking) {
            draw3DText(`~g~Rozmawia \n ~w~ID: ${player.remoteId}`, [player.pos.x, player.pos.y, player.pos.z + 1], 4, [255, 255, 255, 255], 0.6, false, false);
        } else {
            draw3DText('~r~Nie rozmawia', [player.pos.x, player.pos.y, player.pos.z + 1], 4, [255, 255, 255, 255], 0.6, false, false);
        }
    });

    if (game.isControlJustPressed(0, 249)) {
        localPlayer.isTalking = true;
    }
    else if (game.isControlJustReleased(0, 249)) {
        localPlayer.isTalking = false;
    }

    if (!game.isPedInAnyVehicle(localPlayerId, false) && !game.isPlayerDead(localPlayerId) && !menusManager.viewOpened) {
        if (!circleMenuOpened)
            raycast.poitingAt(4);
    }
    else {
        raycast.didRaycastHit = false;
    }

    if (raycast.didRaycastHit && !game.isPedInAnyVehicle(localPlayerId, false)) {
        var entityType = game.getEntityType(raycast.entityHit);
        draw3DText(`[ ALT ] E: ${raycast.entityHit} T: ${entityType}`,
            [raycast.endCoords.x, raycast.endCoords.y, raycast.endCoords.z], 4, [255, 255, 255, 200], 0.5);
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


