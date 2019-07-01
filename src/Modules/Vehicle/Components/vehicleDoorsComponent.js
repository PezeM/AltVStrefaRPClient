/// <reference path="../../../../natives.d.ts" />
/// <reference path="../../../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import math from 'src/Helpers/maths.js';
import VehicleComponent from 'src/Modules/Vehicle/Components/vehicleComponent.js';
import { getClosestVehicle } from 'src/Helpers/collectionHelper.js';
import { draw3DText } from 'src/Helpers/uiHelper.js';

const OPEN_DOOR_DISTANCE = 4;
const OPEN_DOOR_DISTANCE_SQRT = OPEN_DOOR_DISTANCE * OPEN_DOOR_DISTANCE;

class VehicleDoorComponent extends VehicleComponent {
    constructor() {
        super();
        this.componentName = 'Vehicle door component';
        this.disabled = false;
    }

    onUpdate(localPlayer) {
        if (localPlayer.vehicle != null) return;
        let vehicle = getClosestVehicle(localPlayer.pos, OPEN_DOOR_DISTANCE_SQRT);
        if (vehicle == null) return;

        let trunkIndex = game.getEntityBoneIndexByName(vehicle.scriptID, "boot");
        let hoodIndex = game.getEntityBoneIndexByName(vehicle.scriptID, "bonnet");

        if (trunkIndex != -1) {
            let trunkPosition = game.getWorldPositionOfEntityBone(vehicle.scriptID, trunkIndex);
            let hoodPosition = game.getWorldPositionOfEntityBone(vehicle.scriptID, hoodIndex);
            let trunkDistance = math.distance(trunkPosition, vehicle.pos);
            let hoodDistance = math.distance(hoodPosition, vehicle.pos);

            let bootPosition = game.getOffsetFromEntityInWorldCoords(vehicle.scriptID, 0, -trunkDistance - 1, 0);
            let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle.scriptID, 0, hoodDistance + 1, 0);

            if (math.distance(localPlayer.pos, bootPosition) <= OPEN_DOOR_DISTANCE_SQRT) {
                this.displayOpenTrunkText(vehicle, trunkPosition);
            } else if (math.distance(localPlayer.pos, frontPosition) <= OPEN_DOOR_DISTANCE_SQRT) {
                this.displayOpenHoodText(vehicle, hoodPosition);
            }
        } else {
            let hoodPosition = game.getWorldPositionOfEntityBone(vehicle.scriptID, hoodIndex);
            let hoodDistance = math.distance(hoodPosition, vehicle.pos);
            let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle.scriptID, 0, hoodDistance + 1, 0);

            if (math.distance(localPlayer.pos, frontPosition) <= OPEN_DOOR_DISTANCE_SQRT) {
                this.displayOpenHoodText(vehicle, hoodPosition);
            }
        }

        // For debug
        draw3DText(`ScriptID: ${vehicle.scriptID} ID: ${vehicle.id}`, [vehicle.pos.x, vehicle.pos.y, vehicle.pos.z + 1],
            4, [255, 255, 255, 200], 0.5, true);
    }

    displayOpenTrunkText(vehicle, trunkPosition) {
        if (game.getVehicleDoorAngleRatio(vehicle.scriptID, 5) > 0) {
            draw3DText("Naciśnij [~b~E~w~] aby ~r~zamknąć~w~ bagażnik", [trunkPosition.x, trunkPosition.y, trunkPosition.z], 4, [255, 255, 255, 200], 0.45, true);
        }
        else {
            draw3DText("Naciśnij [~b~E~w~] aby ~g~otworzyć~w~ bagażnik", [trunkPosition.x, trunkPosition.y, trunkPosition.z], 4, [255, 255, 255, 200], 0.45, true);
        }
    }

    displayOpenHoodText(vehicle, hoodPosition) {
        if (game.getVehicleDoorAngleRatio(vehicle.scriptID, 4) > 0) {
            draw3DText("Naciśnij [~b~E~w~] aby ~r~zamknąć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
        }
        else {
            draw3DText("Naciśnij [~b~E~w~] aby ~g~otworzyć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
        }
    }

    toggleTrunkOrHoodState(localPlayer) {
        let vehicle = getClosestVehicle(localPlayer.pos, OPEN_DOOR_DISTANCE_SQRT);
        if (vehicle == null) return false;
        if (this.checkIfVehicleIsLocked(vehicle)) return false;

        let trunkIndex = game.getEntityBoneIndexByName(vehicle.scriptID, "boot");
        let hoodIndex = game.getEntityBoneIndexByName(vehicle.scriptID, "bonnet");
        alt.log(`Found trunk index: ${trunkIndex}`);
        alt.log(`Found hood index: ${hoodIndex}`);

        if (trunkIndex === -1 && hoodIndex === -1) return false;

        let trunkPosition = game.getWorldPositionOfEntityBone(vehicle.scriptID, trunkIndex);
        let trunkDistance = math.distance(trunkPosition, vehicle.pos);
        let hoodPosition = game.getWorldPositionOfEntityBone(vehicle.scriptID, hoodIndex);
        let hoodDistance = math.distance(hoodPosition, vehicle.pos);
        let bootPosition = game.getOffsetFromEntityInWorldCoords(vehicle.scriptID, 0, -trunkDistance - 1, 0);
        let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle.scriptID, 0, hoodDistance + 0.2, 0);
        alt.log(`Boot position ${JSON.stringify(bootPosition)} Front position ${JSON.stringify(frontPosition)}`);

        if (math.distance(localPlayer.pos, frontPosition) <= math.distance(localPlayer.pos, bootPosition)) { // Hood is closer
            alt.log(`Hood was closer dist ${math.distance(localPlayer.pos, frontPosition)}`);
            if (math.distance(localPlayer.pos, frontPosition) <= OPEN_DOOR_DISTANCE_SQRT) {
                alt.emitServer('ToggleHoodState');
                return true;
                // alt.emitServer('ToggleTrunkState', vehicle); // TO REPLACE
            }
        } else {
            alt.log(`Trunk was closer`);
            let distance = math.distance(localPlayer.pos, bootPosition);
            alt.log(`Distance between player and trunk was ${distance}`)
            if (distance <= OPEN_DOOR_DISTANCE_SQRT) {
                alt.emitServer('ToogleTrunkState');
                return true;
                // alt.emitServer('ToogleHoodState', vehicle); // TO REPLACE
            }
        }
    }

    checkIfVehicleIsLocked(vehicle) {
        return game.getVehicleDoorLockStatus(vehicle.scriptID) === 2;
    }
}

const vehicleDoorComponent = new VehicleDoorComponent();
export default vehicleDoorComponent;