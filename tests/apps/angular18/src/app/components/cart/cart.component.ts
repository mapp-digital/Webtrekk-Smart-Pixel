import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  public open() {
    this.cartService.openCart();
  }
  constructor(public cartService: CartService) {}
}
