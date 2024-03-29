import * as alt from "alt";
import * as game from "natives";
import chat from "chat";
import * as gameState from "source/src/Modules/Core/States/gameState";
import mainUi from "source/src/Modules/Ui/mainUi";
import keycodes from "source/src/Constans/keycodes";
import "source/src/Modules/Core/Game/Blips/blipsManager";
import "source/src/Modules/Debug/debug";
import "source/src/uiController";
import "source/src/menus";
import "source/src/Modules/Login/loginController";
import "source/src/Modules/Admin/noclip";
import "source/src/Modules/Admin/adminTeleports";
import "source/src/Modules/Admin/animationBrowser";
import "source/src/Modules/Environment/sitting";
import * as vehicles from "source/src/Modules/Vehicle/vehicles";
import "source/src/Modules/objectSync";
import "source/src/Modules/Streaming/networkStreamer";
import equipmentSlots from "source/src/Constans/equipmentSlots";
import "source/src/Modules/Vehicle/vehicleComponentsController";
import "source/src/configFlagsController";
import vehicleDoors from "source/src/Modules/Vehicle/Components/vehicleDoorsComponent";
// import vehicleSeatbeltComponent from "source/src/Modules/Vehicle/Components/vehicleSeatbeltComponent";
import vehicleEngineToggleComponent from "source/src/Modules/Vehicle/Components/vehicleEngineToggleComponent";
import SoundBrowser from "source/src/Modules/Admin/soundBrowser";
import inventoryController from "source/src/Modules/Inventory/inventoryController";
import housingSystemController from "source/src/Modules/Housing/housingSystemController";
import "source/src/Modules/Environment/timeController";
import adminMenuController from "source/src/Modules/Admin/AdminMenuController";
import "source/src/Modules/interiorChangeHandler";
import "source/src/testEvents";
import "source/src/Modules/Test/trains";

const localPlayer = alt.Player.local;
let lastKeyPressedTime = new Date().getTime();
let strefaView: alt.WebView | null = null;
const soundBrowser = new SoundBrowser();

const controlsIds = {
  H: 0x48,
  L: 0x4c,
  G: 0x47,
  Tilde: 0xc0,
  E: 0x45
};

alt.on("update", () => {
  // DEV Constant running
  if (game.isPedSprinting(localPlayer.scriptID))
    game.restorePlayerStamina(localPlayer.scriptID, 100);

  if (cinemaView != null) {
    const coords = game.getEntityCoords(localPlayer.scriptID, true);
    if (
      game.getDistanceBetweenCoords(
        coords.x,
        coords.y,
        coords.z,
        cinemaPosition.x,
        cinemaPosition.y,
        cinemaPosition.z,
        false
      ) > 100
    ) {
      // Destroy the view
      alt.log("Deleting cinema object");
      cinemaView.unfocus();
      cinemaView.destroy();
      cinemaView = null;

      game.deleteObject(cinemaObject);
      cinemaObject = null;
    }
  }
});

