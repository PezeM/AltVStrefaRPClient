/// <reference path="../altv.d.ts" />
/// <reference path="../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import { drawText, getMinimapAnchor, showUi } from 'src/Helpers/uiHelper.js';
import { rotToDirection } from 'src/Helpers/mathHelper.js';
import Animations from 'src/Modules/animations.js';

let uiView = new alt.WebView('http://resources/AltVStrefaRPClient/html/ui.html');

let zoneNamesShort = ["AIRP", "ALAMO", "ALTA", "ARMYB", "BANHAMC", "BANNING", "BEACH", "BHAMCA", "BRADP", "BRADT", "BURTON", "CALAFB", "CANNY", "CCREAK", "CHAMH", "CHIL", "CHU", "CMSW", "CYPRE", "DAVIS", "DELBE", "DELPE", "DELSOL", "DESRT", "DOWNT", "DTVINE", "EAST_V", "EBURO", "ELGORL", "ELYSIAN", "GALFISH", "GOLF", "GRAPES", "GREATC", "HARMO", "HAWICK", "HORS", "HUMLAB", "JAIL", "KOREAT", "LACT", "LAGO", "LDAM", "LEGSQU", "LMESA", "LOSPUER", "MIRR", "MORN", "MOVIE", "MTCHIL", "MTGORDO", "MTJOSE", "MURRI", "NCHU", "NOOSE", "OCEANA", "PALCOV", "PALETO", "PALFOR", "PALHIGH", "PALMPOW", "PBLUFF", "PBOX", "PROCOB", "RANCHO", "RGLEN", "RICHM", "ROCKF", "RTRAK", "SANAND", "SANCHIA", "SANDY", "SKID", "SLAB", "STAD", "STRAW", "TATAMO", "TERMINA", "TEXTI", "TONGVAH", "TONGVAV", "VCANA", "VESP", "VINE", "WINDF", "WVINE", "ZANCUDO", "ZP_ORT", "ZQ_UAR"];
let zoneNames = ["Los Santos International Airport", "Alamo Sea", "Alta", "Fort Zancudo", "Banham Canyon Dr", "Banning", "Vespucci Beach", "Banham Canyon", "Braddock Pass", "Braddock Tunnel", "Burton", "Calafia Bridge", "Raton Canyon", "Cassidy Creek", "Chamberlain Hills", "Vinewood Hills", "Chumash", "Chiliad Mountain State Wilderness", "Cypress Flats", "Davis", "Del Perro Beach", "Del Perro", "La Puerta", "Grand Senora Desert", "Downtown", "Downtown Vinewood", "East Vinewood", "El Burro Heights", "El Gordo Lighthouse", "Elysian Island", "Galilee", "GWC and Golfing Society", "Grapeseed", "Great Chaparral", "Harmony", "Hawick", "Vinewood Racetrack", "Humane Labs and Research", "Bolingbroke Penitentiary", "Little Seoul", "Land Act Reservoir", "Lago Zancudo", "Land Act Dam", "Legion Square", "La Mesa", "La Puerta", "Mirror Park", "Morningwood", "Richards Majestic", "Mount Chiliad", "Mount Gordo", "Mount Josiah", "Murrieta Heights", "North Chumash", "N.O.O.S.E", "Pacific Ocean", "Paleto Cove", "Paleto Bay", "Paleto Forest", "Palomino Highlands", "Palmer-Taylor Power Station", "Pacific Bluffs", "Pillbox Hill", "Procopio Beach", "Rancho", "Richman Glen", "Richman", "Rockford Hills", "Redwood Lights Track", "San Andreas", "San Chianski Mountain Range", "Sandy Shores", "Mission Row", "Stab City", "Maze Bank Arena", "Strawberry", "Tataviam Mountains", "Terminal", "Textile City", "Tongva Hills", "Tongva Valley", "Vespucci Canals", "Vespucci", "Vinewood", "Ron Alternates Wind Farm", "West Vinewood", "Zancudo River", "Port of South Los Santos", "Davis Quartz"];
let streetName, realZoneName;
let minimap = {};
const minimapUpdateInvterval = 500; // milliseconds, lower value = more accurate, at the cost of performance

const controlsIds = {
    Alt: 0x12,
    F6: 0x75,
    G: 0x47,
};

let cursorShown = false;
const localPlayer = alt.getLocalPlayer();
const localPlayerId = localPlayer.scriptID;
let animations = new Animations();

