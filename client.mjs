/// <reference path="altv.d.ts" />
/// <reference path="alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import chat from 'chat';
import * as ui from 'src/ui.mjs';
import * as menus from 'src/menus.mjs';
import * as loginModule from 'src/Login/login.js';
import * as noclipModule from 'src/Admin/noclip.js';
import * as adminTeleports from 'src/Admin/adminTeleports.js';
import * as animationBrowser from 'src/Admin/animationBrowser.js';
import * as sitting from 'src/Environment/sitting.js';
import { drawText, draw3DText } from 'src/Helpers/uiHelper.js';
import { isDriver } from 'src/Helpers/playerHelpers.js';
import menusManager from 'src/Modules/Ui/menusManager.js';

let localPlayer = alt.getLocalPlayer();
let frame = 0, fps = 0, showFps = true, timeStart = Date.now();
let lastKeyPressedTime = new Date().getTime();
let openedTrunks = [];
let openedHoods = [];

const controlsIds = {
	H: 0x48,
	L: 0x4C,
	G: 0x47,
	Tilde: 0xC0,
	E: 0x45,
};

alt.on('update', () => {
	// DEV Constant running
	if (game.isPedSprinting(localPlayer.scriptID))
		game.restorePlayerStamina(localPlayer.scriptID, 100);

	// Showing fps
	if (typeof showFps !== 'undefined' && showFps) {
		frame++;

		let timeNow = Date.now() - timeStart;

		fps = Math.round(frame / (timeNow / 1000.0));
		drawText(fps.toString(), [0.01, 0.01], 4, [255, 255, 255, 128], 0.4, false, false);

		if (frame > 130) {
			frame = 0;
			timeStart = Date.now();
		}
	}

	if (localPlayer.vehicle == null) {
		var coords = game.getEntityCoords(localPlayer.scriptID, true);
		var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 8, 0, 71);
		if (vehicle != 0) {
			let hoodIndex = game.getEntityBoneIndexByName(vehicle, "bonnet");
			let trunkIndex = game.getEntityBoneIndexByName(vehicle, "boot");

			if (trunkIndex != 0) {
				let trunkPosition = game.getWorldPositionOfEntityBone(vehicle, trunkIndex);
				let hoodPosition = game.getWorldPositionOfEntityBone(vehicle, hoodIndex);

				let vehiclePosition = game.getEntityCoords(vehicle, true);
				let trunkDistance = game.getDistanceBetweenCoords(trunkPosition.x, trunkPosition.y, trunkPosition.z,
					vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);
				let hoodDistance = game.getDistanceBetweenCoords(hoodPosition.x, hoodPosition.y, hoodPosition.z,
					vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

				let bootPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, -trunkDistance - 1, 0);
				let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, hoodDistance + 1, 0);

				if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, bootPosition.x, bootPosition.y, bootPosition.z, true) < 2.3) {
					if (openedTrunks.includes(vehicle))
						draw3DText("Naciśnij [~b~E~w~] aby ~r~zamknąć~w~ bagażnik", [trunkPosition.x, trunkPosition.y, trunkPosition.z], 4, [255, 255, 255, 200], 0.45, true);
					else
						draw3DText("Naciśnij [~b~E~w~] aby ~g~otworzyć~w~ bagażnik", [trunkPosition.x, trunkPosition.y, trunkPosition.z], 4, [255, 255, 255, 200], 0.45, true);
				}

				if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, frontPosition.x, frontPosition.y, frontPosition.z, true) < 2.6) {
					if (openedHoods.includes(vehicle))
						draw3DText("Naciśnij [~b~E~w~] aby ~r~zamknąć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
					else
						draw3DText("Naciśnij [~b~E~w~] aby ~g~otworzyć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
				}
			} else {
				let vehiclePosition = game.getEntityCoords(vehicle, true);
				let hoodPosition = game.getWorldPositionOfEntityBone(vehicle, hoodIndex);
				let hoodDistance = game.getDistanceBetweenCoords(hoodPosition.x, hoodPosition.y, hoodPosition.z,
					vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

				let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, hoodDistance + 1, 0);
				if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, frontPosition.x, frontPosition.y, frontPosition.z, true) < 2.6) {
					if (openedHoods.includes(vehicle))
						draw3DText("Naciśnij [~b~E~w~] aby ~r~zamknąć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
					else
						draw3DText("Naciśnij [~b~E~w~] aby ~g~otworzyć~w~ maskę", [hoodPosition.x, hoodPosition.y, hoodPosition.z], 4, [255, 255, 255, 200], 0.45, true);
				}
			}
		}
	}
});