alt.on("keydown", (key: number) => {
  if (chat.isOpen() || mainUi.viewOpened || gameState.getGameState() === 0)
    return;

  switch (key) {
    case controlsIds.E:
      if (
        localPlayer.vehicle != null ||
        game.isEntityDead(localPlayer.scriptID, false) ||
        new Date().getTime() - lastKeyPressedTime < 750
      )
        return;
      lastKeyPressedTime = new Date().getTime();
      if (inventoryController.pickupItem()) return;
      else if (housingSystemController.onKeyPress()) return;
      else if (vehicleDoors.toggleTrunkOrHoodState(localPlayer)) return;
      break;
    case controlsIds.L:
      if (
        game.isEntityDead(localPlayer.scriptID, false) ||
        new Date().getTime() - lastKeyPressedTime < 750
      )
        return;
      lastKeyPressedTime = new Date().getTime();
      if (vehicles.toggleLockState()) return;
      break;
    case keycodes.K_KEY:
      if (
        game.isEntityDead(localPlayer.scriptID, false) ||
        localPlayer.vehicle === null ||
        new Date().getTime() - lastKeyPressedTime < 500
      )
        return;
      lastKeyPressedTime = new Date().getTime();
      // vehicleSeatbeltComponent.toggleSeatbelt(localPlayer);
      break;
    case keycodes.U_KEY:
      if (
        game.isEntityDead(localPlayer.scriptID, false) ||
        new Date().getTime() - lastKeyPressedTime < 400
      )
        return;
      vehicleEngineToggleComponent.toggleEngine(localPlayer);
      lastKeyPressedTime = new Date().getTime();
      break;
    case keycodes.VK_NUMPAD6:
      if (
        game.isEntityDead(localPlayer.scriptID, false) ||
        new Date().getTime() - lastKeyPressedTime < 500
      )
        return;
      lastKeyPressedTime = new Date().getTime();
      soundBrowser.toggle();
      break;
    case keycodes.I_KEY:
      if (new Date().getTime() - lastKeyPressedTime < 500) return;
      lastKeyPressedTime = new Date().getTime();
      inventoryController.openInventory();
      break;
    case keycodes.VK_F11:
      if (new Date().getTime() - lastKeyPressedTime < 500) return;
      lastKeyPressedTime = new Date().getTime();
      adminMenuController.tryOpenAdminMenu();
      break;
  }
});

alt.on("connectionComplete", (mapChanged: boolean) => {
  alt.log("All scripts completely loaded");
  if (mapChanged) {
    alt.log("Reloading map store");
    game.loadSpDlcMaps();
    alt.log("Map store reloaded");
  }
});

alt.on("consoleCommand", (command: string, ...args: string[]) => {
  if (command === "reloadMap") {
    alt.log("Reloading map store");
    game.loadSpDlcMaps();
    alt.log("Map store reloaded");
  } else if (command === "youtube") {
    test3DView();
  } else if (command === "strefa") {
    testStrefa();
  } else if (command === "testNumber") {
    alt.emitServer("testNumber", 3253274834);
  } else if (command === "bigNumber") {
    if (args[0] != null) {
      const bigNumber = Number(args[0]);
      if (bigNumber > 0) {
        alt.emitServer("bigNumber", bigNumber);
      }
    }
  }
});

alt.on("playerEnteredVehicle", (vehicle: alt.Vehicle, seat: number) => {
  alt.log("On player enter vehicle");
});

alt.on("playerLeftVehicle", (vehicle: alt.Vehicle, seat: number) => {
  alt.log("On player left vehicle");
});

let cinemaObject: number | any = null;
let cinemaView: alt.WebView | null = null;
const cinemaPosition: Vector3 = {
  x: -1426.553,
  y: -259.5351,
  z: 20.40091
};

alt.onServer("enterCinema", () => {
  alt.log("Entering cinema");
  test3DView();
});

