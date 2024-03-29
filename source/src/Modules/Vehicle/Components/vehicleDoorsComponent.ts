import * as alt from 'alt';
import * as game from 'natives';
import math from 'source/src/Helpers/maths';
import VehicleComponent from 'source/src/Modules/Vehicle/Components/vehicleComponent';
import { getClosestVehicle } from 'source/src/Helpers/collectionHelper';
import { draw3DText } from 'source/src/Helpers/uiHelper';
import { VehicleComponentTypes } from 'source/src/Constans/vehicleComponentTypes';

const OPEN_DOOR_DISTANCE = 4;
const OPEN_DOOR_DISTANCE_SQRT = OPEN_DOOR_DISTANCE * OPEN_DOOR_DISTANCE;
const player = alt.Player.local;

class VehicleDoorComponent extends VehicleComponent {
    updateInterval: number;
    closestVehicle: alt.Vehicle | null;
    bootPosition: Vector3;
    frontPosition: Vector3;
    constructor(protected componentType: VehicleComponentTypes) {
        super(componentType);
        this.disabled = false;
        this.closestVehicle = null;
        this.bootPosition = new alt.Vector3(0, 0, 0);
        this.frontPosition = new alt.Vector3(0, 0, 0);

        alt.onServer('toggleTrunkState', this.toggleTrunkState.bind(this));
        alt.onServer('toggleHoodState', this.toggleHoodState.bind(this));
        this.updateInterval = alt.setInterval(this.updateTest.bind(this), 50);
    }

    updateTest() {
        if (player.vehicle != null) return;
        this.closestVehicle = getClosestVehicle(player.pos, OPEN_DOOR_DISTANCE_SQRT);
        if (this.closestVehicle == null) return;

        const trunkIndex = game.getEntityBoneIndexByName(this.closestVehicle.scriptID, "boot");
        const hoodIndex = game.getEntityBoneIndexByName(this.closestVehicle.scriptID, "bonnet");

        if (trunkIndex !== -1) {
            const trunkPosition = game.getWorldPositionOfEntityBone(this.closestVehicle.scriptID, trunkIndex);
            const hoodPosition = game.getWorldPositionOfEntityBone(this.closestVehicle.scriptID, hoodIndex);
            const trunkDistance = math.distance(trunkPosition, this.closestVehicle.pos);
            const hoodDistance = math.distance(hoodPosition, this.closestVehicle.pos);

            this.bootPosition = game.getOffsetFromEntityInWorldCoords(this.closestVehicle.scriptID, 0, -trunkDistance, 0);
            this.frontPosition = game.getOffsetFromEntityInWorldCoords(this.closestVehicle.scriptID, 0, hoodDistance + 1, 0);
        } else {
            const hoodPosition = game.getWorldPositionOfEntityBone(this.closestVehicle.scriptID, hoodIndex);
            const hoodDistance = math.distance(hoodPosition, this.closestVehicle.pos);
            this.frontPosition = game.getOffsetFromEntityInWorldCoords(this.closestVehicle.scriptID, 0, hoodDistance + 1, 0);
        }
    }

    onUpdateOutsideVehicle(localPlayer: alt.Player) {
        if (this.closestVehicle == null) return;

        if (math.distance(localPlayer.pos, this.bootPosition) <= OPEN_DOOR_DISTANCE_SQRT) {
            this.displayOpenTrunkText(this.closestVehicle, this.bootPosition);
        } else if (math.distance(localPlayer.pos, this.frontPosition) <= OPEN_DOOR_DISTANCE_SQRT) {
            this.displayOpenHoodText(this.closestVehicle, this.frontPosition);
        }

        // For debug
        draw3DText(`ScriptID: ${this.closestVehicle.scriptID} ID: ${this.closestVehicle.id}`,
            [this.closestVehicle.pos.x, this.closestVehicle.pos.y, this.closestVehicle.pos.z + 1],
            4, [255, 255, 255, 200], 0.5, true);
    }

    displayOpenTrunkText(vehicle: alt.Vehicle, trunkPosition: Vector3) {
        if (game.getVehicleDoorAngleRatio(vehicle.scriptID, 5) > 0) {
            draw3DText("Naciśnij [~b~E~w~] aby ~r~zamknąć~w~ bagażnik", [trunkPosition.x, trunkPosition.y, trunkPosition.z], 4,
                [255, 255, 255, 200], 0.45, true);
        }
        else {
            draw3DText("Naciśnij [~b~E~w~] aby ~g~otworzyć~w~ bagażnik", [trunkPosition.x, trunkPosition.y, trunkPosition.z], 4,
                [255, 255, 255, 200], 0.45, true);
        }
    }

