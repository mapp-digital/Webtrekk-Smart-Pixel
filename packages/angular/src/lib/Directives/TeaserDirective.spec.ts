import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {WebtrekkSmartPixelModule, WebtrekkSmartPixelAngular} from '../../public-api';
import {expectInCallback} from '../_helper/expectInCallback';
import {TeaserWithoutSelector, TeaserWithSelector} from '../_helper/components';

describe('TeaserDirective', () => {
    let service: WebtrekkSmartPixelAngular;
    let spyOnAddTeaserElement;
    let fixture;
    // @ts-ignore
    const testBedInject = typeof TestBed.inject !== 'undefined' ? TestBed.inject : TestBed.get;

    beforeEach((done) => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot({
                    activateAutoTracking: false
                })
            ],
            declarations: [TeaserWithoutSelector, TeaserWithSelector]
        });

        service = testBedInject(WebtrekkSmartPixelAngular);

        service.call((wtSmart) => {
            spyOnAddTeaserElement = jest.spyOn(wtSmart.extension.teaser_tracking, 'add').mockImplementation(() => {
            });

            done();
        });
    });

    afterEach((done) => {
        service.call((wtSmart) => {
            wtSmart.extension.teaser_tracking.deactivate();

            spyOnAddTeaserElement.mockRestore();
            spyOnAddTeaserElement = null;

            done();
        });
    });

    test('add element with config - 1', (done) => {
        fixture = TestBed.createComponent(TeaserWithoutSelector);
        fixture.detectChanges();

        service.call(() => {
            expectInCallback(() => {
                const mock = spyOnAddTeaserElement.mock.calls;
                expect(mock.length).toBe(1);

                const data = mock[0][0];
                expect(data.selector instanceof HTMLDivElement).toBe(true);
                expect(data.data.name).toBe('name of the teaser element');
                expect(data.data.rank).toBe('rank of the teaser element');
                expect(data.data.content).toBe('content of the teaser element');
                expect(data.data.variant).toBe('variant of the teaser element');
                expect(data.data.seen).toBe(false);
                expect(data.conversion.type).toBe('view');
                expect(data.conversion.goal).toBe('both');
                expect(data.conversion.value).toBe('%');
            }, done);
        });
    });

    test('add element with config - 2', (done) => {
        fixture = TestBed.createComponent(TeaserWithSelector);
        fixture.detectChanges();

        service.call(() => {
            expectInCallback(() => {
                const mock = spyOnAddTeaserElement.mock.calls;
                expect(mock.length).toBe(1);

                const data = mock[0][0];
                expect(data.selector).toBe('#ce1');
                expect(data.data.name).toBe('name of the teaser element');
                expect(data.data.rank).toBe('rank of the teaser element');
                expect(data.data.content).toBe('content of the teaser element');
                expect(data.data.variant).toBe('variant of the teaser element');
                expect(data.data.seen).toBe(false);
                expect(data.conversion.type).toBe('view');
                expect(data.conversion.goal).toBe('both');
                expect(data.conversion.value).toBe('%');
            }, done);
        });
    });
});
