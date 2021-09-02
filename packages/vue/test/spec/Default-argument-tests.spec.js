import {mount, createLocalVue} from '@vue/test-utils';
import DefaultArgumentTests from './../template/Default-argument-tests.vue';
import Webtrekk from './../../src/index';
import {expectInCallback} from './../helper';
import WebtrekkSmartPixelVue from './../../src/lib/WebtrekkSmartPixelVue';

let spyOnTrack;
let spyOnPageTrack;
let spyOnActionTrack;

const localVue = createLocalVue();
localVue.use(Webtrekk, {});

describe('Default values as arguments', () => {
    beforeEach(done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            spyOnTrack = jest.spyOn(wtSmart, 'track');
            spyOnPageTrack = jest.spyOn(wtSmart, 'trackPage');
            spyOnActionTrack = jest.spyOn(wtSmart, 'trackAction');
            done();
        });
    });

    test('testing default values in pixel', done => {
        mount(DefaultArgumentTests, {
            sync: false,
            localVue
        });

        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(
                () => {
                    expect(wtSmart.init.get().trackId).toBe('');
                    expect(wtSmart.page.data.get().name).toBe('localhost/');
                    expect(wtSmart.page.data.get().parameter).toEqual({});
                    expect(wtSmart.page.data.get().category).toEqual({});
                    expect(wtSmart.page.data.get().goal).toEqual({});
                    expect(wtSmart.session.data.get().parameter).toEqual({});
                    expect(wtSmart.action.data.get().name).toBe('');
                    expect(wtSmart.campaign.data.get().id).toBe('');
                    expect(wtSmart.campaign.data.get().action).toBe('c');
                    expect(wtSmart.campaign.data.get().mediaCode).toEqual(['mc', 'wt_mc']);
                    expect(wtSmart.campaign.data.get().parameter).toEqual({});
                    expect(wtSmart.customer.data.get().id).toBe('');
                    expect(wtSmart.product.view.data.get()).toEqual([]);
                    expect(wtSmart.product.list.data.get()).toEqual([]);
                    expect(wtSmart.product.confirmation.data.get()).toEqual([]);
                    expect(wtSmart.product.basket.data.get()).toEqual([]);
                    expect(wtSmart.order.data.get().id).toBe('');
                    expect(wtSmart.order.data.get().value).toBe(0);
                    expect(wtSmart.order.data.get().parameter).toEqual({});
                    expect(wtSmart.order.data.get().paymentMethod).toBe('');

                    expect(spyOnTrack.mock.calls.length).toBe(1);
                    expect(spyOnPageTrack.mock.calls.length).toBe(1);
                    expect(spyOnActionTrack.mock.calls.length).toBe(1);
                },
                done,
                200
            );
        });
    });
});
