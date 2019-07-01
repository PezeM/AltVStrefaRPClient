/// <reference path="../../../../natives.d.ts" />
/// <reference path="../../../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import VehicleComponent from 'src/Modules/Vehicle/Components/vehicleComponent.js';

class VehicleEngineToggleComponent extends VehicleComponent {
    constructor() {
        super();
        this.componentName = 'Vehicle engine toggle component';
        this.disabled = false;

        alt.onServer('toggleVehicleEngine', this.onToggleVehicleEngine.bind(this));
    }

    onUpdateInVehicle(localPlayer) { }

    onUpdateOutsideVehicle(localPlayer) { }

    toggleEngine(localPlayer) {
        if (localPlayer.vehicle == null) return;
        if (game.getEntitySpeed(localPlayer.vehicle) > 5) {
            alt.log(`Can't toggle engine while driving`);
            return;
        }
        alt.emitServer('ToggleVehicleEngine', localPlayer.vehicle);
    }

    onToggleVehicleEngine() {

    }
}

const VehicleEngineToggleComponent = new VehicleEngineToggleComponent();
export default VehicleEngineToggleComponent;