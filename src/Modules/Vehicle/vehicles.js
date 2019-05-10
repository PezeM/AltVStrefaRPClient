/// <reference path="../../../altv.d.ts" />
/// <reference path="../../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import { drawText, draw3DText } from 'src/Helpers/uiHelper.js';
import { isDriver } from 'src/Helpers/playerHelpers.js';

let localPlayer = alt.getLocalPlayer();
let openedTrunks = [];
let openedHoods = [];

alt.onServer('putIntoVehicle', () => {
    alt.setTimeout(() => {
        var coords = game.getEntityCoords(localPlayer.scriptID, true);
        var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 80, 0, 71);
        alt.log('Closest vehicle is ' + vehicle);
        game.setPedIntoVehicle(localPlayer.scriptID, vehicle, -1);
    }, 250);
});

alt.onServer('toggleLockState', (state) => {
    var startTime = Date.now();
    alt.log(`Toggle lock state: ${state} typeof ${typeof state}`);
    let coords = game.getEntityCoords(localPlayer.scriptID, true);
    var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 10, 0, 71);
    alt.log(`Closest vehicle = ${JSON.stringify(vehicle)}`);
    if (vehicle == 0) return false;

    let vehiclePosition = game.getEntityCoords(vehicle, true);
    if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, true) > 10) return false;


    switch (state) {
        case true:
            // Lock
            game.setVehicleInteriorlight(vehicle, false);
            game.setVehicleLightMultiplier(vehicle, 1.0);
            game.setVehicleLights(vehicle, 2);
            var lightFadingCount = 300;
            alt.setInterval(() => {
                if (lightFadingCount > 0) {
                    lightFadingCount--;

                    if (lightFadingCount > 100) {
                        game.setVehicleLightMultiplier(vehicle, (lightFadingCount - 100) / 300);
                    } else game.setVehicleLights(vehicle, 0);
                }
            }, 10);
            break;
        case false:
            // Unlock
            game.setVehicleInteriorlight(vehicle, true);
            game.setVehicleLightMultiplier(vehicle, 0.0);
            game.setVehicleLights(vehicle, 2);
            var lightFadingCount = 300;

            alt.setInterval(() => {
                if (lightFadingCount < 300) {
                    lightFadingCount++;

                    if (lightFadingCount > 100) game.setVehicleLightMultiplier(vehicle, (lightFadingCount - 99) / 300);
                }
            }, 10);
            break;
    }

    let time = 7000;
    alt.setTimeout(() => {
        game.setVehicleInteriorlight(vehicle, false);
        game.setVehicleLights(vehicle, 0);
    }, time);

    alt.log(`Executed toggleLockState in ${Date.now() - startTime} ms.`);
    return true;
});

export function toggleLockState() {
    alt.log(`Toggle lock state`);
    let coords = game.getEntityCoords(localPlayer.scriptID, true);
    var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 10, 0, 71);
    alt.log(`Closest vehicle = ${JSON.stringify(vehicle)}`);
    if (vehicle == 0) return false;

    let vehiclePosition = game.getEntityCoords(vehicle, true);
    if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, true) > 10) return false;

    alt.emitServer("ToggleLockState");
    return true;
}

alt.onServer('toggleTrunkState', (state) => {
    alt.log(`Toggle trunk state with state ${state}`);
    let coords = game.getEntityCoords(localPlayer.scriptID, true);
    var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 6, 0, 71);
    if (vehicle == 0) return;
    let trunkIndex = game.getEntityBoneIndexByName(vehicle, "boot");
    if (trunkIndex == -1) return;

    let trunkPosition = game.getWorldPositionOfEntityBone(vehicle, trunkIndex);
    let vehiclePosition = game.getEntityCoords(vehicle, true);
    let distance = game.getDistanceBetweenCoords(trunkPosition.x, trunkPosition.y, trunkPosition.z,
        vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

    let bootPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, -distance - 1, 0);

    if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, bootPosition.x, bootPosition.y, bootPosition.z, true) > 2.5) return;

    alt.nextTick(() => {
        switch (state) {
            case 1:
                game.setVehicleDoorOpen(vehicle, 5, false, false);
                // game.taskOpenVehicleDoor(localPlayer.scriptID, vehicle, 0, 5, 1000);
                game.playVehicleDoorOpenSound(vehicle, 0);
                alt.log('Opened dooor index 5');
                openedTrunks.push(vehicle);
                break;
            case 0:
                game.setVehicleDoorShut(vehicle, 5, false);
                game.playVehicleDoorCloseSound(vehicle, 1);
                alt.log('Closed door index 5');
                openedTrunks.splice(openedTrunks.indexOf(vehicle), 1);
                break;
        }

        alt.log(`Current opendTrunks array: ${JSON.stringify(openedTrunks)}`);
    })
});

