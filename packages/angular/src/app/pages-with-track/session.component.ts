import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1><div [wt-session-data]="mockData" [wt-track]="1"></div>`
})
export class SessionComponent {
    name = 'Session Component';
    mockData = {
        loginStatus: 'logged in',
        parameter: {1: 'foo', 2: 'bar'}
    }
}
