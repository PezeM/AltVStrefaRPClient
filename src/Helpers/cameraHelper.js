import alt from 'alt';
import game from 'natives';
import { showUi } from 'src/Helpers/uiHelper.js';

let camera = null;

export const createCam = (position, rotation, fov) => {
    destroyCam();
    alt.setTimeout(() => {
        camera = game.createCam("DEFAULT_SCRIPTED_CAMERA", true);
        game.setCamCoord(camera, position.x, position.y, position.z);
        game.setCamRot(camera, rotation.x, rotation.y, rotation.z, 2);
        game.setCamFov(camera, fov);
        game.setCamActive(camera, true);
        game.renderScriptCams(true, false, 0, true, false);
    }, 0);
}

export const destroyCam = () => {
    alt.setTimeout(() => {
        if (!game.doesCamExist(camera)) return;
        game.setCamActive(camera, false);
        game.destroyCam(camera, true);
        game.renderScriptCams(false, true, 0, true, true);
        camera = null;
    }, 0)
}

function checkCamInAir(showGui) {
    if (game.isPlayerSwitchInProgress()) {
        alt.setTimeout(() => {
            checkCamInAir(showGui);
        }, 400);
    } else {
        const ped = game.playerPedId();
        game.freezeEntityPosition(ped, false);
        if (showGui) showUi(true);
    }
}

export function camWithPlayer(playerId, newPosition, showUi, cb) {
    destroyCam();
    moveFromToAir(player, 'up', 1, showUi);
    game.freezeEntityPosition(playerId, true);
    showUi(showUi);
    alt.setTimeout(() => {
        game.setEntityCoords(playerId, newPosition.x, newPosition.y, newPosition.z, 1, 0, 0, 1)
        moveFromToAir(playerId, 'down', undefined, showUi);
    }, 2500)
    if (typeof cb === "function") return cb(true);
}

function moveFromToAir(playerId, moveTo, switchType, showGui) {
    /*
    switchType: 0 - 3
    0: 1 step towards ped
    1: 3 steps out from ped (Recommended)
    2: 1 step out from ped
    3: 1 step towards ped
    */
    switch (moveTo) {
        case 'up':
            game.switchOutPlayer(playerId, 0, parseInt(switchType));
            break;
        case 'down':
            checkCamInAir(showGui);
            game.switchInPlayer(playerId);
            break;

        default:
            break;
    }
}
