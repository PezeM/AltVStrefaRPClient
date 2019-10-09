import * as alt from "alt";
import * as native from "natives";
import { drawText } from "source/src/Helpers/uiHelper";

const GEAR_RATIOS = [
  -3.223,
  3.166,
  1.882,
  1.296,
  0.972,
  0.738
];

const localPlayer = alt.Player.local;
class ManualTransimissionController {
  vAcceleration: number;
  vTheoreticalMaxSpeed: number;
  vNumberOfGears: number;
  lastVehicle: null | alt.Vehicle;
  private renderTick: number;

  constructor() {
    this.renderTick = alt.setInterval(this.render.bind(this), 0);
    this.lastVehicle = null;
  }

  methods() {
    alt.log('Co');
  }

  cos() {
    alt.log('eldo');
  }

  render() {
    if (!localPlayer.vehicle) return;
    if (this.lastVehicle == null || this.lastVehicle.scriptID !== localPlayer.vehicle.scriptID) {
      this.initializeNewVehicle(localPlayer.vehicle);
    }

    drawText(`Gear ${localPlayer.vehicle.gear}`, [0.8, 0.8], 4, [255, 255, 255, 255], 0.5, true, false);
    drawText(`RPM ${localPlayer.vehicle.rpm}`, [0.8, 0.75], 4, [255, 255, 255, 255], 0.5, true, false);
    drawText(`Acceleration ${this.vAcceleration}`, [0.8, 0.70], 4, [255, 255, 255, 255], 0.5, true, false);
    drawText(`Max speed ${this.vTheoreticalMaxSpeed}`, [0.8, 0.68], 4, [255, 255, 255, 255], 0.5, true, false);
    drawText(`Gears ${this.vNumberOfGears}`, [0.8, 0.66], 4, [255, 255, 255, 255], 0.5, true, false);
  }

  initializeNewVehicle(vehicle: alt.Vehicle) {
    this.lastVehicle = vehicle;
    const handlingData = alt.HandlingData.getForModel(vehicle.model);
    if (handlingData == null) return;

    this.vAcceleration = handlingData.initialDriveForce;
    this.vTheoreticalMaxSpeed = handlingData.initialDriveMaxFlatVel;
    this.vNumberOfGears = handlingData.initialDriveGears;
  }

}

const manualTransmissionController = new ManualTransimissionController();
export default manualTransmissionController;