alt.on('keydown', (key) => {
	if (chat.isOpen() || menusManager.viewOpened) return;

	switch (key) {
		case controlsIds.H:
			if (localPlayer.vehicle == null || game.isEntityDead(localPlayer.scriptID) || new Date().getTime() - lastKeyPressedTime < 500) return;
			// toggleLightState();
			break;
		case controlsIds.E:
			if (localPlayer.vehicle != null || game.isEntityDead(localPlayer.scriptID) || new Date().getTime() - lastKeyPressedTime < 750) return;
			lastKeyPressedTime = new Date().getTime();
			if (toggleTrunkOrHoodState()) return;
			break;
		case controlsIds.L:
			if (game.isEntityDead(localPlayer.scriptID) || new Date().getTime() - lastKeyPressedTime < 750) return;
			lastKeyPressedTime = new Date().getTime();
			if (toggleLockState()) return;
			break;
	}
});

function toggleLightState() {
	const vehicle = localPlayer.vehicle;
	alt.log(`Player vehicle: ${JSON.stringify(vehicle)}`);
	if (!isDriver(vehicle, localPlayer)) return;
	let lights = game.getVehicleLightsState(vehicle.scriptID, true, true);
	alt.log('LIGHT: ' + JSON.stringify(lights));
}

alt.onServer('toggleLockState', (state) => {
	var startTime = Date.now();
	alt.log(`Toggle lock state: ${state} typeof ${typeof state}`);
	let coords = game.getEntityCoords(localPlayer.scriptID, true);
	var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 10, 0, 71);
	alt.log(`Closest vehicle = ${JSON.stringify(vehicle)}`);
	if (vehicle == 0) return false;

	let vehiclePosition = game.getEntityCoords(vehicle, true);
	if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, true) > 10) return false;


	switch (state) {
		case true:
			// Lock
			game.setVehicleInteriorlight(vehicle, false);
			game.setVehicleLightMultiplier(vehicle, 1.0);
			game.setVehicleLights(vehicle, 2);
			var lightFadingCount = 300;
			alt.setInterval(() => {
				if (lightFadingCount > 0) {
					lightFadingCount--;

					if (lightFadingCount > 100) {
						game.setVehicleLightMultiplier(vehicle, (lightFadingCount - 100) / 300);
					} else game.setVehicleLights(vehicle, 0);
				}
			}, 10);
			break;
		case false:
			// Unlock
			game.setVehicleInteriorlight(vehicle, true);
			game.setVehicleLightMultiplier(vehicle, 0.0);
			game.setVehicleLights(vehicle, 2);
			var lightFadingCount = 300;

			alt.setInterval(() => {
				if (lightFadingCount < 300) {
					lightFadingCount++;

					if (lightFadingCount > 100) game.setVehicleLightMultiplier(vehicle, (lightFadingCount - 99) / 300);
				}
			}, 10);
			break;
	}

	let time = 7000;
	alt.setTimeout(() => {
		game.setVehicleInteriorlight(vehicle, false);
		game.setVehicleLights(vehicle, 0);
	}, time);

	alt.log(`Executed toggleLockState in ${Date.now() - startTime} ms.`);
	return true;
});

function toggleLockState() {
	alt.log(`Toggle lock state`);
	let coords = game.getEntityCoords(localPlayer.scriptID, true);
	var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 10, 0, 71);
	alt.log(`Closest vehicle = ${JSON.stringify(vehicle)}`);
	if (vehicle == 0) return false;

	let vehiclePosition = game.getEntityCoords(vehicle, true);
	if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, true) > 10) return false;

	alt.emitServer("ToggleLockState");
	return true;
}

