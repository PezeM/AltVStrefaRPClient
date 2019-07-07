/// <reference path="../../natives.d.ts" />
/// <reference path="../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import math from 'src/Helpers/maths.js';

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

export function getPlayersInRange(position, range = 10) {
    const playersInRange = [];
    // position = position * position;
    for (let i = 0; i < alt.Player.all.length; i++) {
        if (math.distance(position, alt.Player.all[i].pos, true) <= range) {
            playersInRange.push(alt.Player.all[i]);
        }
    }
    return playersInRange;
}

export function getVehiclesInRange(position, range = 10) {
    const vehiclesInRange = [];
    for (let i = 0; i < alt.Vehicle.all.length; i++) {
        if (math.distance(position, alt.Vehicle.all[i].pos, true) <= range) {
            vehiclesInRange.push(alt.Vehicle.all[i]);
        }
    }
    return vehiclesInRange;
}

export function getClosestVehicle(position, radius = 15) {
    let closestVehicle = null;
    for (let i = 0; i < alt.Vehicle.all.length; i++) {
        if (alt.Vehicle.all[i].scriptID === 0) continue;
        let distance = math.distance(position, alt.Vehicle.all[i].pos);
        if (distance < radius) {
            closestVehicle = alt.Vehicle.all[i];
            radius = distance;
        }
    }
    return closestVehicle;
}

export function getClosestPlayer(position, radius = 10) {
    let closestPlayer = null;
    // position = position * position;
    for (let i = 0; i < alt.Player.all.length; i++) {
        if (alt.Player.all[i].scriptID === 0) continue;
        let distance = math.distance(position, alt.Player.all[i].pos);
        if (distance < radius) {
            closestPlayer = alt.Player.all[i];
            radius = distance;
        }
    }
    return closestPlayer;
}