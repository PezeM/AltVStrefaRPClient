/// <reference path="../natives.d.ts" />
/// <reference path="../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import chat from 'chat';
import { getGameState } from 'src/gameState.js';
import { drawText, showUi, draw3DText } from 'src/Helpers/uiHelper.js';
import mainUi from 'src/Modules/Ui/mainUi.js';
import Animations from 'src/Modules/animations.js';
import banking from 'src/Modules/banking.js';
import ZoneNames from 'src/Modules/ui/zoneNames.js';
import menusManager from 'src/Modules/Ui/menusManager.js';
import raycast from 'src/Modules/raycast.js';
import trashBin from 'src/Environment/trashBin.js';
import vehicleShop from 'src/Modules/Vehicle/vehicleShop.js';
import { showUiAndFreezePlayer } from 'src/Helpers/uiHelper.js';

const controlsIds = {
    Alt: 0x12,
    F6: 0x75,
    G: 0x47,
    Tilde: 0xC0,
    N: 0x4E,
    U: 0x55,
};

const HUDElementsToHide = [1, 2, 3, 4, 6, 7, 8, 9];

let cursorShown = false;
let localPlayer = alt.getLocalPlayer();
let animations = new Animations();
let zoneNames = new ZoneNames(localPlayer.scriptID);

let lastKeyPressedTime = 0;
let circleMenuOpened = false;
let circleMenuName = '';

function openCircleMenu(menuName, freezePosition = true) {
    if (circleMenuOpened) return;

    mainUi.emitUiEvent('openCircleMenu', menuName);
    circleMenuOpened = true;
    circleMenuName = menuName;
    showUi(false);
    alt.showCursor(true);
    if (freezePosition) {
        showUiAndFreezePlayer(!freezePosition);
    }
    alt.toggleGameControls(false);
    mainUi.focusView();
}

function closeCircleMenu(hideMenu = false) {
    if (hideMenu)
        mainUi.emitUiEvent("closeCircleMenu");

    circleMenuOpened = false;
    showUi(true);
    alt.showCursor(false);
    showUiAndFreezePlayer(true);
}

alt.on('keydown', (key) => {
    if (key == controlsIds.F6) {
        cursorShown = !cursorShown;
        alt.log('Cursor shown = ' + cursorShown);
        alt.showCursor(cursorShown);
        return;
    }
    if (chat.isOpen() || menusManager.viewOpened || getGameState() == 'loading') return;

    switch (key) {
        case controlsIds.Alt:
            if (game.isPedInAnyVehicle(localPlayer.scriptID, false) || game.isEntityDead(localPlayer.scriptID) || new Date().getTime() - lastKeyPressedTime < 500) return;
            if (circleMenuOpened) {
                closeCircleMenu(true);
                return;
            }
            if (!raycast.didRaycastHit) return;
            onAltKeydown();
            lastKeyPressedTime = new Date().getTime();
            break;
        case controlsIds.G:
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
        case controlsIds.U:
            if (localPlayer.vehicle == null || game.isEntityDead(localPlayer.scriptID) || new Date().getTime() - lastKeyPressedTime < 250) return;
            lastKeyPressedTime = new Date().getTime();
            var vehicle = alt.Vehicle.all.find(v => v.scriptID === localPlayer.vehicle.scriptID);
            if (vehicle == null) return;
            alt.emitServer('ToggleVehicleEngine', vehicle);
            break;
    }
});

function onAltKeydown() {
    var entityType = game.getEntityType(raycast.entityHit);
    console.log(`Entity type = ${entityType}`);
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
    let isPlayer = alt.Player.all.some(p => p.scriptID === raycast.entityHit);
    if (isPlayer) {
        alt.log('Found player');
        openCircleMenu("player");
    } else if (banking.pedList.includes(raycast.entityHit)) {
        alt.log('Ped is in bank pedlist');
        openCircleMenu("bank");
    } else if (vehicleShop.isVehicleSeller(raycast.entityHit)) {
        alt.log('Vehicle seller found');
        openCircleMenu("vehicleShop");
    }
}

