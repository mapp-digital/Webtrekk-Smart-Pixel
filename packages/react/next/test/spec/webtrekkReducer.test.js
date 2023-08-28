import React, { useReducer } from "react";
import { act, renderHook } from '@testing-library/react-hooks';
import { expectInCallback } from './../helper';
import { webtrekkReducer, WebtrekkSmartPixelReact } from './../../src/index';

const initialState = {};
const customReducer = (state, action) => {return action};

describe('webtrekkReducer', () => {
    let spyOnTrack;
    let spyOnTrackPage;
    let spyOnTrackAction;
    let webtrekkReducerCallback;

    beforeEach(() => {
        const reactVersion = parseInt(React.version);
        if (reactVersion <= 15) {
            pending();
        }
    });

    afterEach((done) => {
        WebtrekkSmartPixelReact.call((wtSmart) => {
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

    describe('without custom actions', () => {
        beforeEach((done) => {
            webtrekkReducerCallback = renderHook(() => useReducer(webtrekkReducer()(customReducer), initialState)).result;

            WebtrekkSmartPixelReact.call((wtSmart) => {
                spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {});

                done();
            });
        });

        test('ignore undefined action', () => {
            const actionData = {type: 'history/push'};
            const [, dispatch] = webtrekkReducerCallback.current;

            act(() => {
                dispatch(actionData);
            });

            const [state,] = webtrekkReducerCallback.current;

            expect(state).toBe(actionData);
        });

        test('action without webtrekk data', () => {
            const actionData = {type: 'history/push', webtrekk: {}};
            const [, dispatch] = webtrekkReducerCallback.current;

            act(() => {
                dispatch(actionData);
            });

            const [state,] = webtrekkReducerCallback.current;

            expect(state).toBe(actionData);
        });

        test('action with init data', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/init',
                        data: {
                            trackId: '123451234512345',
                            trackDomain: 'analytics01.webtrekk.net',
                            domain: 'sub.domain.tld',
                            cookie: '1'
                        }
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.init.get();

                    expect(data.trackId).toBe('123451234512345');
                    expect(data.trackDomain).toBe('analytics01.webtrekk.net');
                    expect(data.domain).toEqual(['sub.domain.tld']);
                    expect(data.cookie).toBe('1');
                }, done);
            });
        });

        test('action with advanced data', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/advanced',
                        data: {
                            secureCookie: true,
                            optOutName: 'pixelOptOut',
                            requestObfuscation: true,
                            forceOldEverId: true,
                            execCDB: false,
                            useCDBCache: true
                        }
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.advanced.get();

                    expect(data.secureCookie).toBe(true);
                    expect(data.optOutName).toBe('pixelOptOut');
                    expect(data.requestObfuscation).toBe(true);
                    expect(data.forceOldEverId).toBe(true);
                }, done);
            });
        });

        test('action with page data - 1', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/page',
                        data: {
                            name: 'page123456789',
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
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
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

        test('action with page data - 2', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/page',
                        sendInstantly: true,
                        data: {
                            name: 'page123456789',
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
                    }
                });
            });

            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrack).toHaveBeenCalled();
                }, done);
            });
        });

        test('action with action data', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/action',
                        data: {
                            name: 'action_name',
                            parameter: {
                                2: 'parameter 2',
                                9: 'parameter 9',
                                7: 'parameter 7'
                            },
                            goal: {
                                8: 'parameter 8'
                            }
                        }
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
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

        test('action with session data', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/session',
                        data: {
                            loginStatus: 'login',
                            parameter: {
                                2: 'parameter 2',
                                9: 'parameter 9',
                                7: 'parameter 7'
                            }
                        }
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.session.data.get();

                    expect(data.loginStatus).toBe('login');
                    expect(data.parameter[2]).toBe('parameter 2');
                    expect(data.parameter[7]).toBe('parameter 7');
                    expect(data.parameter[9]).toBe('parameter 9');
                }, done);
            });
        });

        test('action with campaign data', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/campaign',
                        data: {
                            id: 'wt_mc%3D_test.campaign',
                            mediaCode: ['wt_ga'],
                            oncePerSession: true
                        }
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.campaign.data.get();

                    expect(data.id).toBe('wt_mc%3D_test.campaign');
                    expect(data.action).toBe('c');
                    expect(data.mediaCode).toEqual(['wt_ga']);
                    expect(data.oncePerSession).toBe(true);
                }, done);
            });
        });

        test('action with customer data', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/customer',
                        data: {
                            id: 'customer123456789',
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
                            streetNumber: '4',
                            validation: true
                        }
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
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

        test('action with product data', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/product',
                        action: 'view',
                        data: {
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
                        }
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.view.data.get()[0];

                    expect(data.id).toBe('abc123def456');
                    expect(data.cost).toBe(13.99);
                    expect(data.quantity).toBe(3);
                    expect(data.status).toBe('view');
                    expect(data.variant).toBe('green');
                    expect(data.soldOut).toBe(true);
                    expect(data.parameter[5]).toBe('parameter 5');
                    expect(data.category[7]).toBe('category 7');
                }, done);
            });
        });

        test('action with products data', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/products',
                        action: 'basket',
                        data: [{
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
                        }]
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.product.basket.data.get();

                    expect(data[0].id).toBe('product 1');
                    expect(data[0].cost).toBe(13.99);
                    expect(data[0].quantity).toBe(3);
                    expect(data[0].status).toBe('add');
                    expect(data[0].variant).toBe('green');
                    expect(data[0].soldOut).toBe(false);
                    expect(data[0].parameter[2]).toBe('parameter 2');
                    expect(data[0].parameter[5]).toBe('parameter 5');
                    expect(data[0].category[7]).toBe('category 7');

                    expect(data[1].id).toBe('product 2');
                    expect(data[1].cost).toBe(19.95);
                    expect(data[1].quantity).toBe(1);
                    expect(data[1].status).toBe('add');
                    expect(data[1].variant).toBe('yellow');
                    expect(data[1].soldOut).toBe(true);
                    expect(data[1].parameter[5]).toBe('parameter 5');
                    expect(data[1].category[5]).toBe('category 5');
                    expect(data[1].category[7]).toBe('category 7');
                }, done);
            });
        });

        test('action with order data', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/order',
                        data: {
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
                        }
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
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

        test('action with extension data - 1', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/extension',
                        data: {
                            extension: 'scroll_position',
                            action: 'activate'
                        }
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.extension.scroll_position.isActivated()).toBe(true);
                }, done);
            });
        });

        test('action with extension data - 2', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({
                    type: 'history/push',
                    webtrekk: {
                        type: 'webtrekk/extension',
                        data: {
                            extension: 'scroll_position',
                            action: 'activate',
                            roundResult: false,
                            pageHeight: '6',
                            sendAsFigure: '12'
                        }
                    }
                });
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.extension.scroll_position.isActivated()).toBe(true);
                }, done);
            });
        });

        describe('action with track', () => {
            beforeEach((done) => {
                WebtrekkSmartPixelReact.call((wtSmart) => {
                    spyOnTrack = jest.spyOn(wtSmart, 'track').mockImplementation(() => {});
                    spyOnTrackPage = jest.spyOn(wtSmart, 'trackPage').mockImplementation(() => {});
                    spyOnTrackAction = jest.spyOn(wtSmart, 'trackAction').mockImplementation(() => {});

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
                const [, dispatch] = webtrekkReducerCallback.current;
                act(() => {
                    dispatch({
                        type: 'history/push',
                        webtrekk: {
                            type: 'webtrekk/track'
                        }
                    });
                });

                expectInCallback(() => {
                    WebtrekkSmartPixelReact.call(() => {
                        expect(spyOnTrack).toHaveBeenCalled();
                        expect(spyOnTrackPage).not.toHaveBeenCalled();
                        expect(spyOnTrackAction).not.toHaveBeenCalled();
                    });
                }, done);
            });

            test('trackPage', (done) => {
                const [, dispatch] = webtrekkReducerCallback.current;
                act(() => {
                    dispatch({
                        type: 'history/push',
                        webtrekk: {
                            type: 'webtrekk/trackPage'
                        }
                    });
                });

                expectInCallback(() => {
                    WebtrekkSmartPixelReact.call(() => {
                        expect(spyOnTrack).not.toHaveBeenCalled();
                        expect(spyOnTrackPage).toHaveBeenCalled();
                        expect(spyOnTrackAction).not.toHaveBeenCalled();
                    });
                }, done);
            });

            test('trackAction', (done) => {
                const [, dispatch] = webtrekkReducerCallback.current;
                act(() => {
                    dispatch({
                        type: 'history/push',
                        webtrekk: {
                            type: 'webtrekk/trackAction'
                        }
                    });
                });

                expectInCallback(() => {
                    WebtrekkSmartPixelReact.call(() => {
                        expect(spyOnTrack).not.toHaveBeenCalled();
                        expect(spyOnTrackPage).not.toHaveBeenCalled();
                        expect(spyOnTrackAction).toHaveBeenCalled();
                    });
                }, done);
            });
        });
    });

    describe('with custom actions', () => {
        beforeEach(() => {
            webtrekkReducerCallback = renderHook(() => useReducer(webtrekkReducer({
                'history/push': (state, action) => {
                    WebtrekkSmartPixelReact.action({
                        name: action.payload
                    });
                },
                'history/update': (state, action) => {
                    WebtrekkSmartPixelReact.action({
                        name: action.payload
                    });
                },
                'history/replace': (state, action) => {
                    WebtrekkSmartPixelReact.action({
                        name: action.payload
                    });
                }
            })(), initialState)).result;
        });

        test('1', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({type: 'history/push', payload: 'push new history'});
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.action.data.get();

                    expect(data.name).toBe('push new history');
                }, done);
            });
        });

        test('2', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({type: 'history/update', payload: 'update history'});
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.action.data.get();

                    expect(data.name).toBe('update history');
                }, done);
            });
        });

        test('3', (done) => {
            const [, dispatch] = webtrekkReducerCallback.current;
            act(() => {
                dispatch({type: 'history/replace', payload: 'replace history'});
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    let data = wtSmart.action.data.get();

                    expect(data.name).toBe('replace history');
                }, done);
            });
        });
    });
});
