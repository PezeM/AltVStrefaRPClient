/// <reference path="altv.d.ts" />
/// <reference path="alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import chat from 'chat';
import loginModule from 'src/Login/login.js';
import * as noclipModule from 'src/Admin/noclip.js';
import * as sitting from 'src/Environment/sitting.js';

let localPlayer = alt.getLocalPlayer();
let cursorShown = false;

// Startup
game.freezeEntityPosition(localPlayer.scriptID, true);

alt.log('Client side script loaded');

alt.on('keydown', (key) => {
	if (key == 0x75) { // F6 Key
		cursorShown = !cursorShown;
		alt.showCursor(cursorShown);
	}
});

alt.on('update', () => {
	// DEV Constant running
	if (game.isPedSprinting(localPlayer.scriptID))
		game.restorePlayerStamina(localPlayer.scriptID, 100);
});

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
