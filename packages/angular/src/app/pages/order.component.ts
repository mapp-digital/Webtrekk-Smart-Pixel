import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1><div [wt-order-data]="mockData"></div>`
})
export class OrderComponent {
    name = 'Order Component';
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
