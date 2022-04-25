import {Component} from "@angular/core";
import {Routes} from "@angular/router";

@Component({
    template: 'Search'
})
export class SearchComponent {
}

@Component({
    template: 'Home'
})
export class HomeComponent {
}

@Component({
    template: `
        <router-outlet></router-outlet>`
})
export class AppComponent {
}

@Component({
    template: `
        <div [wt-content-engagement]="mockData"></div>`,
    styles: [
        'div { height: 100px; width: 100px; border: solid 1px black; }'
    ]
})
export class ContentEngagementWithoutSelector {
    mockData = {
        name: 'name of the content engangement element',
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
}

@Component({
    template: `
        <div id="ce1" [wt-content-engagement]="mockData"></div>`,
    styles: [
        'div { height: 100px; width: 100px; border: solid 1px black; }'
    ]
})
export class ContentEngagementWithSelector {
    mockData = {
        selector: '#ce1',
        name: 'name of the content engangement element',
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
}

@Component({
    template: `
        <div [wt-product-list]="mockData"></div>`,
    styles: [
        'div { height: 100px; width: 100px; border: solid 1px black; }'
    ]
})
export class ProductListWithoutSelector {
    mockData = {
        id: 'product id 1',
        position: 2,
        cost: 19.95,
        quantity: 1,
        variant: 'product variant',
        soldOut: false,
        category: {1: 'category-1', 5: 'category-5'},
        parameter: {1: 'parameter-1', 7: 'parameter-7'}
    }
}

@Component({
    template: `
        <div id="ce1" [wt-product-list]="mockData"></div>`,
    styles: [
        'div { height: 100px; width: 100px; border: solid 1px black; }'
    ]
})
export class ProductListWithSelector {
    mockData = {
        selector: '#ce1',
        id: 'product id 2',
        position: 3,
        cost: 89.95,
        quantity: 5,
        variant: 'product variant',
        soldOut: false,
        category: {2: 'category-2', 9: 'category-9'},
        parameter: {1: 'parameter-1', 6: 'parameter-6'}
    }
}

@Component({
    template: `
        <div [wt-teaser]="mockData"></div>`,
    styles: [
        'div { height: 100px; width: 100px; border: solid 1px black; }'
    ]
})
export class TeaserWithoutSelector {
    mockData = {
        name: 'name of the teaser element',
        rank: 'rank of the teaser element',
        content: 'content of the teaser element',
        variant: 'variant of the teaser element',
        seen: false,
        type: 'view',
        goal: 'both',
        value: '%'
    }
}

@Component({
    template: `
        <div id="ce1" [wt-teaser]="mockData"></div>`,
    styles: [
        'div { height: 100px; width: 100px; border: solid 1px black; }'
    ]
})
export class TeaserWithSelector {
    mockData = {
        selector: '#ce1',
        name: 'name of the teaser element',
        rank: 'rank of the teaser element',
        content: 'content of the teaser element',
        variant: 'variant of the teaser element',
        seen: false,
        type: 'view',
        goal: 'both',
        value: '%'
    }
}

@Component({
    template: `
        <div [wt-extension]="mockData"></div>`,
    styles: [
        'div { height: 100px; width: 100px; border: solid 1px black; }'
    ]
})
export class ExtensionScrollPositionWithoutData {
    mockData = {
        name: 'scroll_position',
        action: 'activate'
    }
}

@Component({
    template: `
        <div id="ce1" [wt-extension]="mockData"></div>`,
    styles: [
        'div { height: 100px; width: 100px; border: solid 1px black; }'
    ]
})
export class ExtensionScrollPositionWithData {
    mockData = {
        name: 'scroll_position',
        action: 'config',
        config: {
            roundResult: false,
            pageHeight: '6',
            sendAsFigure: '12'
        }
    }
}

@Component({
    template: `
        <div [wt-advanced-data]="mockData"></div>`
})
export class AdvancedData {
    mockData = {
        secureCookie: true,
        optOutName: 'webtrekkTestOptOut',
        requestObfuscation: true,
        execCDB: false,
        useCDBCache: true,
        useHashForDefaultPageName: true,
        useParamsForDefaultPageName: ['param1', 'param2'],
        requestQueue: {
            activated: true,
            ttl: 5 * 60 * 1000,
            resendInterval: 5000,
            size: 500
        }
    }
}

@Component({
    template: `
        <div [wt-campaign-data]="mockData"></div>`
})
export class CampaignData {
    mockData = {
        id: 'wt_mc%3foo.bar',
        mediaCode: ['wt_mc', 'mc'],
        oncePerSession: true,
        parameter: {1: 'foo', 2: 'bar'}
    }
}

@Component({
    template: `
        <div [wt-campaign-data]="mockData" [wt-track]="1"></div>`
})
export class CampaignDataTrack {
    mockData = {
        id: 'wt_mc%3foo.bar',
        mediaCode: ['wt_mc', 'mc'],
        oncePerSession: true,
        parameter: {1: 'foo', 2: 'bar'}
    }
}

@Component({
    template: `
        <div [wt-customer-data]="mockData"></div>`
})
export class CustomerData {
    mockData = {
        id: 'test@tester.com',
        email: 'test@tester.com',
        emailRID: 'emailRID',
        emailOptin: true,
        firstName: 'test',
        lastName: 'tester',
        telephone: '0123456789',
        gender: 1,
        birthday: '19870913',
        country: 'germany',
        city: 'berlin',
        postalCode: '12345',
        street: 'test-street',
        streetNumber: '15A',
        validation: false,
        category: {1: 'foo', 2: 'bar'}
    }
}

@Component({
    template: `
        <div [wt-customer-data]="mockData" [wt-track]="1"></div>`
})
export class CustomerDataTrack {
    mockData = {
        id: 'test@tester.com',
        email: 'test@tester.com',
        emailRID: 'emailRID',
        emailOptin: true,
        firstName: 'test',
        lastName: 'tester',
        telephone: '0123456789',
        gender: 1,
        birthday: '19870913',
        country: 'germany',
        city: 'berlin',
        postalCode: '12345',
        street: 'test-street',
        streetNumber: '15A',
        validation: false,
        category: {1: 'foo', 2: 'bar'}
    }
}

@Component({
    template: `
        <div [wt-init-data]="mockData"></div>`
})
export class InitData {
    mockData = {
        trackId: '123451234512345',
        trackDomain: 'analytics01.webtrekk.net',
        domain: 'sub.domain.tld',
        cookie: '1'
    }
}

@Component({
    template: `
        <div [wt-order-data]="mockData"></div>`
})
export class OrderData {
    mockData = {
        value: 19.95,
        id: '123456789',
        currency: 'EUR',
        couponValue: 10,
        paymentMethod: '1',
        shippingService: '2',
        shippingSpeed: '3',
        shippingCosts: 2.75,
        grossMargin: 2.50,
        orderStatus: '5',
        parameter: {1: 'foo', 2: 'bar'}
    }
}

@Component({
    template: `
        <div [wt-order-data]="mockData" [wt-track]="1"></div>`
})
export class OrderDataTrack {
    mockData = {
        value: 19.95,
        id: '123456789',
        currency: 'EUR',
        couponValue: 10,
        paymentMethod: '1',
        shippingService: '2',
        shippingSpeed: '3',
        shippingCosts: 2.75,
        grossMargin: 2.50,
        orderStatus: '5',
        parameter: {1: 'foo', 2: 'bar'}
    }
}

@Component({
    template: `
        <div [wt-page-data]="mockData"></div>`
})
export class PageData {
    mockData = {
        name: 'name',
        search: 'search',
        numberSearchResults: 7,
        errorMessages: 'errorMessages',
        paywall: true,
        articleTitle: 'articleTitle',
        contentTags: 'contentTags',
        title: 'title',
        type: 'type',
        length: 'length',
        daysSincePublication: 12,
        testVariant: 'testVariant',
        testExperiment: 'testExperiment',
        parameter: {1: 'parameter foo', 2: 'parameter bar'},
        category: {1: 'category foo', 3: 'category bar'},
        goal: {1: 'goal foo', 4: 'goal bar'}
    }
}

@Component({
    template: `
        <div [wt-page-data]="mockData" [wt-track]="1"></div>`
})
export class PageDataTrack {
    mockData = {
        name: 'name',
        search: 'search',
        numberSearchResults: 7,
        errorMessages: 'errorMessages',
        paywall: true,
        articleTitle: 'articleTitle',
        contentTags: 'contentTags',
        title: 'title',
        type: 'type',
        length: 'length',
        daysSincePublication: 12,
        testVariant: 'testVariant',
        testExperiment: 'testExperiment',
        parameter: {1: 'parameter foo', 2: 'parameter bar'},
        category: {1: 'category foo', 3: 'category bar'},
        goal: {1: 'goal foo', 4: 'goal bar'}
    }
}

@Component({
    template: `
        <div [wt-session-data]="mockData"></div>`
})
export class SessionData {
    mockData = {
        loginStatus: 'logged in',
        parameter: {1: 'foo', 2: 'bar'}
    }
}

@Component({
    template: `
        <div [wt-session-data]="mockData" [wt-track]="1"></div>`
})
export class SessionDataTrack {
    mockData = {
        loginStatus: 'logged in',
        parameter: {1: 'foo', 2: 'bar'}
    }
}

@Component({
    template: `
        <div [wt-product-data]="mockData"></div>`
})
export class ProductViewData {
    mockData = {
        id: 'product id 1',
        action: 'view',
        cost: 19.95,
        quantity: 1,
        variant: 'product variant',
        soldOut: false,
        category: {1: 'category-1', 5: 'category-5'},
        parameter: {1: 'parameter-1', 7: 'parameter-7'}
    }
}

@Component({
    template: `
        <div [wt-product-data]="mockData" [wt-track]="1"></div>`
})
export class ProductViewDataTrack {
    mockData = {
        id: 'product id 1',
        action: 'view',
        cost: 19.95,
        quantity: 1,
        variant: 'product variant',
        soldOut: false,
        category: {1: 'category-1', 5: 'category-5'},
        parameter: {1: 'parameter-1', 7: 'parameter-7'}
    }
}

@Component({
    template: `
        <div [wt-product-data]="mockData"></div>`
})
export class ProductBasketData {
    mockData = {
        id: 'product id 1',
        action: 'basket',
        cost: 19.95,
        quantity: 1,
        variant: 'product variant',
        soldOut: false,
        category: {1: 'category-1', 5: 'category-5'},
        parameter: {1: 'parameter-1', 7: 'parameter-7'}
    }
}

@Component({
    template: `
        <div [wt-product-data]="mockData" [wt-track]="1"></div>`
})
export class ProductBasketDataTrack {
    mockData = {
        id: 'product id 1',
        action: 'basket',
        cost: 19.95,
        quantity: 1,
        variant: 'product variant',
        soldOut: false,
        category: {1: 'category-1', 5: 'category-5'},
        parameter: {1: 'parameter-1', 7: 'parameter-7'}
    }
}

@Component({
    template: `
        <div [wt-product-data]="mockData"></div>`
})
export class ProductConfirmationData {
    mockData = {
        id: 'product id 1',
        action: 'confirmation',
        cost: 19.95,
        quantity: 1,
        variant: 'product variant',
        soldOut: false,
        category: {1: 'category-1', 5: 'category-5'},
        parameter: {1: 'parameter-1', 7: 'parameter-7'}
    }
}

@Component({
    template: `
        <div [wt-product-data]="mockData" [wt-track]="1"></div>`
})
export class ProductConfirmationDataTrack {
    mockData = {
        id: 'product id 1',
        action: 'confirmation',
        cost: 19.95,
        quantity: 1,
        variant: 'product variant',
        soldOut: false,
        category: {1: 'category-1', 5: 'category-5'},
        parameter: {1: 'parameter-1', 7: 'parameter-7'}
    }
}

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent}
];
