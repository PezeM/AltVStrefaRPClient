import {
    getters
} from './getters';
import {
    actions
} from './actions';
import {
    mutations
} from './mutations';

const namespaced = true;

const state = {
    noclipStatus: false,
    debugModeStatus: false,
};

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};