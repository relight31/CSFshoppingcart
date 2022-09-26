import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ListItem } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input()
  totalCost = 0;
  @Input()
  cart: ListItem[] = [];

  constructor() {
    console.log(">>>> creating cart component")
  }

  ngOnInit(): void {}

  @Output()
  onDeleteItem = new Subject<number>();

  deleteItem(i: number) {
    console.info('>>>> deleting item index ', i);
    this.onDeleteItem.next(i);
  }
}
