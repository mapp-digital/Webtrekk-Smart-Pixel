import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  retry,
  catchError,
  throwError,
  Subject,
  BehaviorSubject,
  tap,
} from 'rxjs';
import { CartItem } from '../models/cartItem.model';
import { Order } from '../models/order.model';
import { SnackbarService } from './snackbar.service';
import { UserService } from './user.service';
import { WebtrekkSmartPixelAngular } from '@webtrekk-smart-pixel/angular';
import { WebtrekkProductProps } from '@webtrekk-smart-pixel/angular/lib/Directives/DataTypes';

@Injectable()
export class CartService {
  private cartUrl = 'https://phoenix:4001/cart';
  public cart = new Subject<CartItem[]>();
  public cartIsOpen = new BehaviorSubject<boolean>(false);
  private cartSubscription: CartItem[] | null = null;

  public get computedQuantity(): string {
    if (this.cartSubscription === null) {
      return '0';
    }
    return this.cartSubscription
      .map((c) => (typeof c.quantity === 'number' ? c.quantity : 1))
      .reduce((a, b) => a + b, 0)
      .toFixed(0);
  }

  public get computedSum(): string {
    if (this.cartSubscription === null) {
      return '0';
    }
    return this.cartSubscription
      .map((c) => (typeof c.sum === 'number' ? c.sum : 0))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  }

  private userName = '';

  constructor(
    private http: HttpClient,
    private route: Router,
    private user: UserService,
    private snackbar: SnackbarService,
    private pixel: WebtrekkSmartPixelAngular
  ) {
    this.cart.subscribe((cart) => {
      this.cartSubscription = cart;
    });
    this.getCart();
    this.user.user.subscribe((u) => {
      this.userName = u ? u.name : '';
    });
  }

  openCart() {
    this.cartIsOpen.next(true);
    this.pixel.action('Open cart');
    this.pixel.trackAction();
  }

  closeCart() {
    this.cartIsOpen.next(false);
    this.pixel.action('Close cart');
    this.pixel.trackAction();
  }

  private getCart() {
    this.http
      .get<CartItem[]>(this.cartUrl, { withCredentials: true })
      .pipe(retry(1), catchError(this.handleError))
      .subscribe((cartData) => {
        this.cart.next(cartData);
      });
  }

  addToCart(product: CartItem) {
    this.http
      .post<CartItem[]>(`${this.cartUrl}/add`, product, {
        withCredentials: true,
      })
      .pipe(
        retry(1),
        catchError(this.handleError),
        tap(() => {
          const quantity = product.quantity || 1;
          this.pixel.products('basket', [
            {
              id: product.id.toString(),
              cost: (product.price * 10 * quantity) / 10,
              quantity: quantity,
            },
          ]);
          this.pixel.action('Add to cart');
          this.pixel.track();
        })
      )
      .subscribe((newCart) => {
        this.cart.next(newCart);
        this.snackbar.showMessage('Product added to cart');
      });
  }

  removeFromCart(product: CartItem) {
    this.http
      .post<CartItem[]>(`${this.cartUrl}/delete`, product, {
        withCredentials: true,
      })
      .pipe(retry(1), catchError(this.handleError))
      .subscribe((newCart) => {
        this.cart.next(newCart);
        this.snackbar.showMessage('Product removed from cart');
      });
  }

  order() {
    this.http
      .get<Order>(this.cartUrl + '/order', { withCredentials: true })
      .pipe(retry(1), catchError(this.handleError))
      .subscribe((order) => {
        this.snackbar.showMessage(
          `Oder with ID ${order.orderId} was successful!`
        );
        this.user.updateUser();
        this.cart.next([]);
        this.closeCart();
        this.pixel.customer(this.userName);
        this.pixel.order({
          value: order.data.orderValue,
          id: order.orderId.toString(),
        });
        const products: WebtrekkProductProps[] = order.data.products.map(
          (p) => {
            const q = p.quantity || 1;
            return {
              id: p.id.toString(),
              cost: (p.price * 10 * q) / 10,
              quantity: q,
            };
          }
        );
        this.pixel.products('confirmation', products);
        this.route.navigate(['thankyou']);
      });
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
