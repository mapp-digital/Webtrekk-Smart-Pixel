import {
    ContentEngagementWithoutSelector,
    ContentEngagementWithSelector,
    ProductListWithoutSelector,
    ProductListWithSelector,
    TeaserWithoutSelector,
    TeaserWithSelector
} from '../_helper/components.js';
import {expectInCallback} from '../helper';
import WebtrekkSmartPixelVue from '../../src/lib/WebtrekkSmartPixelVue';
import {createWrapper} from '../_helper/wrapper';

describe('ContentEngagement via autotrack and data property', () => {
    let spyOnAddContentEngagementElement;

    beforeEach(done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            spyOnAddContentEngagementElement = jest.spyOn(wtSmart.extension.content_engagement, 'add').mockImplementation(() => {
                // do nothing
            });
            done();
        });
    });
    afterEach((done) => {
        WebtrekkSmartPixelVue.call((wtSmart) => {
            wtSmart.extension.content_engagement.deactivate();
            spyOnAddContentEngagementElement.mockRestore();
            spyOnAddContentEngagementElement = null;

            done();
        });
    });

    test('add element with config - 1', done => {
        createWrapper(ContentEngagementWithoutSelector, {
            trackId: '111111111111111',
            trackDomain: 'analytics01.wt-eu02.net',
            requestQueue: {
                activated: false
            },
            activateContentEngagement: true,
            activateAutoTracking: true
        });

        WebtrekkSmartPixelVue.call(() => {
            expectInCallback(
                () => {
                    const mock = spyOnAddContentEngagementElement.mock.calls;
                    expect(mock.length).toBe(1);

                    const data = mock[0][0];
                    expect(data.selector instanceof HTMLDivElement).toBe(true);
                    expect(data.name).toBe('name of the content engangement element');
                    expect(data.config.percentageStepsInAnalytics).toBe(5);
                    expect(data.config.sendContentEngagement).toBe(2);
                    expect(data.config.percentageReached).toBe(20);
                    expect(data.config.secondsReached).toBe(30);
                    expect(data.config.largeBrowserResolution).toBe(1080);
                    expect(data.config.largeBrowserSeconds).toBe(20);
                    expect(data.config.mediumBrowserResolution).toBe(700);
                    expect(data.config.mediumBrowserSeconds).toBe(10);
                    expect(data.config.smallBrowserResolution).toBe(400);
                    expect(data.config.smallBrowserSeconds).toBe(5);
                },
                done,
                0
            );
        });
    });
    test('add element with config - 2', done => {
        createWrapper(ContentEngagementWithSelector, {
            trackId: '111111111111111',
            trackDomain: 'analytics01.wt-eu02.net',
            requestQueue: {
                activated: false
            },
            activateContentEngagement: true,
            activateAutoTracking: true
        });

        WebtrekkSmartPixelVue.call(() => {
            expectInCallback(
                () => {
                    const mock = spyOnAddContentEngagementElement.mock.calls;
                    expect(mock.length).toBe(1);

                    const data = mock[0][0];
                    expect(data.selector).toBe('#ce1');
                    expect(data.name).toBe('name of the content engangement element');
                    expect(data.config.percentageStepsInAnalytics).toBe(10);
                    expect(data.config.sendContentEngagement).toBe(1);
                    expect(data.config.percentageReached).toBe(25);
                    expect(data.config.secondsReached).toBe(30);
                    expect(data.config.largeBrowserResolution).toBe(1080);
                    expect(data.config.largeBrowserSeconds).toBe(20);
                    expect(data.config.mediumBrowserResolution).toBe(700);
                    expect(data.config.mediumBrowserSeconds).toBe(10);
                    expect(data.config.smallBrowserResolution).toBe(400);
                    expect(data.config.smallBrowserSeconds).toBe(5);
                },
                done,
                0
            );
        });
    });
});

