import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1><div [wt-teaser]="mockData"></div>`,
    styles: [
        'div { height: 500px; width: 100%; border: solid 1px black; }'
    ]
})
export class TeaserComponent {
    name = 'Teaser Component';
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