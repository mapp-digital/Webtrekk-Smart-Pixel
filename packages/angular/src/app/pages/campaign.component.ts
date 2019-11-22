import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1><div [wt-campaign-data]="mockData"></div>`
})
export class CampaignComponent {
    name = 'Campaign Component';
    mockData = {
        id: 'wt_mc%3foo.bar',
        mediaCode: ['wt_mc', 'mc'],
        oncePerSession: true,
        parameter: {1: 'foo', 2: 'bar'}
    }
}
