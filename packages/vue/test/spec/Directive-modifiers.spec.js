import {shallowMount, createLocalVue} from '@vue/test-utils';
import DirectiveModifiers from './../template/Directive-modifiers.vue';
import Webtrekk from './../../src/index';
import {expectInCallback} from './../helper';
import WebtrekkSmartPixelVue from './../../src/lib/WebtrekkSmartPixelVue';

// create an extended `Vue` constructor
const localVue = createLocalVue();

localVue.use(Webtrekk, {
    trackId: '111111111111111',
    trackDomain: 'analytics01.wt-eu02.net',
    requestQueue: {
        activated: false
    },
    activateLinkTracking: true
});

describe('test v-webtrekk directives with modifiers', () => {
    shallowMount(DirectiveModifiers, {
        sync: false,
        localVue
    });

    test('test init', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const data = wtSmart.init.get();
                expect(data.trackId).toBe('111111111111111');
                expect(data.trackDomain).toBe('analytics01.wt-eu02.net');
                const actionIsActivated = wtSmart.extension.action.isActivated();
                expect(actionIsActivated).toBe(true);
            }, done);
        });
    });

    test('test page directive with object', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const data = wtSmart.page.data.get();
                expect(data.name).toBe('test-directive-page');
                expect(data.search).toBe('testSearch');
                expect(data.numberSearchResults).toBe(7);
                expect(data.errorMessages).toBe('test error');
                expect(data.paywall).toBeTruthy();
                expect(data.articleTitle).toBe('test article');
                expect(data.contentTags).toBe('test content tag');
                expect(data.title).toBe('test title');
                expect(data.type).toBe('test type');
                expect(data.length).toBe('700');
                expect(data.daysSincePublication).toBe(2);
                expect(data.testVariant).toBe('test variant');
                expect(data.testExperiment).toBe('test experiment');
                expect(data.parameter[1]).toBe('cp1 value');
                expect(data.category[1]).toBe('cg1 value');
                expect(data.goal[1]).toBe('ec1 value');
            }, done);
        });
    });

    test('test session directive', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const data = wtSmart.session.data.get();
                expect(data.loginStatus).toBe('testing');
                expect(data.parameter[1]).toBe('cs1 value');
            }, done);
        });
    });

    test('test action directive with object', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const data = wtSmart.action.data.get();
                expect(data.name).toBe('en.click.on.some.link');
                expect(data.parameter[1]).toBe('en');
                expect(data.goal[2]).toBe('goal value 2');
            }, done);
        });
    });

    test('test campaign directive', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const data = wtSmart.campaign.data.get();
                expect(data.id).toBe('wt_mc%3Den.internal.newsletter.2017.05');
                expect(data.parameter[1]).toBe('Newsletter 123');
                expect(data.oncePerSession).toBeTruthy();
                expect(data.mediaCode).toEqual(['mc', 'wt_mc']);
            }, done);
        });
    });

    test('test customer directive with object', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const data = wtSmart.customer.data.get();
                expect(data.id).toBe('user5684798169');
                expect(data.validation).toBeTruthy();
                expect(data.email).toBe('john.doe@webtrekk.com');
                expect(data.emailRID).toBe('test');
                expect(data.emailOptin).toBeTruthy();
                expect(data.gender).toBe(1);
                expect(data.birthday).toBe('19870913');
                expect(data.firstName).toBe('John');
                expect(data.lastName).toBe('Doe');
                expect(data.telephone).toBe('0049132456789');
                expect(data.country).toBe('Germany');
                expect(data.city).toBe('Berlin');
                expect(data.postalCode).toBe('10115');
                expect(data.street).toBe('Robert-Koch-Platz');
                expect(data.streetNumber).toBe('4');
                expect(data.category[5]).toBe('login');
            }, done);
        });
    });

    test('test product directive with default without further modifier', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const data = wtSmart.product.view.data.get();
                expect(data[0].id).toBe('testproduct');
            }, done);
        });
    });

    test('test order directive', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const data = wtSmart.order.data.get();
                expect(data.value).toBe(120.99);
                expect(data.id).toBe('M-12345');
                expect(data.couponValue).toBe(10.0);
                expect(data.paymentMethod).toBe('paypal');
                expect(data.shippingService).toBe('dhl');
                expect(data.shippingSpeed).toBe('express');
                expect(data.shippingCosts).toBe(4.95);
                expect(data.grossMargin).toBe(12.95);
                expect(data.parameter[5]).toBe('bill');
            }, done);
        });
    });
    test('test deactivateAutoTracking directive', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                expect(WebtrekkSmartPixelVue.deactivateAutoTracking).toStrictEqual({'deactivateAutoTracking': true});
            }, done);
        });
    });
});