// Raycasting
let entityHit = null;
// let endPos = null;
// let surface = null;
let didRaycaystHit = false;
let lastKeyPressedTime = 0;
let circleMenuOpened = false;
let circleMenuName = '';

alt.setInterval(() => {
    // only do stuff if radar is enabled and visible
    if (game.isRadarEnabled() && !game.isRadarHidden()) {
        minimap = getMinimapAnchor(); // Gets coords of minimap

        const position = game.getEntityCoords(localPlayerId, true);
        let getStreet = game.getStreetNameAtCoord(position.x, position.y, position.z, 0, 0); // Returns array of 3 items, second one is hash
        streetName = game.getStreetNameFromHashKey(getStreet[1]);
        let zoneName = game.getNameOfZone(position.x, position.y, position.z);
        if (zoneNamesShort.includes(zoneName)) {
            let zoneID = zoneNamesShort.indexOf(zoneName);
            realZoneName = zoneNames[zoneID];
        }
    } else {
        streetName = null;
        realZoneName = null;
    }
}, minimapUpdateInvterval);


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

alt.onServer("showNotification", (type, message, time) => {
    showCefNotification(type, message, time);
});

alt.on('showNotification', (type, message, time) => {
    alt.log('Triggering client-side showNotification')
    showCefNotification(type, message, time);
});

// Shows notification in Cef ui for 5000ms
export function showCefNotification(type, message, time = 5000) {
    try {
        if (typeof type == 'number' && typeof message == 'string') {
            uiView.emit('showNotification', type, message, time);
        }
    } catch (error) {
        alt.log('showCefNotification -> error -> ' + error);
    }
}

uiView.on('circleMenuCallback', (option) => {
    alt.log(`Circle menu callback: ${option}`);
    if (option === 'close') {
        closeCircleMenu();
        return;
    }

    closeCircleMenu();
    switch (circleMenuName) {
        case "animations":
            // switch (option) {
            //     case "someFastDance":
            //         alt.log('Some fast dance');
            //         someTestAnim();
            //         break;
            // }
            animations.findAnimations(option);
            break;
    }
});

function someTestAnim() {
    if (game.isEntityPlayingAnim(localPlayerId, "special_ped@mountain_dancer@monologue_2@monologue_2a", "mnt_dnc_angel", 15)) {
        alt.log('Entity is playing animation');
        game.taskPlayAnim(localPlayerId, "special_ped@mountain_dancer@monologue_2@monologue_2a", "exit", 8.0, 1.0, -1, 0, 0.0, false, false, false);
        alt.setTimeout(() => {
            game.clearPedSecondaryTask(localPlayerId);
            alt.log('Canceling animation');
        }, 400);
    } else {
        game.requestAnimDict("special_ped@mountain_dancer@monologue_2@monologue_2a");
        var requestId = alt.setInterval(() => {
            if (!game.hasAnimDictLoaded("special_ped@mountain_dancer@monologue_2@monologue_2a")) {
                game.requestAnimDict("special_ped@mountain_dancer@monologue_2@monologue_2a");
                alt.log('Loading dict');
            } else {
                alt.clearInterval(requestId);
                alt.log(`Playing anim dict: special_ped@mountain_dancer@monologue_2@monologue_2a name: mnt_dnc_angel flag: 15`);
                game.taskPlayAnim(localPlayerId, "special_ped@mountain_dancer@monologue_2@monologue_2a", "mnt_dnc_angel", 8.0, 1, -1, 15, 0.0, false, false, false);
            }
        }, 5);
    }
}

function openCircleMenu(menuName) {
    if (circleMenuOpened) return;

    uiView.emit('openCircleMenu', menuName);
    circleMenuOpened = true;
    circleMenuName = menuName;
    showUi(false);
    alt.showCursor(true);
    uiView.focus();
}

function closeCircleMenu(hideMenu = false) {
    if (hideMenu)
        uiView.emit("closeCircleMenu");

    circleMenuOpened = false;
    showUi(true);
    alt.showCursor(false);
}

alt.on('keydown', (key) => {
    switch (key) {
        case controlsIds.Alt:
            if (localPlayer.vehicle != null || game.isEntityDead(localPlayerId)) return;
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
    }
});

alt.on('update', () => {
    if (realZoneName && streetName) {
        drawText(streetName, [minimap.rightX, minimap.bottomY - 0.065], 4, [255, 255, 255, 255], 0.5, true, false);
        drawText(realZoneName, [minimap.rightX, minimap.bottomY - 0.035], 4, [255, 255, 255, 255], 0.55, true, false);
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