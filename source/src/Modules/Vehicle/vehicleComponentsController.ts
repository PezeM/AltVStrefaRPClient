import * as alt from "alt";
import vehicleDoorsComponent from "src/Modules/Vehicle/Components/vehicleDoorsComponent";
import vehicleSpeedometer from "src/Modules/Vehicle/Components/vehicleSpeedometer";
import VehicleComponent from "src/Modules/Vehicle/Components/vehicleComponent";
import vehicleSeatbeltComponent from "src/Modules/Vehicle/Components/vehicleSeatbeltComponent";
import vehicleEngineToggleComponent from "src/Modules/Vehicle/Components/vehicleEngineToggleComponent";
import vehicleInAirControlsComponent from "src/Modules/Vehicle/Components/vehicleInAirControlsComponent";
import { VehicleComponentTypes } from "source/src/Constans/vehicleComponentTypes";

const localPlayer = alt.Player.local;
class VehicleComponentsController {
  components: VehicleComponent[];
  tickInterval: number;
  constructor() {
    this.components = [];
    this.tickInterval = alt.setInterval(this.onUpdate.bind(this), 0);
  }

  addComponent(component: VehicleComponent) {
    if (component instanceof VehicleComponent) {
      this.components.push(component);
    } else {
      alt.logError(
        `Couldn't add ${JSON.stringify(
          component
        )} to vehicleComponents as it's not an instance of VehicleComponent`
      );
    }
  }

  removeComponent(component: VehicleComponent) {
    if (component instanceof VehicleComponent) {
      this.components.filter(c => c !== component);
    } else {
      alt.logError(
        `Couldn't remove ${JSON.stringify(
          component
        )} from vehicleComponents as it's not an instance of VehicleComponent`
      );
    }
  }

  getComponent(componentType: VehicleComponentTypes) {
    return this.components.find(c => c.getComponentType() === componentType);
  }

  onUpdate() {
    const isPlayerInVehicle = localPlayer.vehicle;
    for (let i = 0; i < this.components.length; i++) {
      const component = this.components[i];
      if (component.isDisabled()) continue;
      if (!isPlayerInVehicle) {
        component.onUpdateOutsideVehicle(localPlayer);
      } else {
        component.onUpdateInVehicle(localPlayer);
      }
    }
  }

  disableComponent(component: VehicleComponent) {
    if (component instanceof VehicleComponent) {
      alt.log(`Disabling component`);
      component.setStatus(true);
    }
  }

  enableComponent(component: VehicleComponent) {
    if (component instanceof VehicleComponent) {
      component.setStatus(false);
    }
  }
}

const vehicleComponentsController = new VehicleComponentsController();
vehicleComponentsController.addComponent(vehicleSpeedometer);
vehicleComponentsController.addComponent(vehicleDoorsComponent);
// vehicleComponentsController.addComponent(vehicleSeatbeltComponent);
vehicleComponentsController.addComponent(vehicleEngineToggleComponent);
// vehicleComponentsController.addComponent(vehicleInAirControlsComponent);

export default vehicleComponentsController;
