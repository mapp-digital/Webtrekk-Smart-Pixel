import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1><div [wt-product-data]="mockData"></div>`
})
export class ProductViewComponent {
    name = 'Product View Component';
    mockData = {
        id: 'product id 1',
        action: 'view',
        cost: 19.95,
        quantity: 1,
        variant: 'product variant',
        soldOut: false,
        category: {1: 'category-1', 5: 'category-5'},
        parameter: {1: 'parameter-1', 7: 'parameter-7'}
    }
}
