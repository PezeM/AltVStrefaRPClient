import { Player, Vehicle } from 'alt';
import { getPedInVehicleSeat } from 'natives';

export function isPlayerDriver(localPlayer: Player) {
    if (localPlayer.vehicle) {
        return getPedInVehicleSeat(localPlayer.vehicle.scriptID, -1) === localPlayer.scriptID;
    }
}

export function isDriver(vehicle: Vehicle, localPlayer: Player) {
    return getPedInVehicleSeat(vehicle.scriptID, -1) === localPlayer.scriptID;
}