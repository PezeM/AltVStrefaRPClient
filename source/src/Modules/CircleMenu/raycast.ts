import * as alt from 'alt';
import * as game from 'natives';
import Maths from 'source/src/Helpers/maths';

class Raycast {
    didRaycastHit: boolean;
    entityHit: null;
    useless: null;
    endCoords: null;
    surfaceNormal: null;
    constructor() {
        alt.log('Initialized raycast Class');
        this.didRaycastHit = false;
        this.entityHit = null;
        this.useless = null;
        this.endCoords = null;
        this.surfaceNormal = null;
    }

    poitingAt(maxDistance = 4) {
        const pos = game.getGameplayCamCoord();
        const dir = Maths.rotToDirection(game.getGameplayCamRot(2));
        const distance = this.calculateRaycastDistance(maxDistance);

        const farAway = {
            x: (dir.x * distance) + pos.x,
            y: (dir.y * distance) + pos.y,
            z: (dir.z * distance) + pos.z,
        };

        const rayTest = game.startShapeTestRay(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, (2 | 4 | 8 | 16), game.playerPedId(), 0);
        game.drawLine(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, 255, 255, 255, 255);
        [this.useless, this.didRaycastHit, this.endCoords, this.surfaceNormal, this.entityHit] = game.getShapeTestResult(rayTest,
            false, { x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, 0);
    }

    calculateRaycastDistance(maxDistance = 4) {
        const viewModel = game.getFollowPedCamViewMode();
        const zoomDistance = (viewModel < 4 && viewModel > 0) ? viewModel * 2 : 0;
        return zoomDistance + maxDistance;
    }
}


const raycast = new Raycast();
export default raycast;