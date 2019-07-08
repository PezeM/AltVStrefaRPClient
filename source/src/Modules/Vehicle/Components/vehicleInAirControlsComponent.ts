
import * as game from 'natives';
import * as alt from 'alt';
import VehicleComponent from 'src/Modules/Vehicle/Components/vehicleComponent';
import { VehicleComponentTypes } from 'source/src/Constans/vehicleComponentTypes';

class VehicleInAirControlsComponent extends VehicleComponent {
    constructor(protected componentType: VehicleComponentTypes) {
        super(componentType);
        this.disabled = false;
    }

    onUpdateInVehicle(localPlayer: alt.Player) {
        const roll = game.getEntityRoll((localPlayer.vehicle as alt.Vehicle).scriptID);
        if (this.canVehicleRollOver(localPlayer.vehicle as alt.Vehicle)) return;
        if (roll > 90.9 || roll < (-90.9)) {
            game.disableControlAction(0, 59, true);
        }
    }

    canVehicleRollOver(vehicle: alt.Vehicle) {
        const vehicleClass = game.getVehicleClass(vehicle.scriptID);
        return vehicleClass === 8 || vehicleClass === 13;
    }
}

const vehicleInAirControlsComponent = new VehicleInAirControlsComponent(VehicleComponentTypes.InAirControlsComponent);
export default vehicleInAirControlsComponent;