function test3DView() {
  if (cinemaView) {
    alt.log("Deleting cinema view");
    cinemaView.destroy();
    cinemaView = null;
  }

  if (cinemaObject) {
    alt.log("Deleting cinema object");
    game.deleteObject(cinemaObject);
    cinemaObject = null;
  }

  alt.log("Inside test3DView");
  const modelHash = game.getHashKey("v_ilev_cin_screen");

  // alt.log('Loading model async');
  // await loadModelAsync(function () {
  // 	alt.log('Inside load model async');
  // 	game.hasModelLoaded(modelHash);
  // });

  // alt.log('After loading model async');

  // cinemaObject = game.createObject(game.getHashKey('v_ilev_cin_screen'), cinemaPosition.x, cinemaPosition.y, cinemaPosition.z - 1, 0, 0, 0);
  // alt.log('Exists ' + alt.isTextureExistInArchetype(game.getHashKey('v_ilev_cin_screen'), 'script_rt_cinscreen'));

  // await loadModelAsync(() => {
  // 	alt.isTextureExistInArchetype(game.getHashKey('v_ilev_cin_screen'), 'script_rt_cinscreen');
  // });

  // alt.log('Cinema view loaded');
  // cinemaView = new alt.WebView("https://www.youtube.com/embed/kQcB8QpjfSo?start=56&autoplay=1",
  //              game.getHashKey('v_ilev_cin_screen'), 'script_rt_cinscreen');

  alt.log("Loading model");
  loadModel(modelHash).then(() => {
    cinemaObject = game.createObject(
      game.getHashKey("v_ilev_cin_screen"),
      cinemaPosition.x,
      cinemaPosition.y,
      cinemaPosition.z - 1,
      true,
      false,
      false
    );
    alt.log(
      "Exists " +
        alt.isTextureExistInArchetype(
          game.getHashKey("v_ilev_cin_screen"),
          "script_rt_cinscreen"
        )
    );

    const inter = alt.setInterval(() => {
      if (
        alt.isTextureExistInArchetype(
          game.getHashKey("v_ilev_cin_screen"),
          "script_rt_cinscreen"
        )
      ) {
        alt.log("Cinema view loaded");
        cinemaView = new alt.WebView(
          "https://www.youtube.com/embed/kQcB8QpjfSo?start=56&autoplay=1",
          game.getHashKey("v_ilev_cin_screen"),
          "script_rt_cinscreen"
        );
        // cinemaView.focus();
        alt.clearInterval(inter);
        return;
      }
    }, 10);
  });
}

function loadModel(modelHash: number) {
  return new Promise((resolve, reject) => {
    game.requestModel(modelHash);
    if (!game.hasModelLoaded(modelHash)) {
      const request = alt.setInterval(() => {
        alt.log("Inside interval");
        if (game.hasModelLoaded(modelHash)) {
          resolve();
          alt.clearInterval(request);
        }
      }, 5);
    } else {
      resolve();
    }
  });
}

import animations from "src/Modules/animations";
let strefaObject: number | any = null;

function testStrefa() {
  if (strefaView !== null) {
    alt.toggleGameControls(true);
    alt.showCursor(false);
    strefaView.unfocus();
    strefaView.destroy();

    alt.setTimeout(() => {
      game.clearPedSecondaryTask(localPlayer.scriptID);
      game.detachEntity(strefaObject, true, true);
      game.deleteObject(strefaObject);
    }, 10);
  } else {
    const position = game.getEntityCoords(localPlayer.scriptID, true);
    strefaObject = game.createObject(
      game.getHashKey("xm_prop_x17_sec_panel_01"),
      position.x,
      position.y,
      position.z + 0.5,
      true,
      false,
      false
    );
    alt.log(
      "Exists " +
        alt.isTextureExistInArchetype(
          game.getHashKey("xm_prop_x17_sec_panel_01"),
          "script_rt_prop_x17_p_01"
        )
    );
    game.attachEntityToEntity(
      strefaObject,
      localPlayer.scriptID,
      game.getPedBoneIndex(localPlayer.scriptID, 60309),
      0.035,
      0.015,
      0.012,
      0.0,
      0,
      0,
      true,
      true,
      false,
      true,
      1,
      true
    );

    const inter = alt.setInterval(() => {
      if (
        alt.isTextureExistInArchetype(
          game.getHashKey("xm_prop_x17_sec_panel_01"),
          "script_rt_prop_x17_p_01"
        )
      ) {
        strefaView = new alt.WebView(
          "https://forum.strefarp.pl/",
          game.getHashKey("xm_prop_x17_sec_panel_01"),
          "script_rt_prop_x17_p_01"
        );
        strefaView.focus();
        if (alt.gameControlsEnabled()) {
          alt.toggleGameControls(false);
        }
        alt.showCursor(true);
        alt.clearInterval(inter);
        return;
      }
    }, 30);

    animations.loadAnimDict("amb@world_human_clipboard@male@base").then(() => {
      alt.log("Playing animation");
      game.taskPlayAnim(
        localPlayer.scriptID,
        "amb@world_human_clipboard@male@base",
        "base",
        8.0,
        1.0,
        -1,
        63,
        0,
        false,
        false,
        false
      );
    });
  }
}