alt.onServer('toggleTrunkState', (state) => {
	alt.log(`Toggle trunk state with state ${state}`);
	let coords = game.getEntityCoords(localPlayer.scriptID, true);
	var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 6, 0, 71);
	if (vehicle == 0) return;
	let trunkIndex = game.getEntityBoneIndexByName(vehicle, "boot");
	if (trunkIndex == -1) return;

	let trunkPosition = game.getWorldPositionOfEntityBone(vehicle, trunkIndex);
	let vehiclePosition = game.getEntityCoords(vehicle, true);
	let distance = game.getDistanceBetweenCoords(trunkPosition.x, trunkPosition.y, trunkPosition.z,
		vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

	let bootPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, -distance - 1, 0);

	if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, bootPosition.x, bootPosition.y, bootPosition.z, true) > 2.5) return;

	alt.nextTick(() => {
		switch (state) {
			case 1:
				game.setVehicleDoorOpen(vehicle, 5, false, false);
				// game.taskOpenVehicleDoor(localPlayer.scriptID, vehicle, 0, 5, 1000);
				game.playVehicleDoorOpenSound(vehicle, 0);
				alt.log('Opened dooor index 5');
				openedTrunks.push(vehicle);
				break;
			case 0:
				game.setVehicleDoorShut(vehicle, 5, false);
				game.playVehicleDoorCloseSound(vehicle, 1);
				alt.log('Closed door index 5');
				openedTrunks.splice(openedTrunks.indexOf(vehicle), 1);
				break;
		}

		alt.log(`Current opendTrunks array: ${JSON.stringify(openedTrunks)}`);
	})
});

alt.onServer('toggleHoodState', (state) => {
	alt.log(`Toggle hood state with state ${state}`);
	let coords = game.getEntityCoords(localPlayer.scriptID, true);
	var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 6, 0, 71);
	if (vehicle == 0) return;
	let trunkIndex = game.getEntityBoneIndexByName(vehicle, "bonnet");
	if (trunkIndex == -1) return;

	let hoodPosition = game.getWorldPositionOfEntityBone(vehicle, trunkIndex);
	let vehiclePosition = game.getEntityCoords(vehicle, true);
	let hoodDistance = game.getDistanceBetweenCoords(hoodPosition.x, hoodPosition.y, hoodPosition.z,
		vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

	let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, hoodDistance + 0.2, 0);

	if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, frontPosition.x, frontPosition.y, frontPosition.z, true) > 2.5) return;

	alt.nextTick(() => {
		switch (state) {
			case 1:
				game.setVehicleDoorOpen(vehicle, 4, false, false);
				game.playVehicleDoorOpenSound(vehicle, 0);
				alt.log('Opened dooor index 4');
				openedHoods.push(vehicle);
				break;
			case 0:
				game.setVehicleDoorShut(vehicle, 4, false);
				game.playVehicleDoorCloseSound(vehicle, 1);
				alt.log('Closed door index 4');
				openedHoods.splice(openedHoods.indexOf(vehicle), 1);
				break;
		}
		alt.log(`Current openedHoods array: ${JSON.stringify(openedHoods)}`);
	});
});

