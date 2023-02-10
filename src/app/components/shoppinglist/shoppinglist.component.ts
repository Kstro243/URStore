import { Component } from '@angular/core';
import { Producto } from 'src/app/models/product.module';
import { ShoppingserviceService } from 'src/app/services/shoppingservice/shoppingservice.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent {
  products: Producto[] = []

  constructor(
    public list: ShoppingserviceService
  ) {}

  ngOnInit(): void {
    const localStorageItem = localStorage.getItem('shoppinglist');
    if (!localStorageItem){
      localStorage.setItem('shoppinglist', JSON.stringify([]));
    } else {
      this.list.addedproducts = JSON.parse(localStorageItem);
      this.list.myCart.next(JSON.parse(localStorageItem));
    };

    this.list.myCart$.subscribe(productos => {
      this.products = productos;
    })
    // console.log(JSON.parse(localStorage.getItem('shoppinglist')))
  }
}
