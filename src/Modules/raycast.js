/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />
import * as alt from 'alt';
import * as game from 'natives';
import Maths from 'src/Helpers/maths.js';

class _Raycast {
    constructor() {
        alt.log('Initialized raycast Class');
        this.didRaycastHit = false;
        this.entityHit = null;
        this.useless = null;
        this.endCoords = null;
        this.surfaceNormal = null;
        this.localPlayer = alt.getLocalPlayer();
    }

    poitingAt(maxDistance = 4) {
        var pos = game.getGameplayCamCoord();
        var dir = Maths.rotToDirection(game.getGameplayCamRot(2));
        var distance = this.calculateRaycastDistance(maxDistance);

        var farAway = {
            x: (dir.x * distance) + pos.x,
            y: (dir.y * distance) + pos.y,
            z: (dir.z * distance) + pos.z,
        };

        var rayTest = game.startShapeTestRay(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, (2 | 4 | 8 | 16), this.localPlayer.scriptID, 0);
        game.drawLine(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, 255, 255, 255, 255);
        [this.useless, this.didRaycastHit, this.endCoords, this.surfaceNormal, this.entityHit] = game.getShapeTestResult(rayTest, 0, 0, 0, 0);
    }

    calculateRaycastDistance(maxDistance = 4) {
        var viewModel = game.getFollowPedCamViewMode();
        var zoomDistance = (viewModel < 4 && viewModel > 0) ? viewModel * 2 : 0;
        return zoomDistance + maxDistance;
    }
}


let Raycast = new _Raycast();
export default Raycast;