/// <reference path="../../../natives.d.ts" />
/// <reference path="../../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import vehicleDoorsComponent from 'src/Modules/Vehicle/Components/vehicleDoorsComponent.js';
import vehicleSpeedometer from 'src/Modules/Vehicle/Components/vehicleSpeedometer.js';
import VehicleComponent from 'src/Modules/Vehicle/Components/vehicleComponent.js';

let localPlayer = alt.getLocalPlayer();
class VehicleComponentsController {
    constructor() {
        this.components = [];
        this.tickInterval = alt.setInterval(this.onUpdate.bind(this), 0);
    }

    addComponent(component) {
        if (component instanceof VehicleComponent) {
            this.components.push(component);
        } else {
            alt.logError(`Couldn't add ${JSON.stringify(component)} to vehicleComponents as it's not an instance of VehicleComponent`);
        }
    }

    removeComponent(component) {
        if (component instanceof VehicleComponent) {
            let componentToRemove = this.components.indexOf(componentToRemove);
            if (component !== null) {
                this.components.slice(componentToRemove, 1);
            }
        } else {
            alt.logError(`Couldn't remove ${JSON.stringify(component)} from vehicleComponents as it's not an instance of VehicleComponent`);
        }
    }

    getComponent(componentType) {
        if (typeof componentType === 'string') {
            return this.components.find(c => c.componentName === componentType);
        } else {
            return this.components.find(c => c instanceof componentType);
        }
    }

    onUpdate() {
        for (let i = 0; i < this.components.length; i++) {
            const component = this.components[i];
            if (component.disabled) continue;
            if (localPlayer.vehicle === null) {
                component.onUpdateOutsideVehicle(localPlayer);
            } else {
                component.onUpdateInVehicle(localPlayer);
            }
        }
    }

    disableComponent(component) {
        if (component instanceof VehicleComponent) {
            alt.log(`Disabling component`);
            component.disabled = true;
        }
    }

    enableComponent(component) {
        if (component instanceof VehicleComponent) {
            component.disabled = false;
        }
    }
}

const vehicleComponentsController = new VehicleComponentsController();
vehicleComponentsController.addComponent(vehicleSpeedometer);
vehicleComponentsController.addComponent(vehicleDoorsComponent);

export default vehicleComponentsController;