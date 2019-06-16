/// <reference path="../../natives.d.ts" />
/// <reference path="../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import { drawText } from 'src/Helpers/uiHelper.js';
// import { AnimList } from 'src/Admin/animationBrowser.js';
import chat from 'chat';
import menusManager from 'src/Modules/Ui/menusManager.js';

const controlsIds = {
    F: 75,
    Space: 0x20,
    Left: 0x25,
    Right: 0x27,
    Shift: 21,
    Ctrl: 326,
    Up: 0x26,
    Down: 0x28,
    Backspace: 0x08,
};

const AnimList = [
    ["anim@heists@box_carry@", ["idle", "run", "walk"]],
    ["abigail_mcs_1_concat-0", ["exportcamera-0", "player_zero_dual-0", "csb_abigail_dual-0"]],
    ["abigail_mcs_1_concat-10", ["player_zero_dual-10", "csb_abigail_dual-10", "exportcamera-10"]],
    ["abigail_mcs_1_concat-11", ["exportcamera-11", "csb_abigail_dual-11", "player_zero_dual-11"]],
    ["abigail_mcs_1_concat-1", ["player_zero_dual-1", "csb_abigail_dual-1", "exportcamera-1"]],
    ["abigail_mcs_1_concat-2", ["player_zero_dual-2", "csb_abigail_dual-2", "exportcamera-2"]],
    ["abigail_mcs_1_concat-3", ["exportcamera-3", "csb_abigail_dual-3", "player_zero_dual-3"]],
    ["abigail_mcs_1_concat-4", ["exportcamera-4", "player_zero_dual-4", "csb_abigail_dual-4"]],
    ["abigail_mcs_1_concat-5", ["player_zero_dual-5", "exportcamera-5", "csb_abigail_dual-5"]],
    ["abigail_mcs_1_concat-6", ["exportcamera-6", "csb_abigail_dual-6", "player_zero_dual-6"]],
    ["abigail_mcs_1_concat-7", ["player_zero_dual-7", "exportcamera-7", "csb_abigail_dual-7"]],
    ["abigail_mcs_1_concat-8", ["player_zero_dual-8", "exportcamera-8", "csb_abigail_dual-8"]],
    ["abigail_mcs_1_concat-9", ["csb_abigail_dual-9", "player_zero_dual-9", "exportcamera-9"]],
    ["abigail_mcs_2-0", ["prop_cs_frank_photo-0", "prop_cs_glass_scrap-0", "player_zero_dual-0", "csb_abigail_dual-0", "exportcamera-0", "prop_cs_valve-0", "p_banknote_s-0"]],
    ["abigail_mcs_2-1", ["prop_cs_glass_scrap-1", "prop_cs_frank_photo-1", "csb_abigail_dual-1", "exportcamera-1", "p_banknote_s-1", "prop_cs_valve-1", "player_zero_dual-1"]],
    ["abigail_mcs_2-2", ["prop_cs_glass_scrap-2", "prop_cs_frank_photo-2", "csb_abigail_dual-2", "exportcamera-2", "p_banknote_s-2", "player_zero_dual-2", "prop_cs_valve-2"]],
    ["abigail_mcs_2-3", ["prop_cs_frank_photo-3", "prop_cs_glass_scrap-3", "prop_cs_valve-3", "p_banknote_s-3", "player_zero_dual-3", "exportcamera-3", "csb_abigail_dual-3"]],
    ["abigail_mcs_2-4", ["prop_cs_glass_scrap-4", "prop_cs_frank_photo-4", "player_zero_dual-4", "csb_abigail_dual-4", "p_banknote_s-4", "prop_cs_valve-4", "exportcamera-4"]],
    ["abigail_mcs_2-5", ["prop_cs_glass_scrap-5", "prop_cs_frank_photo-5", "csb_abigail_dual-5", "exportcamera-5", "prop_cs_valve-5", "p_banknote_s-5", "player_zero_dual-5"]],
    ["abigail_mcs_2-6", ["prop_cs_frank_photo-6", "prop_cs_glass_scrap-6", "exportcamera-6", "p_banknote_s-6", "player_zero_dual-6", "csb_abigail_dual-6", "prop_cs_valve-6"]],
    ["abigail_mcs_2-7", ["prop_cs_glass_scrap-7", "prop_cs_frank_photo-7", "player_zero_dual-7", "csb_abigail_dual-7", "p_banknote_s-7", "prop_cs_valve-7", "exportcamera-7"]],
    ["abigail_mcs_2-8", ["prop_cs_frank_photo-8", "prop_cs_glass_scrap-8", "prop_cs_valve-8", "p_banknote_s-8", "player_zero_dual-8", "csb_abigail_dual-8", "exportcamera-8"]],
    ["ac_ig_3_p3_b-0", ["w_ar_assaultrifle^1-0", "w_ar_assaultrifle^2-0", "w_ar_assaultrifle_mag1-0", "w_ar_assaultrifle_mag1^1-0", "w_ar_assaultrifle_mag1^2-0", "w_ar_carbinerifle_mag1-0", "a_m_o_acult_02^1_dual-0", "a_m_o_acult_02^2_dual-0", "a_m_o_acult_02_dual-0", "a_m_y_acult_02_dual-0", "prop_ld_w_me_machette-0", "a_m_y_acult_02^1-0", "player_two_dual-0", "w_ar_assaultrifle-0", "w_ar_carbinerifle-0", "exportcamera-0", "w_sg_pumpshotgun-0", "a_m_o_acult_02^2-0", "a_m_o_acult_02-0", "a_m_o_acult_02^1-0", "player_two-0", "a_m_y_acult_02-0", "a_m_y_acult_02^1_dual-0"]],
    ["ac_ig_3_p3_b-1", ["prop_ld_w_me_machette-1", "w_ar_assaultrifle^1-1", "w_ar_assaultrifle^2-1", "w_ar_assaultrifle_mag1-1", "w_ar_assaultrifle_mag1^1-1", "w_ar_assaultrifle_mag1^2-1", "w_ar_carbinerifle_mag1-1", "a_m_o_acult_02^1_dual-1", "a_m_o_acult_02^2_dual-1", "a_m_o_acult_02_dual-1", "a_m_y_acult_02_dual-1", "player_two_dual-1", "exportcamera-1", "a_m_y_acult_02^1-1", "w_ar_assaultrifle-1", "w_ar_carbinerifle-1", "w_sg_pumpshotgun-1", "a_m_y_acult_02^1_dual-1"]],
    ["ac_ig_3_p3_b-2", ["w_ar_assaultrifle^2-2", "a_m_y_acult_02_dual-2", "prop_ld_w_me_machette-2", "w_ar_assaultrifle_mag1-2", "w_ar_assaultrifle_mag1^1-2", "w_ar_assaultrifle_mag1^2-2", "a_m_o_acult_02_dual-2", "a_m_o_acult_02^2_dual-2", "w_ar_carbinerifle_mag1-2", "w_ar_assaultrifle^1-2", "a_m_o_acult_02^1_dual-2", "w_ar_carbinerifle-2", "a_m_y_acult_02^1-2", "exportcamera-2", "player_two_dual-2", "w_sg_pumpshotgun-2", "w_ar_assaultrifle-2", "a_m_y_acult_02^1_dual-2"]],
    ["ac_ig_3_p3_b-3", ["w_ar_assaultrifle_mag1-3", "a_m_y_acult_02_dual-3", "prop_ld_w_me_machette-3", "a_m_o_acult_02_dual-3", "a_m_o_acult_02^1_dual-3", "w_ar_assaultrifle_mag1^1-3", "w_ar_assaultrifle^2-3", "w_ar_assaultrifle^1-3", "w_ar_assaultrifle_mag1^2-3", "a_m_o_acult_02^2_dual-3", "w_ar_carbinerifle_mag1-3", "w_ar_assaultrifle-3", "w_ar_carbinerifle-3", "a_m_y_acult_02^1-3", "w_sg_pumpshotgun-3", "exportcamera-3", "player_two_dual-3", "a_m_y_acult_02^1_dual-3"]],
    ["ac_ig_3_p3_b-4", ["w_ar_carbinerifle_mag1-4", "a_m_y_acult_02_dual-4", "prop_ld_w_me_machette-4", "w_ar_assaultrifle_mag1-4", "a_m_o_acult_02^1_dual-4", "w_ar_assaultrifle_mag1^1-4", "w_ar_assaultrifle^2-4", "a_m_o_acult_02^2_dual-4", "w_ar_assaultrifle_mag1^2-4", "a_m_o_acult_02_dual-4", "w_ar_assaultrifle^1-4", "player_two_dual-4", "a_m_y_acult_02^1-4", "w_ar_carbinerifle-4", "w_ar_assaultrifle-4", "w_sg_pumpshotgun-4", "exportcamera-4", "a_m_y_acult_02^1_dual-4"]],
    ["ac_ig_3_p3_b-5", ["w_ar_assaultrifle^1-5", "w_ar_assaultrifle^2-5", "w_ar_assaultrifle_mag1-5", "w_ar_assaultrifle_mag1^1-5", "w_ar_assaultrifle_mag1^2-5", "w_ar_carbinerifle_mag1-5", "a_m_o_acult_02^1_dual-5", "a_m_o_acult_02^2_dual-5", "a_m_o_acult_02_dual-5", "a_m_y_acult_02_dual-5", "prop_ld_w_me_machette-5", "player_two_dual-5", "w_ar_assaultrifle-5", "w_ar_carbinerifle-5", "exportcamera-5", "a_m_y_acult_02^1-5", "w_sg_pumpshotgun-5", "a_m_y_acult_02^1_dual-5"]],
    ["ac_ig_3_p3_b-6", ["w_ar_assaultrifle^2-6", "w_ar_assaultrifle_mag1-6", "w_ar_assaultrifle_mag1^1-6", "w_ar_assaultrifle_mag1^2-6", "w_ar_carbinerifle_mag1-6", "a_m_o_acult_02^1_dual-6", "a_m_o_acult_02^2_dual-6", "a_m_o_acult_02_dual-6", "a_m_y_acult_02_dual-6", "prop_ld_w_me_machette-6", "w_ar_assaultrifle^1-6", "player_two_dual-6", "w_ar_assaultrifle-6", "exportcamera-6", "w_ar_carbinerifle-6", "w_sg_pumpshotgun-6", "a_m_y_acult_02^1-6", "a_m_y_acult_02^1_dual-6"]],
    ["ac_ig_3_p3_b-7", ["w_ar_assaultrifle^2-7", "w_ar_assaultrifle_mag1-7", "w_ar_assaultrifle_mag1^1-7", "w_ar_assaultrifle_mag1^2-7", "w_ar_carbinerifle_mag1-7", "a_m_o_acult_02^1_dual-7", "a_m_o_acult_02^2_dual-7", "a_m_o_acult_02_dual-7", "a_m_y_acult_02_dual-7", "prop_ld_w_me_machette-7", "w_ar_assaultrifle^1-7", "a_m_y_acult_02^1-7", "exportcamera-7", "player_two_dual-7", "w_ar_assaultrifle-7", "w_ar_carbinerifle-7", "w_sg_pumpshotgun-7", "a_m_y_acult_02^1_dual-7"]],
    ["ac_ig_3_p3_b-8", ["w_ar_assaultrifle^1-8", "w_ar_assaultrifle^2-8", "w_ar_assaultrifle_mag1-8", "w_ar_assaultrifle_mag1^1-8", "w_ar_assaultrifle_mag1^2-8", "w_ar_carbinerifle_mag1-8", "a_m_o_acult_02^1_dual-8", "a_m_o_acult_02^2_dual-8", "a_m_o_acult_02_dual-8", "a_m_y_acult_02_dual-8", "prop_ld_w_me_machette-8", "a_m_y_acult_02^1-8", "w_ar_assaultrifle-8", "w_ar_carbinerifle-8", "exportcamera-8", "w_sg_pumpshotgun-8", "player_two_dual-8", "a_m_y_acult_02^1_dual-8"]],
    ["agency_heist_3a", ["spiral_smoke_01", "spiral_smoke_03", "spiral_smoke_04", "spiral_smoke_05", "spiral_smoke_06", "spiral_smoke_02", "spiral_smoke_07"]],
    ["ah_1_ext_t6-0", ["prop_cs_walking_stick-0", "prop_phone_cs_frank-0", "ac24_ah_1_ext_t6_00-0", "ac24_ah_1_ext_t6_01-0", "ac24_ah_1_ext_t6_02-0", "cs_lestercrest_dual-0", "player_one_dual-0", "v_ilev_ss_door02-0", "player_zero_dual-0", "v_ilev_store_door-0", "exportcamera-0"]],
    ["ah_1_ext_t6-1", ["ac24_ah_1_ext_t6_00-1", "ac24_ah_1_ext_t6_01-1", "ac24_ah_1_ext_t6_02-1", "cs_lestercrest_dual-1", "prop_cs_walking_stick-1", "prop_phone_cs_frank-1", "player_zero_dual-1", "player_one_dual-1", "exportcamera-1", "v_ilev_store_door-1", "v_ilev_ss_door02-1"]],
    ["ah_1_ext_t6-2", ["prop_phone_cs_frank-2", "ac24_ah_1_ext_t6_01-2", "ac24_ah_1_ext_t6_00-2", "cs_lestercrest_dual-2", "prop_cs_walking_stick-2", "ac24_ah_1_ext_t6_02-2", "player_zero_dual-2", "v_ilev_ss_door02-2", "v_ilev_store_door-2", "exportcamera-2", "player_one_dual-2"]],
    ["ah_1_ext_t6-3", ["prop_cs_walking_stick-3", "prop_phone_cs_frank-3", "ac24_ah_1_ext_t6_00-3", "ac24_ah_1_ext_t6_01-3", "ac24_ah_1_ext_t6_02-3", "cs_lestercrest_dual-3", "player_zero_dual-3", "v_ilev_store_door-3", "exportcamera-3", "v_ilev_ss_door02-3", "player_one_dual-3"]],
    ["ah_1_ext_t6-4", ["prop_cs_walking_stick-4", "prop_phone_cs_frank-4", "ac24_ah_1_ext_t6_00-4", "ac24_ah_1_ext_t6_01-4", "ac24_ah_1_ext_t6_02-4", "cs_lestercrest_dual-4", "v_ilev_ss_door02-4", "player_zero_dual-4", "exportcamera-4", "v_ilev_store_door-4", "player_one_dual-4"]],
    ["ah_1_ext_t6-5", ["prop_cs_walking_stick-5", "prop_phone_cs_frank-5", "ac24_ah_1_ext_t6_00-5", "ac24_ah_1_ext_t6_01-5", "ac24_ah_1_ext_t6_02-5", "cs_lestercrest_dual-5", "v_ilev_ss_door02-5", "player_zero_dual-5", "exportcamera-5", "v_ilev_store_door-5", "player_one_dual-5"]],
    ["ah_1_ext_t6-6", ["prop_phone_cs_frank-6", "ac24_ah_1_ext_t6_02-6", "cs_lestercrest_dual-6", "prop_cs_walking_stick-6", "ac24_ah_1_ext_t6_00-6", "ac24_ah_1_ext_t6_01-6", "v_ilev_store_door-6", "player_zero_dual-6", "player_one_dual-6", "exportcamera-6", "v_ilev_ss_door02-6"]],
    ["ah_1_ext_t6-7", ["prop_cs_walking_stick-7", "cs_lestercrest_dual-7", "ac24_ah_1_ext_t6_00-7", "ac24_ah_1_ext_t6_02-7", "ac24_ah_1_ext_t6_01-7", "prop_phone_cs_frank-7", "player_zero_dual-7", "v_ilev_ss_door02-7", "exportcamera-7", "v_ilev_store_door-7", "player_one_dual-7"]],
    ["ah_1_ext_t6-8", ["ac24_ah_1_ext_t6_00-8", "ac24_ah_1_ext_t6_01-8", "cs_lestercrest_dual-8", "prop_cs_walking_stick-8", "ac24_ah_1_ext_t6_02-8", "prop_phone_cs_frank-8", "exportcamera-8", "v_ilev_ss_door02-8", "player_zero_dual-8", "v_ilev_store_door-8", "player_one_dual-8"]],
    ["ah_1_int-0", ["prop_cs_walking_stick-0", "cs_lestercrest_dual-0", "v_ind_ss_chair3_cso-0", "cs_stevehains_dual-0", "exportcamera-0", "prop_npc_phone-0", "v_ilev_ss_door7-0", "player_zero_dual-0", "v_ind_ss_chair01-0", "oracle-0", "cs_davenorton_dual-0"]],
    ["ah_1_int-1", ["prop_cs_walking_stick-1", "cs_lestercrest_dual-1", "v_ind_ss_chair3_cso-1", "player_zero_dual-1", "prop_npc_phone-1", "v_ilev_ss_door7-1", "cs_davenorton_dual-1", "v_ind_ss_chair01-1", "cs_stevehains_dual-1", "exportcamera-1", "oracle-1"]],
    ["ah_1_int-2", ["cs_lestercrest_dual-2", "prop_cs_walking_stick-2", "v_ind_ss_chair3_cso-2", "oracle-2", "v_ind_ss_chair01-2", "exportcamera-2", "cs_davenorton_dual-2", "player_zero_dual-2", "cs_stevehains_dual-2", "prop_npc_phone-2", "v_ilev_ss_door7-2"]],
    ["ah_1_int-3", ["cs_lestercrest_dual-3", "v_ind_ss_chair3_cso-3", "prop_cs_walking_stick-3", "prop_npc_phone-3", "cs_davenorton_dual-3", "v_ilev_ss_door7-3", "cs_stevehains_dual-3", "v_ind_ss_chair01-3", "exportcamera-3", "oracle-3", "player_zero_dual-3"]],
    ["ah_1_int-4", ["v_ind_ss_chair3_cso-4", "cs_lestercrest_dual-4", "prop_cs_walking_stick-4", "v_ind_ss_chair01-4", "exportcamera-4", "cs_davenorton_dual-4", "cs_stevehains_dual-4", "prop_npc_phone-4", "player_zero_dual-4", "oracle-4", "v_ilev_ss_door7-4"]],
    ["ah_1_int-5", ["prop_cs_walking_stick-5", "v_ind_ss_chair3_cso-5", "cs_lestercrest_dual-5", "cs_davenorton_dual-5", "cs_stevehains_dual-5", "exportcamera-5", "prop_npc_phone-5", "v_ilev_ss_door7-5", "v_ind_ss_chair01-5", "oracle-5", "player_zero_dual-5"]],
    ["ah_1_int-6", ["prop_cs_walking_stick-6", "v_ind_ss_chair3_cso-6", "cs_lestercrest_dual-6", "cs_davenorton_dual-6", "cs_stevehains_dual-6", "prop_npc_phone-6", "exportcamera-6", "v_ilev_ss_door7-6", "v_ind_ss_chair01-6", "player_zero_dual-6", "oracle-6"]],
    ["ah_1_int-7", ["prop_cs_walking_stick-7", "v_ind_ss_chair3_cso-7", "cs_lestercrest_dual-7", "cs_davenorton_dual-7", "cs_stevehains_dual-7", "oracle-7", "prop_npc_phone-7", "exportcamera-7", "v_ilev_ss_door7-7", "player_zero_dual-7", "v_ind_ss_chair01-7"]],
    ["ah_1_int-8", ["v_ind_ss_chair3_cso-8", "cs_lestercrest_dual-8", "prop_cs_walking_stick-8", "prop_npc_phone-8", "oracle-8", "cs_stevehains_dual-8", "player_zero_dual-8", "v_ilev_ss_door7-8", "v_ind_ss_chair01-8", "cs_davenorton_dual-8", "exportcamera-8"]],
    ["ah_1_mcs_1-0", ["v_ilev_janitor_frontdoor-0", "prop_cs_beer_bot_01-0", "csb_janitor_dual-0", "exportcamera-0", "p_ld_heist_bag_s_2-0", "player_zero_dual-0", "p_overalls_02_s-0", "p_ld_id_card_01-0"]],
    ["ah_2_ext_alt-0", ["prop_cs_walking_stick-0", "prop_phone_overlay_anim-0", "prop_poster_tube_02-0", "cs_lestercrest_dual-0", "n_ac5_ah_2_ext_p3_9050403-0", "p_blueprints_01_s-0", "prop_laptop_lester-0", "exportcamera-0", "player_one_dual-0", "prop_ld_case_01-0", "v_ilev_ss_door02-0", "player_zero_dual-0", "prop_phone_ing-0"]],
    ["ah_2_ext_alt-1", ["prop_phone_overlay_anim-1", "prop_poster_tube_02-1", "cs_lestercrest_dual-1", "n_ac5_ah_2_ext_p3_9050403-1", "prop_cs_walking_stick-1", "exportcamera-1", "prop_laptop_lester-1", "player_one_dual-1", "prop_ld_case_01-1", "v_ilev_ss_door02-1", "prop_phone_ing-1", "player_zero_dual-1", "p_blueprints_01_s-1"]],
    ["ah_2_ext_alt-2", ["prop_cs_walking_stick-2", "prop_phone_overlay_anim-2", "prop_poster_tube_02-2", "cs_lestercrest_dual-2", "n_ac5_ah_2_ext_p3_9050403-2", "v_ilev_ss_door02-2", "prop_ld_case_01-2", "prop_phone_ing-2", "player_one_dual-2", "prop_laptop_lester-2", "player_zero_dual-2", "p_blueprints_01_s-2", "exportcamera-2"]],
    ["ah_2_ext_alt-3", ["prop_cs_walking_stick-3", "prop_phone_overlay_anim-3", "prop_poster_tube_02-3", "cs_lestercrest_dual-3", "n_ac5_ah_2_ext_p3_9050403-3", "prop_phone_ing-3", "player_one_dual-3", "prop_ld_case_01-3", "prop_laptop_lester-3", "player_zero_dual-3", "p_blueprints_01_s-3", "v_ilev_ss_door02-3", "exportcamera-3"]],
    ["ah_2_ext_alt-4", ["prop_cs_walking_stick-4", "prop_phone_overlay_anim-4", "prop_poster_tube_02-4", "cs_lestercrest_dual-4", "n_ac5_ah_2_ext_p3_9050403-4", "player_zero_dual-4", "player_one_dual-4", "prop_ld_case_01-4", "prop_laptop_lester-4", "prop_phone_ing-4", "p_blueprints_01_s-4", "exportcamera-4", "v_ilev_ss_door02-4"]],
    ["ah_2_ext_alt-5", ["cs_lestercrest_dual-5", "prop_cs_walking_stick-5", "prop_phone_overlay_anim-5", "prop_poster_tube_02-5", "n_ac5_ah_2_ext_p3_9050403-5", "player_zero_dual-5", "prop_laptop_lester-5", "prop_ld_case_01-5", "prop_phone_ing-5", "exportcamera-5", "p_blueprints_01_s-5", "v_ilev_ss_door02-5", "player_one_dual-5"]],
    ["ah_2_ext_alt-6", ["prop_phone_overlay_anim-6", "prop_poster_tube_02-6", "prop_cs_walking_stick-6", "n_ac5_ah_2_ext_p3_9050403-6", "cs_lestercrest_dual-6", "prop_laptop_lester-6", "prop_ld_case_01-6", "prop_phone_ing-6", "exportcamera-6", "p_blueprints_01_s-6", "v_ilev_ss_door02-6", "player_one_dual-6", "player_zero_dual-6"]],
    ["ah_2_ext_alt-7", ["prop_cs_walking_stick-7", "prop_phone_overlay_anim-7", "prop_poster_tube_02-7", "cs_lestercrest_dual-7", "n_ac5_ah_2_ext_p3_9050403-7", "p_blueprints_01_s-7", "prop_laptop_lester-7", "exportcamera-7", "prop_ld_case_01-7", "player_one_dual-7", "player_zero_dual-7", "prop_phone_ing-7", "v_ilev_ss_door02-7"]],
    ["ah_2_ext_p4-0", ["cs_lestercrest_dual-0", "prop_cs_walking_stick-0", "ac1_ah_2_ext_p4_002-0", "ac1_ah_2_ext_p4_01-0", "exportcamera-0", "player_zero_dual-0", "player_one_dual-0", "prop_laptop_lester-0", "v_ilev_ss_door02-0"]],
    ["ah_2_ext_p4-1", ["ac1_ah_2_ext_p4_002-1", "prop_cs_walking_stick-1", "cs_lestercrest_dual-1", "exportcamera-1", "player_one_dual-1", "prop_laptop_lester-1", "v_ilev_ss_door02-1", "ac1_ah_2_ext_p4_01-1", "player_zero_dual-1"]],
    ["ah_2_ext_p4-2", ["prop_cs_walking_stick-2", "ac1_ah_2_ext_p4_002-2", "cs_lestercrest_dual-2", "exportcamera-2", "ac1_ah_2_ext_p4_01-2", "player_zero_dual-2", "prop_laptop_lester-2", "v_ilev_ss_door02-2", "player_one_dual-2"]],
    ["ah_3a_explosion-0", ["exportcamera-0"]],
    ["ah_3a_ext-0", ["p_cs_shot_glass_s^1-0", "p_cs_shot_glass_s^2-0", "prop_ceramic_jug_01-0", "cs_lestercrest_dual-0", "prop_cs_walking_stick-0", "p_cs_pour_tube_s^1-0", "p_cs_pour_tube_s^2-0", "player_one_dual-0", "p_cs_shot_glass_s-0", "p_cs_pour_tube_s-0", "player_zero_dual-0", "p_cs_joint_02-0", "exportcamera-0"]],
    ["ah_3a_ext-10", ["p_cs_shot_glass_s^1-10", "p_cs_shot_glass_s^2-10", "prop_ceramic_jug_01-10", "cs_lestercrest_dual-10", "prop_cs_walking_stick-10", "p_cs_pour_tube_s^1-10", "p_cs_pour_tube_s^2-10", "player_one_dual-10", "p_cs_pour_tube_s-10", "p_cs_shot_glass_s-10", "player_zero_dual-10", "p_cs_joint_02-10", "exportcamera-10"]],
    ["ah_3a_ext-11", ["p_cs_shot_glass_s^1-11", "p_cs_shot_glass_s^2-11", "prop_ceramic_jug_01-11", "cs_lestercrest_dual-11", "prop_cs_walking_stick-11", "p_cs_pour_tube_s^1-11", "p_cs_pour_tube_s^2-11", "player_one_dual-11", "p_cs_pour_tube_s-11", "p_cs_shot_glass_s-11", "player_zero_dual-11", "p_cs_joint_02-11", "exportcamera-11"]],
    ["ah_3a_ext-12", ["prop_ceramic_jug_01-12", "prop_cs_walking_stick-12", "cs_lestercrest_dual-12", "p_cs_pour_tube_s^1-12", "p_cs_pour_tube_s^2-12", "p_cs_shot_glass_s^1-12", "p_cs_shot_glass_s^2-12", "player_zero_dual-12", "exportcamera-12", "p_cs_pour_tube_s-12", "player_one_dual-12", "p_cs_shot_glass_s-12", "p_cs_joint_02-12"]],
    ["ah_3a_ext-13", ["p_cs_shot_glass_s^1-13", "p_cs_shot_glass_s^2-13", "prop_ceramic_jug_01-13", "prop_cs_walking_stick-13", "cs_lestercrest_dual-13", "p_cs_pour_tube_s^1-13", "p_cs_pour_tube_s^2-13", "p_cs_joint_02-13", "player_zero_dual-13", "exportcamera-13", "p_cs_shot_glass_s-13", "p_cs_pour_tube_s-13", "player_one_dual-13"]],
    ["ah_3a_ext-14", ["p_cs_shot_glass_s^1-14", "p_cs_shot_glass_s^2-14", "prop_ceramic_jug_01-14", "prop_cs_walking_stick-14", "cs_lestercrest_dual-14", "p_cs_pour_tube_s^1-14", "p_cs_pour_tube_s^2-14", "p_cs_joint_02-14", "player_zero_dual-14", "exportcamera-14", "p_cs_shot_glass_s-14", "p_cs_pour_tube_s-14", "player_one_dual-14"]],
    ["ah_3a_ext-15", ["p_cs_shot_glass_s^2-15", "prop_ceramic_jug_01-15", "prop_cs_walking_stick-15", "cs_lestercrest_dual-15", "p_cs_pour_tube_s^1-15", "p_cs_pour_tube_s^2-15", "p_cs_shot_glass_s^1-15", "player_zero_dual-15", "p_cs_joint_02-15", "p_cs_shot_glass_s-15", "exportcamera-15", "player_one_dual-15", "p_cs_pour_tube_s-15"]],
    ["ah_3a_ext-16", ["p_cs_shot_glass_s^1-16", "p_cs_shot_glass_s^2-16", "prop_ceramic_jug_01-16", "prop_cs_walking_stick-16", "cs_lestercrest_dual-16", "p_cs_pour_tube_s^1-16", "p_cs_pour_tube_s^2-16", "player_zero_dual-16", "p_cs_joint_02-16", "exportcamera-16", "p_cs_shot_glass_s-16", "p_cs_pour_tube_s-16", "player_one_dual-16"]],
    ["ah_3a_ext-17", ["p_cs_shot_glass_s^1-17", "cs_lestercrest_dual-17", "p_cs_shot_glass_s^2-17", "p_cs_pour_tube_s^2-17", "p_cs_pour_tube_s^1-17", "prop_cs_walking_stick-17", "prop_ceramic_jug_01-17", "player_one_dual-17", "player_zero_dual-17", "exportcamera-17", "p_cs_joint_02-17", "p_cs_pour_tube_s-17", "p_cs_shot_glass_s-17"]],
    ["ah_3a_ext-18", ["p_cs_shot_glass_s^1-18", "p_cs_shot_glass_s^2-18", "prop_ceramic_jug_01-18", "cs_lestercrest_dual-18", "prop_cs_walking_stick-18", "p_cs_pour_tube_s^1-18", "p_cs_pour_tube_s^2-18", "p_cs_shot_glass_s-18", "player_one_dual-18", "p_cs_pour_tube_s-18", "player_zero_dual-18", "p_cs_joint_02-18", "exportcamera-18"]],
    ["ah_3a_ext-19", ["p_cs_shot_glass_s^1-19", "p_cs_shot_glass_s^2-19", "prop_ceramic_jug_01-19", "cs_lestercrest_dual-19", "prop_cs_walking_stick-19", "p_cs_pour_tube_s^1-19", "p_cs_pour_tube_s^2-19", "p_cs_shot_glass_s-19", "player_one_dual-19", "p_cs_pour_tube_s-19", "player_zero_dual-19", "p_cs_joint_02-19", "exportcamera-19"]],
    ["ah_3a_ext-1", ["p_cs_shot_glass_s^2-1", "cs_lestercrest_dual-1", "prop_cs_walking_stick-1", "p_cs_shot_glass_s^1-1", "prop_ceramic_jug_01-1", "p_cs_pour_tube_s^1-1", "exportcamera-1", "p_cs_joint_02-1", "p_cs_pour_tube_s-1", "p_cs_pour_tube_s^2-1", "p_cs_shot_glass_s-1", "player_one_dual-1", "player_zero_dual-1"]],
    ["ah_3a_ext-20", ["p_cs_shot_glass_s^1-20", "p_cs_shot_glass_s^2-20", "prop_ceramic_jug_01-20", "prop_cs_walking_stick-20", "cs_lestercrest_dual-20", "p_cs_pour_tube_s^1-20", "p_cs_pour_tube_s^2-20", "player_zero_dual-20", "p_cs_joint_02-20", "p_cs_shot_glass_s-20", "exportcamera-20", "p_cs_pour_tube_s-20", "player_one_dual-20"]],
    ["ah_3a_ext-21", ["p_cs_shot_glass_s^2-21", "prop_ceramic_jug_01-21", "prop_cs_walking_stick-21", "cs_lestercrest_dual-21", "p_cs_pour_tube_s^1-21", "p_cs_pour_tube_s^2-21", "p_cs_shot_glass_s^1-21", "exportcamera-21", "p_cs_shot_glass_s-21", "p_cs_pour_tube_s-21", "player_one_dual-21", "p_cs_joint_02-21", "player_zero_dual-21"]],
    ["ah_3a_ext-22", ["p_cs_shot_glass_s^1-22", "p_cs_shot_glass_s^2-22", "prop_ceramic_jug_01-22", "prop_cs_walking_stick-22", "cs_lestercrest_dual-22", "p_cs_pour_tube_s^1-22", "p_cs_pour_tube_s^2-22", "p_cs_pour_tube_s-22", "player_one_dual-22", "p_cs_shot_glass_s-22", "player_zero_dual-22", "p_cs_joint_02-22", "exportcamera-22"]],
    ["ah_3a_ext-23", ["p_cs_pour_tube_s^2-23", "p_cs_pour_tube_s^1-23", "p_cs_shot_glass_s^1-23", "prop_ceramic_jug_01-23", "cs_lestercrest_dual-23", "prop_cs_walking_stick-23", "p_cs_shot_glass_s^2-23", "p_cs_shot_glass_s-23", "player_one_dual-23", "player_zero_dual-23", "exportcamera-23", "p_cs_joint_02-23", "p_cs_pour_tube_s-23"]],
    ["ah_3a_ext-24", ["p_cs_shot_glass_s^1-24", "p_cs_shot_glass_s^2-24", "prop_ceramic_jug_01-24", "prop_cs_walking_stick-24", "cs_lestercrest_dual-24", "p_cs_pour_tube_s^1-24", "p_cs_pour_tube_s^2-24", "player_zero_dual-24", "p_cs_joint_02-24", "p_cs_shot_glass_s-24", "exportcamera-24", "p_cs_pour_tube_s-24", "player_one_dual-24"]],
    ["ah_3a_ext-25", ["p_cs_shot_glass_s^1-25", "p_cs_shot_glass_s^2-25", "prop_ceramic_jug_01-25", "cs_lestercrest_dual-25", "prop_cs_walking_stick-25", "p_cs_pour_tube_s^1-25", "p_cs_pour_tube_s^2-25", "p_cs_shot_glass_s-25", "player_one_dual-25", "p_cs_pour_tube_s-25", "player_zero_dual-25", "p_cs_joint_02-25", "exportcamera-25"]],
    ["ah_3a_ext-26", ["p_cs_shot_glass_s^1-26", "p_cs_shot_glass_s^2-26", "prop_ceramic_jug_01-26", "cs_lestercrest_dual-26", "prop_cs_walking_stick-26", "p_cs_pour_tube_s^1-26", "p_cs_pour_tube_s^2-26", "player_zero_dual-26", "p_cs_joint_02-26", "exportcamera-26", "p_cs_shot_glass_s-26", "player_one_dual-26", "p_cs_pour_tube_s-26"]],
    ["ah_3a_ext-2", ["cs_lestercrest_dual-2", "p_cs_shot_glass_s^1-2", "prop_ceramic_jug_01-2", "prop_cs_walking_stick-2", "p_cs_shot_glass_s^2-2", "p_cs_pour_tube_s^1-2", "p_cs_joint_02-2", "p_cs_pour_tube_s-2", "exportcamera-2", "player_zero_dual-2", "p_cs_pour_tube_s^2-2", "player_one_dual-2", "p_cs_shot_glass_s-2"]],
    ["ah_3a_ext-3", ["p_cs_shot_glass_s^2-3", "prop_ceramic_jug_01-3", "prop_cs_walking_stick-3", "cs_lestercrest_dual-3", "p_cs_shot_glass_s^1-3", "player_zero_dual-3", "p_cs_joint_02-3", "p_cs_shot_glass_s-3", "exportcamera-3", "p_cs_pour_tube_s^1-3", "player_one_dual-3", "p_cs_pour_tube_s-3", "p_cs_pour_tube_s^2-3"]],
    ["ah_3a_ext-4", ["p_cs_shot_glass_s^2-4", "cs_lestercrest_dual-4", "p_cs_shot_glass_s^1-4", "prop_ceramic_jug_01-4", "prop_cs_walking_stick-4", "p_cs_pour_tube_s^2-4", "p_cs_shot_glass_s-4", "player_one_dual-4", "player_zero_dual-4", "exportcamera-4", "p_cs_joint_02-4", "p_cs_pour_tube_s-4", "p_cs_pour_tube_s^1-4"]],
    ["ah_3a_ext-5", ["cs_lestercrest_dual-5", "p_cs_shot_glass_s^2-5", "prop_ceramic_jug_01-5", "p_cs_shot_glass_s^1-5", "prop_cs_walking_stick-5", "p_cs_shot_glass_s-5", "player_one_dual-5", "p_cs_pour_tube_s^2-5", "p_cs_pour_tube_s-5", "p_cs_pour_tube_s^1-5", "p_cs_joint_02-5", "exportcamera-5", "player_zero_dual-5"]],
    ["ah_3a_ext-6", ["prop_cs_walking_stick-6", "prop_ceramic_jug_01-6", "cs_lestercrest_dual-6", "p_cs_shot_glass_s^1-6", "p_cs_shot_glass_s^2-6", "player_zero_dual-6", "p_cs_pour_tube_s^2-6", "p_cs_pour_tube_s^1-6", "p_cs_pour_tube_s-6", "p_cs_joint_02-6", "player_one_dual-6", "exportcamera-6", "p_cs_shot_glass_s-6"]],
    ["ah_3a_ext-7", ["p_cs_shot_glass_s^1-7", "p_cs_shot_glass_s^2-7", "prop_ceramic_jug_01-7", "prop_cs_walking_stick-7", "cs_lestercrest_dual-7", "player_one_dual-7", "p_cs_pour_tube_s-7", "p_cs_shot_glass_s-7", "p_cs_pour_tube_s^2-7", "player_zero_dual-7", "p_cs_joint_02-7", "p_cs_pour_tube_s^1-7", "exportcamera-7"]],
    ["ah_3a_ext-8", ["p_cs_shot_glass_s^1-8", "p_cs_shot_glass_s^2-8", "prop_ceramic_jug_01-8", "prop_cs_walking_stick-8", "cs_lestercrest_dual-8", "player_zero_dual-8", "p_cs_joint_02-8", "p_cs_pour_tube_s^1-8", "exportcamera-8", "p_cs_shot_glass_s-8", "p_cs_pour_tube_s^2-8", "player_one_dual-8", "p_cs_pour_tube_s-8"]],
    ["ah_3a_ext-9", ["p_cs_shot_glass_s^1-9", "p_cs_shot_glass_s^2-9", "prop_ceramic_jug_01-9", "cs_lestercrest_dual-9", "prop_cs_walking_stick-9", "player_zero_dual-9", "p_cs_joint_02-9", "p_cs_pour_tube_s^1-9", "exportcamera-9", "p_cs_shot_glass_s-9", "p_cs_pour_tube_s^2-9", "player_one_dual-9", "p_cs_pour_tube_s-9"]],
    ["ah_3a_int-0", ["cs_weap_petrol_can^1-0", "prop_cs_walking_stick-0", "cs_agency_toaster_smoke-0", "cs_lestercrest_dual-0", "prop_cs_lester_crate-0", "p_cs_power_cord_s-0", "player_zero_dual-0", "v_ilev_ss_door03-0", "cs_weap_petrol_can-0", "v_ilev_store_door-0", "p_cs_toaster_s-0", "w_am_jerrycan-0", "exportcamera-0", "p_overalls_02_s-0", "w_am_jerrycan^1-0", "v_ilev_ss_door02-0"]],
    ["ah_3a_mcs_3-0", ["exportcamera-0", "player_zero_dual-0", "hc_gunman_dual-0", "hc_gunman^1_dual-0", "v_ilev_fib_door1_s-0", "player_one_dual-0"]],
    ["ah_3a_mcs_3-1", ["exportcamera-1", "hc_gunman^1_dual-1", "player_one_dual-1", "hc_gunman_dual-1", "player_zero_dual-1", "v_ilev_fib_door1_s-1"]],
    ["ah_3a_mcs_6-0", ["p_cs_rope_tie_01_s^2-0", "p_cs_rope_tie_01_s^3-0", "p_cs_rope_tie_01_s^1-0", "p_cs_rope_tie_01_s-0", "exportcamera-0", "hc_gunman^1_dual-0", "player_zero_dual-0", "hc_gunman_dual-0", "player_one_dual-0"]],
    ["ah_3a_mcs_6-1", ["p_cs_rope_tie_01_s^3-1", "p_cs_rope_tie_01_s^1-1", "p_cs_rope_tie_01_s^2-1", "p_cs_rope_tie_01_s-1", "exportcamera-1", "player_one_dual-1", "hc_gunman_dual-1", "player_zero_dual-1", "hc_gunman^1_dual-1"]],
    ["ah_3b_ext-0", ["prop_cs_walking_stick-0", "cs_lestercrest_dual-0", "p_cs_shot_glass_s^1-0", "p_cs_shot_glass_s^2-0", "player_one_dual-0", "p_cs_shot_glass_s-0", "p_whiskey_bottle_s-0", "p_cs_pour_tube_s-0", "exportcamera-0", "player_zero_dual-0"]],
    ["ah_3b_ext-1", ["p_cs_shot_glass_s^2-1", "cs_lestercrest_dual-1", "prop_cs_walking_stick-1", "p_cs_shot_glass_s^1-1", "exportcamera-1", "player_one_dual-1", "p_cs_pour_tube_s-1", "p_cs_shot_glass_s-1", "player_zero_dual-1", "p_whiskey_bottle_s-1"]],
    ["ah_3b_ext-2", ["p_cs_shot_glass_s^2-2", "prop_cs_walking_stick-2", "cs_lestercrest_dual-2", "p_cs_shot_glass_s^1-2", "player_zero_dual-2", "exportcamera-2", "p_cs_shot_glass_s-2", "p_whiskey_bottle_s-2", "player_one_dual-2", "p_cs_pour_tube_s-2"]],
    ["ah_3b_ext-3", ["prop_cs_walking_stick-3", "cs_lestercrest_dual-3", "p_cs_shot_glass_s^1-3", "p_cs_shot_glass_s^2-3", "p_cs_shot_glass_s-3", "player_one_dual-3", "p_cs_pour_tube_s-3", "p_whiskey_bottle_s-3", "exportcamera-3", "player_zero_dual-3"]],
    ["ah_3b_ext-4", ["prop_cs_walking_stick-4", "cs_lestercrest_dual-4", "p_cs_shot_glass_s^1-4", "p_cs_shot_glass_s^2-4", "p_cs_shot_glass_s-4", "p_whiskey_bottle_s-4", "player_one_dual-4", "p_cs_pour_tube_s-4", "player_zero_dual-4", "exportcamera-4"]],
    ["ah_3b_ext-5", ["p_cs_shot_glass_s^1-5", "cs_lestercrest_dual-5", "p_cs_shot_glass_s^2-5", "prop_cs_walking_stick-5", "p_whiskey_bottle_s-5", "player_zero_dual-5", "exportcamera-5", "p_cs_pour_tube_s-5", "player_one_dual-5", "p_cs_shot_glass_s-5"]],
    ["ah_3b_ext-6", ["cs_lestercrest_dual-6", "p_cs_shot_glass_s^1-6", "prop_cs_walking_stick-6", "p_cs_shot_glass_s^2-6", "p_whiskey_bottle_s-6", "player_one_dual-6", "exportcamera-6", "p_cs_pour_tube_s-6", "player_zero_dual-6", "p_cs_shot_glass_s-6"]],
    ["ah_3b_ext-7", ["cs_lestercrest_dual-7", "p_cs_shot_glass_s^2-7", "p_cs_shot_glass_s^1-7", "prop_cs_walking_stick-7", "exportcamera-7", "p_cs_pour_tube_s-7", "player_zero_dual-7", "p_cs_shot_glass_s-7", "player_one_dual-7", "p_whiskey_bottle_s-7"]],
    ["ah_3b_ext-8", ["p_cs_shot_glass_s^2-8", "cs_lestercrest_dual-8", "prop_cs_walking_stick-8", "p_cs_shot_glass_s^1-8", "p_whiskey_bottle_s-8", "p_cs_shot_glass_s-8", "player_one_dual-8", "player_zero_dual-8", "p_cs_pour_tube_s-8", "exportcamera-8"]],
    ["ah_3b_int-0", ["ac3_ped_ah_3b_int_p1_028-0", "prop_cs_walking_stick-0", "prop_cs_lester_crate-0", "cs_lestercrest_dual-0", "player_zero_dual-0", "v_ilev_ss_door02-0", "cs_weap_petrol_can-0", "w_am_jerrycan-0", "exportcamera-0", "w_am_jerrycan^1-0", "player_one_dual-0"]],
    ["ah_3b_int-1", ["ac3_ped_ah_3b_int_p1_028-1", "cs_lestercrest_dual-1", "prop_cs_lester_crate-1", "prop_cs_walking_stick-1", "w_am_jerrycan-1", "player_zero_dual-1", "player_one_dual-1", "w_am_jerrycan^1-1", "exportcamera-1", "cs_weap_petrol_can-1", "v_ilev_ss_door02-1"]],
    ["ah_3b_int-2", ["ac3_ped_ah_3b_int_p1_028-2", "cs_lestercrest_dual-2", "prop_cs_lester_crate-2", "prop_cs_walking_stick-2", "exportcamera-2", "player_one_dual-2", "v_ilev_ss_door02-2", "cs_weap_petrol_can-2", "player_zero_dual-2", "w_am_jerrycan-2", "w_am_jerrycan^1-2"]],
    ["ah_3b_int-3", ["prop_cs_lester_crate-3", "prop_cs_walking_stick-3", "ac3_ped_ah_3b_int_p1_028-3", "cs_lestercrest_dual-3", "v_ilev_ss_door02-3", "cs_weap_petrol_can-3", "w_am_jerrycan-3", "player_one_dual-3", "player_zero_dual-3", "w_am_jerrycan^1-3", "exportcamera-3"]],
    ["ah_3b_int-4", ["prop_cs_lester_crate-4", "prop_cs_walking_stick-4", "ac3_ped_ah_3b_int_p1_028-4", "cs_lestercrest_dual-4", "cs_weap_petrol_can-4", "w_am_jerrycan-4", "exportcamera-4", "w_am_jerrycan^1-4", "player_one_dual-4", "v_ilev_ss_door02-4", "player_zero_dual-4"]],
    ["ah_3b_int-5", ["ac3_ped_ah_3b_int_p1_028-5", "cs_lestercrest_dual-5", "prop_cs_lester_crate-5", "prop_cs_walking_stick-5", "player_zero_dual-5", "exportcamera-5", "player_one_dual-5", "v_ilev_ss_door02-5", "cs_weap_petrol_can-5", "w_am_jerrycan-5", "w_am_jerrycan^1-5"]],
    ["ah_3b_int-6", ["prop_cs_lester_crate-6", "prop_cs_walking_stick-6", "ac3_ped_ah_3b_int_p1_028-6", "cs_lestercrest_dual-6", "player_one_dual-6", "exportcamera-6", "player_zero_dual-6", "v_ilev_ss_door02-6", "w_am_jerrycan-6", "w_am_jerrycan^1-6", "cs_weap_petrol_can-6"]],
    ["ah_3b_int-7", ["prop_cs_lester_crate-7", "ac3_ped_ah_3b_int_p1_028-7", "cs_lestercrest_dual-7", "prop_cs_walking_stick-7", "player_one_dual-7", "player_zero_dual-7", "exportcamera-7", "w_am_jerrycan-7", "w_am_jerrycan^1-7", "cs_weap_petrol_can-7", "v_ilev_ss_door02-7"]],
    ["ah_3b_int-8", ["prop_cs_lester_crate-8", "prop_cs_walking_stick-8", "ac3_ped_ah_3b_int_p1_028-8", "cs_lestercrest_dual-8", "exportcamera-8", "player_one_dual-8", "v_ilev_ss_door02-8", "player_zero_dual-8", "cs_weap_petrol_can-8", "w_am_jerrycan-8", "w_am_jerrycan^1-8"]],
    ["ah_3b_int-9", ["prop_cs_lester_crate-9", "prop_cs_walking_stick-9", "ac3_ped_ah_3b_int_p1_028-9", "cs_lestercrest_dual-9", "player_zero_dual-9", "w_am_jerrycan-9", "player_one_dual-9", "cs_weap_petrol_can-9", "exportcamera-9", "w_am_jerrycan^1-9", "v_ilev_ss_door02-9"]],
    ["ah_3b_mcs_1-0", ["s_m_y_pilot_01_dual-0", "ac11_ah_3b_mcs_1_007-0", "p_parachute_s^2-0", "p_parachute_s^1-0", "p_ld_heist_bag_s_1-0", "player_one_dual-0", "p_parachute_s-0", "hc_gunman_dual-0", "exportcamera-0", "player_zero_dual-0", "maverick-0"]],
    ["ah_3b_mcs_2-0", ["prop_fib_skylight_piece-0", "prop_fib_skylight_plug-0", "prop_glass_suck_holder-0", "prop_glass_suck_holder^1-0", "prop_glasscutter_01-0", "p_parachute_s^1-0", "exportcamera-0", "p_parachute_s^2-0", "player_zero_dual-0", "p_parachute_s-0", "player_one_dual-0", "p_ld_heist_bag_s-0", "hc_gunman_dual-0"]],
    ["ah_3b_mcs_2-1", ["prop_fib_skylight_plug-1", "prop_glasscutter_01-1", "prop_glass_suck_holder^1-1", "prop_glass_suck_holder-1", "prop_fib_skylight_piece-1", "p_parachute_s^2-1", "hc_gunman_dual-1", "player_one_dual-1", "exportcamera-1", "p_parachute_s^1-1", "player_zero_dual-1", "p_parachute_s-1", "p_ld_heist_bag_s-1"]],
    ["ah_3b_mcs_2-2", ["prop_fib_skylight_piece-2", "prop_fib_skylight_plug-2", "prop_glass_suck_holder-2", "prop_glasscutter_01-2", "prop_glass_suck_holder^1-2", "player_one_dual-2", "player_zero_dual-2", "exportcamera-2", "hc_gunman_dual-2", "p_ld_heist_bag_s-2", "p_parachute_s-2", "p_parachute_s^1-2", "p_parachute_s^2-2"]],
    ["ah_3b_mcs_2-3", ["prop_fib_skylight_piece-3", "prop_fib_skylight_plug-3", "prop_glass_suck_holder-3", "prop_glass_suck_holder^1-3", "prop_glasscutter_01-3", "exportcamera-3", "p_parachute_s^2-3", "p_parachute_s^1-3", "player_one_dual-3", "p_ld_heist_bag_s-3", "p_parachute_s-3", "hc_gunman_dual-3", "player_zero_dual-3"]],
    ["ah_3b_mcs_3-0", ["player_zero_dual-0", "prop_phone_overlay_anim-0", "exportcamera-0", "prop_monitor_01b-0", "v_corp_offchair-0", "prop_phone_ing-0"]],
    ["ah_3b_mcs_4-0", ["prop_phone_overlay_anim-0", "exportcamera-0", "v_corp_offchair-0", "player_zero_dual-0", "prop_monitor_01b-0", "w_ar_carbinerifle-0", "prop_phone_ing-0"]],
    ["ah_3b_mcs_5-0", ["prop_phone_overlay_anim-0", "prop_phone_ing-0", "ac4_ah_3b_mcs_5_00-0", "exportcamera-0", "player_zero_dual-0", "w_ar_carbinerifle-0", "prop_monitor_01b-0"]],
    ["ah_3b_mcs_6_p1-0", ["w_ar_carbinerifle^1-0", "w_ar_carbinerifle^2-0", "p_crahsed_heli_s-0", "player_one_dual-0", "s_m_y_pilot_01-0", "w_ar_carbinerifle-0", "p_bloodsplat_s-0", "hc_gunman_dual-0", "player_zero_dual-0", "exportcamera-0"]],
    ["ah_3b_mcs_7-0", ["hc_gunman_dual-0", "n_ac2_ah_3b_mcs_7_009-0", "p_cs_rope_tie_01_s^1-0", "p_cs_rope_tie_01_s^2-0", "exportcamera-0", "p_rpulley_s^1-0", "p_rpulley_s^2-0", "player_one_dual-0", "p_cs_rope_tie_01_s-0", "player_zero_dual-0", "p_rpulley_s-0"]],
    ["amb@bagels@male@walking@", ["static"]],
    ["amb@code_human_cower@female@base", ["base"]],
    ["amb@code_human_cower@female@enter", ["enter"]],
    ["amb@code_human_cower@female@exit", ["exit_flee", "exit"]],
    ["amb@code_human_cower@female@idle_a", ["idle_c", "idle_a", "idle_d", "idle_b"]],
    ["amb@code_human_cower@female@react_cowering", ["base_back_left", "base_back_left_exit", "base_left", "flinch", "base_left_exit", "base_back_right_exit", "base_front_exit", "base_right", "base_front", "base_back_right", "base_right_exit"]],
    ["amb@code_human_cower@male@base", ["base"]],
    ["amb@code_human_cower@male@enter", ["enter"]],
    ["amb@code_human_cower@male@exit", ["exit_flee", "exit"]],
    ["amb@code_human_cower@male@idle_a", ["idle_b", "idle_a", "idle_c"]],
    ["amb@code_human_cower@male@idle_b", ["idle_d"]],
    ["amb@code_human_cower@male@react_cowering", ["base_back_left", "base_back_left_exit", "base_back_right", "base_front_exit", "base_front", "base_left", "base_left_exit", "base_right", "base_right_exit", "base_back_right_exit", "flinch"]],
    ["amb@code_human_cower_stand@female@base", ["base"]],
    ["amb@code_human_cower_stand@female@enter", ["enter"]],
    ["amb@code_human_cower_stand@female@exit", ["exit_flee", "exit"]],
    ["amb@code_human_cower_stand@female@idle_a", ["idle_c", "idle_a", "idle_d", "idle_b"]],
    ["amb@code_human_cower_stand@female@react_cowering", ["base_back_left_exit", "base_back_left", "base_front", "base_front_exit", "base_back_right", "base_left", "base_left_exit", "base_right", "flinch", "base_back_right_exit", "base_right_exit"]],
    ["amb@code_human_cower_stand@male@base", ["base"]],
    ["amb@code_human_cower_stand@male@enter", ["enter"]],
    ["amb@code_human_cower_stand@male@exit", ["exit_flee", "exit"]],
    ["amb@code_human_cower_stand@male@idle_a", ["idle_b", "idle_c", "idle_d", "idle_a"]],
    ["amb@code_human_cower_stand@male@react_cowering", ["base_right", "base_back_left", "flinch", "base_back_right", "base_front_exit", "base_left", "idle_d", "base_back_left_exit", "base_back_right_exit", "base_left_exit", "base_front", "base_right_exit"]],
    ["amb@code_human_cross_road@female@base", ["base"]],
    ["amb@code_human_cross_road@female@idle_a", ["idle_c", "idle_a", "idle_b"]],
    ["amb@code_human_cross_road@female@idle_enter", ["idle_intro"]],
    ["amb@code_human_cross_road@male@base", ["base"]],
    ["amb@code_human_cross_road@male@idle_a", ["idle_e", "idle_b", "idle_a", "idle_c"]],
    ["amb@code_human_cross_road@male@idle_enter", ["idle_enter"]],
    ["amb@code_human_in_bus_passenger_idles@female@sit@base", ["base"]],
    ["amb@code_human_in_bus_passenger_idles@female@sit@idle_a", ["idle_b", "idle_a"]],
    ["amb@code_human_in_bus_passenger_idles@female@tablet@base", ["base"]],
    ["amb@code_human_in_bus_passenger_idles@female@tablet@idle_a", ["idle_a", "idle_b"]],
    ["amb@code_human_in_bus_passenger_idles@male@coffee@base", ["base"]],
    ["amb@code_human_in_bus_passenger_idles@male@coffee@idle_a", ["idle_b", "idle_c", "idle_a"]],
    ["amb@code_human_in_bus_passenger_idles@male@sit@base", ["base"]],
    ["amb@code_human_in_bus_passenger_idles@male@sit@idle_a", ["idle_a", "idle_b", "idle_c"]],
    ["amb@code_human_in_bus_passenger_idles@male@sit@idle_b", ["idle_e", "idle_d"]],
    ["amb@code_human_in_car_idles@generic@ds@base", ["base"]],
    ["amb@code_human_in_car_idles@generic@ds@idle_a", ["idle_a", "idle_c", "idle_b"]],
    ["amb@code_human_in_car_idles@generic@ds@idle_b", ["idle_d", "idle_f", "idle_e"]],
    ["amb@code_human_in_car_idles@generic@ds@idle_c", ["idle_g", "idle_i", "idle_h"]],
    ["amb@code_human_in_car_idles@generic@ds@idle_d", ["idle_l", "idle_j", "idle_k"]],
    ["amb@code_human_in_car_idles@generic@ps@base", ["base"]],
    ["amb@code_human_in_car_idles@generic@ps@idle_a", ["idle_b", "idle_c", "idle_a"]],
    ["amb@code_human_in_car_idles@generic@ps@idle_b", ["idle_e", "idle_d", "idle_f"]],
    ["amb@code_human_in_car_idles@generic@ps@idle_c", ["idle_g", "idle_i", "idle_h"]],
    ["amb@code_human_in_car_idles@generic@ps@idle_d", ["idle_j", "idle_l", "idle_k"]],
    ["amb@code_human_in_car_idles@generic@ps@idle_e", ["idle_n", "idle_m"]],
    ["amb@code_human_in_car_idles@generic@rds@base", ["base"]],
    ["amb@code_human_in_car_idles@generic@rds@idle_a", ["idle_b", "idle_c", "idle_a"]],
    ["amb@code_human_in_car_idles@generic@rds@idle_b", ["idle_e", "idle_d", "idle_f"]],
    ["amb@code_human_in_car_idles@generic@rds@idle_c", ["idle_g", "idle_i", "idle_h"]],
    ["amb@code_human_in_car_idles@generic@rds@idle_d", ["idle_k", "idle_j", "idle_l"]],
    ["amb@code_human_in_car_idles@generic@rds@idle_e", ["idle_n", "idle_m"]],
    ["amb@code_human_in_car_idles@generic@rps@base", ["base"]],
    ["amb@code_human_in_car_idles@generic@rps@idle_a", ["idle_b", "idle_a", "idle_c"]],
    ["amb@code_human_in_car_idles@generic@rps@idle_b", ["idle_e", "idle_d", "idle_f"]],
    ["amb@code_human_in_car_idles@generic@rps@idle_c", ["idle_g", "idle_i", "idle_h"]],
    ["amb@code_human_in_car_idles@generic@rps@idle_d", ["idle_k", "idle_j", "idle_l"]],
    ["amb@code_human_in_car_idles@generic@rps@idle_e", ["idle_n", "idle_m"]],
    ["amb@code_human_in_car_idles@low@ds@base", ["base"]],
    ["amb@code_human_in_car_idles@low@ds@idle_a", ["idle_a", "idle_c", "idle_b"]],
    ["amb@code_human_in_car_idles@low@ds@idle_b", ["idle_d", "idle_f", "idle_e"]],
    ["amb@code_human_in_car_idles@low@ds@idle_c", ["idle_g", "idle_i", "idle_h"]],
    ["amb@code_human_in_car_idles@low@ds@idle_d", ["idle_j", "idle_l", "idle_k"]],
    ["amb@code_human_in_car_idles@low@ps@base", ["base"]],
    ["amb@code_human_in_car_idles@low@ps@idle_a", ["idle_b", "idle_a", "idle_c"]],
    ["amb@code_human_in_car_idles@low@ps@idle_b", ["idle_e", "idle_f", "idle_d"]],
    ["amb@code_human_in_car_idles@low@ps@idle_c", ["idle_h", "idle_i", "idle_g"]],
    ["amb@code_human_in_car_idles@low@ps@idle_d", ["idle_k", "idle_l", "idle_j"]],
    ["amb@code_human_in_car_idles@low@ps@idle_e", ["idle_n", "idle_m"]],
    ["amb@code_human_in_car_idles@van@ds@base", ["base"]],
    ["amb@code_human_in_car_idles@van@ds@idle_a", ["idle_a", "idle_c", "idle_b"]],
    ["amb@code_human_in_car_idles@van@ds@idle_b", ["idle_d", "idle_f", "idle_e"]],
    ["amb@code_human_in_car_idles@van@ds@idle_c", ["idle_g", "idle_h", "idle_i"]],
    ["amb@code_human_in_car_idles@van@ds@idle_d", ["idle_j", "idle_l", "idle_k"]],
    ["amb@code_human_in_car_idles@van@ps@base", ["base"]],
    ["amb@code_human_in_car_idles@van@ps@idle_a", ["idle_b", "idle_a", "idle_c"]],
    ["amb@code_human_in_car_idles@van@ps@idle_b", ["idle_e", "idle_d", "idle_f"]],
    ["amb@code_human_in_car_idles@van@ps@idle_c", ["idle_h", "idle_i", "idle_g"]],
    ["amb@code_human_in_car_idles@van@ps@idle_d", ["idle_k", "idle_l", "idle_j"]],
    ["amb@code_human_in_car_idles@van@ps@idle_e", ["idle_n", "idle_m"]],
    ["amb@code_human_in_car_mp_actions@arse_pick@bodhi@rds@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@arse_pick@bodhi@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@arse_pick@std@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@arse_pick@std@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@arse_pick@std@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@dance@bodhi@ds@base", ["exit_fp", "idle_a_fp", "enter_fp"]],
    ["amb@code_human_in_car_mp_actions@dance@bodhi@ps@base", ["enter_fp", "exit_fp", "idle_a_fp"]],
    ["amb@code_human_in_car_mp_actions@dance@bodhi@rds@base", ["idle_b", "idle_a", "idle_c", "enter", "exit", "enter_fp", "idle_a_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@dance@bodhi@rps@base", ["enter", "idle_a", "idle_c", "exit", "enter_fp", "exit_fp", "idle_a_fp"]],
    ["amb@code_human_in_car_mp_actions@dance@low@ds@base", ["enter", "idle_a", "exit", "enter_fp", "idle_a_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@dance@low@ps@base", ["enter", "idle_b", "idle_c", "idle_a", "exit", "idle_a_fp", "enter_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@dance@std@ds@base", ["enter", "idle_a", "exit", "enter_fp", "idle_a_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@dance@std@ps@base", ["enter", "idle_a_fp", "enter_fp", "exit_fp", "idle_b", "idle_a", "idle_c", "exit"]],
    ["amb@code_human_in_car_mp_actions@dance@std@rds@base", ["enter", "enter_fp", "idle_a_fp", "idle_b", "exit_fp", "idle_a", "idle_c", "exit"]],
    ["amb@code_human_in_car_mp_actions@dance@std@rps@base", ["enter", "enter_fp", "idle_a_fp", "idle_b", "exit_fp", "idle_a", "idle_c", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink@bodhi@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink@bodhi@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink@low@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink@low@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink@std@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink@std@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink@std@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink@std@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink_bottle@bodhi@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink_bottle@bodhi@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink_bottle@low@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink_bottle@low@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink_bottle@std@ds@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink_bottle@std@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink_bottle@std@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@drink_bottle@std@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@finger@bodhi@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@finger@bodhi@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@finger@low@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@finger@low@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@finger@std@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@finger@std@ps@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@finger@std@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@finger@std@rps@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@first_person@smoke@std@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@first_person@smoke@std@ps@base", ["enter", "idle_b", "idle_a", "idle_c", "exit"]],
    ["amb@code_human_in_car_mp_actions@first_person@smoke@std@rds@base", ["enter", "idle_b", "idle_a", "idle_c", "exit"]],
    ["amb@code_human_in_car_mp_actions@first_person@smoke@std@rps@base", ["enter", "idle_b", "idle_a", "idle_c", "exit"]],
    ["amb@code_human_in_car_mp_actions@fist_pump@bodhi@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@fist_pump@bodhi@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@fist_pump@low@base", ["idle_a"]],
    ["amb@code_human_in_car_mp_actions@fist_pump@low@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@fist_pump@low@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@fist_pump@std@ds@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@fist_pump@std@ps@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@fist_pump@std@rds@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@fist_pump@std@rps@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_a@bodhi@rds@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_a@bodhi@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_a@low@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_a@low@ps@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_a@std@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_a@std@ps@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_a@std@rds@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_a@std@rps@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_b@low@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_b@low@ps@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_b@std@ds@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_b@std@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_b@std@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@gang_sign_b@std@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@grab_crotch@bodhi@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@grab_crotch@bodhi@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@grab_crotch@low@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@grab_crotch@low@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@grab_crotch@std@ds@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@grab_crotch@std@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@grab_crotch@std@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@grab_crotch@std@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@nod@bodhi@ds@base", ["nod_no_fp"]],
    ["amb@code_human_in_car_mp_actions@nod@low@ds@base", ["nod_no", "nod_no_fp"]],
    ["amb@code_human_in_car_mp_actions@nod@std@ds@base", ["nod_no", "nod_no_fp"]],
    ["amb@code_human_in_car_mp_actions@rock@bodhi@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@rock@bodhi@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@rock@low@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@rock@low@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@rock@std@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@rock@std@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@rock@std@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@rock@std@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@smoke@bodhi@rds@base", ["enter", "idle_a", "exit", "enter_fp", "idle_a_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@smoke@bodhi@rps@base", ["enter", "idle_a", "exit", "enter_fp", "idle_a_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@smoke@low@ds@base", ["enter", "idle_a", "exit", "idle_a_fp", "enter_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@smoke@low@ps@base", ["enter", "idle_c", "idle_b", "idle_a", "exit", "idle_a_fp", "enter_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@smoke@std@ds@base", ["enter", "idle_a", "exit", "idle_a_fp", "enter_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@smoke@std@ps@base", ["enter", "idle_b", "idle_a", "idle_c", "exit", "enter_fp", "idle_a_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@smoke@std@rds@base", ["enter", "idle_a", "idle_b", "idle_c", "exit", "enter_fp", "idle_a_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@smoke@std@rps@base", ["enter", "idle_a", "idle_b", "idle_c", "exit", "enter_fp", "idle_a_fp", "exit_fp"]],
    ["amb@code_human_in_car_mp_actions@tit_squeeze@bodhi@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@tit_squeeze@bodhi@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@tit_squeeze@low@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@tit_squeeze@std@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@tit_squeeze@std@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@tit_squeeze@std@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@v_sign@bodhi@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@v_sign@bodhi@rps@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@v_sign@low@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@v_sign@low@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@v_sign@std@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@v_sign@std@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@v_sign@std@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@v_sign@std@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@wank@bodhi@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@wank@bodhi@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@wank@bodhi@rps@", ["idle_a"]],
    ["amb@code_human_in_car_mp_actions@wank@low@ds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@wank@low@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@wank@std@ds@base", ["idle_a", "enter", "exit"]],
    ["amb@code_human_in_car_mp_actions@wank@std@ps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@wank@std@rds@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_mp_actions@wank@std@rps@base", ["enter", "idle_a", "exit"]],
    ["amb@code_human_in_car_music@generic@ds@base", ["base"]],
    ["amb@code_human_in_car_music@generic@ds@idle_a", ["idle_a", "idle_b", "idle_c"]],
    ["amb@code_human_in_car_music@generic@ps@base", ["base"]],
    ["amb@code_human_in_car_music@generic@ps@idle_a", ["idle_a", "idle_c", "idle_b"]],
    ["amb@code_human_in_car_music@generic@rds@base", ["base"]],
    ["amb@code_human_in_car_music@generic@rds@idle_a", ["idle_a", "idle_c", "idle_b"]],
    ["amb@code_human_in_car_music@generic@rps@base", ["base"]],
    ["amb@code_human_in_car_music@generic@rps@idle_a", ["idle_a", "idle_b", "idle_c"]],
    ["amb@code_human_in_car_music@low@ds@base", ["base"]],
    ["amb@code_human_in_car_music@low@ds@idle_a", ["idle_a", "idle_b", "idle_c"]],
    ["amb@code_human_in_car_music@low@ps@base", ["base"]],
    ["amb@code_human_in_car_music@low@ps@idle_a", ["idle_a", "idle_c", "idle_b"]],
    ["amb@code_human_in_car_music@van@ds@base", ["base"]],
    ["amb@code_human_in_car_music@van@ds@idle_a", ["idle_a", "idle_b", "idle_c"]],
    ["amb@code_human_in_car_music@van@ps@base", ["base"]],
    ["amb@code_human_in_car_music@van@ps@idle_a", ["idle_a", "idle_c", "idle_b"]],
    ["amb@code_human_on_bike_idles@chopper@front@base", ["base", "chopper_base"]],
    ["amb@code_human_on_bike_idles@chopper@front@idle_a", ["idle_d", "idle_b", "idle_e", "idle_a", "idle_c", "chopper_idle_a", "chopper_idle_e", "chopper_idle_b", "chopper_idle_c", "chopper_idle_d"]],
    ["amb@code_human_on_bike_idles@dirt@front@base", ["base", "dirt_base"]],
    ["amb@code_human_on_bike_idles@dirt@front@idle_a", ["idle_a", "idle_c", "idle_b", "idle_d", "idle_e", "dirt_idle_a", "dirt_idle_e", "dirt_idle_b", "dirt_idle_c", "dirt_idle_d"]],
    ["amb@code_human_on_bike_idles@police@front@base", ["base", "police_base"]],
    ["amb@code_human_on_bike_idles@police@front@idle_a", ["idle_c", "idle_b", "idle_d", "idle_e", "idle_a", "police_idle_a", "police_idle_b", "police_idle_e", "police_idle_c", "police_idle_d"]],
    ["amb@code_human_on_bike_idles@quad@front@base", ["base", "quad_base"]],
    ["amb@code_human_on_bike_idles@quad@front@idle_a", ["idle_d", "idle_a", "idle_e", "idle_b", "idle_c", "quad_idle_a", "quad_idle_b", "quad_idle_e", "quad_idle_c", "quad_idle_d"]],
    ["amb@code_human_on_bike_idles@scooter@front@base", ["base", "scooter_base"]],
    ["amb@code_human_on_bike_idles@scooter@front@idle_a", ["idle_a", "idle_c", "idle_d", "idle_e", "idle_b", "scooter_idle_a", "scooter_idle_e", "scooter_idle_b", "scooter_idle_c", "scooter_idle_d"]],
    ["amb@code_human_on_bike_idles@sports@front@base", ["base", "sport_base"]],
    ["amb@code_human_on_bike_idles@sports@front@idle_a", ["idle_d", "idle_a", "idle_e", "idle_b", "idle_c", "sport_idle_a", "sports_idle_e", "sport_idle_b", "sports_idle_c", "sports_idle_d"]],
    ["amb@code_human_police_crowd_control@base", ["base"]],
    ["amb@code_human_police_crowd_control@idle_a", ["idle_a", "idle_b", "idle_c"]],
    ["amb@code_human_police_crowd_control@idle_b", ["idle_d", "idle_f", "idle_e"]],
    ["amb@code_human_police_crowd_control@idle_intro", ["idle_intro"]],
    ["amb@code_human_police_investigate@base", ["base"]],
    ["amb@code_human_police_investigate@idle_a", ["idle_a", "idle_b", "idle_c"]],
    ["amb@code_human_police_investigate@idle_b", ["idle_f", "idle_d", "idle_e"]],
    ["amb@code_human_police_investigate@idle_intro", ["idle_intro"]],
    ["amb@code_human_train_driver@base", ["sit"]],
    ["amb@code_human_train_driver@idle_a", ["idle_a", "idle_b", "idle_c"]],
    ["amb@code_human_wander_clipboard@male@base", ["static", "base"]],
    ["amb@code_human_wander_clipboard@male@idle_a", ["idle_b", "idle_a"]],
    ["amb@code_human_wander_drinking@beer@female@base", ["static", "base"]],
    ["amb@code_human_wander_drinking@beer@female@idle_a", ["idle_a", "idle_c", "idle_b"]],
    ["amb@code_human_wander_drinking@beer@male@base", ["static", "base"]],
    ["amb@code_human_wander_drinking@beer@male@idle_a", ["idle_a", "idle_b", "idle_c"]],
    ["amb@code_human_wander_drinking@female@base", ["static", "base"]],
    ["amb@code_human_wander_drinking@female@idle_a", ["idle_b", "idle_c", "idle_a"]],
    ["amb@code_human_wander_drinking@male@base", ["static", "base"]],
    ["amb@code_human_wander_drinking@male@idle_a", ["idle_c", "idle_b", "idle_a"]],
    ["amb@code_human_wander_drinking_fat@beer@female@base", ["static", "base"]],
    ["amb@code_human_wander_drinking_fat@beer@female@idle_a", ["idle_a", "idle_b", "idle_c"]],
    ["amb@code_human_wander_drinking_fat@beer@male@base", ["static", "base"]],
    ["amb@code_human_wander_drinking_fat@beer@male@idle_a", ["idle_a", "idle_b", "idle_c"]],
    ["amb@code_human_wander_drinking_fat@female@base", ["static", "base"]],
    ["amb@code_human_wander_drinking_fat@female@idle_a", ["idle_a", "idle_c", "idle_b"]],
    ["amb@code_human_wander_drinking_fat@male@base", ["static", "base"]],
    ["amb@code_human_wander_drinking_fat@male@idle_a", ["idle_c", "idle_b", "idle_a"]],
    ["amb@code_human_wander_eating_donut@female@base", ["static", "base"]],
    ["amb@code_human_wander_eating_donut@female@idle_a", ["idle_b", "idle_a", "idle_c"]],
];

let localPlayer = alt.getLocalPlayer();

class AnimPlayer {
    constructor() {
        this.allList = AnimList;
        this.currentList = [];
        this.dist = 0;
        this.name = 0;
        this.launched = false;
        this.flag = 1;
        this.request = '';
        this.autoPlay = true;
    }
    toggle(subString = '') {
        if (!this.launched) {
            this.createCurrentList(subString);
            this.flag = 1;
            this.launched = true;
        } else {
            this.play(false);
            this.launched = false;
        }
    }
    createCurrentList(subString = '') {
        this.currentList = [];
        this.dist = 0;
        this.name = 0;
        this.request = subString;
        for (let idx in this.allList) {
            let list = [];
            if (this.allList[idx][0].indexOf(subString) != -1) {
                list = this.allList[idx];
                list[2] = idx;
                this.currentList.push(list);
            } else {
                list[0] = this.allList[idx][0];
                list[1] = [];
                for (let i = 0; i < this.allList[idx][1].length; i++) {
                    if (this.allList[idx][1][i].indexOf(subString) != -1) {
                        list[1].push(this.allList[idx][1][i]);
                        list[2] = idx;
                    }
                }
                if (list.length == 3 && list[1].length) this.currentList.push(list);
            }
        }
        if (this.currentList.length) {
            if (this.launched && this.autoPlay) this.play();
        } else {
            chat.pushLine(`Nie znaleziono nic pod nazwa '${subString}'`);
        }
    }
    setFlag(value) {
        if (this.launched) {
            if (Number.isInteger(value)) this.flag = value;
            else if (value === 'up') this.flag += 1;
            else if (value === 'down' && (this.flag - 1) !== 0) this.flag -= 1;
            else chat.pushLine('Flaga nie jest prawidlowa!');
            if (this.autoPlay) this.play();
        } else chat.pushLine('Musisz miec otworzone menu animacji.');
    }
    change(dist = false, name = false) {
        if (dist !== false && this.currentList.length > 1) {
            if (dist > (this.currentList.length - 1)) this.dist = dist - this.currentList.length;
            else if (dist < 0) this.dist = dist + this.currentList.length;
            else this.dist = dist;
            this.name = 0;
        }
        if (name !== false && this.currentList[this.dist][1].length > 1) {
            if (name > (this.currentList[this.dist][1].length - 1)) this.name = name - this.currentList[this.dist][1].length;
            else if (name < 0) this.name = name + this.currentList[this.dist][1].length;
            else this.name = name;
        }
        if (this.autoPlay) this.play();
    }
    play(toggle = true) {
        alt.log('Triggered anim player play.');
        if (this.launched) {
            if (toggle) {
                game.requestAnimDict(this.currentList[this.dist][0]);

                // while (!game.hasAnimDictLoaded(this.currentList[this.dist][0])) { // alt.wait() seems to be not working
                //     game.requestAnimDict(this.currentList[this.dist][0]);
                //     alt.wait(0);
                // }

                alt.log(`Playing anim dict: ${this.currentList[this.dist][0]} name: ${this.currentList[this.dist][1][this.name]} flag: ${this.flag}`);
                game.taskPlayAnim(localPlayer.scriptID, this.currentList[this.dist][0], this.currentList[this.dist][1][this.name],
                    8.0, 1, -1, this.flag, 0.0, false, false, false);
            }
            else {
                alt.log(`Stopping anim dict: ${this.currentList[this.dist][0]} name: ${this.currentList[this.dist][1][this.name]}`);
                game.stopAnimTask(localPlayer.scriptID, this.currentList[this.dist][0], this.currentList[this.dist][1][this.name], 0);
            }
        }
    }
}

let animPlayer = null;

alt.on('update', () => {
    if (animPlayer != null && animPlayer.launched && animPlayer.currentList.length > 0) {
        const dist = animPlayer.currentList[animPlayer.dist][0];
        const nameList = animPlayer.currentList[animPlayer.dist][1];
        const name = nameList[animPlayer.name];
        const id = animPlayer.currentList[animPlayer.dist][2];
        const flag = animPlayer.flag;

        const infoListDist = `(${animPlayer.dist + 1} / ${animPlayer.currentList.length})`;
        const infoListName = `(${animPlayer.name + 1} / ${animPlayer.currentList[animPlayer.dist][1].length})`;
        const infoRequest = (animPlayer.request.length) ? `~b~Request : '${animPlayer.request}'` : '~b~Wszystkie';

        drawText(`Anim: ${infoListDist} ${infoListName} | ${infoRequest}`, [0.5, 0.04], 4, [255, 255, 255, 200], 0.5, true);

        //Draw prew name dist
        const namePrev = (animPlayer.name - 1 >= 0) ? nameList[animPlayer.name - 1] : false;
        if (namePrev)
            drawText(`~y~${dist} ~w~| ~b~${namePrev}`, [0.5, 0.08], 4, [255, 255, 255, 100], 0.45, true);

        //Draw current name dist
        drawText(`~g~[${id}] ~y~${dist} ~w~| ~b~${name} ~r~(${flag})`, [0.5, 0.12], 4, [255, 255, 255, 200], 0.5, true);

        //Draw next name dist
        const nameNext = (animPlayer.name + 1 < nameList.length) ? nameList[animPlayer.name + 1] : false;
        if (nameNext)
            drawText(`~y~${dist} ~w~| ~b~${nameNext} `, [0.5, 0.16], 4, [255, 255, 255, 100], 0.45, true);


        if (game.isControlPressed(0, controlsIds.F)) { // F
            drawText(`~b~LEWO / PRAWO ~w~zmian anim dict~n~`, [0.5, 0.75], 4, [255, 255, 255, 200], 0.5, true);
            drawText(`~b~CTRL + LEWO / PRAWO ~w~zmiana anim dict o 100~n~`, [0.5, 0.78], 4, [255, 255, 255, 200], 0.5, true);
            drawText(`~b~SHIFT + LEWO / PRAWO ~w~zmiana anim dict o 10~n~`, [0.5, 0.81], 4, [255, 255, 255, 200], 0.5, true);
            drawText(`~b~GORA / DOL ~w~zmiana nazwy anim~n~`, [0.5, 0.84], 4, [255, 255, 255, 200], 0.5, true);
            drawText(`~b~CTRL + GORA / DOL ~w~zmiana flagi anim~n~`, [0.5, 0.87], 4, [255, 255, 255, 200], 0.5, true);
            return;
        } else {
            drawText(`~w~Naciśnij F aby wyświetlić pomoc~n~`, [0.5, 0.93], 4, [255, 255, 255, 100], 0.45, true);
        }
    }
});

alt.on('keydown', (key) => {
    if (chat.isOpen() || menusManager.viewOpened) return;

    if (key == 0x67) { // NUM PAD 7 KEY
        if (animPlayer == null) {
            animPlayer = new AnimPlayer();
            animPlayer.toggle();
        } else {
            alt.log('Turning on animPlayer');
            animPlayer.toggle();
        }
    }

    if (animPlayer == null || !animPlayer.launched && animPlayer.currentList.length <= 0) return;

    if (key == controlsIds.Right) {
        var dist = animPlayer.dist;
        if (game.isControlPressed(0, controlsIds.Shift) && animPlayer.currentList.length > 100) dist += 10;
        else if (game.isControlPressed(0, controlsIds.Ctrl) && animPlayer.currentList.length > 100) dist += 100;
        else dist += 1;
        animPlayer.change(dist);
    }
    else if (key == controlsIds.Left) {
        var dist = animPlayer.dist;
        if (game.isControlPressed(0, controlsIds.Shift) && animPlayer.currentList.length > 100) dist -= 10;
        else if (game.isControlPressed(0, controlsIds.Ctrl) && animPlayer.currentList.length > 100) dist -= 100;
        else dist -= 1;
        animPlayer.change(dist);
    }
    else if (key == controlsIds.Backspace) {
        if (animPlayer.request.length > 0) {
            animPlayer.createCurrentList();
        }
    }
    else if (key == controlsIds.Space) {
        if (!animPlayer.autoPlay) {
            animPlayer.play(true);
        }
    }
    else if (key == controlsIds.Up) {
        if (game.isControlPressed(0, controlsIds.Ctrl)) animPlayer.setFlag('up');
        else animPlayer.change(false, animPlayer.name - 1);
    }
    else if (key == controlsIds.Down) {
        if (game.isControlPressed(0, controlsIds.Ctrl)) animPlayer.setFlag('down');
        else animPlayer.change(false, animPlayer.name + 1)
    }
});