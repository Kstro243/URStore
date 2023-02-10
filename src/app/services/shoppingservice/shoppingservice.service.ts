import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/product.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingserviceService {
  btndisabled= false;
  contador = 0;

  constructor() { }
  addedproducts: Producto[]= [];
  private myCart = new BehaviorSubject<Producto[]>([]);

  myCart$ = this.myCart.asObservable();

  shoppinglist(producto: Producto) {
    this.contador ++;
    if (!this.addedproducts.some(productico => productico.id == producto.id)) {
      this.addedproducts.unshift(producto);
      this.addedproducts[0].quantity = 1
    } else {
      const index = this.addedproducts.findIndex(productico => productico.id == producto.id);
      this.addedproducts[index].quantity += 1;
    }
    console.log(this.addedproducts);
    this.myCart.next(this.addedproducts);
  }

  aumentar(id: number) {
    this.contador ++;
    const index = this.addedproducts.findIndex(productico => productico.id == id);
    this.addedproducts[index].quantity += 1;
    this.myCart.next(this.addedproducts);
    this.btnState(this.addedproducts[index].quantity)
  }

  disminuir(id: number) {
    this.contador --;
    const index = this.addedproducts.findIndex(productico => productico.id == id);
    this.addedproducts[index].quantity -= 1;
    this.myCart.next(this.addedproducts);
    this.btnState(this.addedproducts[index].quantity)
  }

  btnState(cantidad: number) {
    if (cantidad <= 1) {
      this.btndisabled = true;
    } else{
      this.btndisabled = false;
    }
  }
}