    displayOpenHoodText(vehicle: alt.Vehicle, hoodPosition: Vector3) {
        if (game.getVehicleDoorAngleRatio(vehicle.scriptID, 4) > 0) {
            draw3DText("Naciśnij [~b~E~w~] aby ~r~zamknąć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
        }
        else {
            draw3DText("Naciśnij [~b~E~w~] aby ~g~otworzyć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
        }
    }

    toggleTrunkOrHoodState(localPlayer: alt.Player) {
        const vehicle = getClosestVehicle(localPlayer.pos, OPEN_DOOR_DISTANCE_SQRT);
        if (vehicle == null) return false;
        if (this.checkIfVehicleIsLocked(vehicle)) return false;

        const trunkIndex = game.getEntityBoneIndexByName(vehicle.scriptID, "boot");
        const hoodIndex = game.getEntityBoneIndexByName(vehicle.scriptID, "bonnet");
        alt.log(`Found trunk index: ${trunkIndex}`);
        alt.log(`Found hood index: ${hoodIndex}`);

        if (trunkIndex === -1 && hoodIndex === -1) return false;

        const trunkPosition = game.getWorldPositionOfEntityBone(vehicle.scriptID, trunkIndex);
        const trunkDistance = math.distance(trunkPosition, vehicle.pos);
        const hoodPosition = game.getWorldPositionOfEntityBone(vehicle.scriptID, hoodIndex);
        const hoodDistance = math.distance(hoodPosition, vehicle.pos);
        const bootPosition = game.getOffsetFromEntityInWorldCoords(vehicle.scriptID, 0, -trunkDistance, 0);
        const frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle.scriptID, 0, hoodDistance + 1, 0);

        if (math.distance(localPlayer.pos, frontPosition) <= math.distance(localPlayer.pos, bootPosition)) { // Hood is closer
            alt.log(`Hood was closer dist ${math.distance(localPlayer.pos, frontPosition)}`);
            if (math.distance(localPlayer.pos, frontPosition) <= OPEN_DOOR_DISTANCE_SQRT) {
                alt.emitServer('ToggleHoodState', vehicle);
                return true;
            }
        } else {
            const distance = math.distance(localPlayer.pos, bootPosition);
            alt.log(`Distance between player and trunk was ${distance}`)
            if (distance <= OPEN_DOOR_DISTANCE_SQRT) {
                alt.emitServer('ToggleTrunkState', vehicle);
                return true;
            }
        }

        return false;
    }

    toggleHoodState(state: number, vehicle: alt.Vehicle) {
        alt.log(`Toggle hood state with state ${state} and vehicle scriptID ${vehicle.scriptID}`);
        const hoodIndex = game.getEntityBoneIndexByName(vehicle.scriptID, "bonnet");
        if (hoodIndex === -1) return;

        switch (state) {
            case 1: // Open
                this.openDoor(vehicle, 4);
                break;
            case 0: // Close
                this.closeDoor(vehicle, 4);
                break;
        }
    }

    toggleTrunkState(state: number, vehicle: alt.Vehicle) {
        alt.log(`Toggle trunk state with state ${state} and vehicle scriptID ${vehicle.scriptID}`);
        const trunkIndex = game.getEntityBoneIndexByName(vehicle.scriptID, "boot");
        if (trunkIndex === -1) return;

        switch (state) {
            case 1: // Open
                this.openDoor(vehicle, 5);
                break;
            case 0: // Close
                this.closeDoor(vehicle, 5);
                break;
        }
    }

    closeDoor(vehicle: alt.Vehicle, doorIndex: number) {
        game.setVehicleDoorShut(vehicle.scriptID, doorIndex, false);
        alt.log(`Closing door`);
        alt.setTimeout(() => {
            game.playVehicleDoorCloseSound(vehicle.scriptID, 0);
            alt.log(`Closed door index ${doorIndex}`);
        }, 50);
    }

    openDoor(vehicle: alt.Vehicle, doorIndex: number) {
        game.setVehicleDoorOpen(vehicle.scriptID, doorIndex, false, false);
        alt.setTimeout(() => {
            game.playVehicleDoorOpenSound(vehicle.scriptID, 0);
            alt.log('Opened dooor index ' + doorIndex);
        }, 10);
    }

    checkIfVehicleIsLocked(vehicle: alt.Vehicle) {
        return game.getVehicleDoorLockStatus(vehicle.scriptID) === 2;
    }
}

const vehicleDoorComponent = new VehicleDoorComponent(VehicleComponentTypes.DoorComponent);
export default vehicleDoorComponent;