function toggleTrunkOrHoodState() {
	var startTime = Date.now();
	alt.log(`Toggle trunk or hood state`);
	let coords = game.getEntityCoords(localPlayer.scriptID, true);
	var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 6, 0, 71);
	alt.log(`Closest vehicle = ${JSON.stringify(vehicle)}`);
	if (vehicle == 0) return;

	var doorLockStatus = game.getVehicleDoorLockStatus(vehicle);
	if (doorLockStatus == 2) return false; // Vehicle was closed

	let trunkIndex = game.getEntityBoneIndexByName(vehicle, "boot");
	let hoodIndex = game.getEntityBoneIndexByName(vehicle, "bonnet");

	alt.log(`Found trunk index: ${trunkIndex}`);
	alt.log(`Found hood index: ${hoodIndex}`);

	if (trunkIndex == -1 && hoodIndex == -1) return false;

	let trunkPosition = game.getWorldPositionOfEntityBone(vehicle, trunkIndex);
	let hoodPosition = game.getWorldPositionOfEntityBone(vehicle, hoodIndex);
	let vehiclePosition = game.getEntityCoords(vehicle, true);
	let trunkDistance = game.getDistanceBetweenCoords(trunkPosition.x, trunkPosition.y, trunkPosition.z,
		vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);
	let hoodDistance = game.getDistanceBetweenCoords(hoodPosition.x, hoodPosition.y, hoodPosition.z,
		vehiclePosition.x, vehiclePosition.y, vehiclePosition.z, false);

	let bootPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, -trunkDistance - 1, 0);
	let frontPosition = game.getOffsetFromEntityInWorldCoords(vehicle, 0, hoodDistance + 0.2, 0);

	if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, bootPosition.x, bootPosition.y, bootPosition.z, true)
		< game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, frontPosition.x, frontPosition.y, frontPosition.z, true)) {
		alt.log('Trunk was closer');
		if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, bootPosition.x, bootPosition.y, bootPosition.z, true) > 2.5) return false;
		// Trunk
		alt.emitServer('ToggleTrunkState');
	} else {
		alt.log('Hood was closer');
		if (game.getDistanceBetweenCoords(coords.x, coords.y, coords.z, frontPosition.x, frontPosition.y, frontPosition.z, true) > 2.5) return false;
		// Hood
		alt.emitServer('ToggleHoodState');
	}
	alt.log(`Toggled trunk or hood state in ${Date.now() - startTime}ms`);
}

alt.on('connectionComplete', (mapChanged) => {
	alt.log('All scripts compmletely loaded');
	if (mapChanged) {
		alt.log('Reloading map store');
		game.loadSpDlcMaps();
		alt.log('Map store reloaded');
	}
	alt.nextTick(() => {
		alt.setCamFrozen(true);
	});
});

alt.on('consoleCommand', (command, ...args) => {
	if (command == 'reloadMap') {
		alt.log('Reloading map store');
		game.loadSpDlcMaps();
		alt.log('Map store reloaded');
	}
})


