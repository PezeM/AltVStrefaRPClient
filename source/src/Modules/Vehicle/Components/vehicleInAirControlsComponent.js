/// <reference path="../../../../natives.d.ts" />
/// <reference path="../../../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import VehicleComponent from 'src/Modules/Vehicle/Components/vehicleComponent.js';

class VehicleInAirControlsComponent extends VehicleComponent {
    constructor() {
        super();
        this.componentName = 'Vehicle in air controls component';
        this.disabled = false;
    }

    onUpdateInVehicle(localPlayer) {
        let roll = game.getEntityRoll(localPlayer.vehicle.scriptID);
        if (this.canVehicleRollOver(localPlayer.vehicle)) return;
        if (roll > 90.9 || roll < (-90.9)) {
            game.disableControlAction(0, 59, true);
        }
    }

    onUpdateOutsideVehicle(localPlayer) { }

    canVehicleRollOver(vehicle) {
        let vehicleClass = game.getVehicleClass(vehicle.scriptID);
        return vehicleClass == 8 || vehicleClass == 13;
    }
}

const vehicleInAirControlsComponent = new VehicleInAirControlsComponent();
export default vehicleInAirControlsComponent;