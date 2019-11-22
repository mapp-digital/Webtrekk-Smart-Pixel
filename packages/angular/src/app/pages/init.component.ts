import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1><div [wt-init-data]="mockData"></div>`
})
export class InitComponent {
    name = 'Init Component';
    mockData = {
        trackId: '123451234512345',
        trackDomain: 'analytics01.webtrekk.net',
        domain: 'sub.domain.tld',
        cookie: '1'
    }
}
