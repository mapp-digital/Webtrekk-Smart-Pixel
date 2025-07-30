import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-order-product-list',
  templateUrl: './order-product-list.component.html',
})
export class OrderProductListComponent implements OnInit {
  @Input() products!: CartItem[];

  constructor() {}

  ngOnInit(): void {}
}
