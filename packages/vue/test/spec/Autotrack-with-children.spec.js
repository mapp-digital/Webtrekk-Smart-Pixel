import {expectInCallback} from '../helper';
import WebtrekkSmartPixelVue from '../../src/lib/WebtrekkSmartPixelVue';
import ParentComponent from '../template/Parent-component.vue';
import {createWrapper} from '../_helper/wrapper';

describe('Autotrack with child components', () => {
    let spyOnTrack;

    beforeEach(done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {
                // do nothing
            });
            createWrapper(ParentComponent, {
                trackId: '111111111111111',
                trackDomain: 'analytics01.wt-eu02.net',
                requestQueue: {
                    activated: false
                },
                activateAutoTracking: true
            });

            done();
        });
    });
    afterEach((done) => {
        WebtrekkSmartPixelVue.call((wtSmart) => {
            spyOnTrack.mockRestore();
            spyOnTrack = null;
            done();
        });
    });

    test('overwrite data with child data', done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            expectInCallback(() => {
                const data = wtSmart.page.data.get();
                expect(data.parameter[1]).toBe('Child component');
                expect(data.category[1]).toBe('Parent component');
            }, done);
        });
    });
});
