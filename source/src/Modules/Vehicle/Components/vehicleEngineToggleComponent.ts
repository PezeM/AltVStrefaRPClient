import * as alt from 'alt';
import * as game from 'natives';
import VehicleComponent from 'src/Modules/Vehicle/Components/vehicleComponent.js';
import { VehicleComponentTypes } from 'source/src/Constans/vehicleComponentTypes';

class VehicleEngineToggleComponent extends VehicleComponent {
    constructor(protected componentType: VehicleComponentTypes) {
        super(componentType);
        this.disabled = false;

        alt.onServer('toggleVehicleEngine', this.onToggleVehicleEngine.bind(this));
    }

    toggleEngine(localPlayer: alt.Player) {
        if (localPlayer.vehicle == null) return;
        if (game.getEntitySpeed(localPlayer.vehicle.scriptID) > 5) {
            alt.log(`Can't toggle engine while driving`);
            return;
        }
        alt.emitServer('ToggleVehicleEngine', localPlayer.vehicle);
    }

    // tslint:disable-next-line: no-empty
    onToggleVehicleEngine() { }
}

const vehicleEngineToggleComponent = new VehicleEngineToggleComponent(VehicleComponentTypes.EngineToggleComponent);
export default vehicleEngineToggleComponent;