/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';

export function isPlayerDriver(localPlayer) {
    if (localPlayer.vehicle) {
        return game.getPedInVehicleSeat(localPlayer.vehicle.scriptID, -1) === localPlayer.scriptID;
    }
}