import Vue from 'vue';

/** Component Factory
 * @param {Object} webtrekkData
 * @param {String} template String with html
 */

const createComponent = (webtrekkData = {}, template = '<div></div>') => (
    Vue.component('webtrekk-test-component', {
        template,
        data() {
            return {
                webtrekk: webtrekkData
            };
        },
        created() {
            this.$webtrekk.deactivateAutoTracking = true;
        }
    })
);

// Autotrack with data components
const ContentEngagementWithoutSelector = createComponent({content_engagement: {
    name: 'name of the content engangement element',
    config: {
        percentageStepsInAnalytics: 5,
        sendContentEngagement: 2,
        percentageReached: 20,
        secondsReached: 30,
        largeBrowserResolution: 1080,
        largeBrowserSeconds: 20,
        mediumBrowserResolution: 700,
        mediumBrowserSeconds: 10,
        smallBrowserResolution: 400,
        smallBrowserSeconds: 5
    }
}});
const ContentEngagementWithSelector = createComponent({content_engagement: {
    selector: '#ce1',
    name: 'name of the content engangement element',
    config: {
        percentageStepsInAnalytics: 10,
        sendContentEngagement: 1,
        percentageReached: 25,
        secondsReached: 30,
        largeBrowserResolution: 1080,
        largeBrowserSeconds: 20,
        mediumBrowserResolution: 700,
        mediumBrowserSeconds: 10,
        smallBrowserResolution: 400,
        smallBrowserSeconds: 5
    }
}});
const ProductListWithoutSelector = createComponent({product_list_tracking: {
    data: {id: 'product id 1',
        position: 2,
        cost: 19.95,
        quantity: 1,
        variant: 'product variant',
        soldOut: false,
        category: {1: 'category-1', 5: 'category-5'},
        parameter: {1: 'parameter-1', 7: 'parameter-7'}}
}});
const ProductListWithSelector = createComponent({product_list_tracking: {
    selector: '#ce1',
    data: {id: 'product id 2',
        position: 3,
        cost: 89.95,
        quantity: 5,
        variant: 'product variant',
        soldOut: false,
        category: {2: 'category-2', 9: 'category-9'},
        parameter: {1: 'parameter-1', 6: 'parameter-6'}}
}});
const TeaserWithoutSelector = createComponent({teaser_tracking: {
    data: {
        name: 'name of the teaser element',
        rank: 'rank of the teaser element',
        content: 'content of the teaser element',
        variant: 'variant of the teaser element',
        seen: false
    },
    conversion: {
        type: 'view',
        goal: 'both',
        value: '%'
    }
}});
const TeaserWithSelector = createComponent({teaser_tracking: {
    selector: '#ce1',
    data: {
        selector: '#ce1',
        name: 'name of the teaser element',
        rank: 'rank of the teaser element',
        content: 'content of the teaser element',
        variant: 'variant of the teaser element',
        seen: false
    },
    conversion: {
        type: 'view',
        goal: 'both',
        value: '%'
    }
}});

// Directive components
const ContentEngagementDirectiveWithoutSelector = createComponent({},
    `<div v-webtrekk.content_engagement="{
        name: 'name of the content engangement element',
        config: {
            percentageStepsInAnalytics: 5,
            sendContentEngagement: 2,
            percentageReached: 20,
            secondsReached: 30,
            largeBrowserResolution: 1080,
            largeBrowserSeconds: 20,
            mediumBrowserResolution: 700,
            mediumBrowserSeconds: 10,
            smallBrowserResolution: 400,
            smallBrowserSeconds: 5
        }
    }"></div>`);
const ContentEngagementDirectiveWithSelector = createComponent({},
    `<div v-webtrekk.content_engagement="{
        selector: '#ce1',
        name: 'name of the content engangement element',
        config: {
            percentageStepsInAnalytics: 10,
            sendContentEngagement: 1,
            percentageReached: 25,
            secondsReached: 30,
            largeBrowserResolution: 1080,
            largeBrowserSeconds: 20,
            mediumBrowserResolution: 700,
            mediumBrowserSeconds: 10,
            smallBrowserResolution: 400,
            smallBrowserSeconds: 5
        }
    }"></div>`);
const ProductListDirectiveWithoutSelector = createComponent({},
    `<div v-webtrekk.product_list_tracking="{
        data: {
            id: 'product id 1',
            position: 2,
            cost: 19.95,
            quantity: 1,
            variant: 'product variant',
            soldOut: false,
            category: {1: 'category-1', 5: 'category-5'},
            parameter: {1: 'parameter-1', 7: 'parameter-7'}
        }
    }"></div>`);
const ProductListDirectiveWithSelector = createComponent({},
    `<div v-webtrekk.product_list_tracking="{
    selector: '#ce1',
        data: {
            id: 'product id 2',
            position: 3,
            cost: 89.95,
            quantity: 5,
            variant: 'product variant',
            soldOut: false,
            category: {2: 'category-2', 9: 'category-9'},
            parameter: {1: 'parameter-1', 6: 'parameter-6'}
        }
    }"></div>`);

const TeaserDirectiveWithoutSelector = createComponent({},
    `<div v-webtrekk.teaser_tracking="{ data: {
        name: 'name of the teaser element',
        rank: 'rank of the teaser element',
        content: 'content of the teaser element',
        variant: 'variant of the teaser element',
        seen: false
    },
    conversion: {
        type: 'view',
        goal: 'both',
        value: '%'
    }}"></div>`);

const TeaserDirectiveWithSelector = createComponent({},
    `<div v-webtrekk.teaser_tracking="{
    selector: '#ce1',
    data: {
        selector: '#ce1',
        name: 'name of the teaser element',
        rank: 'rank of the teaser element',
        content: 'content of the teaser element',
        variant: 'variant of the teaser element',
        seen: false
    },
    conversion: {
        type: 'view',
        goal: 'both',
        value: '%'
    }}"></div>`
);

export {
    ContentEngagementWithoutSelector,
    ContentEngagementWithSelector,
    ProductListWithoutSelector,
    ProductListWithSelector,
    TeaserWithoutSelector,
    TeaserWithSelector,
    ContentEngagementDirectiveWithoutSelector,
    ContentEngagementDirectiveWithSelector,
    ProductListDirectiveWithoutSelector,
    ProductListDirectiveWithSelector,
    TeaserDirectiveWithoutSelector,
    TeaserDirectiveWithSelector
};
