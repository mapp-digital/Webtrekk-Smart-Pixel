import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1><div [wt-content-engagement]="mockData"></div>`,
    styles: [
        'div { height: 500px; width: 100%; border: solid 1px black; }'
    ]
})
export class ContentEngagementComponent {
    name = 'Content Engagement Component';
    mockData = {
        name: 'name of the content engagement element',
        percentageStepsInAnalytics: 5,
        sendContentEngagement: 1,
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