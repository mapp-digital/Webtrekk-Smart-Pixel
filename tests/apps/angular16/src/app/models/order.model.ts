import { CartItem } from './cartItem.model';

export interface Order {
  orderId: number;
  data:  {
    orderValue: number;
    products: CartItem[];
  }
}
