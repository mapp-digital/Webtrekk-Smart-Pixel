import {mount, createLocalVue} from '@vue/test-utils';
import ExtensionDirective from './../template/Extension-directive.vue';
import Webtrekk from './../../src/index';
import {expectInCallback} from './../helper';
import WebtrekkSmartPixelVue from './../../src/lib/WebtrekkSmartPixelVue';

let spyOnAddTeaserElement;
let spyOnAddProductElement;
let spyOnAddContentElement;
let wrapper;

const localVue = createLocalVue();
localVue.use(Webtrekk, {
    trackId: '111111111111111',
    trackDomain: 'analytics01.wt-eu02.net',
    requestQueue: {
        activated: false
    },
    activateTeaserTracking: {
        viewPercent: 80,
        viewTime: 500,
        attribution: 'last',
        maxSendTeasers: {
            session: 9999,
            page: 999
        },
        clearConversions: false,
        autoEngagements: false
    },
    activateProductListTracking: {
        viewPercent: 99,
        viewTime: 999,
        sampling: 1,
        maxSendProducts: {
            session: 9999,
            page: 999
        },
        sendMultipleProductViews: true
    },
    activateContentEngagement: {
        percentageStepsInAnalytics: 10,
        sendContentEngagement: 1,
        percentageReached: 50,
        secondsReached: 40,
        largeBrowserResolution: 999,
        largeBrowserSeconds: 22,
        mediumBrowserResolution: 777,
        mediumBrowserSeconds: 11,
        smallBrowserResolution: 444,
        smallBrowserSeconds: 4
    }
});

describe('Extension directive test', () => {
    beforeEach(done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            spyOnAddTeaserElement = jest.spyOn(wtSmart.extension.teaser_tracking, 'add');
            spyOnAddProductElement = jest.spyOn(wtSmart.extension.product_list_tracking, 'add');
            spyOnAddContentElement = jest.spyOn(wtSmart.extension.content_engagement, 'add');
            wrapper = mount(ExtensionDirective, {sync: false, localVue});
            done();
        });
    });

    test('teaser_tracking init and add', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                expect(wtSmart.init.get().trackId).toBe('111111111111111');
                expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(true);

                const globalTeaserConfig = wtSmart.extension.teaser_tracking.config();
                expect(globalTeaserConfig.viewPercent).toBe(80);
                expect(globalTeaserConfig.viewTime).toBe(500);
                expect(globalTeaserConfig.attribution).toBe('last');
                expect(globalTeaserConfig.maxSendTeasers.session).toBe(9999);
                expect(globalTeaserConfig.maxSendTeasers.page).toBe(999);
                expect(globalTeaserConfig.clearConversions).toBe(false);
                expect(globalTeaserConfig.autoEngagements).toBe(false);

                const teaserData = spyOnAddTeaserElement.mock.calls[0][0];
                expect(wrapper.vm.$refs.teaser_element).toEqual(teaserData.selector);

                expect(teaserData.data.name).toBe('New Women Collection');
                expect(teaserData.data.rank).toBe('Main Page Banner');
                expect(teaserData.data.content).toBe('Women Collection');
                expect(teaserData.data.variant).toBe('campaign');
                expect(teaserData.conversion.type).toBe('product');
                expect(teaserData.conversion.goal).toBe('both');
                expect(teaserData.conversion.value).toBe('11%');
            }, done);
        });
    });

    test('product_list_tracking init and add', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                expect(wtSmart.init.get().trackId).toBe('111111111111111');
                expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(
                    true
                );

                const globalProductConfig = wtSmart.extension.product_list_tracking.config();
                expect(globalProductConfig.viewPercent).toBe(99);
                expect(globalProductConfig.viewTime).toBe(999);
                expect(globalProductConfig.sampling).toBe(1);
                expect(globalProductConfig.maxSendProducts.session).toBe(9999);
                expect(globalProductConfig.maxSendProducts.page).toBe(999);
                expect(globalProductConfig.sendMultipleProductViews).toBe(true);

                const productData = spyOnAddProductElement.mock.calls[0][0];
                expect(wrapper.vm.$refs.product_element).toEqual(productData.selector);
                expect(productData.data.id).toBe('075eo2f002');
                expect(productData.data.position).toBe(1);
                expect(productData.data.cost).toBe(49.99);
                expect(productData.data.quantity).toBe(5);
                expect(productData.data.category[1]).toBe('100% cotton');
                expect(productData.data.parameter[1]).toBe('blue');
                expect(productData.data.variant).toBe('button-down design');
                expect(productData.data.soldOut).toBe(false);
            }, done);
        });
    });

    test('content_engagement init and add', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                expect(wtSmart.extension.content_engagement.isActivated()).toBe(true);

                const globalContentEngagementConfig = wtSmart.extension.content_engagement.config();
                expect(globalContentEngagementConfig.percentageStepsInAnalytics).toBe(
                    10
                );
                expect(globalContentEngagementConfig.sendContentEngagement).toBe(1);
                expect(globalContentEngagementConfig.percentageReached).toBe(50);
                expect(globalContentEngagementConfig.secondsReached).toBe(40);
                expect(globalContentEngagementConfig.largeBrowserResolution).toBe(999);
                expect(globalContentEngagementConfig.largeBrowserSeconds).toBe(22);
                expect(globalContentEngagementConfig.mediumBrowserResolution).toBe(777);
                expect(globalContentEngagementConfig.mediumBrowserSeconds).toBe(11);
                expect(globalContentEngagementConfig.smallBrowserResolution).toBe(444);
                expect(globalContentEngagementConfig.smallBrowserSeconds).toBe(4);

                const contentData = spyOnAddContentElement.mock.calls[0][0];
                expect(wrapper.vm.$refs.content_element).toEqual(contentData.selector);
                expect(contentData.name).toBe('name of the element');
                expect(contentData.config.percentageStepsInAnalytics).toBe(20);
                expect(contentData.config.sendContentEngagement).toBe(2);
                expect(contentData.config.percentageReached).toBe(33);
                expect(contentData.config.secondsReached).toBe(22);
                expect(contentData.config.largeBrowserResolution).toBe(1234);
                expect(contentData.config.largeBrowserSeconds).toBe(23);
                expect(contentData.config.mediumBrowserResolution).toBe(123);
                expect(contentData.config.mediumBrowserSeconds).toBe(12);
                expect(contentData.config.smallBrowserResolution).toBe(12);
                expect(contentData.config.smallBrowserSeconds).toBe(2);
            }, done);
        });
    });
});
