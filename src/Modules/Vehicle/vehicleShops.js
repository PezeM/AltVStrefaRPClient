/// <reference path="../../../altv.d.ts" />
/// <reference path="../../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';

let localPlayer = alt.getLocalPlayer();
let currentVehicleShop = null;
let vehicleSellers = [];
const vehicleShopsPedPositions = [
    { id: 1, x: -44.58461, y: -1105.648, z: 26.41541, rot: 138.7 },
    { id: 2, x: -986.62817, y: -2947.9396, z: 13.9450, rot: 340.29 },
    { id: 3, x: -182.4818, y: -1383.7307, z: 31.2663, rot: 165.78 },
];

const pedHash = 1206185632;

alt.onServer('openVehicleShop', (vehicleShopId, vehicleShopData) => {
    currentVehicleShop = vehicleShopId;
    alt.log(`Vehicle shop data = ${JSON.stringify(vehicleShopData)}`);
});

alt.on('playerConnect', () => {
    // Create vehicle shop peds
    alt.loadModel(pedHash);

    vehicleShopsPedPositions.forEach(shopPed => {
        var ped = game.createPed(26, pedHash, shopPed.x, shopPed.y, shopPed.z, shopPed.rot, false, true);
        game.setEntityCanBeDamaged(ped, false);
        game.setPedCanRagdoll(ped, false);
        game.freezeEntityPosition(ped, true);
        vehicleSellers.push({ pedId: ped, id: shopPed.id });
    });
});