import * as alt from 'alt';
import * as game from 'natives';
import { isDriver } from 'source/src/Helpers/playerHelpers';
import maths from 'source/src/Helpers/maths';
import { drawText } from 'source/src/Helpers/uiHelper';

type VehicleEnterEventCallback = (vehicle: alt.Vehicle, seat: number) => void;
type VehicleLeaveEventCallback = (vehicle: alt.Vehicle, seat: number) => void;
type VehicleChangedSeatEventCallback = (vehicle: alt.Vehicle, newSeat: number, oldSeat: number) => void;

const localPlayer = alt.Player.local;
class PlayerVehicleController {
    mileageInterval: number;
    mileageUpdater: number;
    vehicleLastPos: alt.Vector3;
    calculatedDist: number = 0;

    previousVehicle: alt.Vehicle | null;
    currentVehicle: alt.Vehicle | null;
    private currentSeat: number = -2;
    private previousSeat: number = -2;
    private tickInterval: number = 0;
    private vehicleEnterEvents: VehicleEnterEventCallback[] = [];
    private vehicleLeaveEvents: VehicleLeaveEventCallback[] = [];
    private vehicleSeatChangeEvent: VehicleChangedSeatEventCallback[] = [];

    constructor() {
        this.previousVehicle = null;
        this.currentVehicle = null;
        alt.log('Created vehicle mileage');
        this.tickInterval = alt.setInterval(this.tick.bind(this), 0);
    }

    onVehicleEnter(func: VehicleEnterEventCallback) {
        if (this.vehicleEnterEvents.indexOf(func) === -1) {
            this.vehicleEnterEvents.push(func);
        }
    }

    onVehicleLeave(func: VehicleLeaveEventCallback) {
        if (this.vehicleLeaveEvents.indexOf(func) === -1) {
            this.vehicleLeaveEvents.push(func);
        }
    }

    onVehicleSeatChanged(func: VehicleEnterEventCallback) {
        if (this.vehicleSeatChangeEvent.indexOf(func) === -1) {
            this.vehicleSeatChangeEvent.push(func);
        }
    }

    offVehicleEnter(func: VehicleEnterEventCallback) {
        const funcIndex = this.vehicleEnterEvents.indexOf(func);
        if (funcIndex !== -1) {
            this.vehicleEnterEvents.splice(funcIndex, 1);
        }
    }

    offVehicleLeave(func: VehicleLeaveEventCallback) {
        const funcIndex = this.vehicleLeaveEvents.indexOf(func);
        if (funcIndex !== -1) {
            this.vehicleLeaveEvents.splice(funcIndex, 1);
        }
    }

    offVehicleSeatChanged(func: VehicleChangedSeatEventCallback) {
        const funcIndex = this.vehicleSeatChangeEvent.indexOf(func);
        if (funcIndex !== -1) {
            this.vehicleSeatChangeEvent.splice(funcIndex, 1);
        }
    }

    private tick() {
        const playerVehicle = localPlayer.vehicle;
        if (playerVehicle !== this.previousVehicle) {
            if (playerVehicle === null) {
                this.previousVehicle = this.currentVehicle;
                this.currentVehicle = null;
                this.previousSeat = this.currentSeat;
                this.currentSeat = -1;
                this.vehicleLeave(this.previousVehicle as alt.Vehicle, this.previousSeat);
                return;
            } else {
                this.previousVehicle = this.currentVehicle;
                this.currentVehicle = playerVehicle;
                for (let i = -1; i < game.getVehicleMaxNumberOfPassengers(this.currentVehicle.scriptID); i++) {
                    const pedAtSeat = game.getPedInVehicleSeat(this.currentVehicle.scriptID, i, 0);
                    if (pedAtSeat === localPlayer.scriptID) {
                        this.previousSeat = this.currentSeat;
                        this.currentSeat = i;
                        break;
                    }
                }
                this.vehicleEnter(this.currentVehicle, this.currentSeat);
                return;
            }
        } else if (playerVehicle !== null) {
            for (let i = -1; i < game.getVehicleMaxNumberOfPassengers(playerVehicle.scriptID); i++) {
                const pedAtSeat = game.getPedInVehicleSeat(playerVehicle.scriptID, i, 0);
                if (pedAtSeat === localPlayer.scriptID) {
                    this.previousSeat = this.currentSeat;
                    this.currentSeat = i;
                    this.seatChange(playerVehicle, this.currentSeat, this.previousSeat);
                    break;
                }
            }
        }

        if (!playerVehicle) return;
        if (!isDriver(playerVehicle, localPlayer)) return;
        drawText(`Vehicle mileage: ${playerVehicle.mileage.toFixed(2)}`, [0.2, 0.2], 4, [255, 255, 255, 255], 0.6, true, false);
        drawText(`Calculated dist: ${this.calculatedDist.toFixed(2)}`, [0.2, 0.25], 4, [255, 255, 255, 255], 0.6, true, false);
    }

    private vehicleLeave(previousVehicle: alt.Vehicle, previousSeat: number) {
        alt.log('On vehicle leave');
        for (let i = 0; i < this.vehicleLeaveEvents.length; i++) {
            this.vehicleLeaveEvents[i](previousVehicle, previousSeat);
        }
    }

    private vehicleEnter(enteredVehicle: alt.Vehicle, seat: number) {
        alt.log('On vehicle enter');
        // this.startMileageCounter(enteredVehicle);
        for (let i = 0; i < this.vehicleEnterEvents.length; i++) {
            this.vehicleEnterEvents[i](enteredVehicle, seat);
        }
    }

    private seatChange(vehicle: alt.Vehicle, newSeat: number, oldSeat: number) {
        alt.log(`Seat changed from ${oldSeat} to ${newSeat}`);
        for (let i = 0; i < this.vehicleSeatChangeEvent.length; i++) {
            this.vehicleSeatChangeEvent[i](vehicle, newSeat, oldSeat);
        }
    }

    private startMileageCounter(playerVehicle: alt.Vehicle) {
        if (!isDriver(playerVehicle, localPlayer)) {
            alt.logWarning('Player was not a driver');
            return;
        }
        this.vehicleLastPos = localPlayer.pos;
        const mileage = playerVehicle.getSyncedMeta("vehicleMileage");
        alt.log(`Vehicle mileage = ${mileage}`);
        playerVehicle.mileage = playerVehicle.getSyncedMeta("vehicleMileage");

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

    private stopMileageCounter() {
        alt.clearInterval(this.mileageInterval);
        alt.clearInterval(this.mileageUpdater);
        if (this.calculatedDist <= 0.1 || this.previousVehicle == null) return;
        alt.emitServer('Vehicle-AddMileage', this.previousVehicle, this.calculatedDist.toFixed(2));
        this.calculatedDist = 0;
    }
}

const playerVehicleController = new PlayerVehicleController();
export default playerVehicleController;