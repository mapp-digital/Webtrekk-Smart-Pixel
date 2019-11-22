import {mount, createLocalVue} from '@vue/test-utils';
import CustomerValidation from './../template/Customer-validation.vue';
import {expectInCallback} from './../helper';
import Webtrekk from './../../src/index';
import WebtrekkSmartPixelVue from './../../src/lib/WebtrekkSmartPixelVue';

const localVue = createLocalVue();
localVue.use(Webtrekk, {
    trackId: '111111111111111',
    trackDomain: 'analytics01.wt-eu02.net',
    requestQueue: {
        activated: false
    }
});

describe('Customer validation', () => {
    test('customer validation is false in directive', done => {
        mount(CustomerValidation, {
            sync: false,
            localVue
        });
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                expect(wtSmart.customer.data.get().validation).toBe(false);
                expect(wtSmart.customer.data.get().id).toBe('test');
                expect(wtSmart.customer.data.get().telephone).toBe('123');
            }, done);
        });
    });
});
