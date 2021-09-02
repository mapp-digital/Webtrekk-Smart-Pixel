import DeactivateAutotracking from './../template/DeactivateAutotracking.vue';
import WebtrekkSmartPixelVue from '../../src/lib/WebtrekkSmartPixelVue';
import {expectInCallback} from './../helper';
import Webtrekk from '../../src/index';
import {mount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router';

describe('Route entered and left', () => {
    let spyOnTrack;
    let next = jest.fn();
    let wrapper;

    beforeEach(done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {
                // do nothing
            });
            const localVue = createLocalVue();
            localVue.use(VueRouter);

            const router = new VueRouter({
                mode: 'history',
                base: 'localhost',
                routes: [
                    {
                        path: '/',
                        name: 'DeactivateAutotracking',
                        component: DeactivateAutotracking
                    }
                ]
            });

            const webtrekkConfig = {
                trackId: '111111111111111',
                trackDomain: 'analytics01.wt-eu02.net',
                requestQueue: {
                    activated: false
                },
                activateAutoTracking: router,
                activateLinkTracking: true
            };

            localVue.use(Webtrekk, webtrekkConfig);

            wrapper = mount(DeactivateAutotracking, {
                sync: false,
                localVue,
                router
            });
            done();
        });
    });

    test('suppress track()', done => {
        WebtrekkSmartPixelVue.deactivateAutoTracking = true;
        const from = {}; // mock 'from' route
        const to = {}; // mock 'to' route
        wrapper.vm.$options.beforeRouteEnter[0](to, from, cb => cb(wrapper.vm));
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(
                () => {
                    expect(wtSmart.init.get().trackId).toBe('111111111111111');
                    expect(wtSmart.init.get().trackDomain).toBe('analytics01.wt-eu02.net');
                    expect(spyOnTrack.mock.calls.length).toBe(0);
                },
                done,
                1000
            );
        });
    });
    test('data is cleared when no track happened', done => {
        WebtrekkSmartPixelVue.deactivateAutoTracking = true;
        DeactivateAutotracking.beforeRouteLeave.call(wrapper.vm, null, null, next);
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(
                () => {
                    expect(next).toHaveBeenCalled();
                    expect(spyOnTrack.mock.calls.length).toBe(0);
                    expect(wtSmart.page.data.get().parameter).toStrictEqual({});
                    expect(wtSmart.product.view.data.get()).toStrictEqual([]);
                    expect(wtSmart.product.confirmation.data.get()).toStrictEqual([]);
                    expect(wtSmart.product.basket.data.get()).toStrictEqual([]);
                    expect(wtSmart.product.list.data.get()).toStrictEqual([]);
                    expect(wtSmart.order.data.get().id).toBe('');
                    expect(wtSmart.order.data.get().value).toBe(0);
                },
                done,
                1000
            );
        });
    });
    test('track when not deactivated', done => {
        WebtrekkSmartPixelVue.deactivateAutoTracking = false;
        const from = {}; // mock 'from' route
        const to = {}; // mock 'to' route
        wrapper.vm.$options.beforeRouteEnter[0](to, from, cb => cb(wrapper.vm));
        DeactivateAutotracking.beforeRouteLeave.call(wrapper.vm, null, null, next);
        WebtrekkSmartPixelVue.call(() => {
            expectInCallback(
                () => {
                    expect(next).toHaveBeenCalled();
                    expect(spyOnTrack.mock.calls.length).toBe(1);
                },
                done,
                1000
            );
        });
    });
});
