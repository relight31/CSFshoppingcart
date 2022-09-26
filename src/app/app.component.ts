import { Component } from '@angular/core';
import { ListItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shoppingcart';
  cart: ListItem[] = [];

  addToCart($event: ListItem) {
    this.cart.push($event);
  }

  getCartTotal(): number {
    console.info('>>>>> calling cart total');
    let total = 0;
    this.cart.forEach((item) => {
      total += item.unitPrice * item.quantity;
    });
    return total;
  }

  deleteFromCart($event: number) {
    this.cart.splice($event, 1);
    console.info(this.cart);
  }
}
