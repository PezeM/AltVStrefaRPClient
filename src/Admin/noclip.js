/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import { drawText, showNotification } from 'src/Helpers/uiHelper.js';
import { rotToDirection } from 'src/Helpers/mathHelper.js';
import chat from 'chat';
import menusManager from 'src/Modules/Ui/menusManager.js';

const controlsIds = {
    W: 32,
    S: 33,
    A: 34,
    D: 35,
    Space: 321,
    LCtrl: 326,
    Shift: 21
};

let lastChecked = 0;
let fly = {
    flying: false,
    f: 2.0,
    w: 2.0,
    h: 1.0,
    currentSpeedIndex: 2,
    speeds: [0.01, 0.1, 0.25, 0.5, 1, 5]
};

let direction = null;
let localPlayer = alt.getLocalPlayer();

function toggleFlying() {
    fly.flying = !fly.flying;

    game.freezeEntityPosition(localPlayer.scriptID, fly.flying);
    game.setPlayerInvisibleLocally(localPlayer.scriptID, fly.flying);
    game.setEntityVisible(localPlayer.scriptID, !fly.flying, 0);

    if (!fly.flying) {
        landSafeOnTheGround();
    }

    showNotification('Noclip', fly.flying ? "~g~ Został włączony" : "~r~Został wyłączony", "");
}

function landSafeOnTheGround() {
    const position = game.getEntityCoords(localPlayer.scriptID, true);
    var [isGroundFound, positionZ] = game.getGroundZFor3dCoord(position.x, position.y, position.z, 0.0, false);
    if (isGroundFound) {
        game.setEntityCoordsNoOffset(localPlayer.scriptID, position.x, position.y, positionZ, false, false, false);
    }
}

alt.on('update', () => {
    if (fly.flying) {
        direction = rotToDirection(game.getGameplayCamRot(2));
        let positionUpdated = false;
        const currentSpeed = fly.speeds[fly.currentSpeedIndex];
        const position = game.getEntityCoords(localPlayer.scriptID, true);
        const rotation = game.getEntityRotation(localPlayer.scriptID, 2);

        drawText(`Player position: X: ${position.x} Y: ${position.y} Z: ${position.z} R: ${rotation}`, [0.5, 0.01], 0, [200, 200, 200, 225], 0.35);
        drawText(`Speed: ${currentSpeed}`, [0.5, 0.04], 0, [200, 200, 200, 225], 0.35);

        if (game.isControlJustReleased(0, controlsIds.Shift) && (new Date().getTime() - lastChecked > 100)) {
            if (fly.currentSpeedIndex + 1 < fly.speeds.length) {
                fly.speeds[++fly.currentSpeedIndex];
            }
            else {
                fly.currentSpeedIndex = 0;
                fly.speeds[fly.currentSpeedIndex];
            }
            lastChecked = new Date().getTime();
        }

        if (game.isControlPressed(0, controlsIds.W)) {
            if (fly.f < 8.0) { fly.f *= 1.025; }

            position.x += direction.x * fly.f * currentSpeed;
            position.y += direction.y * fly.f * currentSpeed;
            position.z += direction.z * fly.f * currentSpeed;
            positionUpdated = true;
        } else if (game.isControlPressed(0, controlsIds.S)) {
            if (fly.f < 8.0) { fly.f *= 1.025; }

            position.x -= direction.x * fly.f * currentSpeed;
            position.y -= direction.y * fly.f * currentSpeed;
            position.z -= direction.z * fly.f * currentSpeed;
            positionUpdated = true;
        } else {
            fly.f = 2.0;
        }

        if (game.isControlPressed(0, controlsIds.A)) {
            if (fly.l < 8.0) { fly.l *= 1.025; }

            position.x += (-direction.y) * fly.l * currentSpeed;
            position.y += direction.x * fly.l * currentSpeed;
            positionUpdated = true;
        } else if (game.isControlPressed(0, controlsIds.D)) {
            if (fly.l < 8.0) { fly.l *= 1.05; }

            position.x -= (-direction.y) * fly.l * currentSpeed;
            position.y -= direction.x * fly.l * currentSpeed;
            positionUpdated = true;
        } else {
            fly.l = 2.0;
        }

        if (game.isControlPressed(0, controlsIds.Space)) {
            position.z += fly.h * currentSpeed;
            positionUpdated = true;
        } else if (game.isControlPressed(0, controlsIds.LCtrl)) {
            position.z -= fly.h * currentSpeed;
            positionUpdated = true;
        } else {
            fly.h = 1.0;
        }

        if (positionUpdated)
            game.setEntityCoordsNoOffset(localPlayer.scriptID, position.x, position.y, position.z, false, false, false);
    }
});

alt.on('keydown', (key) => {
    if (chat.isOpen() || menusManager.viewOpened) return;

    if (key == 0x69) { // NUM PAD 9 KEY
        toggleFlying();
    }
});