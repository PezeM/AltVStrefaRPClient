import * as alt from 'alt';
import * as game from 'natives';
import playerVehicleController from './playerVehicleController';
import { VehicleSeat } from 'source/src/Constans/enums';
import { isDriver } from 'source/src/Helpers/playerHelpers';
import { drawText } from 'source/src/Helpers/uiHelper';
import maths from 'source/src/Helpers/maths';

const localPlayer = alt.Player.local;
class VehicleMileage {
    private tickInterval: number = 0;
    private mileageInterval: number;
    private mileageUpdater: number;
    private vehicleLastPos: alt.Vector3;
    private calculatedDist: number = 0;

    constructor() {
        playerVehicleController.onVehicleEnter(this.onVehicleEnter.bind(this));
        this.tickInterval = alt.setInterval(this.tick.bind(this), 0);
    }

    private tick() {
        const playerVehicle = localPlayer.vehicle;
        if (!playerVehicle) return;
        if (!isDriver(playerVehicle, localPlayer)) return;
        drawText(`Vehicle mileage: ${playerVehicle.mileage.toFixed(2)}`, [0.2, 0.2], 4, [255, 255, 255, 255], 0.6, true, false);
        drawText(`Calculated dist: ${this.calculatedDist.toFixed(2)}`, [0.2, 0.25], 4, [255, 255, 255, 255], 0.6, true, false);
    }

    private onVehicleEnter(vehicle: alt.Vehicle, seat: VehicleSeat) {
        playerVehicleController.onVehicleSeatChanged(this.onVehicleSeatChanged.bind(this));
        if (seat !== VehicleSeat.Driver) return;
        this.startMileageCounter(vehicle);
        playerVehicleController.onVehicleLeave(this.onVehicleLeave.bind(this));
    }

    private onVehicleLeave(previousVehicle: alt.Vehicle, previousSeat: VehicleSeat) {
        if (previousSeat === VehicleSeat.Driver) {
            this.stopMileageCounter(previousVehicle);
            playerVehicleController.offVehicleLeave(this.onVehicleLeave);
        }
        playerVehicleController.offVehicleSeatChanged(this.onVehicleSeatChanged);
    }

    private onVehicleSeatChanged(vehicle: alt.Vehicle, newSeat: VehicleSeat, oldSeat: VehicleSeat) {
        if (newSeat === VehicleSeat.Driver) {
            this.startMileageCounter(vehicle);
        } else if (oldSeat === VehicleSeat.Driver) {
            this.stopMileageCounter(vehicle);
        }
    }

    private startMileageCounter(playerVehicle: alt.Vehicle) {
        alt.log('Starting mileage counter');
        this.vehicleLastPos = playerVehicle.pos;
        const mileage = playerVehicle.getSyncedMeta("vehicleMileage");
        if (mileage == null || typeof mileage === 'undefined') {
            alt.logError('Vehicle mileage was null');
            return;
        }
        alt.log(`Vehicle mileage = ${mileage}`);
        playerVehicle.mileage = mileage

        this.mileageInterval = alt.setInterval(() => {
            const vehicle = localPlayer.vehicle;
            if (!vehicle) return this.stopMileageCounter();
            let distance = maths.distanceSqrt(this.vehicleLastPos, vehicle.pos, true);
            if (distance > 200) distance = 50;
            distance /= 1000;
            alt.log('Distance', distance);
            this.calculatedDist += distance;
            this.vehicleLastPos = vehicle.pos;
            vehicle.mileage += distance;
            alt.log('New vehicle mileage', vehicle.mileage);
        }, 1000);

        this.mileageUpdater = alt.setInterval(() => {
            const vehicle = localPlayer.vehicle;
            if (!vehicle) return this.stopMileageCounter();
            if (this.calculatedDist < 0.1) return;
            alt.emitServer("Vehicle-AddMileage", vehicle, this.calculatedDist.toFixed(2));
            this.calculatedDist = 0;
        }, 60000);
    }

    private stopMileageCounter(previousVehicle: alt.Vehicle | null = null) {
        alt.clearInterval(this.mileageInterval);
        alt.clearInterval(this.mileageUpdater);
        if (previousVehicle && this.calculatedDist > 0.1) {
            alt.emitServer('Vehicle-AddMileage', previousVehicle, this.calculatedDist.toFixed(2));
        }
        this.calculatedDist = 0;
    }
}

const vehicleMileage = new VehicleMileage();
export default vehicleMileage;