function onVehicleFound() {
    alt.log(JSON.stringify(alt.Vehicle.all));
    let vehicleFound = alt.Vehicle.all.some(v => v.scriptID === raycast.entityHit);
    alt.log(`Found vehicle = ${vehicleFound}`);
    if (vehicleFound) {
        alt.log('Vehicle found');
        openCircleMenu("vehicle");
    }
}

function onObjectFound() {
    let entityModel = game.getEntityModel(raycast.entityHit);
    alt.log(`Entity model found: ${entityModel}`);

    if (banking.atmModels.includes(entityModel)) {
        alt.log('Found atm hash');
        openCircleMenu("atm");
    } else if (trashBin.includesBin(entityModel)) {
        alt.log('Found trash bin');
        openCircleMenu("trashBin");
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
        case "vehicle":
            vehicleCircleMenuCallback(option);
            break;
        case "animations":
            animations.findAnimation(option);
            break;
        case "bank":
            bankCircleMenuCallback(option);
            break;
        case "atm":
            atmCircleMenuCallback(option);
            break;
        case "trashBin":
            trashBin.searchBinMenuCallback(option, raycast.entityHit);
            break;
        case "vehicleShop":
            vehicleShop.openVehicleShopMenuCallback(option, raycast.entityHit);
            break;
    }
});

function vehicleCircleMenuCallback(option) {
    switch (option) {
        case "openVehicle":
            var vehicle = alt.Vehicle.all.find(v => v.scriptID === raycast.entityHit);
            alt.log(`Found vehicle ${JSON.stringify(vehicle)}`);
            alt.emitServer("TryToOpenVehicle", vehicle);
            break;
        case "sellVehicle":
            alt.log(`Sell vehicle`);
            break;
        case "despawnVehicle":
            var vehicleToDespawn = alt.Vehicle.all.find(v => v.scriptID === raycast.entityHit);
            if (vehicleToDespawn == null) return;
            alt.emitServer("DespawnVehicle", vehicleToDespawn);
            break;
        // case "information":
        //     let vehicle = alt.Vehicle.all.find(v => v.scriptID === raycast.entityHit);
        //     if (vehicle == null) break;
        //     let vehicleDisplayName = game.getDisplayNameFromVehicleModel(vehicle.scriptID);
        //     let vehiclePlate = game.getVehicleNumberPlateText(vehicle.scriptID);
        //     mainUi.showCefNotification(0, "Pojazd", `VehicleDisplayName = ${vehicleDisplayName} VehiclePlateText = ${vehiclePlate}`, 6000);
        //     break;
    }
}

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

    alt.Player.all.forEach((player) => {
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
        game.playFacialAnim(localPlayer.scriptID, "mic_chatter", "mp_facial");
    }
    else if (game.isControlJustReleased(0, 249)) {
        localPlayer.isTalking = false;
        game.playFacialAnim(localPlayer.scriptID, "mood_normal_1", "facials@gen_male@variations@normal");
    }

    if (localPlayer.vehicle == null && !game.isPlayerDead(localPlayer.scriptID) && !menusManager.viewOpened) {
        if (!circleMenuOpened)
            raycast.poitingAt(4);
    }
    else {
        raycast.didRaycastHit = false;
    }

    if (raycast.didRaycastHit && localPlayer.vehicle == null) {
        draw3DText(`[ALT] E: ${raycast.entityHit} T: ${game.getEntityType(raycast.entityHit)} M: ${game.getEntityModel(raycast.entityHit)}`,
            [raycast.endCoords.x, raycast.endCoords.y, raycast.endCoords.z], 4, [255, 255, 255, 200], 0.5);
    }

    // Disable moving camera/attacking while UI is open
    if (circleMenuOpened || chat.isOpen() || menusManager.viewOpened) {
        game.disableControlAction(0, 1, true); // Mouse Look, Left/Right
        game.disableControlAction(0, 2, true); // Mouse Look, Up/Down
        game.disableControlAction(0, 142, true); // Right Click
    } else {
        game.enableControlAction(0, 1, false); // Mouse Look, Left/Right
        game.enableControlAction(0, 2, false); // Mouse Look, Up/Down
        game.enableControlAction(0, 142, false); // Right Click
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


