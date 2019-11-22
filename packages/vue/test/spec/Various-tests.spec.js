import {mount, createLocalVue} from '@vue/test-utils';
import VariousTests from './../template/Various-tests.vue';
import {expectInCallback} from './../helper';
import Webtrekk from './../../src/index';
import WebtrekkSmartPixelVue from './../../src/lib/WebtrekkSmartPixelVue';

// create an extended `Vue` constructor
const localVue = createLocalVue();
let spyOnAddTeaserElement;
let spyOnAddProductElement;
let spyOnAddContentElement;

localVue.use(Webtrekk, {
    trackId: '111111111111111',
    trackDomain: 'analytics01.wt-eu02.net',
    requestQueue: {
        activated: false
    },
    activateTeaserTracking: true,
    activateProductListTracking: true,
    activateContentEngagement: true
});

describe('Various tests', () => {
    beforeEach(done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            spyOnAddTeaserElement = jest.spyOn(wtSmart.extension.teaser_tracking, 'add');
            spyOnAddProductElement = jest.spyOn(wtSmart.extension.product_list_tracking, 'add');
            spyOnAddContentElement = jest.spyOn(wtSmart.extension.content_engagement, 'add');
            mount(VariousTests, {
                sync: false,
                localVue
            });
            done();
        });
    });

    test('test init', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const data = wtSmart.init.get();
                expect(data.trackId).toBe('111111111111111');
            }, done);
        });
    });

    test('strings as arguments for page, action, customer modifier', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const pageData = wtSmart.page.data.get();
                expect(pageData.name).toBe('wtPage');
                const actionData = wtSmart.action.data.get();
                expect(actionData.name).toBe('wtAction');
                const customerData = wtSmart.customer.data.get();
                expect(customerData.id).toBe('wtCustomer');
            }, done);
        });
    });

    test('use this.$webtrekk in mount method', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const sessionData = wtSmart.session.data.get();
                expect(sessionData.loginStatus).toBe('testing');
                expect(sessionData.parameter[1]).toBe('cs1 value');
            }, done);
        });
    });

    test('manual teaser selector via directive', done => {
        WebtrekkSmartPixelVue.call(() => {
            expectInCallback(() => {
                const teaserData = spyOnAddTeaserElement.mock.calls[0][0];
                expect(teaserData.selector).toEqual('#element1');
                expect(teaserData.data.name).toEqual('p1');
            }, done);
        });
    });

    test('manual product_list selector via directive', done => {
        WebtrekkSmartPixelVue.call(() => {
            expectInCallback(() => {
                const productData = spyOnAddProductElement.mock.calls[0][0];
                expect(productData.selector).toEqual('#element1');
                expect(productData.data.id).toEqual('p1');
                expect(productData.data.position).toEqual(1);
            }, done);
        });
    });

    test('manual contentEngagement selector via directive', done => {
        WebtrekkSmartPixelVue.call(() => {
            expectInCallback(() => {
                const ContentData = spyOnAddContentElement.mock.calls[0][0];
                expect(ContentData.selector).toEqual('#element1');
                expect(ContentData.data.name).toEqual('p1');
            }, done);
        });
    });
});
