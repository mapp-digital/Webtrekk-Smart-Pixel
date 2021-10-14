import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { WebtrekkSmartPixelModule, WebtrekkSmartPixelAngular } from './index';
import { expectInCallback } from './_helper/expectInCallback';

describe('WebtrekkSmartPixelModule', () => {
    let service: WebtrekkSmartPixelAngular;

    afterEach((done) => {
        service.call((wtSmart) => {
            wtSmart.init.remove();

            done();
        });
    });

    test('forRoot without data - 1', (done) => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot()
            ],
            providers: [{ provide: Location, useClass: SpyLocation }]
        });

        service = TestBed.get(WebtrekkSmartPixelAngular);

        service.call((wtSmart) => {
            expectInCallback(() => {
                let data = wtSmart.init.get();

                expect(data.trackId).toBe('');
                expect(data.trackDomain).toBe('');
                expect(data.domain).toEqual(['github.com']);
                expect(data.cookie).toBe('1');
            }, done);
        });
    });

    test('forRoot without data - 2', (done) => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot({
                    activateAutoTracking: false
                })
            ],
            providers: [{ provide: Location, useClass: SpyLocation }]
        });

        service = TestBed.get(WebtrekkSmartPixelAngular);

        service.call((wtSmart) => {
            expectInCallback(() => {
                let data = wtSmart.init.get();

                expect(data.trackId).toBe('');
                expect(data.trackDomain).toBe('');
                expect(data.domain).toEqual(['github.com']);
                expect(data.cookie).toBe('1');
            }, done);
        });
    });

    test('forRoot with data', (done) => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot({
                    trackId: '123451234512345',
                    trackDomain: 'analytics01.webtrekk.net',
                    activateAutoTracking: false
                })
            ],
            providers: [{ provide: Location, useClass: SpyLocation }]
        });

        service = TestBed.get(WebtrekkSmartPixelAngular);

        service.call((wtSmart) => {
            expectInCallback(() => {
                let data = wtSmart.init.get();

                expect(data.trackId).toBe('123451234512345');
                expect(data.trackDomain).toBe('analytics01.webtrekk.net');
                expect(data.domain).toEqual(['github.com']);
                expect(data.cookie).toBe('1');
            }, done);
        });
    });
});
