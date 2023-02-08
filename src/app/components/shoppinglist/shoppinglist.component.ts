import { Component } from '@angular/core';
import { ShoppingserviceService } from 'src/app/services/shoppingservice/shoppingservice.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent {
  constructor(
    public list: ShoppingserviceService
  ) {}

  print() {
    console.log(this.list.addedproducts)
  }
}
