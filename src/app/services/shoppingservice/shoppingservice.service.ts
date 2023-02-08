import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/product.module';

@Injectable({
  providedIn: 'root'
})
export class ShoppingserviceService {

  constructor() { }
  addedproducts: Producto[]= []

  shoppinglist(producto: Producto) {
    console.log(producto)
    this.addedproducts.unshift(producto);
    console.log(this.addedproducts);
  }
}
