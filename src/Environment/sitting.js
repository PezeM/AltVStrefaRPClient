/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import { draw3DText } from 'src/Helpers/uiHelper.js';

const controlsIds = {
    E: 38,
    Shift: 21
};

const sittable = {
    "prop_bench_01a": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_bench_01b": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_bench_01c": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_bench_02": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_bench_03": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_bench_04": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_bench_05": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_bench_06": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_bench_08": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_bench_09": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.37, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_bench_10": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_bench_11": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_fib_3b_bench": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_ld_bench01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_wait_bench_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "hei_prop_heist_off_chair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "hei_prop_hei_skid_chair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_01a": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_01b": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_02": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_03": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_04a": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_04b": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_05": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_06": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_05": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_08": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_09": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chair_10": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_chateau_chair_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_clown_chair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_cs_office_chair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_direct_chair_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_direct_chair_02": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_gc_chair02": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_off_chair_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_off_chair_03": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_off_chair_04": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_off_chair_04b": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_off_chair_04_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_off_chair_05": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_old_deck_chair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_old_wood_chair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_rock_chair_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_skid_chair_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_skid_chair_02": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_skid_chair_03": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_sol_chair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_wheelchair_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_wheelchair_01_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "p_armchair_01_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "p_clb_officechair_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "p_dinechair_01_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "p_ilev_p_easychair_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "p_soloffchair_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "p_yacht_chair_01_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_club_officechair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_corp_bk_chair3": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_corp_cd_chair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_corp_offchair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_chair02_ped": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_hd_chair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_p_easychair": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ret_gc_chair03": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_ld_farm_chair01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_table_04_chr": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_table_05_chr": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_table_06_chr": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_leath_chr": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_table_01_chr_a": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_table_01_chr_b": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_table_02_chr": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_table_03b_chr": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_table_03_chr": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_torture_ch_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_fh_dineeamesa": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_fh_kitchenstool": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_tort_stool": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_fh_kitchenstool": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_fh_kitchenstool": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_fh_kitchenstool": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_fh_kitchenstool": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "hei_prop_yah_seat_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "hei_prop_yah_seat_02": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "hei_prop_yah_seat_03": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_waiting_seat_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_yacht_seat_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_yacht_seat_02": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_yacht_seat_03": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_hobo_seat_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.65, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_rub_couch01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "miss_rub_couch_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_ld_farm_couch01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_ld_farm_couch02": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_rub_couch02": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_rub_couch03": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_rub_couch04": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "p_lev_sofa_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "p_res_sofa_l_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "p_v_med_p_sofa_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "p_yacht_sofa_01_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_ilev_m_sofa": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_res_tre_sofa_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_tre_sofa_mess_a_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_tre_sofa_mess_b_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "v_tre_sofa_mess_c_s": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_roller_car_01": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 },
    "prop_roller_car_02": { scenario: 'PROP_HUMAN_SEAT_BENCH', verticalOffset: -0.5, forwardOffset: 0.0, leftOffset: 0.0 }
};

let localPlayer = alt.getLocalPlayer();
let distance = 1.5;
let sitting = false;
let currentSittingObjectId = null;
let currentSittingObject = null;
let lastPosition = null;
let benchCoords = null;
let lastChecked = 0;

alt.log('Sitting.js loaded');

alt.on('update', () => {
    // Has to press SHIFT + E and not be in vehicle
    if (game.isControlPressed(0, controlsIds.Shift) && game.isControlPressed(0, controlsIds.E) && (new Date().getTime() - lastChecked > 1000)) {
        lastChecked = new Date().getTime();
        if (sitting && game.isPedUsingScenario(localPlayer.scriptID, currentSittingObject.scenario)) {
            alt.log('Is sitting');
            standUp();
            return;
        }

        var startTime = new Date().getTime();
        for (const key in sittable) {
            if (!sittable.hasOwnProperty(key)) continue;
            var closestBench = game.getClosestObjectOfType(localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z,
                5, game.getHashKey(key), false, false, false)
            if (closestBench === 0) continue;

            var closestBenchCoords = game.getEntityCoords(closestBench, true);
            if (game.getDistanceBetweenCoords(closestBenchCoords.x, closestBenchCoords.y, closestBenchCoords.z,
                localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z, false) > distance) continue;

            alt.log('Closest bench model: ' + key);

            if (!sitting) {
                alt.log('Found bench with id: ' + closestBench + ' in ' + (new Date().getTime() - startTime) + ' ms.');
                tryToSit(closestBench, sittable[key], closestBenchCoords);
                return;
            }
        }
    }
});


function tryToSit(objectId, objectData, coords) {
    currentSittingObjectId = objectId;
    currentSittingObject = objectData;
    lastPosition = game.getEntityCoords(localPlayer.scriptID, true);
    benchCoords = coords;
    alt.emitServer("takeSeat", currentSittingObjectId);
}

function standUp() {
    game.clearPedTasks(localPlayer.scriptID);
    game.setEntityCoords(localPlayer.scriptID, lastPosition.x, lastPosition.y, lastPosition.z, 1, 0, 0, 1);
    sitting = false;
    game.freezeEntityPosition(currentSittingObjectId, false);
    alt.emitServer("leaveSeat", currentSittingObjectId);
    currentSittingObjectId = null;
    lastPosition = null;
    currentSittingObject = null;
}

alt.onServer('canSeat', () => {
    takeSeat();
});

function takeSeat() {
    // game.freezeEntityPosition(playerId, true);
    game.freezeEntityPosition(currentSittingObjectId, true);
    game.taskStartScenarioAtPosition(localPlayer.scriptID, currentSittingObject.scenario, benchCoords.x, benchCoords.y,
        benchCoords.z - currentSittingObject.verticalOffset, game.getEntityHeading(currentSittingObjectId) + 180, 0, true, true);
    sitting = true;
}