import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent implements OnInit {
  @Input()
  cart!: CartItem[];

  add(product: CartItem) {
    this.cartService.addToCart({...product, quantity: 1});
  }

  remove(product: CartItem) {
    this.cartService.removeFromCart({...product, quantity: 1});
  }

  trackBy(index: number, item: CartItem) {
    return item.id;
  }


  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
