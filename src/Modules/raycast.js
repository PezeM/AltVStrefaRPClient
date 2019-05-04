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

        var rayTest = game.startShapeTestRay(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, 0, this.localPlayerId, 0);
        game.drawLine(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, 255, 255, 255, 255);
        alt.log(`RayTest = ${JSON.stringify(rayTest)}`);
        var surface = null;
        var endPos = null;
        // alt.log(`Surface: ${JSON.stringify(surface)} Endpos: ${JSON.stringify(endPos)}`);
        var result = game.getShapeTestResult(rayTest, this.didRaycaystHit, surface, endPos, this.entityHit);
        alt.log(`Raycast result: ${result}`);
    }

    calculateRaycastDistance(maxDistance = 4) {
        var viewModel = game.getFollowPedCamViewMode();
        var zoomDistance = (viewModel < 4 && viewModel > 0) ? viewModel * 2 : 0;
        return zoomDistance + maxDistance;
    }
}


let Raycast = new _Raycast();
export default Raycast;