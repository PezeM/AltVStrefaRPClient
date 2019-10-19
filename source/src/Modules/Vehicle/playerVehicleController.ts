import * as alt from 'alt';
import * as game from 'natives';
import { VehicleSeat } from 'source/src/Constans/enums';
import { TypedEvent } from '../Event/typedEvent';

export interface VehicleLeaveEventArgs {
    previousVehicle: alt.Vehicle;
    previousSeat: VehicleSeat;
}

export interface VehicleEnterEventArgs {
    vehicle: alt.Vehicle;
    seat: VehicleSeat;
}

export interface VehicleSeatChangeEventArgs {
    vehicle: alt.Vehicle,
    newSeat: VehicleSeat;
    oldSeat: VehicleSeat;
}

const localPlayer = alt.Player.local;

class PlayerVehicleController {
    previousVehicle: alt.Vehicle | null = null;
    currentVehicle: alt.Vehicle | null = null;
    currentSeat: VehicleSeat = VehicleSeat.None;
    previousSeat: VehicleSeat = VehicleSeat.None;
    vehicleLeaveEvent: TypedEvent<VehicleLeaveEventArgs> = new TypedEvent<VehicleLeaveEventArgs>();
    vehicleEnterEvent: TypedEvent<VehicleEnterEventArgs> = new TypedEvent<VehicleEnterEventArgs>();
    vehicleSeatChangeEvent: TypedEvent<VehicleSeatChangeEventArgs> = new TypedEvent<VehicleSeatChangeEventArgs>();
    private tickInterval: number = 0;

    constructor() {
        this.tickInterval = alt.setInterval(this.tick.bind(this), 0);
    }

    private tick() {
        const playerVehicle = localPlayer.vehicle;
        if (playerVehicle !== this.currentVehicle) {
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
                for (let i = -1; i < game.getVehicleMaxNumberOfPassengers(playerVehicle.scriptID); i++) {
                    const pedAtSeat = game.getPedInVehicleSeat(playerVehicle.scriptID, i, 0);
                    if (pedAtSeat === localPlayer.scriptID) {
                        this.previousSeat = this.currentSeat;
                        this.currentSeat = i;
                        break;
                    }
                }
                this.vehicleEnter(playerVehicle, this.currentSeat);
                return;
            }
        } else if (playerVehicle !== null) {
            for (let i = -1; i < game.getVehicleMaxNumberOfPassengers(playerVehicle.scriptID); i++) {
                const pedAtSeat = game.getPedInVehicleSeat(playerVehicle.scriptID, i, 0);
                if (pedAtSeat === localPlayer.scriptID) {
                    if (this.currentSeat === i) break;
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
        this.vehicleLeaveEvent.emit({ previousVehicle, previousSeat });
    }

    private vehicleEnter(enteredVehicle: alt.Vehicle, seat: VehicleSeat) {
        alt.log('On vehicle enter');
        this.vehicleEnterEvent.emit({ vehicle: enteredVehicle, seat });
    }

    private seatChange(vehicle: alt.Vehicle, newSeat: VehicleSeat, oldSeat: VehicleSeat) {
        alt.log(`Seat changed from ${oldSeat} to ${newSeat}`);
        this.vehicleSeatChangeEvent.emit({ vehicle, newSeat, oldSeat });
    }
}

const playerVehicleController = new PlayerVehicleController();
export default playerVehicleController;