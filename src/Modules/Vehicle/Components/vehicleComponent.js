/// <reference path="../../../../natives.d.ts" />
/// <reference path="../../../../alt.d.ts" />

import * as alt from 'alt';

export default class VehicleComponent {
    constructor() {
        this.componentName = 'Base component';
        this.disabled = false;
    }

    onUpdate(localPlayer) {
        alt.log('In vehicle component');
    }
}