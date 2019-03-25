import alt from 'alt';
import game from 'natives';

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

export function showUi(toogle) {
    alt.toggleGameControls(toogle);
    game.displayHud(toogle);
    game.displayRadar(toogle);
}
