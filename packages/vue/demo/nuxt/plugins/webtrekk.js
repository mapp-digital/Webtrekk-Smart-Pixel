import WebtrekkSmartpixelVue from '../../../src/index';
import Vue from 'vue';

export default ({app}) => {
    const webtrekkConfig = {
        trackId: '136699033798929',
        trackDomain: 'analytics01.wt-eu02.net',
        activateLinkTracking: true,
        activateAutoTracking: app.router,
        activateTeaserTracking: true,
        activateProductListTracking: true,
        activateContentEngagement: true
    };
    Vue.use(WebtrekkSmartpixelVue, webtrekkConfig);
};
