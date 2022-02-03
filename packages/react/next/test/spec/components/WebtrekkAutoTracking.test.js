import React from 'react';
import Router from 'next/router';
import {shallow, mount} from './../../enzyme';
import {expectInCallback} from './../../helper';
import {WebtrekkAutoTracking, WebtrekkSmartPixelReact} from './../../../src/index';

const reactVersion = parseInt(React.version.split('.')[0]);
let invalidPropIndex = 0;
if (reactVersion > 16) {
    invalidPropIndex = 2;
}

let mockOnRouteChangeComplete;
Router.events.on = jest.fn((event, callback) => {
    mockOnRouteChangeComplete = callback;
});

describe('WebtrekkAutoTracking', () => {
    let spyOnError;
    let spyOnTrackPage;
    let spyOnActionReload;
    let renderedWebtrekkAutoTracking;

    describe('shallow rendering', () => {
        beforeEach(() => {
            spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {
                // do nothing
            });
        });

        afterEach(() => {
            spyOnError.mockRestore();

            spyOnError = null;
        });

        test('ignore wrong type', () => {
            shallow(
                <WebtrekkAutoTracking
                    trackId={ 0 }
                    trackDomain={ 0 }
                    activateAutoTracking={ 0 }
                    activateActions={ 0 }
                    activateTeaser={ 0 }
                    activateProductList={ 0 }
                    activateContentEngagement={ 0 }
                />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(7);

            expect(spyOnError.mock.calls[0][invalidPropIndex]).toContain(
                'Invalid prop `trackId` of type `number` supplied to `WebtrekkAutoTracking`, expected `string`'
            );
            expect(spyOnError.mock.calls[1][invalidPropIndex]).toContain(
                'Invalid prop `trackDomain` of type `number` supplied to `WebtrekkAutoTracking`, expected `string`'
            );
            expect(spyOnError.mock.calls[2][invalidPropIndex]).toContain(
                'Invalid prop `activateAutoTracking` of type `number` supplied to `WebtrekkAutoTracking`, expected `boolean`'
            );
            expect(spyOnError.mock.calls[3][invalidPropIndex]).toContain(
                'Invalid prop `activateActions` of type `number` supplied to `WebtrekkAutoTracking`, expected `boolean`'
            );
            expect(spyOnError.mock.calls[4][invalidPropIndex]).toContain(
                'Invalid prop `activateTeaser` of type `number` supplied to `WebtrekkAutoTracking`, expected `boolean`'
            );
            expect(spyOnError.mock.calls[5][invalidPropIndex]).toContain(
                'Invalid prop `activateProductList` of type `number` supplied to `WebtrekkAutoTracking`, expected `boolean`'
            );
            expect(spyOnError.mock.calls[6][invalidPropIndex]).toContain(
                'Invalid prop `activateContentEngagement` of type `number` supplied to `WebtrekkAutoTracking`, expected `boolean`'
            );
        });

        test('required props', () => {
            shallow(
                <WebtrekkAutoTracking />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(2);

            expect(spyOnError.mock.calls[0][invalidPropIndex]).toContain(
                'The prop `trackId` is marked as required in `WebtrekkAutoTracking`, but its value is `null`'
            );
            expect(spyOnError.mock.calls[1][invalidPropIndex]).toContain(
                'The prop `trackDomain` is marked as required in `WebtrekkAutoTracking`, but its value is `null`'
            );
        });

        test('don\'t returns children', () => {
            renderedWebtrekkAutoTracking = shallow(<WebtrekkAutoTracking />);
            expect(renderedWebtrekkAutoTracking).toEqual({});
        });
    });

    describe('full rendering', () => {
        beforeEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {
                    // do nothing
                });
                spyOnTrackPage = jest.spyOn(wtSmart, 'trackPage').mockImplementation(() => {
                    // do nothing
                });
                done();
            });
        });

        afterEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                wtSmart.init.remove();
                wtSmart.extension.action.deactivate();
                wtSmart.extension.teaser_tracking.deactivate();
                wtSmart.extension.product_list_tracking.deactivate();
                wtSmart.extension.content_engagement.deactivate();

                spyOnError.mockRestore();
                spyOnTrackPage.mockRestore();
                spyOnError = null;
                spyOnTrackPage = null;

                done();
            });
        });

        test('call init', (done) => {
            mount(<WebtrekkAutoTracking
                trackId="123451234512345"
                trackDomain="q3.webtrekk.net"
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const initData = wtSmart.init.get();
                    expect(initData.trackId).toBe('123451234512345');
                    expect(initData.trackDomain).toBe('q3.webtrekk.net');

                    expect(wtSmart.extension.action.isActivated()).toBe(false);
                    expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.content_engagement.isActivated()).toBe(false);

                    expect(spyOnTrackPage).toHaveBeenCalled();
                }, done, 100);
            });
        });

        test('deactivate auto tracking', (done) => {
            mount(<WebtrekkAutoTracking
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateAutoTracking={ false }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const initData = wtSmart.init.get();
                    expect(initData.trackId).toBe('543215432154321');
                    expect(initData.trackDomain).toBe('analytics01.webtrekk.net');

                    expect(wtSmart.extension.action.isActivated()).toBe(false);
                    expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.content_engagement.isActivated()).toBe(false);

                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                }, done, 100);
            });
        });

        test('activate action tracking 1', (done) => {
            mount(<WebtrekkAutoTracking
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateActions={ true }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const initData = wtSmart.init.get();
                    expect(initData.trackId).toBe('543215432154321');
                    expect(initData.trackDomain).toBe('analytics01.webtrekk.net');

                    expect(wtSmart.extension.action.isActivated()).toBe(true);
                    expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.content_engagement.isActivated()).toBe(false);

                    expect(spyOnTrackPage).toHaveBeenCalled();
                }, done, 100);
            });
        });

        test('activate action tracking 2', (done) => {
            mount(<WebtrekkAutoTracking
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateAutoTracking={ false }
                activateActions={ true }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const initData = wtSmart.init.get();
                    expect(initData.trackId).toBe('543215432154321');
                    expect(initData.trackDomain).toBe('analytics01.webtrekk.net');

                    expect(wtSmart.extension.action.isActivated()).toBe(true);
                    expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.content_engagement.isActivated()).toBe(false);

                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                }, done, 100);
            });
        });

        test('activate teaser tracking', (done) => {
            mount(<WebtrekkAutoTracking
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateTeaser={ true }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const initData = wtSmart.init.get();
                    expect(initData.trackId).toBe('543215432154321');
                    expect(initData.trackDomain).toBe('analytics01.webtrekk.net');

                    expect(wtSmart.extension.action.isActivated()).toBe(false);
                    expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(true);
                    expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.content_engagement.isActivated()).toBe(false);

                    expect(spyOnTrackPage).toHaveBeenCalled();
                }, done, 100);
            });
        });

        test('activate product list tracking', (done) => {
            mount(<WebtrekkAutoTracking
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateProductList={ true }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const initData = wtSmart.init.get();
                    expect(initData.trackId).toBe('543215432154321');
                    expect(initData.trackDomain).toBe('analytics01.webtrekk.net');

                    expect(wtSmart.extension.action.isActivated()).toBe(false);
                    expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(true);
                    expect(wtSmart.extension.content_engagement.isActivated()).toBe(false);

                    expect(spyOnTrackPage).toHaveBeenCalled();
                }, done, 100);
            });
        });

        test('activate content engagement tracking', (done) => {
            mount(<WebtrekkAutoTracking
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateContentEngagement={ true }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const initData = wtSmart.init.get();
                    expect(initData.trackId).toBe('543215432154321');
                    expect(initData.trackDomain).toBe('analytics01.webtrekk.net');

                    expect(wtSmart.extension.action.isActivated()).toBe(false);
                    expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(false);
                    expect(wtSmart.extension.content_engagement.isActivated()).toBe(true);

                    expect(spyOnTrackPage).toHaveBeenCalled();
                }, done, 100);
            });
        });

        test('activate all', (done) => {
            mount(<WebtrekkAutoTracking
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateActions={ true }
                activateTeaser={ true }
                activateProductList={ true }
                activateContentEngagement={ true }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const initData = wtSmart.init.get();
                    expect(initData.trackId).toBe('543215432154321');
                    expect(initData.trackDomain).toBe('analytics01.webtrekk.net');

                    expect(wtSmart.extension.action.isActivated()).toBe(true);
                    expect(wtSmart.extension.teaser_tracking.isActivated()).toBe(true);
                    expect(wtSmart.extension.product_list_tracking.isActivated()).toBe(true);
                    expect(wtSmart.extension.content_engagement.isActivated()).toBe(true);

                    expect(spyOnTrackPage).toHaveBeenCalled();
                }, done, 100);
            });
        });
    });

    describe('update rendering', () => {
        beforeEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                renderedWebtrekkAutoTracking = mount(<WebtrekkAutoTracking
                    trackId="123451234512345"
                    trackDomain="q3.webtrekk.net"
                    router={Router}
                />);

                window.setTimeout(() => {
                    spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {
                        // do nothing
                    });
                    spyOnTrackPage = jest.spyOn(wtSmart, 'trackPage').mockImplementation(() => {
                        // do nothing
                    });
                    spyOnActionReload = jest.spyOn(wtSmart.extension.action, 'reload').mockImplementation(() => {
                        // do nothing
                    });
                    done();
                }, 100);
            });
        });

        afterEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                wtSmart.init.remove();
                wtSmart.extension.action.deactivate();
                wtSmart.extension.teaser_tracking.deactivate();
                wtSmart.extension.product_list_tracking.deactivate();
                wtSmart.extension.content_engagement.deactivate();

                spyOnError.mockRestore();
                spyOnTrackPage.mockRestore();
                spyOnActionReload.mockRestore();
                spyOnError = null;
                spyOnTrackPage = null;
                spyOnActionReload = null;
                renderedWebtrekkAutoTracking = null;

                done();
            });
        });

        test('update', (done) => {
            renderedWebtrekkAutoTracking.setProps();

            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                    expect(spyOnActionReload).not.toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('track new page view', (done) => {
            history.pushState(null, 'Test 1', '/test1');
            mockOnRouteChangeComplete();

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.page.data.get().name).toBe('localhost/test1');

                    expect(spyOnTrackPage).toHaveBeenCalled();
                    expect(spyOnActionReload).not.toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('track new page view and update actions', (done) => {
            renderedWebtrekkAutoTracking = mount(<WebtrekkAutoTracking
                trackId="123451234512345"
                trackDomain="q3.webtrekk.net"
                router={Router}
                activateActions={ true }
            />);

            spyOnTrackPage.mockClear();
            spyOnActionReload.mockClear();

            history.pushState(null, 'Test 2', '/test2');
            mockOnRouteChangeComplete();

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.page.data.get().name).toBe('localhost/test2');

                    expect(spyOnTrackPage).toHaveBeenCalled();
                    expect(spyOnActionReload).toHaveBeenCalled();
                }, done, 750);
            });
        });
    });
});