alt.onServer(
  "equipClothableItem",
  (
    slot: number,
    drawableId: number,
    textureId: number,
    paletteId: number,
    isProp: boolean
  ) => {
    if (isProp) {
      alt.log("Equiping prop");
      game.setPedPropIndex(
        localPlayer.scriptID,
        equipmentSlots[slot],
        drawableId,
        textureId,
        true
      );
    } else {
      alt.log("Equiping normal cloth");
      game.setPedComponentVariation(
        localPlayer.scriptID,
        equipmentSlots[slot],
        drawableId,
        textureId,
        paletteId
      );
    }
  }
);

game.loadMpDlcMaps();
game.requestIpl("chop_props");
game.requestIpl("FIBlobby");
game.removeIpl("FIBlobbyfake");
game.requestIpl("FBI_colPLUG");
game.requestIpl("FBI_repair");
game.requestIpl("v_tunnel_hole");
game.requestIpl("TrevorsMP");
game.requestIpl("TrevorsTrailer");
game.requestIpl("TrevorsTrailerTidy");
game.removeIpl("farm_burnt");
game.removeIpl("farm_burnt_lod");
game.removeIpl("farm_burnt_props");
game.removeIpl("farmint_cap");
game.removeIpl("farmint_cap_lod");
game.requestIpl("farm");
game.requestIpl("farmint");
game.requestIpl("farm_lod");
game.requestIpl("farm_props");
game.requestIpl("des_farmhouse");
game.requestIpl("facelobby");
game.removeIpl("CS1_02_cf_offmission");
game.requestIpl("CS1_02_cf_onmission1");
game.requestIpl("CS1_02_cf_onmission2");
game.requestIpl("CS1_02_cf_onmission3");
game.requestIpl("CS1_02_cf_onmission4");
game.requestIpl("v_rockclub");
game.requestIpl("v_janitor");
game.removeIpl("hei_bi_hw1_13_door");
game.requestIpl("bkr_bi_hw1_13_int");
game.requestIpl("ufo");
game.requestIpl("ufo_lod");
game.requestIpl("ufo_eye");
game.removeIpl("v_carshowroom");
game.removeIpl("shutter_open");
game.removeIpl("shutter_closed");
game.removeIpl("shr_int");
game.requestIpl("csr_afterMission");
game.requestIpl("v_carshowroom");
game.requestIpl("shr_int");
game.requestIpl("shutter_closed");
game.requestIpl("smboat");
game.requestIpl("smboat_distantlights");
game.requestIpl("smboat_lod");
game.requestIpl("smboat_lodlights");
game.requestIpl("cargoship");
game.requestIpl("railing_start");
game.removeIpl("sp1_10_fake_interior");
game.removeIpl("sp1_10_fake_interior_lod");
game.requestIpl("sp1_10_real_interior");
game.requestIpl("sp1_10_real_interior_lod");
game.removeIpl("id2_14_during_door");
game.removeIpl("id2_14_during1");
game.removeIpl("id2_14_during2");
game.removeIpl("id2_14_on_fire");
game.removeIpl("id2_14_post_no_int");
game.removeIpl("id2_14_pre_no_int");
game.removeIpl("id2_14_during_door");
game.requestIpl("id2_14_during1");
game.removeIpl("Coroner_Int_off");
game.requestIpl("coronertrash");
game.requestIpl("Coroner_Int_on");
game.removeIpl("bh1_16_refurb");
game.removeIpl("jewel2fake");
game.removeIpl("bh1_16_doors_shut");
game.requestIpl("refit_unload");
game.requestIpl("post_hiest_unload");
game.requestIpl("Carwash_with_spinners");
game.requestIpl("KT_CarWash");
game.requestIpl("ferris_finale_Anim");
game.removeIpl("ch1_02_closed");
game.requestIpl("ch1_02_open");
game.requestIpl("AP1_04_TriAf01");
game.requestIpl("CS2_06_TriAf02");
game.requestIpl("CS4_04_TriAf03");
game.removeIpl("scafstartimap");
game.requestIpl("scafendimap");
game.removeIpl("DT1_05_HC_REMOVE");
game.requestIpl("DT1_05_HC_REQ");
game.requestIpl("DT1_05_REQUEST");
game.requestIpl("FINBANK");
game.removeIpl("DT1_03_Shutter");
game.removeIpl("DT1_03_Gr_Closed");
game.requestIpl("golfflags");
game.requestIpl("airfield");
game.requestIpl("v_garages");
game.requestIpl("v_foundry");
game.requestIpl("hei_yacht_heist");
game.requestIpl("hei_yacht_heist_Bar");
game.requestIpl("hei_yacht_heist_Bedrm");
game.requestIpl("hei_yacht_heist_Bridge");
game.requestIpl("hei_yacht_heist_DistantLights");
game.requestIpl("hei_yacht_heist_enginrm");
game.requestIpl("hei_yacht_heist_LODLights");
game.requestIpl("hei_yacht_heist_Lounge");
game.requestIpl("hei_carrier");
game.requestIpl("hei_Carrier_int1");
game.requestIpl("hei_Carrier_int2");
game.requestIpl("hei_Carrier_int3");
game.requestIpl("hei_Carrier_int4");
game.requestIpl("hei_Carrier_int5");
game.requestIpl("hei_Carrier_int6");
game.requestIpl("hei_carrier_LODLights");
game.requestIpl("bkr_bi_id1_23_door");
game.requestIpl("lr_cs6_08_grave_closed");
game.requestIpl("hei_sm_16_interior_v_bahama_milo_");
game.requestIpl("CS3_07_MPGates");
game.requestIpl("cs5_4_trains");
game.requestIpl("v_lesters");
game.requestIpl("v_trevors");
game.requestIpl("v_michael");
game.requestIpl("v_comedy");
game.requestIpl("v_cinema");
game.requestIpl("V_Sweat");
game.requestIpl("V_35_Fireman");
game.requestIpl("redCarpet");
game.requestIpl("triathlon2_VBprops");
game.requestIpl("jetstegameurnel");
game.requestIpl("Jetsteal_ipl_grp1");
game.requestIpl("v_hospital");
game.removeIpl("RC12B_Default");
game.removeIpl("RC12B_Fixed");
game.requestIpl("RC12B_Destroyed");
game.requestIpl("RC12B_HospitalInterior");
game.requestIpl("canyonriver01");

