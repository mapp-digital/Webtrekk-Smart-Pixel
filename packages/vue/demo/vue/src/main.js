import Vue from 'vue';
import VueRouter from 'vue-router';
// import WebtrekkSmartpixelVue from 'wt/smart-pixel-vue.umd';
import WebtrekkSmartpixelVue from '../../../../vue/src/index';
import App from './App.vue';
import Home from './views/Home.vue';
import store from './store/index';

Vue.use(VueRouter);
const routerInstance = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/data',
            name: 'data',
            component: () => import('./views/Data.vue')
        },
        {
            path: '/directive',
            name: 'directive',
            component: () => import('./views/Directive.vue')
        },
        {
            path: '/async',
            name: 'async',
            component: () => import('./views/Async.vue')
        },
        {
            path: '/vuex',
            name: 'vuex',
            component: () => import('./views/Vuex.vue')
        }
    ]
});

const webtrekkConfig = {
    trackId: '136699033798929',
    trackDomain: 'analytics01.wt-eu02.net',
    activateLinkTracking: true,
    activateAutoTracking: routerInstance,
    activateTeaserTracking: true,
    activateProductListTracking: true,
    activateContentEngagement: true
};

Vue.use(WebtrekkSmartpixelVue, webtrekkConfig);

new Vue({
    router: routerInstance,
    store,
    render: h => h(App)
}).$mount('#app');