import {Location} from '@angular/common';
import {SpyLocation} from '@angular/common/testing';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {WebtrekkSmartPixelModule, WebtrekkSmartPixelAngular} from '../public-api';
import {expectInCallback} from './_helper/expectInCallback';

describe('WebtrekkSmartPixelAngular', () => {
    let service: WebtrekkSmartPixelAngular;
    // @ts-ignore
    const testBedInject = typeof TestBed.inject !== 'undefined' ? TestBed.inject : TestBed.get;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                WebtrekkSmartPixelModule.forRoot({
                    activateAutoTracking: false
                })
            ],
            providers: [{provide: Location, useClass: SpyLocation}]
        });

        service = testBedInject(WebtrekkSmartPixelAngular);
    });

    afterEach((done) => {
        service.call((wtSmart) => {
            wtSmart.init.remove();
            wtSmart.advanced.remove();
            wtSmart.page.data.remove();
            wtSmart.action.data.remove();
            wtSmart.session.data.remove();
            wtSmart.campaign.data.remove();
            wtSmart.customer.data.remove();
            wtSmart.product.view.data.remove();
            wtSmart.product.basket.data.remove();
            wtSmart.product.addToCart.data.remove();
            wtSmart.product.deleteFromCart.data.remove();
            wtSmart.product.checkout.data.remove();
            wtSmart.product.confirmation.data.remove();
            wtSmart.product.addToWishlist.data.remove();
            wtSmart.product.deleteFromWishlist.data.remove();
            wtSmart.order.data.remove();
            wtSmart.extension.scroll_position.deactivate();

            done();
        });
    });

    describe('init', () => {
        test('without data', (done) => {
            service.init({});

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.init.get();

                    expect(data.trackId).toBe('');
                    expect(data.trackDomain).toBe('');
                    expect(data.domain[0]).toMatch(/^(github.com)|(localhost)$/);
                    expect(data.cookie).toBe('1');
                }, done);
            });
        });

        test('with data', (done) => {
            service.init({
                trackId: '123451234512345',
                trackDomain: 'analytics01.webtrekk.net',
                domain: 'sub.domain.tld',
                cookie: '1'
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.init.get();

                    expect(data.trackId).toBe('123451234512345');
                    expect(data.trackDomain).toBe('analytics01.webtrekk.net');
                    expect(data.domain).toEqual(['sub.domain.tld']);
                    expect(data.cookie).toBe('1');
                }, done);
            });
        });
    });

    describe('advanced', () => {
        test('without data', (done) => {
            service.advanced({});

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.advanced.get();

                    expect(data.secureCookie).toBe(false);
                    expect(data.optOutName).toBe('webtrekkOptOut');
                    expect(data.requestObfuscation).toBe(false);
                    expect(data.useHashForDefaultPageName).toBe(false);
                    expect(data.useParamsForDefaultPageName).toEqual([]);
                    expect(data.requestQueue.activated).toBe(true);
                    expect(data.requestQueue.ttl).toBe(5 * 60 * 1000);
                    expect(data.requestQueue.resendInterval).toBe(5 * 1000);
                    expect(data.requestQueue.size).toBe(100);
                }, done);
            });
        });

        test('with data', (done) => {
            service.advanced({
                secureCookie: true,
                optOutName: 'pixelOptOut',
                requestObfuscation: true,
                execCDB: false,
                useCDBCache: true
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.advanced.get();

                    expect(data.secureCookie).toBe(true);
                    expect(data.optOutName).toBe('pixelOptOut');
                    expect(data.requestObfuscation).toBe(true);
                }, done);
            });
        });
    });

    describe('page', () => {
        test('without data', (done) => {
            service.page({});

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.page.data.get();

                    expect(data.name).toMatch(/^(github.com\/(@angular-cli-builders)|(just-jeb\/angular-builders))|localhost\/$/);
                    expect(data.search).toBe('');
                    expect(data.numberSearchResults).toBe(0);
                    expect(data.errorMessages).toBe('');
                    expect(data.paywall).toBe(false);
                    expect(data.articleTitle).toBe('');
                    expect(data.contentTags).toBe('');
                    expect(data.title).toBe('');
                    expect(data.type).toBe('');
                    expect(data.length).toBe('');
                    expect(data.daysSincePublication).toBe(0);
                    expect(data.testVariant).toBe('');
                    expect(data.testExperiment).toBe('');
                    expect(data.parameter).toEqual({});
                    expect(data.category).toEqual({});
                    expect(data.goal).toEqual({});
                }, done);
            });
        });

        test('with data', (done) => {
            service.page(
                'page123456789',
                {
                    search: 'shoes',
                    numberSearchResults: 13,
                    errorMessages: 'error',
                    paywall: true,
                    articleTitle: 'article title',
                    contentTags: 'content tags',
                    title: 'page title',
                    type: 'page type',
                    length: 'page length',
                    daysSincePublication: 12,
                    testVariant: 'test variant',
                    testExperiment: 'test experiment',
                    parameter: {
                        1: 'parameter 1',
                        5: 'parameter 5',
                        8: 'parameter 8'
                    },
                    category: {
                        1: 'category 1',
                        5: 'category 5',
                        8: 'category 8'
                    },
                    goal: {
                        1: 'goal 1',
                        5: 'goal 5',
                        8: 'goal 8'
                    }
                }
            );

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.page.data.get();

                    expect(data.name).toBe('page123456789');
                    expect(data.search).toBe('shoes');
                    expect(data.numberSearchResults).toBe(13);
                    expect(data.errorMessages).toBe('error');
                    expect(data.paywall).toBe(true);
                    expect(data.articleTitle).toBe('article title');
                    expect(data.contentTags).toBe('content tags');
                    expect(data.title).toBe('page title');
                    expect(data.type).toBe('page type');
                    expect(data.length).toBe('page length');
                    expect(data.daysSincePublication).toBe(12);
                    expect(data.testVariant).toBe('test variant');
                    expect(data.testExperiment).toBe('test experiment');
                    expect(data.parameter[1]).toBe('parameter 1');
                    expect(data.parameter[5]).toBe('parameter 5');
                    expect(data.parameter[8]).toBe('parameter 8');
                    expect(data.category[1]).toBe('category 1');
                    expect(data.category[5]).toBe('category 5');
                    expect(data.category[8]).toBe('category 8');
                    expect(data.goal[1]).toBe('goal 1');
                    expect(data.goal[5]).toBe('goal 5');
                    expect(data.goal[8]).toBe('goal 8');
                }, done);
            });
        });
    });

    describe('action', () => {
        test('without data', (done) => {
            service.action('', {});

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.action.data.get();

                    expect(data.name).toBe('');
                    expect(data.parameter).toEqual({});
                    expect(data.goal).toEqual({});
                }, done);
            });
        });

        test('with data', (done) => {
            service.action({
                name: 'action_name',
                parameter: {
                    2: 'parameter 2',
                    9: 'parameter 9',
                    7: 'parameter 7'
                },
                goal: {
                    8: 'parameter 8'
                }
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.action.data.get();

                    expect(data.name).toBe('action_name');
                    expect(data.parameter[2]).toBe('parameter 2');
                    expect(data.parameter[7]).toBe('parameter 7');
                    expect(data.parameter[9]).toBe('parameter 9');
                    expect(data.goal[8]).toBe('parameter 8');
                }, done);
            });
        });
    });

    describe('session', () => {
        test('without data', (done) => {
            service.session({});

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.session.data.get();

                    expect(data.loginStatus).toBe('');
                    expect(data.parameter).toEqual({});
                }, done);
            });
        });

        test('with data', (done) => {
            service.session({
                loginStatus: 'login',
                parameter: {
                    2: 'parameter 2',
                    9: 'parameter 9',
                    7: 'parameter 7'
                }
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.session.data.get();

                    expect(data.loginStatus).toBe('login');
                    expect(data.parameter[2]).toBe('parameter 2');
                    expect(data.parameter[7]).toBe('parameter 7');
                    expect(data.parameter[9]).toBe('parameter 9');
                }, done);
            });
        });
    });

    describe('campaign', () => {
        test('without data', (done) => {
            service.campaign({});

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.campaign.data.get();

                    expect(data.id).toBe('');
                    expect(data.mediaCode).toEqual(['mc', 'wt_mc']);
                    expect(data.oncePerSession).toBe(false);
                    expect(data.parameter).toEqual({});
                }, done);
            });
        });

        test('with data', (done) => {
            service.campaign({
                id: 'wt_mc%3D_test.campaign',
                mediaCode: ['wt_ga'],
                oncePerSession: true
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.campaign.data.get();

                    expect(data.id).toBe('wt_mc%3D_test.campaign');
                    expect(data.mediaCode).toEqual(['wt_ga']);
                    expect(data.oncePerSession).toBe(true);
                }, done);
            });
        });
    });

    describe('customer', () => {
        test('without data', (done) => {
            service.customer({});

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.customer.data.get();

                    expect(data.id).toBe('');
                    expect(data.email).toBe('');
                    expect(data.emailRID).toBe('');
                    expect(data.emailOptin).toBe(false);
                    expect(data.firstName).toBe('');
                    expect(data.lastName).toBe('');
                    expect(data.telephone).toBe('');
                    expect(data.gender).toBe(0);
                    expect(data.birthday).toBe('');
                    expect(data.country).toBe('');
                    expect(data.city).toBe('');
                    expect(data.postalCode).toBe('');
                    expect(data.street).toBe('');
                    expect(data.streetNumber).toBe('');
                    expect(data.validation).toBe(false);
                    expect(data.category).toEqual({});
                }, done);
            });
        });

        test('with data', (done) => {
            service.customer(
                'customer123456789',
                {
                    email: 'test.tester@domain.com',
                    emailRID: 'RID-0123456789',
                    emailOptin: true,
                    firstName: 'Test',
                    lastName: 'Tester',
                    telephone: '+49 30 755 415 100',
                    gender: 1,
                    birthday: '19870913',
                    country: 'Berlin',
                    city: 'Berlin',
                    postalCode: '10115',
                    street: 'Robert-Koch-Platz',
                    streetNumber: '4'
                },
                true
            );

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.customer.data.get();

                    expect(data.id).toBe('customer123456789');
                    expect(data.email).toBe('test.tester@domain.com');
                    expect(data.emailRID).toBe('RID-0123456789');
                    expect(data.emailOptin).toBe(true);
                    expect(data.firstName).toBe('Test');
                    expect(data.lastName).toBe('Tester');
                    expect(data.telephone).toBe('+49 30 755 415 100');
                    expect(data.gender).toBe(1);
                    expect(data.birthday).toBe('19870913');
                    expect(data.country).toBe('Berlin');
                    expect(data.city).toBe('Berlin');
                    expect(data.postalCode).toBe('10115');
                    expect(data.street).toBe('Robert-Koch-Platz');
                    expect(data.streetNumber).toBe('4');
                    expect(data.validation).toBe(true);
                    expect(data.category).toEqual({});
                }, done);
            });
        });
    });

    describe('product', () => {
        test('without data', (done) => {
            service.product('view', {id: ''});

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.view.data.get();

                    expect(data).toEqual([]);
                }, done);
            });
        });

        test('with data - view', (done) => {
            service.product('view', {
                id: 'abc123def456',
                cost: '13.99',
                quantity: 3,
                variant: 'green',
                soldOut: true,
                parameter: {
                    5: 'parameter 5'
                },
                category: {
                    7: 'category 7'
                }
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.view.data.get()[0];

                    expect(data.id).toBe('abc123def456');
                    expect(data.cost).toBe(13.99);
                    expect(data.quantity).toBe(3);
                    expect(data.variant).toBe('green');
                    expect(data.soldOut).toBe(true);
                    expect(data.parameter[5]).toBe('parameter 5');
                    expect(data.category[7]).toBe('category 7');
                }, done);
            });
        });

        test('with data - basket', (done) => {
            service.product('basket', {
                id: 'abc123def456',
                cost: '13.99',
                quantity: 3,
                variant: 'green',
                soldOut: true,
                parameter: {
                    5: 'parameter 5'
                },
                category: {
                    7: 'category 7'
                }
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.basket.data.get()[0];

                    expect(data.id).toBe('abc123def456');
                    expect(data.cost).toBe(13.99);
                    expect(data.quantity).toBe(3);
                    expect(data.variant).toBe('green');
                    expect(data.soldOut).toBe(true);
                    expect(data.parameter[5]).toBe('parameter 5');
                    expect(data.category[7]).toBe('category 7');
                }, done);
            });
        });

        test('with data - addToCart', (done) => {
            service.product('addToCart', {
                id: 'abc123def456',
                cost: '13.99',
                quantity: 3,
                variant: 'green',
                soldOut: true,
                parameter: {
                    5: 'parameter 5'
                },
                category: {
                    7: 'category 7'
                }
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.addToCart.data.get()[0];

                    expect(data.id).toBe('abc123def456');
                    expect(data.cost).toBe(13.99);
                    expect(data.quantity).toBe(3);
                    expect(data.variant).toBe('green');
                    expect(data.soldOut).toBe(true);
                    expect(data.parameter[5]).toBe('parameter 5');
                    expect(data.category[7]).toBe('category 7');
                }, done);
            });
        });

        test('with data - deleteFromCart', (done) => {
            service.product('deleteFromCart', {
                id: 'abc123def456',
                cost: '13.99',
                quantity: 3,
                variant: 'green',
                soldOut: true,
                parameter: {
                    5: 'parameter 5'
                },
                category: {
                    7: 'category 7'
                }
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.deleteFromCart.data.get()[0];

                    expect(data.id).toBe('abc123def456');
                    expect(data.cost).toBe(13.99);
                    expect(data.quantity).toBe(3);
                    expect(data.variant).toBe('green');
                    expect(data.soldOut).toBe(true);
                    expect(data.parameter[5]).toBe('parameter 5');
                    expect(data.category[7]).toBe('category 7');
                }, done);
            });
        });

        test('with data - checkout', (done) => {
            service.product('checkout', {
                id: 'abc123def456',
                cost: '13.99',
                quantity: 3,
                variant: 'green',
                soldOut: true,
                parameter: {
                    5: 'parameter 5'
                },
                category: {
                    7: 'category 7'
                }
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.checkout.data.get()[0];

                    expect(data.id).toBe('abc123def456');
                    expect(data.cost).toBe(13.99);
                    expect(data.quantity).toBe(3);
                    expect(data.variant).toBe('green');
                    expect(data.soldOut).toBe(true);
                    expect(data.parameter[5]).toBe('parameter 5');
                    expect(data.category[7]).toBe('category 7');
                }, done);
            });
        });

        test('with data - confirmation', (done) => {
            service.product('confirmation', {
                id: 'abc123def456',
                cost: '13.99',
                quantity: 3,
                variant: 'green',
                soldOut: true,
                parameter: {
                    5: 'parameter 5'
                },
                category: {
                    7: 'category 7'
                }
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.confirmation.data.get()[0];

                    expect(data.id).toBe('abc123def456');
                    expect(data.cost).toBe(13.99);
                    expect(data.quantity).toBe(3);
                    expect(data.variant).toBe('green');
                    expect(data.soldOut).toBe(true);
                    expect(data.parameter[5]).toBe('parameter 5');
                    expect(data.category[7]).toBe('category 7');
                }, done);
            });
        });

        test('with data - addToWishlist', (done) => {
            service.product('addToWishlist', {
                id: 'abc123def456',
                cost: '13.99',
                quantity: 3,
                variant: 'green',
                soldOut: true,
                parameter: {
                    5: 'parameter 5'
                },
                category: {
                    7: 'category 7'
                }
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.addToWishlist.data.get()[0];

                    expect(data.id).toBe('abc123def456');
                    expect(data.cost).toBe(13.99);
                    expect(data.quantity).toBe(3);
                    expect(data.variant).toBe('green');
                    expect(data.soldOut).toBe(true);
                    expect(data.parameter[5]).toBe('parameter 5');
                    expect(data.category[7]).toBe('category 7');
                }, done);
            });
        });

        test('with data - deleteFromWishlist', (done) => {
            service.product('deleteFromWishlist', {
                id: 'abc123def456',
                cost: '13.99',
                quantity: 3,
                variant: 'green',
                soldOut: true,
                parameter: {
                    5: 'parameter 5'
                },
                category: {
                    7: 'category 7'
                }
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.deleteFromWishlist.data.get()[0];

                    expect(data.id).toBe('abc123def456');
                    expect(data.cost).toBe(13.99);
                    expect(data.quantity).toBe(3);
                    expect(data.variant).toBe('green');
                    expect(data.soldOut).toBe(true);
                    expect(data.parameter[5]).toBe('parameter 5');
                    expect(data.category[7]).toBe('category 7');
                }, done);
            });
        });
    });

    describe('products', () => {
        test('without data', (done) => {
            service.products('basket', []);

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.basket.data.get();

                    expect(data).toEqual([]);
                }, done);
            });
        });

        test('with data - 1', (done) => {
            service.products('basket', [{
                id: 'product 1',
                cost: 13.99,
                quantity: 3,
                variant: 'green',
                soldOut: false,
                parameter: {
                    2: 'parameter 2',
                    5: 'parameter 5'
                },
                category: {
                    7: 'category 7'
                }
            }, {
                id: 'product 2',
                cost: '19.95',
                quantity: 1,
                variant: 'yellow',
                soldOut: true,
                parameter: {
                    5: 'parameter 5'
                },
                category: {
                    5: 'category 5',
                    7: 'category 7'
                }
            }]);

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.basket.data.get();

                    expect(data[0].id).toBe('product 1');
                    expect(data[0].cost).toBe(13.99);
                    expect(data[0].quantity).toBe(3);
                    expect(data[0].variant).toBe('green');
                    expect(data[0].soldOut).toBe(false);
                    expect(data[0].parameter[2]).toBe('parameter 2');
                    expect(data[0].parameter[5]).toBe('parameter 5');
                    expect(data[0].category[7]).toBe('category 7');

                    expect(data[1].id).toBe('product 2');
                    expect(data[1].cost).toBe(19.95);
                    expect(data[1].quantity).toBe(1);
                    expect(data[1].variant).toBe('yellow');
                    expect(data[1].soldOut).toBe(true);
                    expect(data[1].parameter[5]).toBe('parameter 5');
                    expect(data[1].category[5]).toBe('category 5');
                    expect(data[1].category[7]).toBe('category 7');
                }, done);
            });
        });

        test('with data - 2', (done) => {
            service.products('confirmation', [{
                id: 'product 1',
                cost: 13.99,
                quantity: 3,
                variant: 'green',
                soldOut: false,
                parameter: {
                    2: 'parameter 2',
                    5: 'parameter 5'
                },
                category: {
                    7: 'category 7'
                }
            }, {
                id: 'product 2',
                cost: '19.95',
                quantity: 1,
                variant: 'yellow',
                soldOut: true,
                parameter: {
                    5: 'parameter 5'
                },
                category: {
                    5: 'category 5',
                    7: 'category 7'
                }
            }]);

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.confirmation.data.get();

                    expect(data[0].id).toBe('product 1');
                    expect(data[0].cost).toBe(13.99);
                    expect(data[0].quantity).toBe(3);
                    expect(data[0].variant).toBe('green');
                    expect(data[0].soldOut).toBe(false);
                    expect(data[0].parameter[2]).toBe('parameter 2');
                    expect(data[0].parameter[5]).toBe('parameter 5');
                    expect(data[0].category[7]).toBe('category 7');

                    expect(data[1].id).toBe('product 2');
                    expect(data[1].cost).toBe(19.95);
                    expect(data[1].quantity).toBe(1);
                    expect(data[1].variant).toBe('yellow');
                    expect(data[1].soldOut).toBe(true);
                    expect(data[1].parameter[5]).toBe('parameter 5');
                    expect(data[1].category[5]).toBe('category 5');
                    expect(data[1].category[7]).toBe('category 7');
                }, done);
            });
        });
    });

    describe('order', () => {
        test('without data', (done) => {
            service.order({});

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.order.data.get();

                    expect(data.value).toBe('');
                    expect(data.id).toBe('');
                    expect(data.currency).toBe('');
                    expect(data.couponValue).toBe(0);
                    expect(data.paymentMethod).toBe('');
                    expect(data.shippingService).toBe('');
                    expect(data.shippingSpeed).toBe('');
                    expect(data.shippingCosts).toBe(0);
                    expect(data.grossMargin).toBe(0);
                    expect(data.orderStatus).toBe('');
                    expect(data.parameter).toEqual({});
                }, done);
            });
        });

        test('with data', (done) => {
            service.order({
                value: '99.95',
                id: '0123456789',
                currency: 'EUR',
                couponValue: '20',
                paymentMethod: 'paypal',
                shippingService: 'dhl',
                shippingSpeed: '7',
                shippingCosts: '2.45',
                grossMargin: '30.84',
                orderStatus: 'payed',
                parameter: {
                    5: 'parameter 5'
                }
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.order.data.get();

                    expect(data.value).toBe(99.95);
                    expect(data.id).toBe('0123456789');
                    expect(data.currency).toBe('EUR');
                    expect(data.couponValue).toBe(20);
                    expect(data.paymentMethod).toBe('paypal');
                    expect(data.shippingService).toBe('dhl');
                    expect(data.shippingSpeed).toBe('7');
                    expect(data.shippingCosts).toBe(2.45);
                    expect(data.grossMargin).toBe(30.84);
                    expect(data.orderStatus).toBe('payed');
                    expect(data.parameter[5]).toEqual('parameter 5');
                }, done);
            });
        });
    });

    describe('extension', () => {
        test('without data - 1', () => {
            expect(service.extension('')).toBeUndefined();
        });

        test('without data - 2', () => {
            expect(service.extension('scroll_position')).toBeUndefined();
        });

        test('with data', (done) => {
            service.extension('scroll_position', 'activate');

            service.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.extension.scroll_position.isActivated()).toBe(true);
                }, done);
            });
        });

        test('with config data', (done) => {
            service.extension('scroll_position', 'config', {
                roundResult: false,
                pageHeight: '6',
                sendAsFigure: '12'
            });

            service.call((wtSmart) => {
                expectInCallback(() => {
                    const data = wtSmart.extension.scroll_position.config();
                    expect(data.roundResult).toBe(false);
                    expect(data.pageHeight).toBe(6);
                    expect(data.sendAsFigure).toBe(12);
                }, done);
            });
        });
    });

    describe('track', () => {
        let spyOnTrack;
        let spyOnTrackPage;
        let spyOnTrackAction;

        beforeEach((done) => {
            service.call((wtSmart) => {
                spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {
                });
                spyOnTrackPage = jest.spyOn(wtSmart, 'trackPage').mockImplementation(() => {
                });
                spyOnTrackAction = jest.spyOn(wtSmart, 'trackAction').mockImplementation(() => {
                });

                done();
            });
        });

        afterEach(() => {
            spyOnTrack.mockRestore();
            spyOnTrackPage.mockRestore();
            spyOnTrackAction.mockRestore();

            spyOnTrack = null;
            spyOnTrackPage = null;
            spyOnTrackAction = null;
        });

        test('track', (done) => {
            service.track();

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                    expect(spyOnTrackAction).not.toHaveBeenCalled();
                }, done);
            });
        });

        test('trackPage', (done) => {
            service.trackPage();

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();
                    expect(spyOnTrackPage).toHaveBeenCalled();
                    expect(spyOnTrackAction).not.toHaveBeenCalled();
                }, done);
            });
        });

        test('trackAction', (done) => {
            service.trackAction();

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();
                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                    expect(spyOnTrackAction).toHaveBeenCalled();
                }, done);
            });
        });

        test('track - keepData', (done) => {
            service.track(true);

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                    expect(spyOnTrackAction).not.toHaveBeenCalled();
                }, done);
            });
        });

        test('trackPage - keepData', (done) => {
            service.trackPage(true);

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();
                    expect(spyOnTrackPage).toHaveBeenCalled();
                    expect(spyOnTrackAction).not.toHaveBeenCalled();
                }, done);
            });
        });

        test('trackAction - keepData', (done) => {
            service.trackAction(true);

            service.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).not.toHaveBeenCalled();
                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                    expect(spyOnTrackAction).toHaveBeenCalled();
                }, done);
            });
        });
    });
});
