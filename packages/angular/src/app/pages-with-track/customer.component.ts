import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1><div [wt-customer-data]="mockData" [wt-track]="1"></div>`
})
export class CustomerComponent {
    name = 'Customer Component';
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
