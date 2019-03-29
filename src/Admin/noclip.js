/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import chat from 'chat';
import { drawText } from 'src/Helpers/uiHelper.js';

const controlsIds = {
    F5: 327,
    W: 32, // 232
    S: 33, // 31, 219, 233, 268, 269
    A: 34, // 234
    D: 35, // 30, 218, 235, 266, 267
    Space: 321,
    LCtrl: 326,
};

let fly = {
    flying: false,
    f: 2.0,
    w: 2.0,
    h: 2.0
};

let gameplayCamera = game.createCam("DEFAULT_SCRIPTED_CAMERA", true);
let direction = null;
let coords = null;
let localPlayer = alt.getLocalPlayer();

function toggleFlying() {
    fly.flying = !fly.flying;

    game.freezeEntityPosition(localPlayer.scriptID, fly.flying);
    game.setPlayerInvisibleLocally(localPlayer.scriptID, fly.flying);
    game.setEntityVisible(localPlayer.scriptID, !fly.flying, 0);

    drawNotification(`Noclip: ${fly.flying ? "~g~włączony" : "~r~wyłączony"}`);
}

alt.on('update', () => {
    if (fly.flying) {
        coords = game.getGameplayCamCoord();
        direction = game.getGameplayCamRot(2);
        let updated = false;
        const position = game.getEntityCoords(localPlayer.scriptID, true);

        drawText(`Coords: X: ${coords.x} Y: ${coords.y} Z: ${coords.y}`, [0.85, 0.8], 0, [255, 255, 255, 255], 0.5);
        drawText(`Direction: X: ${direction.x} Y: ${direction.y} Z: ${direction.z}`, [0.85, 0.85], 0, [255, 255, 255, 255], 0.5);
        drawText(`Player position: X: ${position.x} Y: ${position.y} Z: ${position.z}`, [0.85, 0.9], 0, [255, 255, 255, 255], 0.5);
    }
});

alt.on('keydown', (key) => {
    if (key == 0x69) { // NUM PAD 9 KEY
        toggleFlying();
    }
});

function drawNotification(text) {
    game.setNotificationTextEntry("STRING");
    game.addTextComponentSubstringPlayerName(text);
    game.drawNotification(false, false);
}