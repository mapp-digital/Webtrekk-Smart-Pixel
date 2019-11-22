import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1><div [wt-page-data]="mockData"></div>`
})
export class PageComponent {
    name = 'Page Component';
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
