import * as alt from 'alt';
import { VehicleComponentTypes } from 'source/src/Constans/vehicleComponentTypes';

export default abstract class VehicleComponent {
    protected disabled: boolean;
    constructor(protected componentType: VehicleComponentTypes) {
        this.disabled = false;
    }

    // tslint:disable-next-line: no-empty
    onUpdateInVehicle(localPlayer: alt.Player) { }

    // tslint:disable-next-line: no-empty
    onUpdateOutsideVehicle(localPlayer: alt.Player) { }

    getComponentType() {
        return this.componentType;
    }

    isDisabled() {
        return this.disabled;
    }

    setStatus(disabled: boolean) {
        this.disabled = disabled;
    }
}