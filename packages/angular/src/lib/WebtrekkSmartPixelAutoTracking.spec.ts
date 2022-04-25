import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {SpyLocation} from '@angular/common/testing';
import {fakeAsync, tick, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {WebtrekkSmartPixelModule, WebtrekkSmartPixelAngular} from '../public-api';
import {expectInCallback} from './_helper/expectInCallback';
import {HomeComponent, SearchComponent, AppComponent, routes} from './_helper/components';

describe('WebtrekkSmartPixelAutoTracking', () => {
    let service: WebtrekkSmartPixelAngular;
    let router: Router;
    let spyOnTrackPage;
    let spyOnActionReload;
    // @ts-ignore
    const testBedInject = typeof TestBed.inject !== 'undefined' ? TestBed.inject : TestBed.get;

    afterEach((done) => {
        service.call((wtSmart) => {
            wtSmart.init.remove();
            wtSmart.extension.action.deactivate();
            wtSmart.extension.teaser_tracking.deactivate();
            wtSmart.extension.product_list_tracking.deactivate();
            wtSmart.extension.content_engagement.deactivate();

            done();
        });
    });

    test('activate actions', (done) => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot({
                    activateAutoTracking: false,
                    activateActions: true
                })
            ],
            providers: [{provide: Location, useClass: SpyLocation}]
        });

        service = testBedInject(WebtrekkSmartPixelAngular);

        service.call((wtSmart) => {
            expectInCallback(() => {
                expect(wtSmart.extension.action.isActivated()).toBe(true);
            }, done);
        });
    });

    test('activate teaser tracking', (done) => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot({
                    activateAutoTracking: false,
                    activateTeaser: true
                })
            ],
            providers: [{provide: Location, useClass: SpyLocation}]
        });

        service = testBedInject(WebtrekkSmartPixelAngular);

        service.call((wtSmart) => {
            expectInCallback(() => {
                expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(true);
            }, done);
        });
    });

    test('activate product list tracking', (done) => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot({
                    activateAutoTracking: false,
                    activateProductList: true
                })
            ],
            providers: [{provide: Location, useClass: SpyLocation}]
        });

        service = testBedInject(WebtrekkSmartPixelAngular);

        service.call((wtSmart) => {
            expectInCallback(() => {
                expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(true);
            }, done);
        });
    });

    test('activate content engagement', (done) => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot({
                    activateAutoTracking: false,
                    activateContentEngagement: true
                })
            ],
            providers: [{provide: Location, useClass: SpyLocation}]
        });

        service = testBedInject(WebtrekkSmartPixelAngular);

        service.call((wtSmart) => {
            expectInCallback(() => {
                expect(wtSmart.extension.content_engagement.isActivated()).toBe(true);
            }, done);
        });
    });

    describe('action tracking without auto tracking', () => {
        beforeEach((done) => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule.withRoutes(routes),
                    WebtrekkSmartPixelModule.forRoot({
                        activateAutoTracking: false,
                        activateActions: true
                    })
                ],
                declarations: [HomeComponent, SearchComponent, AppComponent]
            }).createComponent(AppComponent);

            router = testBedInject(Router);
            service = testBedInject(WebtrekkSmartPixelAngular);

            router.initialNavigation();

            service.call((wtSmart) => {
                spyOnTrackPage = jest.spyOn(wtSmart, 'trackPage').mockImplementation(() => {
                });
                spyOnActionReload = jest.spyOn(wtSmart.extension.action, 'reload').mockImplementation(() => {
                });
                done();
            });
        });

        afterEach(() => {
            spyOnTrackPage.mockRestore();
            spyOnActionReload.mockRestore();

            spyOnTrackPage = null;
            spyOnActionReload = null;
        });

        test('initial navigation', (done) => {
            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.page.data.get().name).toBe('github.com/@angular-cli-builders');

                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                    expect(spyOnActionReload).toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('navigate to "" redirects you to "/home"', fakeAsync(() => {
            router.navigate(['']);
            tick();

            service.call(() => {
                expect(spyOnTrackPage).not.toHaveBeenCalled();
                expect(spyOnActionReload).toHaveBeenCalled();
            });
        }));

        test('navigate to "search" takes you to "/search"', fakeAsync(() => {
            router.navigate(['search']);
            tick();

            service.call(() => {
                expect(spyOnTrackPage).not.toHaveBeenCalled();
                expect(spyOnActionReload).toHaveBeenCalled();
            });
        }));
    });

    describe('auto tracking without action tracking', () => {
        beforeEach((done) => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule.withRoutes(routes),
                    WebtrekkSmartPixelModule.forRoot({
                        activateAutoTracking: true,
                        activateActions: false
                    })
                ],
                declarations: [HomeComponent, SearchComponent, AppComponent]
            }).createComponent(AppComponent);

            router = testBedInject(Router);
            service = testBedInject(WebtrekkSmartPixelAngular);

            router.initialNavigation();

            service.call((wtSmart) => {
                spyOnTrackPage = jest.spyOn(wtSmart, 'trackPage').mockImplementation(() => {
                });
                spyOnActionReload = jest.spyOn(wtSmart.extension.action, 'reload').mockImplementation(() => {
                });
                done();
            });
        });

        afterEach(() => {
            spyOnTrackPage.mockRestore();
            spyOnActionReload.mockRestore();

            spyOnTrackPage = null;
            spyOnActionReload = null;
        });

        test('initial navigation', (done) => {
            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.page.data.get().name).toBe('github.com/@angular-cli-builders');

                    expect(spyOnTrackPage).toHaveBeenCalled();
                    expect(spyOnActionReload).toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('navigate to "" redirects you to "/home"', fakeAsync(() => {
            router.navigate(['']);
            tick();

            service.call(() => {
                expect(spyOnTrackPage).toHaveBeenCalled();
                expect(spyOnActionReload).not.toHaveBeenCalled();
            });
        }));

        test('navigate to "search" takes you to "/search"', fakeAsync(() => {
            router.navigate(['search']);
            tick();

            service.call(() => {
                expect(spyOnTrackPage).toHaveBeenCalled();
                expect(spyOnActionReload).not.toHaveBeenCalled();
            });
        }));
    });

    describe('auto tracking with action tracking', () => {
        beforeEach((done) => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule.withRoutes(routes),
                    WebtrekkSmartPixelModule.forRoot({
                        activateAutoTracking: true,
                        activateActions: true
                    })
                ],
                declarations: [HomeComponent, SearchComponent, AppComponent]
            }).createComponent(AppComponent);

            router = testBedInject(Router);
            service = testBedInject(WebtrekkSmartPixelAngular);

            router.initialNavigation();

            service.call((wtSmart) => {
                spyOnTrackPage = jest.spyOn(wtSmart, 'trackPage').mockImplementation(() => {
                });
                spyOnActionReload = jest.spyOn(wtSmart.extension.action, 'reload').mockImplementation(() => {
                });
                done();
            });
        });

        afterEach(() => {
            spyOnTrackPage.mockRestore();
            spyOnActionReload.mockRestore();

            spyOnTrackPage = null;
            spyOnActionReload = null;
        });

        test('initial navigation', (done) => {
            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.page.data.get().name).toBe('github.com/@angular-cli-builders');

                    expect(spyOnTrackPage).toHaveBeenCalled();
                    expect(spyOnActionReload).toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('navigate to "" redirects you to "/home"', fakeAsync(() => {
            router.navigate(['']);
            tick();

            service.call(() => {
                expect(spyOnTrackPage).toHaveBeenCalled();
                expect(spyOnActionReload).toHaveBeenCalled();
            });
        }));

        test('navigate to "search" takes you to "/search"', fakeAsync(() => {
            router.navigate(['search']);
            tick();

            service.call(() => {
                expect(spyOnTrackPage).toHaveBeenCalled();
                expect(spyOnActionReload).toHaveBeenCalled();
            });
        }));
    });
});
