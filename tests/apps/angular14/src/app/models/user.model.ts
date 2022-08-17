import { Order } from './order.model';

export class User {
  constructor(
    public name: string,
    public orders: Order[],
    public firstName?: string,
    public lastName?: string
  ) {}
}
