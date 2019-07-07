import * as alt from 'alt';
import * as game from 'natives';
import chat from 'chat';
import { drawText, showNotification } from 'source/src/Helpers/uiHelper';
import Maths from 'source/src/Helpers/maths';
import mainUi from 'source/src/Modules/Ui/mainUi.js';

const controlsIds = {
    W: 32,
    S: 33,
    A: 34,
    D: 35,
    Space: 321,
    LCtrl: 326,
    Shift: 21
};

const fly = {
    flying: false,
    f: 2.0,
    w: 2.0,
    h: 1.0,
    l: 1.0,
    currentSpeedIndex: 2,
    speeds: [0.01, 0.1, 0.25, 0.5, 1, 5]
};

let direction: null | Vector3 = {
    x: 0,
    y: 0,
    z: 0
};
let lastChecked = 0;
const localPlayer = alt.getLocalPlayer();

async function toggleFlying() {
    fly.flying = !fly.flying;

    game.freezeEntityPosition(localPlayer.scriptID, fly.flying);
    game.setPlayerInvisibleLocally(localPlayer.scriptID, fly.flying);
    game.setEntityVisible(localPlayer.scriptID, !fly.flying, false);

    if (!fly.flying) {
        landSafeOnTheGround();
    }

    await showNotification('Noclip', fly.flying ? "~g~ Został włączony" : "~r~Został wyłączony", "");
}

function landSafeOnTheGround() {
    const position = game.getEntityCoords(localPlayer.scriptID, true);
    const [isGroundFound, positionZ] = game.getGroundZFor3dCoord(position.x, position.y, position.z, 0.0, false);
    if (isGroundFound) {
        game.setEntityCoordsNoOffset(localPlayer.scriptID, position.x, position.y, positionZ, false, false, false);
    }
}

alt.on('update', () => {
    if (fly.flying) {
        direction = Maths.rotToDirection(game.getGameplayCamRot(2));
        if (direction == null) return;
        let positionUpdated = false;
        const currentSpeed = fly.speeds[fly.currentSpeedIndex];
        const position = game.getEntityCoords(localPlayer.scriptID, true);
        // const rotation = game.getEntityRotation(localPlayer.scriptID, 2); // X Y Z 

        drawText(`Player position: X: ${position.x.toFixed(5)} Y: ${position.y.toFixed(5)} Z: ${position.z.toFixed(5)}`,
            [0.5, 0.01], 0, [200, 200, 200, 225], 0.35);
        drawText(`Speed: ${currentSpeed}`, [0.5, 0.04], 0, [200, 200, 200, 225], 0.35);

        if (game.isControlJustReleased(0, controlsIds.Shift) && (new Date().getTime() - lastChecked > 100)) {
            if (fly.currentSpeedIndex + 1 < fly.speeds.length) {
                // tslint:disable-next-line: no-unused-expression
                fly.speeds[++fly.currentSpeedIndex];
            }
            else {
                fly.currentSpeedIndex = 0;
                // tslint:disable-next-line: no-unused-expression
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

alt.on('keydown', (key: number) => {
    if (chat.isOpen() || mainUi.viewOpened) return;

    if (key === 0x69) { // NUM PAD 9 KEY
        toggleFlying();
    }
});