import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import debug from './debugPage/index';

const namespaced = true;

const state = {
    activePage: 'Dashboard',
};

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations,
    modules: {
        debug
    }
};