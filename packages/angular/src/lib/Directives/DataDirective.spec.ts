import {Location} from '@angular/common';
import {SpyLocation} from '@angular/common/testing';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {WebtrekkSmartPixelModule, WebtrekkSmartPixelAngular} from '../../public-api';
import {expectInCallback} from '../_helper/expectInCallback';

import {AdvancedData} from '../_helper/components';
import {CampaignData, CampaignDataTrack} from '../_helper/components';
import {CustomerData, CustomerDataTrack} from '../_helper/components';
import {InitData} from '../_helper/components';
import {OrderData, OrderDataTrack} from '../_helper/components';
import {PageData, PageDataTrack} from '../_helper/components';
import {
    ProductViewData, ProductBasketData, ProductConfirmationData,
    ProductViewDataTrack, ProductBasketDataTrack, ProductConfirmationDataTrack
} from '../_helper/components';
import {SessionData, SessionDataTrack} from '../_helper/components';

describe('DataDirective', () => {
    // @ts-ignore
    const testBedInject = typeof TestBed.inject !== 'undefined' ? TestBed.inject : TestBed.get;

    describe('Advanced', () => {
        let service: WebtrekkSmartPixelAngular;
        let fixture;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    WebtrekkSmartPixelModule.forRoot({
                        activateAutoTracking: false
                    })
                ],
                declarations: [AdvancedData]
            });

            service = testBedInject(WebtrekkSmartPixelAngular);
        });

        afterEach((done) => {
            service.call((wtSmart) => {
                wtSmart.advanced.remove();

                done();
            });
        });

        test('mount advanced', (done) => {
            fixture = TestBed.createComponent(AdvancedData);
            fixture.detectChanges();

            service.call((wtSmart) => {
                expectInCallback(() => {
                    const advancedData = wtSmart.advanced.get();
                    expect(advancedData.secureCookie).toBe(true);
                    expect(advancedData.optOutName).toBe('webtrekkTestOptOut');
                    expect(advancedData.requestObfuscation).toBe(true);
                    expect(advancedData.execCDB).toBe(false);
                    expect(advancedData.useCDBCache).toBe(true);
                    expect(advancedData.useHashForDefaultPageName).toBe(true);
                    expect(advancedData.useParamsForDefaultPageName.join(',')).toBe('param1,param2');
                    expect(advancedData.requestQueue.activated).toBe(true);
                    expect(advancedData.requestQueue.ttl).toBe(5 * 60 * 1000);
                    expect(advancedData.requestQueue.resendInterval).toBe(5000);
                    expect(advancedData.requestQueue.size).toBe(500);
                }, done);
            });
        });
    });

    describe('Campaign', () => {
        let service: WebtrekkSmartPixelAngular;
        let spyOnTrack;
        let fixture;

        beforeEach((done) => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    WebtrekkSmartPixelModule.forRoot({
                        activateAutoTracking: false
                    })
                ],
                declarations: [CampaignData, CampaignDataTrack]
            });

            service = testBedInject(WebtrekkSmartPixelAngular);

            service.call((wtSmart) => {
                spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {});

                done();
            });
        });

        afterEach((done) => {
            spyOnTrack.mockRestore();
            spyOnTrack = null;

            service.call((wtSmart) => {
                wtSmart.campaign.data.remove();

                done();
            });
        });

        test('mount campaign', (done) => {
            fixture = TestBed.createComponent(CampaignData);
            fixture.detectChanges();

            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();

                    const campaignData = wtSmart.campaign.data.get();
                    expect(campaignData.id).toBe('wt_mc%3foo.bar');
                    expect(campaignData.mediaCode.join(',')).toBe('wt_mc,mc');
                    expect(campaignData.oncePerSession).toBe(true);
                    expect(campaignData.parameter['1']).toBe('foo');
                    expect(campaignData.parameter['2']).toBe('bar');
                }, done);
            });
        });

        test('mount campaign with track', (done) => {
            fixture = TestBed.createComponent(CampaignDataTrack);
            fixture.detectChanges();

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                }, done);
            });
        });
    });

    describe('Customer', () => {
        let service: WebtrekkSmartPixelAngular;
        let spyOnTrack;
        let fixture;

        beforeEach((done) => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    WebtrekkSmartPixelModule.forRoot({
                        activateAutoTracking: false
                    })
                ],
                declarations: [CustomerData, CustomerDataTrack]
            });

            service = testBedInject(WebtrekkSmartPixelAngular);

            service.call((wtSmart) => {
                spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {});

                done();
            });
        });

        afterEach((done) => {
            spyOnTrack.mockRestore();
            spyOnTrack = null;

            service.call((wtSmart) => {
                wtSmart.customer.data.remove();

                done();
            });
        });

        test('mount customer', (done) => {
            fixture = TestBed.createComponent(CustomerData);
            fixture.detectChanges();

            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();

                    const customerData = wtSmart.customer.data.get();
                    expect(customerData.id).toBe('1f9e575ad4234c30a81d30c70affd4bba7b0d57d8e8607ad255496863d72c8bb');
                    expect(customerData.email).toBe('test@tester.com');
                    expect(customerData.emailRID).toBe('emailRID');
                    expect(customerData.emailOptin).toBe(true);
                    expect(customerData.firstName).toBe('test');
                    expect(customerData.lastName).toBe('tester');
                    expect(customerData.telephone).toBe('0123456789');
                    expect(customerData.gender).toBe(1);
                    expect(customerData.birthday).toBe('19870913');
                    expect(customerData.country).toBe('germany');
                    expect(customerData.city).toBe('berlin');
                    expect(customerData.postalCode).toBe('12345');
                    expect(customerData.street).toBe('test-street');
                    expect(customerData.streetNumber).toBe('15A');
                    expect(customerData.validation).toBe(false);
                    expect(customerData.category['1']).toBe('foo');
                    expect(customerData.category['2']).toBe('bar');
                }, done);
            });
        });

        test('mount customer with track', (done) => {
            fixture = TestBed.createComponent(CustomerDataTrack);
            fixture.detectChanges();

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                }, done);
            });
        });
    });

    describe('Init', () => {
        let service: WebtrekkSmartPixelAngular;
        let fixture;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    WebtrekkSmartPixelModule.forRoot({
                        activateAutoTracking: false
                    })
                ],
                declarations: [InitData]
            });

            service = testBedInject(WebtrekkSmartPixelAngular);
        });

        afterEach((done) => {
            service.call((wtSmart) => {
                wtSmart.init.remove();

                done();
            });
        });

        test('mount init', (done) => {
            fixture = TestBed.createComponent(InitData);
            fixture.detectChanges();

            service.call((wtSmart) => {
                expectInCallback(() => {
                    const initData = wtSmart.init.get();
                    expect(initData.trackId).toBe('123451234512345');
                    expect(initData.trackDomain).toBe('analytics01.webtrekk.net');
                    expect(initData.domain).toEqual(['sub.domain.tld']);
                    expect(initData.cookie).toBe('1');
                }, done);
            });
        });
    });

    describe('Order', () => {
        let service: WebtrekkSmartPixelAngular;
        let spyOnTrack;
        let fixture;

        beforeEach((done) => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    WebtrekkSmartPixelModule.forRoot({
                        activateAutoTracking: false
                    })
                ],
                declarations: [OrderData, OrderDataTrack]
            });

            service = testBedInject(WebtrekkSmartPixelAngular);

            service.call((wtSmart) => {
                spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {});

                done();
            });
        });

        afterEach((done) => {
            spyOnTrack.mockRestore();
            spyOnTrack = null;

            service.call((wtSmart) => {
                wtSmart.order.data.remove();

                done();
            });
        });

        test('mount order', (done) => {
            fixture = TestBed.createComponent(OrderData);
            fixture.detectChanges();

            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();

                    const orderData = wtSmart.order.data.get();
                    expect(orderData.value).toBe(19.95);
                    expect(orderData.id).toBe('123456789');
                    expect(orderData.currency).toBe('EUR');
                    expect(orderData.couponValue).toBe(10);
                    expect(orderData.paymentMethod).toBe('1');
                    expect(orderData.shippingService).toBe('2');
                    expect(orderData.shippingSpeed).toBe('3');
                    expect(orderData.shippingCosts).toBe(2.75);
                    expect(orderData.grossMargin).toBe(2.50);
                    expect(orderData.orderStatus).toBe('5');
                    expect(orderData.parameter[1]).toBe('foo');
                    expect(orderData.parameter[2]).toBe('bar');
                }, done);
            });
        });

        test('mount order with track', (done) => {
            fixture = TestBed.createComponent(OrderDataTrack);
            fixture.detectChanges();

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                }, done);
            });
        });
    });

    describe('Page', () => {
        let service: WebtrekkSmartPixelAngular;
        let spyOnTrack;
        let fixture;

        beforeEach((done) => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    WebtrekkSmartPixelModule.forRoot({
                        activateAutoTracking: false
                    })
                ],
                declarations: [PageData, PageDataTrack]
            });

            service = testBedInject(WebtrekkSmartPixelAngular);

            service.call((wtSmart) => {
                spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {});

                done();
            });
        });

        afterEach((done) => {
            spyOnTrack.mockRestore();
            spyOnTrack = null;

            service.call((wtSmart) => {
                wtSmart.page.data.remove();

                done();
            });
        });

        test('mount page', (done) => {
            fixture = TestBed.createComponent(PageData);
            fixture.detectChanges();

            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();

                    const pageData = wtSmart.page.data.get();
                    expect(pageData.name).toBe('name');
                    expect(pageData.search).toBe('search');
                    expect(pageData.numberSearchResults).toBe(7);
                    expect(pageData.errorMessages).toBe('errorMessages');
                    expect(pageData.paywall).toBe(true);
                    expect(pageData.articleTitle).toBe('articleTitle');
                    expect(pageData.contentTags).toBe('contentTags');
                    expect(pageData.title).toBe('title');
                    expect(pageData.type).toBe('type');
                    expect(pageData.length).toBe('length');
                    expect(pageData.daysSincePublication).toBe(12);
                    expect(pageData.testVariant).toBe('testVariant');
                    expect(pageData.testExperiment).toBe('testExperiment');
                    expect(pageData.parameter).toEqual({1: 'parameter foo', 2: 'parameter bar'});
                    expect(pageData.category).toEqual({1: 'category foo', 3: 'category bar'});
                    expect(pageData.goal).toEqual({1: 'goal foo', 4: 'goal bar'});
                }, done);
            });
        });

        test('mount page with track', (done) => {
            fixture = TestBed.createComponent(PageDataTrack);
            fixture.detectChanges();

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                }, done);
            });
        });
    });

    describe('Product', () => {
        let service: WebtrekkSmartPixelAngular;
        let spyOnTrack;
        let fixture;

        beforeEach((done) => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    WebtrekkSmartPixelModule.forRoot({
                        activateAutoTracking: false
                    })
                ],
                declarations: [
                    ProductViewData, ProductBasketData, ProductConfirmationData,
                    ProductViewDataTrack, ProductBasketDataTrack, ProductConfirmationDataTrack
                ]
            });

            service = testBedInject(WebtrekkSmartPixelAngular);

            service.call((wtSmart) => {
                spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {});

                done();
            });
        });

        afterEach((done) => {
            spyOnTrack.mockRestore();
            spyOnTrack = null;

            service.call((wtSmart) => {
                wtSmart.product.view.data.remove();
                wtSmart.product.basket.data.remove();
                wtSmart.product.confirmation.data.remove();

                done();
            });
        });

        test('mount product view', (done) => {
            fixture = TestBed.createComponent(ProductViewData);
            fixture.detectChanges();

            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();

                    const orderData = wtSmart.product.view.data.get()[0];
                    expect(orderData.id).toBe('product id 1');
                    expect(orderData.cost).toBe(19.95);
                    expect(orderData.quantity).toBe(1);
                    expect(orderData.variant).toBe('product variant');
                    expect(orderData.soldOut).toBe(false);
                    expect(orderData.category).toEqual({1: 'category-1', 5: 'category-5'});
                    expect(orderData.parameter).toEqual({1: 'parameter-1', 7: 'parameter-7'});
                }, done);
            });
        });

        test('mount product basket', (done) => {
            fixture = TestBed.createComponent(ProductBasketData);
            fixture.detectChanges();

            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();

                    const orderData = wtSmart.product.basket.data.get()[0];
                    expect(orderData.id).toBe('product id 1');
                    expect(orderData.cost).toBe(19.95);
                    expect(orderData.quantity).toBe(1);
                    expect(orderData.variant).toBe('product variant');
                    expect(orderData.soldOut).toBe(false);
                    expect(orderData.category).toEqual({1: 'category-1', 5: 'category-5'});
                    expect(orderData.parameter).toEqual({1: 'parameter-1', 7: 'parameter-7'});
                }, done);
            });
        });

        test('mount product confirmation', (done) => {
            fixture = TestBed.createComponent(ProductConfirmationData);
            fixture.detectChanges();

            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();

                    const orderData = wtSmart.product.confirmation.data.get()[0];
                    expect(orderData.id).toBe('product id 1');
                    expect(orderData.cost).toBe(19.95);
                    expect(orderData.quantity).toBe(1);
                    expect(orderData.variant).toBe('product variant');
                    expect(orderData.soldOut).toBe(false);
                    expect(orderData.category).toEqual({1: 'category-1', 5: 'category-5'});
                    expect(orderData.parameter).toEqual({1: 'parameter-1', 7: 'parameter-7'});
                }, done);
            });
        });

        test('mount product view with track', (done) => {
            fixture = TestBed.createComponent(ProductViewDataTrack);
            fixture.detectChanges();

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                }, done);
            });
        });

        test('mount product basket with track', (done) => {
            fixture = TestBed.createComponent(ProductBasketDataTrack);
            fixture.detectChanges();

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                }, done);
            });
        });

        test('mount product confirmation with track', (done) => {
            fixture = TestBed.createComponent(ProductConfirmationDataTrack);
            fixture.detectChanges();

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                }, done);
            });
        });
    });

    describe('Session', () => {
        let service: WebtrekkSmartPixelAngular;
        let spyOnTrack;
        let fixture;

        beforeEach((done) => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    WebtrekkSmartPixelModule.forRoot({
                        activateAutoTracking: false
                    })
                ],
                declarations: [SessionData, SessionDataTrack]
            });

            service = testBedInject(WebtrekkSmartPixelAngular);

            service.call((wtSmart) => {
                spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {});

                done();
            });
        });

        afterEach((done) => {
            spyOnTrack.mockRestore();
            spyOnTrack = null;

            service.call((wtSmart) => {
                wtSmart.session.data.remove();

                done();
            });
        });

        test('mount session', (done) => {
            fixture = TestBed.createComponent(SessionData);
            fixture.detectChanges();

            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();

                    const sessionData = wtSmart.session.data.get();
                    expect(sessionData.loginStatus).toBe('logged in');
                    expect(sessionData.parameter[1]).toBe('foo');
                    expect(sessionData.parameter[2]).toBe('bar');
                }, done);
            });
        });

        test('mount session with track', (done) => {
            fixture = TestBed.createComponent(SessionDataTrack);
            fixture.detectChanges();

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                }, done);
            });
        });
    });
});
