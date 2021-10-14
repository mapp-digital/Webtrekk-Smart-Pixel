import { Component } from "@angular/core";

@Component({
    template: `<h1>{{ name }}</h1><div [wt-product-list]="mockData"></div>`,
    styles: [
        'div { height: 500px; width: 100%; border: solid 1px black; }'
    ]
})
export class ProductListComponent {
    name = 'Product List Component';
    mockData = {
        id: 'product id 1',
        position: 2,
        cost: 19.95,
        quantity: 1,
        variant: 'product variant',
        soldOut: false,
        category: {1: 'category-1', 5: 'category-5'},
        parameter: {1: 'parameter-1', 7: 'parameter-7'}
    }
}