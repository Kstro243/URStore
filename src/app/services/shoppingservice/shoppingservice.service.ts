import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/product.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingserviceService {

  constructor() { }
  addedproducts: Producto[]= [];
  private myCart = new BehaviorSubject<Producto[]>([]);

  myCart$ = this.myCart.asObservable();

  shoppinglist(producto: Producto) {
    console.log(producto)
    this.addedproducts.unshift(producto);
    console.log(this.addedproducts);
    this.myCart.next(this.addedproducts);
  }

  getShoppingList() {
    return this.addedproducts;
  }
}
