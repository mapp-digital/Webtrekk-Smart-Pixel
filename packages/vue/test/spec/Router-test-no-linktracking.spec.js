import {mount, createLocalVue} from '@vue/test-utils';
import RouterTest from './../template/Router-test.vue';
import {expectInCallback} from './../helper';
import Webtrekk from './../../src/index';
import WebtrekkSmartPixelVue from './../../src/lib/WebtrekkSmartPixelVue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: 'localhost',
    routes: [
        {
            path: '/',
            name: 'name of route',
            component: RouterTest
        }
    ]
});

localVue.use(Webtrekk, {
    trackId: '111111111111111',
    trackDomain: 'analytics01.wt-eu02.net',
    requestQueue: {
        activated: false
    },
    activateAutoTracking: router,
    activateLinkTracking: false
});

describe('Router autotrack & action reload test', () => {
    let spyOnTrack;
    let spyOnExtensionAction;
    let wrapper;

    beforeEach(done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            spyOnTrack = jest.spyOn(wtSmart, 'track');
            spyOnExtensionAction = jest.spyOn(wtSmart.extension.action, 'reload');
            wrapper = mount(RouterTest, {
                sync: false,
                localVue,
                router
            });
            const from = {}; // mock 'from' route
            const to = {}; // mock 'to' route
            wrapper.vm.$options.beforeRouteEnter[0](to, from, cb => cb(wrapper.vm));
            done();
        });
    });

    test('test autotracking', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(
                () => {
                    expect(wtSmart.init.get().trackId).toBe('111111111111111');
                    expect(wtSmart.init.get().trackDomain).toBe('analytics01.wt-eu02.net');
                    expect(wtSmart.page.data.get().name).toBe('localhost/');
                    expect(spyOnTrack.mock.calls.length).toBe(1);
                },
                done,
                0
            );
        });
    });

    test('test extension action no reload', done => {
        expectInCallback(
            () => {
                expect(spyOnExtensionAction.mock.calls.length).toBe(0);
            },
            done,
            0
        );
    });
});
