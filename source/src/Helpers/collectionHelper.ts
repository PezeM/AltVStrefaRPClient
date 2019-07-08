import * as alt from 'alt';
import math from 'source/src/Helpers/maths';

export function getAllStreamedVehicles() {
    const streamedVehicles = [];
    for (let i = 0; i < alt.Vehicle.all.length; i++) {
        if (alt.Vehicle.all[i].scriptID === 0) continue;
        streamedVehicles.push(alt.Vehicle.all[i]);
    }
    return streamedVehicles;
}

export function getAllStreamedPlayers() {
    const streamedPlayers = [];
    for (let i = 0; i < alt.Player.all.length; i++) {
        if (alt.Player.all[i].scriptID === 0) continue;
        streamedPlayers.push(alt.Player.all[i]);
    }
    return streamedPlayers;
}

export function getPlayersInRange(position: Vector3, range = 10) {
    const playersInRange = [];
    // position = position * position;
    for (let i = 0; i < alt.Player.all.length; i++) {
        if (math.distance(position, alt.Player.all[i].pos, true) <= range) {
            playersInRange.push(alt.Player.all[i]);
        }
    }
    return playersInRange;
}

export function getVehiclesInRange(position: Vector3, range = 10) {
    const vehiclesInRange = [];
    for (let i = 0; i < alt.Vehicle.all.length; i++) {
        if (math.distance(position, alt.Vehicle.all[i].pos, true) <= range) {
            vehiclesInRange.push(alt.Vehicle.all[i]);
        }
    }
    return vehiclesInRange;
}

export function getClosestVehicle(position: Vector3, radius = 15) {
    let closestVehicle = null;
    for (let i = 0; i < alt.Vehicle.all.length; i++) {
        if (alt.Vehicle.all[i].scriptID === 0) continue;
        const distance = math.distance(position, alt.Vehicle.all[i].pos);
        if (distance < radius) {
            closestVehicle = alt.Vehicle.all[i];
            radius = distance;
        }
    }
    return closestVehicle;
}

export function getClosestPlayer(position: Vector3, radius = 10) {
    let closestPlayer = null;
    // position = position * position;
    for (let i = 0; i < alt.Player.all.length; i++) {
        if (alt.Player.all[i].scriptID === 0) continue;
        const distance = math.distance(position, alt.Player.all[i].pos);
        if (distance < radius) {
            closestPlayer = alt.Player.all[i];
            radius = distance;
        }
    }
    return closestPlayer;
}