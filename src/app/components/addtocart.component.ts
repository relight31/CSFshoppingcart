import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ListItem } from '../models';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css'],
})
export class AddtocartComponent implements OnInit {
  itemForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    console.log('>>>> creating addtocart component');
  }
  myStyle = { testclass: true };

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: this.fb.control<string>('', Validators.required),
      unitPrice: this.fb.control<number>(0, [
        Validators.required,
        Validators.min(0.1),
      ]),
      quantity: this.fb.control<number>(0, Validators.min(1)),
    });
  }

  @Output()
  onAddItem = new Subject<ListItem>();

  submitListItem() {
    const listItem: ListItem = this.itemForm.value as ListItem;
    this.onAddItem.next(listItem);
    this.itemForm.reset;
  }
}
