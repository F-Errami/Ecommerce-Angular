import { User } from './user';


export class Order {
  order_number: string;
  user: User;
  products: { product_id: number; quantity: number }[];
  total_price: number;
  tracking_number: string;
  order_date: string;
  delivery_address: string;

  constructor(
    order_number: string,
    user: User,
    products: { product_id: number; quantity: number }[],
    total_price: number,
    tracking_number: string,
    order_date: string,
    delivery_address: string
  ) {
    this.order_number = order_number;
    this.user = user;
    this.products = products;
    this.total_price = total_price;
    this.tracking_number = tracking_number;
    this.order_date = order_date;
    this.delivery_address = delivery_address;
  }
}
