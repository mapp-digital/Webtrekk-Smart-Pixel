import SmartPixelVue from './lib/WebtrekkSmartPixelVue';
import WebtrekkDirective from './lib/WebtrekkDirective';
import {mappBeforeResolve, autoTrack} from './lib/routerHookFunctionsV3';

const webtrekk = {
    install(Vue, webtrekkConfig) {
        Vue.config.globalProperties.$webtrekk = SmartPixelVue;
        Vue.config.globalProperties.$mapp = SmartPixelVue;
        if (webtrekkConfig.activateAutoTracking && webtrekkConfig.activateAutoTracking.beforeResolve) {
            webtrekkConfig.activateAutoTracking.beforeResolve(to => {
                mappBeforeResolve(to, webtrekkConfig);
            });
            webtrekkConfig.activateAutoTracking.afterEach(async() => {
                autoTrack(webtrekkConfig);
            });
        }

        // initialization of global Webtrekk configuration
        SmartPixelVue.init(webtrekkConfig);
        SmartPixelVue.advanced(webtrekkConfig);
        // optional activation of auto linktracking
        if (webtrekkConfig.activateLinkTracking) {
            SmartPixelVue.extension('action');
        }

        // optional activation of teaser_tracking
        const teaser = webtrekkConfig.activateTeaserTracking;
        if (teaser) {
            SmartPixelVue.extension('teaser_tracking');
            SmartPixelVue.call(wtSmart => {
                wtSmart.extension.teaser_tracking.config(teaser);
            });
        }

        // optional activation of product_list_tracking
        const product = webtrekkConfig.activateProductListTracking;
        if (product) {
            SmartPixelVue.extension('product_list_tracking');
            SmartPixelVue.call(wtSmart => {
                wtSmart.extension.product_list_tracking.config(product);
            });
        }

        // optional activation of content_engagement
        const contentEngagement = webtrekkConfig.activateContentEngagement;
        if (contentEngagement) {
            SmartPixelVue.extension('content_engagement');
            SmartPixelVue.call(wtSmart => {
                wtSmart.extension.content_engagement.config(contentEngagement);
            });
        }

        // init v-webtrekk directive
        Vue.directive(WebtrekkDirective.name, WebtrekkDirective);
    }
};
export default webtrekk;
