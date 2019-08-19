import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'src/Modules/Ui/mainUi';
import VehicleComponent from 'src/Modules/Vehicle/Components/vehicleComponent';
import { VehicleComponentTypes } from 'source/src/Constans/vehicleComponentTypes';
import { NotificationTypes } from 'source/src/Constans/notificationTypes';
import sounds from 'source/src/Modules/Core/soundsController';

const SEATBELT_EJECT_SPEED = 60;
const SEATBELT_EJECT_ACCELERATION = 900;
class VehicleSeatbeltComponent extends VehicleComponent {
    isSeatbeltOn: boolean;
    currentSpeed: number;
    previousVelocity: Vector3;
    constructor(protected componentType: VehicleComponentTypes) {
        super(componentType);
        this.disabled = false;

        this.isSeatbeltOn = false;
        this.currentSpeed = 0;
        this.previousVelocity = {
            x: 0,
            y: 0,
            z: 0
        };
    }

    onUpdateInVehicle(localPlayer: alt.Player) {
        const playerVehicle = localPlayer.vehicle as alt.Vehicle;
        if (!this.correctVehicleClass(playerVehicle)) return;
        if (!this.isSeatbeltOn) {
            game.enableControlAction(0, 75, true);
            if (!game.getIsVehicleEngineRunning(playerVehicle.scriptID)) return;

            const previousSpeed = this.currentSpeed;
            this.currentSpeed = playerVehicle.speed;
            game.setPedConfigFlag(localPlayer.scriptID, 32, true);
            const isVehicleMovingForward = game.getEntitySpeedVector(playerVehicle.scriptID, true).y > 1.0;
            const vehicleAcceleration = this.calculateVehicleAcceleration(previousSpeed);
            if (this.checkConditions(isVehicleMovingForward, previousSpeed, vehicleAcceleration)) {
                alt.log(`Should ragdoll vehicle accelaration was ${vehicleAcceleration}`);
                this.setRagdollEffect(localPlayer);
            } else {
                this.previousVelocity = game.getEntityVelocity(playerVehicle.scriptID);
            }
        } else {
            // Disable vehicle exit
            game.disableControlAction(0, 75, true);
        }
    }

    setRagdollEffect(localPlayer: alt.Player) {
        game.setEntityCoords(localPlayer.scriptID, localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z - 0.47, true, true, true, true);
        game.setEntityVelocity(localPlayer.scriptID, this.previousVelocity.x, this.previousVelocity.y, this.previousVelocity.z);
        alt.setTimeout(() => {
            game.setPedToRagdoll(localPlayer.scriptID, 1000, 1000, 0, false, false, false);
        }, 1);
    }

    calculateVehicleAcceleration(previousSpeed: number) {
        return (previousSpeed - this.currentSpeed) / game.getFrameTime();
    }

    checkConditions(isVehicleMovingForward: boolean, previousSpeed: number, vehicleAcceleration: number) {
        return isVehicleMovingForward && (previousSpeed > (SEATBELT_EJECT_SPEED / 3.6)) && (vehicleAcceleration > (SEATBELT_EJECT_ACCELERATION));
    }

    onUpdateOutsideVehicle(localPlayer: alt.Player) {
        if (this.isSeatbeltOn) this.isSeatbeltOn = false;
    }

    toggleSeatbelt(localPlayer: alt.Player) {
        // Some notification/sound for seatbealt toggle status
        const correctVehicleClass = this.correctVehicleClass(localPlayer.vehicle as alt.Vehicle);
        if (!correctVehicleClass) return;
        this.isSeatbeltOn = !this.isSeatbeltOn;
        this.isSeatbeltOn ? sounds.playCefSound('buckle.webm', 0.5, false) : sounds.playCefSound('unbuckle.webm', 0.5, false);
        alt.setTimeout(() => {
            const text = this.isSeatbeltOn ? 'Zapięto pasy bezpieczeństwa.' : 'Odpięto pasy bezpieczeństwa';
            mainUi.showCefNotification(NotificationTypes.Info, 'Pasy', text, 2500);
        }, 850);
    }

    correctVehicleClass(vehicle: alt.Vehicle) {
        const vehicleClass = game.getVehicleClass(vehicle.scriptID);
        if (vehicleClass === 8 || vehicleClass === 13) return false; // No seatbelt on motorcycles/bikes
        else return true;
    }
}

const vehicleSeatbeltComponent = new VehicleSeatbeltComponent(VehicleComponentTypes.SeatbeltComponent);
export default vehicleSeatbeltComponent;