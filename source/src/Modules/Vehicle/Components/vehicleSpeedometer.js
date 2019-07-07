import * as game from 'natives';
import { drawText } from 'source/src/Helpers/uiHelper';
import { isDriver } from 'source/src/Helpers/playerHelpers';
import VehicleComponent from 'source/src/Modules/Vehicle/Components/vehicleComponent.js';

const MULTIPLY_SPEED_BY = 3.6;
class VehicleSpeedometer extends VehicleComponent {
    constructor() {
        super();
        this.componentName = 'Vehicle speedometer component';
        this.disabled = false;
    }

    onUpdateInVehicle(localPlayer) {
        this.displaySpeed(localPlayer);

        if (game.isRadarHidden()) {
            game.displayRadar(true);
            game.displayHud(true);
        }
    }

    onUpdateOutsideVehicle(localPlayer) {
        if (!game.isRadarHidden()) {
            game.displayRadar(false);
            game.displayHud(false);
        }
    }

    displaySpeed(localPlayer) {
        if (!this.canDisplaySpeedometer(localPlayer.vehicle)) return;

        if (isDriver(localPlayer.vehicle, localPlayer)) { // Speed only for driver
            drawText(`KM/H`, [0.9, 0.83], 4, [255, 255, 255, 255], 0.6, true, false);
            drawText(`~r~${(localPlayer.vehicle.speed * MULTIPLY_SPEED_BY).toFixed(0)}`, [0.9, 0.86], 4, [255, 255, 255, 255], 0.6, true, false);
        }
    }

    canDisplaySpeedometer(vehicle) {
        let vehicleClass = game.getVehicleClass(vehicle.scriptID);
        if (vehicleClass === 8 || vehicleClass === 13) return false; // No speedometer on motorcycles/bikes
        else return true;
    }
}

const vehicleSpeedometer = new VehicleSpeedometer();
export default vehicleSpeedometer;