// Clubhouses
game.requestIpl(
  "bkr_biker_interior_placement_interior_0_biker_dlc_int_01_milo"
);
game.requestIpl(
  "bkr_biker_interior_placement_interior_1_biker_dlc_int_02_milo"
);
// Warehouses
game.requestIpl(
  "bkr_biker_interior_placement_interior_2_biker_dlc_int_ware01_milo"
);
game.requestIpl(
  "bkr_biker_interior_placement_interior_2_biker_dlc_int_ware02_milo"
);
game.requestIpl(
  "bkr_biker_interior_placement_interior_2_biker_dlc_int_ware03_milo"
);
game.requestIpl(
  "bkr_biker_interior_placement_interior_2_biker_dlc_int_ware04_milo"
);
game.requestIpl(
  "bkr_biker_interior_placement_interior_2_biker_dlc_int_ware05_milo"
);
game.requestIpl(
  "bkr_biker_interior_placement_interior_3_biker_dlc_int_ware02_milo"
);
game.requestIpl(
  "bkr_biker_interior_placement_interior_4_biker_dlc_int_ware03_milo"
);
game.requestIpl(
  "bkr_biker_interior_placement_interior_5_biker_dlc_int_ware04_milo"
);
game.requestIpl(
  "bkr_biker_interior_placement_interior_6_biker_dlc_int_ware05_milo"
);
game.requestIpl(
  "ex_exec_warehouse_placement_interior_1_int_warehouse_s_dlc_milo"
);
game.requestIpl(
  "ex_exec_warehouse_placement_interior_0_int_warehouse_m_dlc_milo"
);
game.requestIpl(
  "ex_exec_warehouse_placement_interior_2_int_warehouse_l_dlc_milo"
);
