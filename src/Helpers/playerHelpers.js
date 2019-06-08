/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';

export function isPlayerDriver(localPlayer) {
    if (localPlayer.vehicle) {
        return game.getPedInVehicleSeat(localPlayer.vehicle.scriptID, -1) === localPlayer.scriptID;
    }
}

export function isDriver(vehicle, localPlayer) {
    return game.getPedInVehicleSeat(vehicle.scriptID, -1) === localPlayer.scriptID;
}