alt.onServer('toggleHoodState', (state) => {
    alt.log(`Toggle hood state with state ${state}`);
    let coords = game.getEntityCoords(localPlayer.scriptID, true);
    var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 6, 0, 71);
    if (vehicle == 0) return;
    let trunkIndex = game.getEntityBoneIndexByName(vehicle, "bonnet");
    if (trunkIndex == -1) return;

    let hoodPosition = game.getWorldPositionOfEntityBone(vehicle, trunkIndex);
    let vehiclePosition = game.getEntityCoords(vehicle, true);
    let hoodDistance = game.getDistanceBetweenCoords(hoodPosition.x, hoodPosition.y, hoodPosition.z,
        vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

    let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, hoodDistance + 0.2, 0);

    if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, frontPosition.x, frontPosition.y, frontPosition.z, true) > 2.5) return;

    alt.nextTick(() => {
        switch (state) {
            case 1:
                game.setVehicleDoorOpen(vehicle, 4, false, false);
                game.playVehicleDoorOpenSound(vehicle, 0);
                alt.log('Opened dooor index 4');
                openedHoods.push(vehicle);
                break;
            case 0:
                game.setVehicleDoorShut(vehicle, 4, false);
                game.playVehicleDoorCloseSound(vehicle, 1);
                alt.log('Closed door index 4');
                openedHoods.splice(openedHoods.indexOf(vehicle), 1);
                break;
        }
        alt.log(`Current openedHoods array: ${JSON.stringify(openedHoods)}`);
    });
});

export function toggleTrunkOrHoodState() {
    var startTime = Date.now();
    alt.log(`Toggle trunk or hood state`);
    let coords = game.getEntityCoords(localPlayer.scriptID, true);
    var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 6, 0, 71);
    alt.log(`Closest vehicle = ${JSON.stringify(vehicle)}`);
    if (vehicle == 0) return;

    var doorLockStatus = game.getVehicleDoorLockStatus(vehicle);
    if (doorLockStatus == 2) return false; // Vehicle was closed

    let trunkIndex = game.getEntityBoneIndexByName(vehicle, "boot");
    let hoodIndex = game.getEntityBoneIndexByName(vehicle, "bonnet");

    alt.log(`Found trunk index: ${trunkIndex}`);
    alt.log(`Found hood index: ${hoodIndex}`);

    if (trunkIndex == -1 && hoodIndex == -1) return false;

    let trunkPosition = game.getWorldPositionOfEntityBone(vehicle, trunkIndex);
    let hoodPosition = game.getWorldPositionOfEntityBone(vehicle, hoodIndex);
    let vehiclePosition = game.getEntityCoords(vehicle, true);
    let trunkDistance = game.getDistanceBetweenCoords(trunkPosition.x, trunkPosition.y, trunkPosition.z,
        vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);
    let hoodDistance = game.getDistanceBetweenCoords(hoodPosition.x, hoodPosition.y, hoodPosition.z,
        vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

    let bootPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, -trunkDistance - 1, 0);
    let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, hoodDistance + 0.2, 0);

    if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, bootPosition.x, bootPosition.y, bootPosition.z, true)
        < game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, frontPosition.x, frontPosition.y, frontPosition.z, true)) {
        alt.log('Trunk was closer');
        if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, bootPosition.x, bootPosition.y, bootPosition.z, true) > 2.5) return false;
        // Trunk
        alt.emitServer('ToggleTrunkState');
    } else {
        alt.log('Hood was closer');
        if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, frontPosition.x, frontPosition.y, frontPosition.z, true) > 2.5) return false;
        // Hood
        alt.emitServer('ToggleHoodState');
    }
    alt.log(`Toggled trunk or hood state in ${Date.now() - startTime}ms`);
}

