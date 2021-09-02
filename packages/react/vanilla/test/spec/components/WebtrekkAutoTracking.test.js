import React from 'react';
import {createBrowserHistory} from 'history';
import {shallow, mount} from './../../enzyme';
import {expectInCallback} from './../../helper';
import {WebtrekkAutoTracking, WebtrekkSmartPixelReact} from './../../../src/index';

const reactVersion = parseInt(React.version.split('.')[0]);
let invalidPropIndex = 0;
if (reactVersion > 16) {
    invalidPropIndex = 2;
}

describe('WebtrekkAutoTracking', () => {
    let spyOnError;
    let spyOnTrackPage;
    let spyOnActionReload;
    let renderedWebtrekkAutoTracking;

    describe('shallow rendering', () => {
        beforeEach(() => {
            spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {
            });
        });

        afterEach(() => {
            spyOnError.mockRestore();

            spyOnError = null;
        });

        test('ignore wrong type', () => {
            shallow(
                <WebtrekkAutoTracking.WrappedComponent
                    trackId={0}
                    trackDomain={0}
                    activateActions={0}
                    activateTeaser={0}
                    activateProductList={0}
                    activateContentEngagement={0}
                />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(7);

            expect(spyOnError.mock.calls[0][invalidPropIndex]).toContain('Invalid prop `trackId` of type `number` supplied to `WebtrekkAutoTracking`, expected `string`.');
            expect(spyOnError.mock.calls[1][invalidPropIndex]).toContain('Invalid prop `trackDomain` of type `number` supplied to `WebtrekkAutoTracking`, expected `string`.');
            expect(spyOnError.mock.calls[2][invalidPropIndex]).toContain('Invalid prop `activateActions` of type `number` supplied to `WebtrekkAutoTracking`, expected `boolean`.');
            expect(spyOnError.mock.calls[3][invalidPropIndex]).toContain('Invalid prop `activateTeaser` of type `number` supplied to `WebtrekkAutoTracking`, expected `boolean`.');
            expect(spyOnError.mock.calls[4][invalidPropIndex]).toContain('Invalid prop `activateProductList` of type `number` supplied to `WebtrekkAutoTracking`, expected `boolean`.');
            expect(spyOnError.mock.calls[5][invalidPropIndex]).toContain('Invalid prop `activateContentEngagement` of type `number` supplied to `WebtrekkAutoTracking`, expected `boolean`.');
        });

        test('required props', () => {
            shallow(
                <WebtrekkAutoTracking.WrappedComponent/>
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(3);

            expect(spyOnError.mock.calls[0][invalidPropIndex]).toContain('The prop `trackId` is marked as required in `WebtrekkAutoTracking`, but its value is `null`.');
            expect(spyOnError.mock.calls[1][invalidPropIndex]).toContain('The prop `trackDomain` is marked as required in `WebtrekkAutoTracking`, but its value is `null`.');
        });

        test('don\'t returns children', () => {
            const renderedWebtrekkAutoTracking = shallow(<WebtrekkAutoTracking/>);
            expect(renderedWebtrekkAutoTracking).toEqual({});
        });
    });

    describe('full rendering', () => {
        beforeEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {
                });
                spyOnTrackPage = jest.spyOn(wtSmart, 'trackPage').mockImplementation(() => {
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
            mount(<WebtrekkAutoTracking.WrappedComponent
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
                }, done);
            });
        });

        test('activate action tracking', (done) => {
            mount(<WebtrekkAutoTracking.WrappedComponent
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateActions={true}
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
                }, done);
            });
        });

        test('activate teaser tracking', (done) => {
            mount(<WebtrekkAutoTracking.WrappedComponent
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateTeaser={true}
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
                }, done);
            });
        });

        test('activate product list tracking', (done) => {
            mount(<WebtrekkAutoTracking.WrappedComponent
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateProductList={true}
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
                }, done);
            });
        });

        test('activate content engagement tracking', (done) => {
            mount(<WebtrekkAutoTracking.WrappedComponent
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateContentEngagement={true}
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
                }, done);
            });
        });

        test('activate all', (done) => {
            mount(<WebtrekkAutoTracking.WrappedComponent
                trackId="543215432154321"
                trackDomain="analytics01.webtrekk.net"
                activateActions={true}
                activateTeaser={true}
                activateProductList={true}
                activateContentEngagement={true}
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
                }, done);
            });
        });
    });

    describe('update rendering', () => {
        let history;

        beforeEach((done) => {
            history = createBrowserHistory();

            WebtrekkSmartPixelReact.call((wtSmart) => {
                renderedWebtrekkAutoTracking = mount(<WebtrekkAutoTracking.WrappedComponent
                    history={history}
                    activateAutoTracking={true}
                    trackId="123451234512345"
                    trackDomain="q3.webtrekk.net"
                />);

                spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {
                });
                spyOnTrackPage = jest.spyOn(wtSmart, 'trackPage').mockImplementation(() => {
                });
                spyOnActionReload = jest.spyOn(wtSmart.extension.action, 'reload').mockImplementation(() => {
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
                spyOnActionReload.mockRestore();
                spyOnError = null;
                spyOnTrackPage = null;
                spyOnActionReload = null;
                renderedWebtrekkAutoTracking = null;

                done();
            });
        });

        test('track new page view / push', (done) => {
            history.push('/test1');
            renderedWebtrekkAutoTracking.setProps();

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.page.data.get().name).toBe('localhost/test1');

                    expect(spyOnTrackPage).toHaveBeenCalled();
                    expect(spyOnActionReload).not.toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('track new page view and update actions / push', (done) => {
            renderedWebtrekkAutoTracking = mount(<WebtrekkAutoTracking.WrappedComponent
                history={history}
                trackId="123451234512345"
                trackDomain="q3.webtrekk.net"
                activateAutoTracking={true}
                activateActions={true}
            />);

            spyOnTrackPage.mockClear();
            spyOnActionReload.mockClear();

            history.push('/test2');
            renderedWebtrekkAutoTracking.setProps();

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.page.data.get().name).toBe('localhost/test2');

                    expect(spyOnTrackPage).toHaveBeenCalled();
                    expect(spyOnActionReload).toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('new page view and update actions / push', (done) => {
            renderedWebtrekkAutoTracking = mount(<WebtrekkAutoTracking.WrappedComponent
                history={history}
                trackId="123451234512345"
                trackDomain="q3.webtrekk.net"
                activateAutoTracking={false}
                activateActions={true}
            />);

            spyOnTrackPage.mockClear();
            spyOnActionReload.mockClear();

            history.push('/test3');
            renderedWebtrekkAutoTracking.setProps();

            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                    expect(spyOnActionReload).toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('track new page view / pop', (done) => {
            history.goBack();
            renderedWebtrekkAutoTracking.setProps();

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.page.data.get().name).toBe('localhost/test2');

                    expect(spyOnTrackPage).toHaveBeenCalled();
                    expect(spyOnActionReload).not.toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('track new page view and update actions / pop', (done) => {
            renderedWebtrekkAutoTracking = mount(<WebtrekkAutoTracking.WrappedComponent
                history={history}
                trackId="123451234512345"
                trackDomain="q3.webtrekk.net"
                activateAutoTracking={true}
                activateActions={true}
            />);

            spyOnTrackPage.mockClear();
            spyOnActionReload.mockClear();

            history.goBack();
            renderedWebtrekkAutoTracking.setProps();

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.page.data.get().name).toBe('localhost/test1');

                    expect(spyOnTrackPage).toHaveBeenCalled();
                    expect(spyOnActionReload).toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('ignore page view / replace', (done) => {
            history.replace('/foo1');
            renderedWebtrekkAutoTracking.setProps();

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.page.data.get().name).toBe('localhost/foo1');

                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                    expect(spyOnActionReload).not.toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('ignore page view and update actions / replace', (done) => {
            renderedWebtrekkAutoTracking = mount(<WebtrekkAutoTracking.WrappedComponent
                history={history}
                trackId="123451234512345"
                trackDomain="q3.webtrekk.net"
                activateAutoTracking={true}
                activateActions={true}
            />);

            spyOnTrackPage.mockClear();
            spyOnActionReload.mockClear();

            history.replace('/foo2');
            renderedWebtrekkAutoTracking.setProps();

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.page.data.get().name).toBe('localhost/foo2');

                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                    expect(spyOnActionReload).not.toHaveBeenCalled();
                }, done, 750);
            });
        });

        test('set only trackId and trackDomain', (done) => {
            renderedWebtrekkAutoTracking = mount(<WebtrekkAutoTracking.WrappedComponent
                history={history}
                trackId="123451234512345"
                trackDomain="q3.webtrekk.net"
                activateAutoTracking={false}
                activateActions={false}
            />);

            spyOnTrackPage.mockClear();
            spyOnActionReload.mockClear();

            history.push('/test5');
            renderedWebtrekkAutoTracking.setProps();

            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    expect(spyOnTrackPage).not.toHaveBeenCalled();
                    expect(spyOnActionReload).not.toHaveBeenCalled();
                }, done, 750);
            });
        });
    });
});
