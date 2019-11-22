import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1><div [wt-advanced-data]="mockData"></div>`
})
export class AdvancedComponent {
    name = 'Advanced Component';
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