alt.on('update', () => {
    if (game.isPedInAnyVehicle(localPlayer.scriptID, false)) {
        var vehicle = game.getVehiclePedIsIn(localPlayer.scriptID, false);
        if (isDriver(vehicle, localPlayer)) { // Speed only for driver
            drawText(`KM/H`, [0.9, 0.83], 4, [255, 255, 255, 255], 0.6, true, false);
            // drawText(`~r~${(game.getEntitySpeed(vehicle) * 3.6).toFixed(0)}`, [0.9, 0.86], 4, [255, 255, 255, 255], 0.6, true, false);
            drawText(`~r~${(localPlayer.vehicle.speed * 3.6).toFixed(0)}`, [0.9, 0.86], 4, [255, 255, 255, 255], 0.6, true, false);
        }

        if (game.isRadarHidden() || !game.isRadarEnabled()) {
            alt.log('Radar was hidden, enabling it');
            game.displayRadar(true);
        }

    } else {
        if (!game.isRadarHidden() || game.isRadarEnabled()) {
            alt.log('Radar was enabled, hiding it');
            game.displayRadar(false);
        }

        var vehicle = game.getClosestVehicle(localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z, 8, 0, 71);
        if (vehicle != 0) {
            let hoodIndex = game.getEntityBoneIndexByName(vehicle, "bonnet");
            let trunkIndex = game.getEntityBoneIndexByName(vehicle, "boot");
            let vehiclePosition = game.getEntityCoords(vehicle, true);

            if (trunkIndex != 0) {
                let trunkPosition = game.getWorldPositionOfEntityBone(vehicle, trunkIndex);
                let hoodPosition = game.getWorldPositionOfEntityBone(vehicle, hoodIndex);

                let trunkDistance = game.getDistanceBetweenCoords(trunkPosition.x, trunkPosition.y, trunkPosition.z,
                    vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);
                let hoodDistance = game.getDistanceBetweenCoords(hoodPosition.x, hoodPosition.y, hoodPosition.z,
                    vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

                let bootPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, -trunkDistance - 1, 0);
                let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, hoodDistance + 1, 0);

                if (game.getDistanceBetweenCoords(localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z, bootPosition.x, bootPosition.y, bootPosition.z, true) < 2.3) {
                    if (openedTrunks.includes(vehicle))
                        draw3DText("Naciśnij [~b~E~w~] aby ~r~zamknąć~w~ bagażnik", [trunkPosition.x, trunkPosition.y, trunkPosition.z], 4, [255, 255, 255, 200], 0.45, true);
                    else
                        draw3DText("Naciśnij [~b~E~w~] aby ~g~otworzyć~w~ bagażnik", [trunkPosition.x, trunkPosition.y, trunkPosition.z], 4, [255, 255, 255, 200], 0.45, true);
                }

                if (game.getDistanceBetweenCoords(localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z, frontPosition.x, frontPosition.y, frontPosition.z, true) < 2.6) {
                    if (openedHoods.includes(vehicle))
                        draw3DText("Naciśnij [~b~E~w~] aby ~r~zamknąć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
                    else
                        draw3DText("Naciśnij [~b~E~w~] aby ~g~otworzyć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
                }
            } else {
                let hoodPosition = game.getWorldPositionOfEntityBone(vehicle, hoodIndex);
                let hoodDistance = game.getDistanceBetweenCoords(hoodPosition.x, hoodPosition.y, hoodPosition.z,
                    vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

                let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, hoodDistance + 1, 0);
                if (game.getDistanceBetweenCoords(localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z, frontPosition.x, frontPosition.y, frontPosition.z, true) < 2.6) {
                    if (openedHoods.includes(vehicle))
                        draw3DText("Naciśnij [~b~E~w~] aby ~r~zamknąć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
                    else
                        draw3DText("Naciśnij [~b~E~w~] aby ~g~otworzyć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
                }
            }

            // let vehicleSynced = vehicle.getSyncedMeta("vehicleId");
            // alt.log(`Vehicle synced = ${JSON.stringify(vehicleSynced)}`);
            // // if (vehicleSynced) {
            // //     text += `SERVER: ${vehicleSynced}`
            // // }

            draw3DText("ID: " + vehicle, [vehiclePosition.x, vehiclePosition.y, vehiclePosition.z + 1],
                4, [255, 255, 255, 200], 0.5, true);
        }

    }
});

