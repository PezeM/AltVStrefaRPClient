import * as alt from 'alt';
import * as game from 'natives';
import { IControlsIds, ISittableArray, ISittableObject } from 'source/src/Constans/interfaces';

const CONTROL_IDS: IControlsIds = {
    E: 38,
    Shift: 21
};

const SITTABLE: ISittableArray = {
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

const localPlayer = alt.Player.local;
const DISTANCE = 1.5;

class Sitting {
    tickInterval: number;
    isSitting: boolean;
    currentSittingObjectId: number;
    currentSittingObject: ISittableObject | null;
    lastPosition: Vector3;
    benchCoords: Vector3;
    lastChecked: number;
    constructor() {
        this.isSitting = false;
        this.currentSittingObjectId = 0;
        this.currentSittingObject = null;
        this.lastPosition = localPlayer.pos;
        this.benchCoords = { x: 0, y: 0, z: 0 };
        this.lastChecked = 0;

        alt.log(`Loaded sitting module`);

        this.tickInterval = alt.setInterval(this.tick.bind(this), 0);
        alt.onServer('canSeat', this.takeSeat.bind(this));
    }

    tick() {
        // Has to press SHIFT + E and not be in vehicle
        if (game.isControlPressed(0, CONTROL_IDS.Shift) && game.isControlPressed(0, CONTROL_IDS.E) && (new Date().getTime() - this.lastChecked > 500)
            && localPlayer.vehicle == null) {
            this.lastChecked = new Date().getTime();
            if (this.isSitting && this.currentSittingObject && game.isPedUsingScenario(localPlayer.scriptID, this.currentSittingObject.scenario)) {
                alt.log('Is sitting');
                this.standUp();
                return;
            }

            const startTime = new Date().getTime();
            for (const key in SITTABLE) {
                if (!SITTABLE.hasOwnProperty(key)) continue;
                const closestBenchId = game.getClosestObjectOfType(localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z,
                    5, game.getHashKey(key), false, false, false)
                if (closestBenchId === 0) continue;

                const closestBenchCoords = game.getEntityCoords(closestBenchId, true);
                if (game.getDistanceBetweenCoords(closestBenchCoords.x, closestBenchCoords.y, closestBenchCoords.z,
                    localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z, false) > DISTANCE) continue;

                alt.log('Closest bench model: ' + key);

                if (!this.isSitting) {
                    alt.log('Found bench with id: ' + closestBenchId + ' in ' + (new Date().getTime() - startTime) + ' ms.');
                    this.tryToSit(closestBenchId, SITTABLE[key], closestBenchCoords);
                    return;
                }
            }
        }
    }

    takeSeat() {
        game.freezeEntityPosition(this.currentSittingObjectId, true);
        if (this.currentSittingObject == null) return;
        game.taskStartScenarioAtPosition(localPlayer.scriptID, this.currentSittingObject.scenario, this.benchCoords.x, this.benchCoords.y,
            this.benchCoords.z - this.currentSittingObject.verticalOffset, game.getEntityHeading(this.currentSittingObjectId) + 180, 0, true, true);
        this.isSitting = true;
    }

    tryToSit(objectId: number, objectData: ISittableObject, coords: Vector3) {
        this.currentSittingObjectId = objectId;
        this.currentSittingObject = objectData;
        this.lastPosition = game.getEntityCoords(localPlayer.scriptID, true);
        this.benchCoords = coords;
        alt.emitServer("takeSeat", this.currentSittingObjectId);
    }

    standUp() {
        game.clearPedTasks(localPlayer.scriptID);
        game.setEntityCoords(localPlayer.scriptID, this.lastPosition.x, this.lastPosition.y, this.lastPosition.z, true, false, false, true);
        this.isSitting = false;
        game.freezeEntityPosition(this.currentSittingObjectId, false);
        alt.emitServer("leaveSeat", this.currentSittingObjectId);
        this.currentSittingObjectId = -1;
        this.lastPosition = localPlayer.pos;
        this.currentSittingObject = null;
    }
}

const sittingModule = new Sitting();
export default sittingModule;
