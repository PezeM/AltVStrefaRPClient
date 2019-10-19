import * as alt from 'alt';
import * as game from 'natives';
import playerVehicleController, { VehicleLeaveEventArgs, VehicleEnterEventArgs, VehicleSeatChangeEventArgs } from './playerVehicleController';
import { VehicleSeat } from 'source/src/Constans/enums';
import { isDriver } from 'source/src/Helpers/playerHelpers';
import { drawText } from 'source/src/Helpers/uiHelper';
import maths from 'source/src/Helpers/maths';

const localPlayer = alt.Player.local;
class VehicleMileage {
    private tickInterval: number = 0;
    private mileageInterval: number = 0;
    private mileageUpdater: number = 0;
    private vehicleLastPos: alt.Vector3;
    private calculatedDist: number = 0;

    constructor() {
        playerVehicleController.vehicleEnterEvent.on(this.onVehicleEnter);
        this.tickInterval = alt.setInterval(this.tick.bind(this), 0);
    }

    private tick() {
        const playerVehicle = localPlayer.vehicle;
        if (!playerVehicle) return;
        if (!isDriver(playerVehicle, localPlayer)) return;
        drawText(`Vehicle mileage: ${playerVehicle.mileage.toFixed(2)}`, [0.2, 0.2], 4, [255, 255, 255, 255], 0.6, true, false);
        drawText(`Calculated dist: ${this.calculatedDist.toFixed(2)}`, [0.2, 0.25], 4, [255, 255, 255, 255], 0.6, true, false);
    }

    private onVehicleEnter = (args: VehicleEnterEventArgs) => {
        playerVehicleController.vehicleSeatChangeEvent.on(this.onVehicleSeatChanged);
        alt.log(`Entered vehicle at seat ${args.seat}`);
        if (args.seat !== VehicleSeat.Driver) return;
        playerVehicleController.vehicleLeaveEvent.once(this.onVehicleLeave);
        this.startMileageCounter(args.vehicle);
    }

    private onVehicleLeave = (args: VehicleLeaveEventArgs) => {
        if (args.previousSeat === VehicleSeat.Driver) {
            alt.log('Previous seat was driver. Stopping mileage counter');
            this.stopMileageCounter(args.previousVehicle);
        }
        playerVehicleController.vehicleSeatChangeEvent.off(this.onVehicleSeatChanged);
    }

    private onVehicleSeatChanged = (args: VehicleSeatChangeEventArgs) => {
        if (args.newSeat === VehicleSeat.Driver) {
            alt.log('Changed seat to driver');
            this.startMileageCounter(args.vehicle);
        } else if (args.oldSeat === VehicleSeat.Driver) {
            alt.log('Changed seat from driver');
            this.stopMileageCounter(args.vehicle);
        }
    }

    private startMileageCounter(playerVehicle: alt.Vehicle) {
        alt.log('Starting mileage counter');
        if (!playerVehicle) {
            alt.logError('Coulnd start mileage counter, because player vehicle was not found.');
            return;
        }
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
        alt.log('Stopping mileage counter');
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