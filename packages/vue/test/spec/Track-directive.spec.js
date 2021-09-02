import {mount, createLocalVue} from '@vue/test-utils';
import TrackDirective from './../template/Track-directive.vue';
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

describe('Track directive test', () => {
    let spyOnTrack;
    let spyOnPageTrack;
    let spyOnActionTrack;

    beforeEach(done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            spyOnTrack = jest.spyOn(wtSmart, 'track');
            spyOnPageTrack = jest.spyOn(wtSmart, 'trackPage');
            spyOnActionTrack = jest.spyOn(wtSmart, 'trackAction');
            done();
        });
    });

    test('track test', done => {
        mount(TrackDirective, {
            sync: false,
            localVue
        });

        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(
                () => {
                    expect(wtSmart.init.get().trackId).toBe('111111111111111');
                    expect(wtSmart.init.get().trackDomain).toBe('analytics01.wt-eu02.net');

                    expect(spyOnTrack.mock.calls[0][0]).toBe(false); // track
                    expect(spyOnTrack.mock.calls[1][0]).toBe(true); // track

                    expect(spyOnPageTrack.mock.calls[0][0]).toBe(true);
                    expect(spyOnPageTrack.mock.calls[1][0]).toBe(false);

                    expect(spyOnActionTrack.mock.calls[0][0]).toBe(true);
                    expect(spyOnActionTrack.mock.calls[1][0]).toBe(true);
                },
                done,
                500
            );
        });
    });
});