describe('ProductListTracking via autotrack and data property', () => {
    let spyOnAddProductListElement;

    beforeEach(done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            spyOnAddProductListElement = jest.spyOn(wtSmart.extension.product_list_tracking, 'add').mockImplementation(() => {
                // do nothing
            });
            done();
        });
    });
    afterEach((done) => {
        WebtrekkSmartPixelVue.call((wtSmart) => {
            wtSmart.extension.product_list_tracking.deactivate();
            spyOnAddProductListElement.mockRestore();
            spyOnAddProductListElement = null;

            done();
        });
    });
    test('add element with config - 1', done => {
        createWrapper(ProductListWithoutSelector, {
            trackId: '111111111111111',
            trackDomain: 'analytics01.wt-eu02.net',
            requestQueue: {
                activated: false
            },
            activateProductListTracking: true,
            activateAutoTracking: true
        });

        WebtrekkSmartPixelVue.call(() => {
            expectInCallback(
                () => {
                    const mock = spyOnAddProductListElement.mock.calls;
                    expect(mock.length).toBe(1);

                    const data = mock[0][0];
                    expect(data.selector instanceof HTMLDivElement).toBe(true);
                    expect(data.data.id).toBe('product id 1');
                    expect(data.data.position).toBe(2);
                    expect(data.data.cost).toBe(19.95);
                    expect(data.data.quantity).toBe(1);
                    expect(data.data.variant).toBe('product variant');
                    expect(data.data.soldOut).toBe(false);
                    expect(data.data.category).toEqual({1: 'category-1', 5: 'category-5'});
                    expect(data.data.parameter).toEqual({1: 'parameter-1', 7: 'parameter-7'});
                },
                done,
                0
            );
        });
    });
    test('add element with config - 2', done => {
        createWrapper(ProductListWithSelector, {
            trackId: '111111111111111',
            trackDomain: 'analytics01.wt-eu02.net',
            requestQueue: {
                activated: false
            },
            activateProductListTracking: true,
            activateAutoTracking: true
        });

        WebtrekkSmartPixelVue.call(() => {
            expectInCallback(
                () => {
                    const mock = spyOnAddProductListElement.mock.calls;
                    expect(mock.length).toBe(1);

                    const data = mock[0][0];
                    expect(data.selector).toBe('#ce1');
                    expect(data.data.id).toBe('product id 2');
                    expect(data.data.position).toBe(3);
                    expect(data.data.cost).toBe(89.95);
                    expect(data.data.quantity).toBe(5);
                    expect(data.data.variant).toBe('product variant');
                    expect(data.data.soldOut).toBe(false);
                    expect(data.data.category).toEqual({2: 'category-2', 9: 'category-9'});
                    expect(data.data.parameter).toEqual({1: 'parameter-1', 6: 'parameter-6'});
                },
                done,
                0
            );
        });
    });
});

describe('TeaserTracking via autotrack and data property', () => {
    let spyOnAddTeaserElement;

    beforeEach(done => {
        WebtrekkSmartPixelVue.call(wtSmart => {
            spyOnAddTeaserElement = jest.spyOn(wtSmart.extension.teaser_tracking, 'add').mockImplementation(() => {
                // do nothing
            });
            done();
        });
    });
    afterEach((done) => {
        WebtrekkSmartPixelVue.call((wtSmart) => {
            wtSmart.extension.teaser_tracking.deactivate();
            spyOnAddTeaserElement.mockRestore();
            spyOnAddTeaserElement = null;

            done();
        });
    });
    test('add element with config - 1', done => {
        createWrapper(TeaserWithoutSelector, {
            trackId: '111111111111111',
            trackDomain: 'analytics01.wt-eu02.net',
            requestQueue: {
                activated: false
            },
            activateProductListTracking: true,
            activateAutoTracking: true
        });

        WebtrekkSmartPixelVue.call(() => {
            expectInCallback(
                () => {
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
                },
                done,
                0
            );
        });
    });
    test('add element with config - 2', done => {
        createWrapper(TeaserWithSelector, {
            trackId: '111111111111111',
            trackDomain: 'analytics01.wt-eu02.net',
            requestQueue: {
                activated: false
            },
            activateProductListTracking: true,
            activateAutoTracking: true
        });

        WebtrekkSmartPixelVue.call(() => {
            expectInCallback(
                () => {
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
                },
                done,
                0
            );
        });
    });
});
