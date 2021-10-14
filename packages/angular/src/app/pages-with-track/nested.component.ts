import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1>
    <div [wt-init-data]="initData">
        <div [wt-advanced-data]="advancedData">
            <div [wt-page-data]="pageData" [wt-track]="1">
                <div [wt-session-data]="sessionData">
                    <div [wt-campaign-data]="campaignData">
                        <div [wt-customer-data]="customerData">
                            <div [wt-order-data]="orderData"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})
export class NestedComponent {
    name = 'Nested Component';
    initData = {
        trackId: '123451234512345',
        trackDomain: 'analytics01.webtrekk.net',
        domain: 'sub.domain.tld',
        cookie: '1'
    };
    advancedData = {
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
    };
    campaignData = {
        id: 'wt_mc%3foo.bar',
        mediaCode: ['wt_mc', 'mc'],
        oncePerSession: true,
        parameter: {1: 'foo', 2: 'bar'}
    };
    customerData = {
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
    };
    orderData = {
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
    };
    pageData = {
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
    };
    sessionData = {
        loginStatus: 'logged in',
        parameter: {1: 'foo', 2: 'bar'}
    };
}