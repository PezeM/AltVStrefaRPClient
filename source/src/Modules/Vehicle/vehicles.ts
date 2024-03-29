import * as alt from "alt";
import * as game from "natives";
import { getClosestVehicle } from "source/src/Helpers/collectionHelper";
import math from "source/src/Helpers/maths";
import "./vehiclesManualTransmission";
import "./playerVehicleController";
// import './vehicleMileage';

const localPlayer = alt.Player.local;

alt.onServer("putIntoVehicle", () => {
  alt.setTimeout(() => {
    const vehicle = getClosestVehicle(localPlayer.pos, 5);
    if (vehicle == null) return;
    game.setPedIntoVehicle(localPlayer.scriptID, vehicle.scriptID, -1);
  }, 250);
});

alt.onServer("toggleLockState", (vehicle: alt.Vehicle) => {
  const startTime = Date.now();
  if (math.distance(localPlayer.pos, vehicle.pos) > 20) return;
  const lockStatus = game.getVehicleDoorLockStatus(vehicle.scriptID); // 0 and 1 means unlocked, 2,4 means locked
  alt.log(`Lock state = ${lockStatus}`);
  switch (lockStatus) {
    case 0:
    case 1:
      // Lock
      if (vehicle.lightFading != null) {
        alt.clearInterval(vehicle.lightFading);
        vehicle.lightFading = null;
      }
      game.setVehicleInteriorlight(vehicle.scriptID, false);
      game.setVehicleLights(vehicle.scriptID, 2);
      game.setVehicleLightMultiplier(vehicle.scriptID, 1.0);
      vehicle.lightFadingCount = 300;
      vehicle.lightFading = alt.setInterval(() => {
        if (vehicle.lightFadingCount > 0) {
          vehicle.lightFadingCount--;

          if (vehicle.lightFadingCount > 100) {
            game.setVehicleLightMultiplier(
              vehicle.scriptID,
              (vehicle.lightFadingCount - 100) / 300
            );
          } else game.setVehicleLights(vehicle.scriptID, 0);
        }
      }, 10);
    case 2:
    case 4:
      // Unlock
      if (vehicle.lightFading != null) {
        alt.clearInterval(vehicle.lightFading);
        vehicle.lightFading = null;
      }

      game.setVehicleInteriorlight(vehicle.scriptID, true);
      game.setVehicleLights(vehicle.scriptID, 2);
      game.setVehicleLightMultiplier(vehicle.scriptID, 0);
      vehicle.lightFadingCount = 0;

      vehicle.lightFading = alt.setInterval(() => {
        if (vehicle.lightFadingCount < 300) {
          vehicle.lightFadingCount++;

          if (vehicle.lightFadingCount > 100)
            game.setVehicleLightMultiplier(
              vehicle.scriptID,
              (vehicle.lightFadingCount - 99) / 300
            );
        }
      }, 10);
      break;
  }

  if (typeof vehicle.lockTimer !== "undefined") {
    alt.clearTimeout(vehicle.lockTimer);
  }

  vehicle.lockTimer = alt.setTimeout(() => {
    game.setVehicleInteriorlight(vehicle.scriptID, false);
    game.setVehicleLights(vehicle.scriptID, 0);
    alt.log(`Some timeout inside toggleLockState`);
    alt.clearInterval(vehicle.lightFading);
    vehicle.lightFading = null;
  }, 7000);

  alt.log(`Executed toggleLockState in ${Date.now() - startTime} ms.`);
  return true;
});

export function toggleLockState() {
  alt.log(`Toggle lock state`);
  const closestVehicle = getClosestVehicle(localPlayer.pos, 15);
  if (closestVehicle == null) return;
  alt.emitServer("ToggleLockState", closestVehicle);
  return true;
}

// alt.onServer('toggleTrunkState', (state) => {
//     alt.log(`Toggle trunk state with state ${state}`);
//     let vehicle = getClosestVehicle(localPlayer.pos, 6);
//     if (vehicle == null) return;
//     let trunkIndex = game.getEntityBoneIndexByName(vehicle, "boot");
//     if (trunkIndex == -1) return;

//     let trunkPosition = game.getWorldPositionOfEntityBone(vehicle, trunkIndex);
//     let vehiclePosition = game.getEntityCoords(vehicle, true);
//     let distance = game.getDistanceBetweenCoords(trunkPosition.x, trunkPosition.y, trunkPosition.z,
//         vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

//     let bootPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, -distance - 1, 0);

//     if (game.getDistanceBetweenCoords(localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z, bootPosition.x, bootPosition.y, bootPosition.z, true) > 2.5) return;

//     alt.nextTick(() => {
//         switch (state) {
//             case 1:
//                 game.setVehicleDoorOpen(vehicle, 5, false, false);
//                 // game.taskOpenVehicleDoor(localPlayer.scriptID, vehicle, 0, 5, 1000);
//                 game.playVehicleDoorOpenSound(vehicle, 0);
//                 alt.log('Opened dooor index 5');
//                 openedTrunks.push(vehicle);
//                 break;
//             case 0:
//                 game.setVehicleDoorShut(vehicle, 5, false);
//                 game.playVehicleDoorCloseSound(vehicle, 1);
//                 alt.log('Closed door index 5');
//                 openedTrunks.splice(openedTrunks.indexOf(vehicle), 1);
//                 break;
//         }