game.requestIpl('chop_props');
game.requestIpl('FIBlobby');
game.removeIpl('FIBlobbyfake');
game.requestIpl('FBI_colPLUG');
game.requestIpl('FBI_repair');
game.requestIpl('v_tunnel_hole');
game.requestIpl('TrevorsMP');
game.requestIpl('TrevorsTrailer');
game.requestIpl('TrevorsTrailerTidy');
game.removeIpl('farm_burnt');
game.removeIpl('farm_burnt_lod');
game.removeIpl('farm_burnt_props');
game.removeIpl('farmint_cap');
game.removeIpl('farmint_cap_lod');
game.requestIpl('farm');
game.requestIpl('farmint');
game.requestIpl('farm_lod');
game.requestIpl('farm_props');
game.requestIpl('facelobby');
game.removeIpl('CS1_02_cf_offmission');
game.requestIpl('CS1_02_cf_onmission1');
game.requestIpl('CS1_02_cf_onmission2');
game.requestIpl('CS1_02_cf_onmission3');
game.requestIpl('CS1_02_cf_onmission4');
game.requestIpl('v_rockclub');
game.requestIpl('v_janitor');
game.removeIpl('hei_bi_hw1_13_door');
game.requestIpl('bkr_bi_hw1_13_int');
game.requestIpl('ufo');
game.requestIpl('ufo_lod');
game.requestIpl('ufo_eye');
game.removeIpl('v_carshowroom');
game.removeIpl('shutter_open');
game.removeIpl('shutter_closed');
game.removeIpl('shr_int');
game.requestIpl('csr_afterMission');
game.requestIpl('v_carshowroom');
game.requestIpl('shr_int');
game.requestIpl('shutter_closed');
game.requestIpl('smboat');
game.requestIpl('smboat_distantlights');
game.requestIpl('smboat_lod');
game.requestIpl('smboat_lodlights');
game.requestIpl('cargoship');
game.requestIpl('railing_start');
game.removeIpl('sp1_10_fake_interior');
game.removeIpl('sp1_10_fake_interior_lod');
game.requestIpl('sp1_10_real_interior');
game.requestIpl('sp1_10_real_interior_lod');
game.removeIpl('id2_14_during_door');
game.removeIpl('id2_14_during1');
game.removeIpl('id2_14_during2');
game.removeIpl('id2_14_on_fire');
game.removeIpl('id2_14_post_no_int');
game.removeIpl('id2_14_pre_no_int');
game.removeIpl('id2_14_during_door');
game.requestIpl('id2_14_during1');
game.removeIpl('Coroner_Int_off');
game.requestIpl('coronertrash');
game.requestIpl('Coroner_Int_on');
game.removeIpl('bh1_16_refurb');
game.removeIpl('jewel2fake');
game.removeIpl('bh1_16_doors_shut');
game.requestIpl('refit_unload');
game.requestIpl('post_hiest_unload');
game.requestIpl('Carwash_with_spinners');
game.requestIpl('KT_CarWash');
game.requestIpl('ferris_finale_Anim');
game.removeIpl('ch1_02_closed');
game.requestIpl('ch1_02_open');
game.requestIpl('AP1_04_TriAf01');
game.requestIpl('CS2_06_TriAf02');
game.requestIpl('CS4_04_TriAf03');
game.removeIpl('scafstartimap');
game.requestIpl('scafendimap');
game.removeIpl('DT1_05_HC_REMOVE');
game.requestIpl('DT1_05_HC_REQ');
game.requestIpl('DT1_05_REQUEST');
game.requestIpl('FINBANK');
game.removeIpl('DT1_03_Shutter');
game.removeIpl('DT1_03_Gr_Closed');
game.requestIpl('golfflags');
game.requestIpl('airfield');
game.requestIpl('v_garages');
game.requestIpl('v_foundry');
game.requestIpl('hei_yacht_heist');
game.requestIpl('hei_yacht_heist_Bar');
game.requestIpl('hei_yacht_heist_Bedrm');
game.requestIpl('hei_yacht_heist_Bridge');
game.requestIpl('hei_yacht_heist_DistantLights');
game.requestIpl('hei_yacht_heist_enginrm');
game.requestIpl('hei_yacht_heist_LODLights');
game.requestIpl('hei_yacht_heist_Lounge');
game.requestIpl('hei_carrier');
game.requestIpl('hei_Carrier_int1');
game.requestIpl('hei_Carrier_int2');
game.requestIpl('hei_Carrier_int3');
game.requestIpl('hei_Carrier_int4');
game.requestIpl('hei_Carrier_int5');
game.requestIpl('hei_Carrier_int6');
game.requestIpl('hei_carrier_LODLights');
game.requestIpl('bkr_bi_id1_23_door');
game.requestIpl('lr_cs6_08_grave_closed');
game.requestIpl('hei_sm_16_interior_v_bahama_milo_');
game.requestIpl('CS3_07_MPGates');
game.requestIpl('cs5_4_trains');
game.requestIpl('v_lesters');
game.requestIpl('v_trevors');
game.requestIpl('v_michael');
game.requestIpl('v_comedy');
game.requestIpl('v_cinema');
game.requestIpl('V_Sweat');
game.requestIpl('V_35_Fireman');
game.requestIpl('redCarpet');
game.requestIpl('triathlon2_VBprops');
game.requestIpl('jetstegameurnel');
game.requestIpl('Jetsteal_ipl_grp1');
game.requestIpl('v_hospital');
game.removeIpl('RC12B_Default');
game.removeIpl('RC12B_Fixed');
game.requestIpl('RC12B_Destroyed');
game.requestIpl('RC12B_HospitalInterior');
game.requestIpl('canyonriver01');
