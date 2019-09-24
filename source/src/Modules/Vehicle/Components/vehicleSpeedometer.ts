import * as game from 'natives';
import * as alt from 'alt';
import { drawText } from 'source/src/Helpers/uiHelper';
import { isDriver } from 'source/src/Helpers/playerHelpers';
import VehicleComponent from 'source/src/Modules/Vehicle/Components/vehicleComponent';
import { VehicleComponentTypes } from 'source/src/Constans/vehicleComponentTypes';
import { isRadarVisible, showRadar, hideRadar } from 'source/src/Modules/Core/States/radarState';

const MULTIPLY_SPEED_BY = 3.6;
const player = alt.Player.local;

class VehicleSpeedometer extends VehicleComponent {
    radarCheckInterval: number;
    constructor(protected componentType: VehicleComponentTypes) {
        super(componentType);
        this.disabled = false;

        this.radarCheckInterval = alt.setInterval(this.onRadarIntervalCheck.bind(this), 300);
    }

    onRadarIntervalCheck() {
        if (player.vehicle) {
            if (!isRadarVisible()) {
                showRadar();
            }
        } else {
            if (isRadarVisible()) {
                hideRadar();
            }
        }
    }

    onUpdateInVehicle(localPlayer: alt.Player) {
        this.displaySpeed(localPlayer);
    }

    displaySpeed(localPlayer: alt.Player) {
        if (!this.canDisplaySpeedometer(localPlayer.vehicle as alt.Vehicle)) return;

        if (isDriver(localPlayer.vehicle as alt.Vehicle, localPlayer)) { // Speed only for driver
            drawText(`KM/H`, [0.9, 0.83], 4, [255, 255, 255, 255], 0.6, true, false);
            drawText(`~r~${((localPlayer.vehicle as alt.Vehicle).speed * MULTIPLY_SPEED_BY).toFixed(0)}`,
                [0.9, 0.86], 4, [255, 255, 255, 255], 0.6, true, false);
        }
    }

    canDisplaySpeedometer(vehicle: alt.Vehicle) {
        const vehicleClass = game.getVehicleClass(vehicle.scriptID);
        if (vehicleClass === 8 || vehicleClass === 13) return false; // No speedometer on motorcycles/bikes
        else return true;
    }
}

const vehicleSpeedometer = new VehicleSpeedometer(VehicleComponentTypes.Speedometer);
export default vehicleSpeedometer;