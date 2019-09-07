const state = {
    noclipStatus: false,
    debugModeStatus: false,
};

const getters = {

}

const actions = {

}

const mutations = {
    setNoclip(state, status) {
        state.noclipStatus = status;
    },
    setDebugMode(state, status) {
        state.debugModeStatus = status;
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations,
};