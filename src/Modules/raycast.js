/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />
import alt from 'alt';
import game from 'natives';
import { rotToDirection } from 'src/Helpers/mathHelper.js';

class _Raycast {
    constructor() {
        alt.log('Initialized raycast Class');
        this.didRaycastHit = false;
        this.entityHit = null;
        this.usless = null;
        this.endCoords = null;
        this.surfaceNormal = null;
        this.localPlayerId = alt.getLocalPlayer().scriptID;
    }

    poitingAt(maxDistance = 4) {
        var pos = game.getGameplayCamCoord();
        var dir = rotToDirection(game.getGameplayCamRot(2));
        var distance = this.calculateRaycastDistance(maxDistance);

        var farAway = {
            x: (dir.x * distance) + pos.x,
            y: (dir.y * distance) + pos.y,
            z: (dir.z * distance) + pos.z,
        };

        var rayTest = game.startShapeTestRay(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, (2 | 4 | 8 | 16), this.localPlayerId, 0);
        game.drawLine(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, 255, 255, 255, 255);
        [this.usless, this.didRaycastHit, this.endCoords, this.surfaceNormal, this.entityHit] = game.getShapeTestResult(rayTest, 0, 0, 0, 0);
    }

    calculateRaycastDistance(maxDistance = 4) {
        var viewModel = game.getFollowPedCamViewMode();
        var zoomDistance = (viewModel < 4 && viewModel > 0) ? viewModel * 2 : 0;
        return zoomDistance + maxDistance;
    }
}


let Raycast = new _Raycast();
export default Raycast;