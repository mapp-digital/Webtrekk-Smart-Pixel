import Vue from 'vue';
import Vuex from 'vuex';

import webtrekkVuexPlugin from './webtrekk_vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {clicks: 0},
    getters: {
        getClicks: state => state.clicks
    },
    mutations: {
        ADD_CLICK(state, payload) {
            state.clicks = payload;
        },
        REMOVE_CLICK(state, payload) {
            state.clicks = payload;
        }
    },
    actions: {
        addClick({commit, getters}) {
            const newAmount = getters.getClicks + 1;
            Vue.prototype.$webtrekk.action({name: 'click added', parameter: {1: 'Overall clicks: ' + newAmount}});
            Vue.prototype.$webtrekk.track();
            commit('ADD_CLICK', newAmount);
        },
        removeClick({commit, getters}) {
            const newAmount = getters.getClicks - 1;
            commit('REMOVE_CLICK', newAmount);
        }
    },
    plugins: [webtrekkVuexPlugin]
});
