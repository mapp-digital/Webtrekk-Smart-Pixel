import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem.model';
import { User } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
})
export class CartMenuComponent implements OnInit {
  cartIsOpen: boolean = false;
  cart: CartItem[] = [];
  user: User | null = null;

  close() {
    this.cartService.closeCart();
  }

  toLogin() {
    this.route.navigate(['login']);
  }

  order() {
    this.cartService.order();
  }

  constructor(
    public cartService: CartService,
    private route: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.cartService.cartIsOpen.subscribe((cartStatus) => {
      this.cartIsOpen = cartStatus;
    });
    this.cartService.cart.subscribe((currentCart) => {
      this.cart = currentCart;
    });
    this.userService.user.subscribe((user) => {
      this.user = user;
    });
  }
}
