import Vue from 'vue';

const webtrekkVuexPlugin = store => {
    store.subscribe((mutation, state) => {
        if (mutation.type === 'REMOVE_CLICK') {
            Vue.prototype.$webtrekk.action({name: 'removed click', parameter: {1: 'Overall clicks: ' + state.clicks}});
            Vue.prototype.$webtrekk.track();
        }
    });
};

export default webtrekkVuexPlugin;
