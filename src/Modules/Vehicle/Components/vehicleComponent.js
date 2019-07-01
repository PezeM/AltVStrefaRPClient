/// <reference path="../../../../natives.d.ts" />
/// <reference path="../../../../alt.d.ts" />

import * as alt from 'alt';

export default class VehicleComponent {
    constructor() {
        this.componentName = 'Base component';
        this.disabled = false;
    }

    onUpdateInVehicle(localPlayer) {
        alt.log('On update in vehicle');
    }

    onUpdateOutsideVehicle(localPlayer) {
        alt.log('On update outside vehilce');
    }
}