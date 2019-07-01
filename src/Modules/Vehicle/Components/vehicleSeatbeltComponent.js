/// <reference path="../../../../natives.d.ts" />
/// <reference path="../../../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'src/Modules/Ui/mainUi.js';
import VehicleComponent from 'src/Modules/Vehicle/Components/vehicleComponent.js';

const SEATBELT_EJECT_SPEED = 60;
const SEATBELT_EJECT_ACCELERATION = 10;
class VehicleSeatbeltComponent extends VehicleComponent {
    constructor() {
        super();
        this.componentName = 'Vehicle seatbelt component';
        this.disabled = false;

        this.isSeatbeltOn = false;
        this.currentSpeed = 0;
        this.previousVelocity = {
            x: 0,
            y: 0,
            y: 0
        };
    }

    onUpdateInVehicle(localPlayer) {
        if (!this.correctVehicleClass(localPlayer.vehicle)) return;
        if (!this.isSeatbeltOn) {
            game.enableControlAction(0, 75, true);
            if (!game.getIsVehicleEngineRunning(localPlayer.vehicle.scriptID)) return;

            let previousSpeed = this.currentSpeed;
            this.currentSpeed = game.getEntitySpeed(localPlayer.vehicle.scriptID);
            game.setPedConfigFlag(localPlayer.scriptID, 32, true);
            let isVehicleMovingForward = game.getEntitySpeedVector(localPlayer.vehicle.scriptID, true).y > 1.0;
            let vehicleAcceleration = this.calculateVehicleAcceleration(previousSpeed);
            if (this.checkConditions(isVehicleMovingForward, previousSpeed, vehicleAcceleration)) {
                alt.log(`Should ragdoll`);
                this.setRagdollEffect(localPlayer);
            } else {
                this.previousVelocity = game.getEntityVelocity(localPlayer.vehicle.scriptID);
            }
        } else {
            // Disable vehicle exit
            game.disableControlAction(0, 75, true);
        }
    }

    setRagdollEffect(localPlayer) {
        game.setEntityCoords(localPlayer.scriptID, localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z - 0.47, true, true, true);
        game.setEntityVelocity(localPlayer.scriptID, this.previousVelocity.x, this.previousVelocity.y, this.previousVelocity.z);
        alt.setTimeout(() => {
            game.setPedToRagdoll(localPlayer.scriptID, 1000, 1000, 0, 0, 0, 0);
        }, 5);
    }

    calculateVehicleAcceleration(previousSpeed) {
        return (previousSpeed - this.currentSpeed) / game.getFrameTime();
    }

    checkConditions(isVehicleMovingForward, previousSpeed, vehicleAcceleration) {
        return isVehicleMovingForward && (previousSpeed > (SEATBELT_EJECT_SPEED / 3.6)) && (vehicleAcceleration > (SEATBELT_EJECT_ACCELERATION));
    }

    onUpdateOutsideVehicle(localPlayer) { }

    toggleSeatbelt(localPlayer) {
        // Some notification/sound for seatbealt toggle status
        let correctVehicleClass = this.correctVehicleClass(localPlayer.vehicle);
        if (!correctVehicleClass) return;
        this.isSeatbeltOn = !this.isSeatbeltOn;
        let text = this.isSeatbeltOn ? 'Zapięto pasy bezpieczeństwa.' : 'Odpięto pasy bezpieczeństwa';
        mainUi.showCefNotification(0, 'Pasy', text, 2500);
    }

    correctVehicleClass(vehicle) {
        let vehicleClass = game.getVehicleClass(vehicle.scriptID);
        if (vehicleClass === 8 || vehicleClass === 13) return false; // No seatbelt on motorcycles/bikes
        else return true;
    }
}

const vehicleSeatbeltComponent = new VehicleSeatbeltComponent();
export default vehicleSeatbeltComponent;