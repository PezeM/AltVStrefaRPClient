import * as alt from 'alt';
import * as game from 'natives';
import { VehicleLeaveEventCallback, VehicleEnterEventCallback, VehicleChangedSeatEventCallback } from 'source/src/Constans/types';
import { VehicleSeat } from 'source/src/Constans/enums';

const localPlayer = alt.Player.local;
class PlayerVehicleController {
    previousVehicle: alt.Vehicle | null = null;
    currentVehicle: alt.Vehicle | null = null;
    private currentSeat: VehicleSeat = VehicleSeat.None;
    private previousSeat: number = -2;
    private tickInterval: number = 0;
    private vehicleEnterEvents: VehicleEnterEventCallback[] = [];
    private vehicleLeaveEvents: VehicleLeaveEventCallback[] = [];
    private vehicleSeatChangeEvent: VehicleChangedSeatEventCallback[] = [];

    constructor() {
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

    onVehicleSeatChanged(func: VehicleChangedSeatEventCallback) {
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
                this.currentSeat = VehicleSeat.None;
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
                    if (this.currentSeat === pedAtSeat) break;
                    this.previousSeat = this.currentSeat;
                    this.currentSeat = i;
                    this.seatChange(playerVehicle, this.currentSeat, this.previousSeat);
                    break;
                }
            }
        }
    }

    private vehicleLeave(previousVehicle: alt.Vehicle, previousSeat: VehicleSeat) {
        alt.log('On vehicle leave');
        for (let i = 0; i < this.vehicleLeaveEvents.length; i++) {
            this.vehicleLeaveEvents[i](previousVehicle, previousSeat);
        }
    }

    private vehicleEnter(enteredVehicle: alt.Vehicle, seat: VehicleSeat) {
        alt.log('On vehicle enter');
        // this.startMileageCounter(enteredVehicle);
        for (let i = 0; i < this.vehicleEnterEvents.length; i++) {
            this.vehicleEnterEvents[i](enteredVehicle, seat);
        }
    }

    private seatChange(vehicle: alt.Vehicle, newSeat: VehicleSeat, oldSeat: VehicleSeat) {
        alt.log(`Seat changed from ${oldSeat} to ${newSeat}`);
        for (let i = 0; i < this.vehicleSeatChangeEvent.length; i++) {
            this.vehicleSeatChangeEvent[i](vehicle, newSeat, oldSeat);
        }
    }
}

const playerVehicleController = new PlayerVehicleController();
export default playerVehicleController;