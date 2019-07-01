/// <reference path="../../../../natives.d.ts" />
/// <reference path="../../../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import { drawText } from 'src/Helpers/uiHelper.js';
import { isDriver } from 'src/Helpers/playerHelpers.js';
import VehicleComponent from 'src/Modules/Vehicle/Components/vehicleComponent.js';

const MULTIPLY_SPEED_BY = 3.6;
class VehicleSpeedometer extends VehicleComponent {
    constructor() {
        super();
        this.componentName = 'Vehicle speedometer component';
        this.disabled = false;
    }

    onUpdate(localPlayer) {
        if (localPlayer.vehicle == null) {
            if (!game.isRadarHidden()) {
                game.displayRadar(false);
                game.displayHud(false);
            }
        } else {
            if (game.isRadarHidden()) {
                game.displayRadar(true);
                game.displayHud(true);
            }

            this.displaySpeed(localPlayer);
        }
    }

    displaySpeed(localPlayer) {
        if (isDriver(localPlayer.vehicle, localPlayer)) { // Speed only for driver
            drawText(`KM/H`, [0.9, 0.83], 4, [255, 255, 255, 255], 0.6, true, false);
            drawText(`~r~${(localPlayer.vehicle.speed * MULTIPLY_SPEED_BY).toFixed(0)}`, [0.9, 0.86], 4, [255, 255, 255, 255], 0.6, true, false);
        }
    }
}

const vehicleSpeedometer = new VehicleSpeedometer();
export default vehicleSpeedometer;