//         alt.log(`Current opendTrunks array: ${JSON.stringify(openedTrunks)}`);
//     });
// });

// alt.onServer('toggleHoodState', (state) => {
//     alt.log(`Toggle hood state with state ${state}`);
//     let coords = game.getEntityCoords(localPlayer.scriptID, true);
//     var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 6, 0, 71);
//     if (vehicle === 0) return;
//     let trunkIndex = game.getEntityBoneIndexByName(vehicle, "bonnet");
//     if (trunkIndex === -1) return;

//     let hoodPosition = game.getWorldPositionOfEntityBone(vehicle, trunkIndex);
//     let vehiclePosition = game.getEntityCoords(vehicle, true);
//     let hoodDistance = game.getDistanceBetweenCoords(hoodPosition.x, hoodPosition.y, hoodPosition.z,
//         vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

//     let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, hoodDistance + 0.2, 0);

//     if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, frontPosition.x, frontPosition.y, frontPosition.z, true) > 2.5) return;

//     alt.nextTick(() => {
//         switch (state) {
//             case 1:
//                 game.setVehicleDoorOpen(vehicle, 4, false, false);
//                 game.playVehicleDoorOpenSound(vehicle, 0);
//                 alt.log('Opened dooor index 4');
//                 openedHoods.push(vehicle);
//                 break;
//             case 0:
//                 game.setVehicleDoorShut(vehicle, 4, false);
//                 game.playVehicleDoorCloseSound(vehicle, 1);
//                 alt.log('Closed door index 4');
//                 openedHoods.splice(openedHoods.indexOf(vehicle), 1);
//                 break;
//         }
//         alt.log(`Current openedHoods array: ${JSON.stringify(openedHoods)}`);
//     });
// });

export function toggleTrunkOrHoodState() {
  const startTime = Date.now();
  alt.log(`Toggle trunk or hood state`);
  const coords = game.getEntityCoords(localPlayer.scriptID, true);
  const vehicle = game.getClosestVehicle(
    coords.x,
    coords.y,
    coords.z,
    6,
    0,
    71
  );
  alt.log(`Closest vehicle = ${JSON.stringify(vehicle)}`);
  if (vehicle === 0) return;

  const doorLockStatus = game.getVehicleDoorLockStatus(vehicle);
  if (doorLockStatus === 2) return false; // Vehicle was closed

  const trunkIndex = game.getEntityBoneIndexByName(vehicle, "boot");
  const hoodIndex = game.getEntityBoneIndexByName(vehicle, "bonnet");

  alt.log(`Found trunk index: ${trunkIndex}`);
  alt.log(`Found hood index: ${hoodIndex}`);

  if (trunkIndex === -1 && hoodIndex === -1) return false;

  const trunkPosition = game.getWorldPositionOfEntityBone(vehicle, trunkIndex);
  const hoodPosition = game.getWorldPositionOfEntityBone(vehicle, hoodIndex);
  const vehiclePosition = game.getEntityCoords(vehicle, true);
  const trunkDistance = game.getDistanceBetweenCoords(
    trunkPosition.x,
    trunkPosition.y,
    trunkPosition.z,
    vehiclePosition.x,
    vehiclePosition.y,
    vehiclePosition.z,
    false
  );
  const hoodDistance = game.getDistanceBetweenCoords(
    hoodPosition.x,
    hoodPosition.y,
    hoodPosition.z,
    vehiclePosition.x,
    vehiclePosition.y,
    vehiclePosition.z,
    false
  );

  const bootPosition = game.getOffsetFromEntityInWorldCoords(
    vehicle,
    0,
    -trunkDistance - 1,
    0
  );
  const frontPosition = game.getOffsetFromEntityInWorldCoords(
    vehicle,
    0,
    hoodDistance + 0.2,
    0
  );

  if (
    game.getDistanceBetweenCoords(
      coords.x,
      coords.y,
      coords.z,
      bootPosition.x,
      bootPosition.y,
      bootPosition.z,
      true
    ) <
    game.getDistanceBetweenCoords(
      coords.x,
      coords.y,
      coords.z,
      frontPosition.x,
      frontPosition.y,
      frontPosition.z,
      true
    )
  ) {
    alt.log("Trunk was closer");
    if (
      game.getDistanceBetweenCoords(
        coords.x,
        coords.y,
        coords.z,
        bootPosition.x,
        bootPosition.y,
        bootPosition.z,
        true
      ) > 2.5
    )
      return false;
    // Trunk
    alt.emitServer("ToggleTrunkState");
  } else {
    alt.log("Hood was closer");
    if (
      game.getDistanceBetweenCoords(
        coords.x,
        coords.y,
        coords.z,
        frontPosition.x,
        frontPosition.y,
        frontPosition.z,
        true
      ) > 2.5
    )
      return false;
    // Hood
    alt.emitServer("ToggleHoodState");
  }
  alt.log(`Toggled trunk or hood state in ${Date.now() - startTime}ms`);
}
