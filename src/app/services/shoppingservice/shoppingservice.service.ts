import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/product.module';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingserviceService {
  contador = 0;

  constructor() { }
  addedproducts: Producto[]= [];
  public myCart = new BehaviorSubject<Producto[]>([]);

  myCart$ = this.myCart.asObservable();

  shoppinglist(producto: Producto) {
    this.contador ++;
    if (!this.addedproducts.some(productico => productico.id == producto.id)) {
      this.addedproducts.unshift(producto);
      this.addedproducts[0].quantity = 1;
      this.addedproducts[0].btndisabled = true;
    } else {
      const index = this.addedproducts.findIndex(productico => productico.id == producto.id);
      this.addedproducts[index].quantity += 1;
      this.addedproducts[index].btndisabled = false;
    }
    console.log(this.addedproducts);
    this.addLocalStorage();
  };

  addLocalStorage() {
    localStorage.setItem('shoppinglist', JSON.stringify(this.addedproducts));

    try{
      const localStorageItem = localStorage.getItem('shoppinglist');
      let parsedItem: Producto[];

      if (!localStorageItem) {
        localStorage.setItem('shoppinglist', JSON.stringify(this.addedproducts));
        parsedItem = [];
        this.myCart.next(parsedItem);
      } else {
        parsedItem = JSON.parse(localStorageItem);
        this.myCart.next(parsedItem);
      };
    } catch(error) {
      alert(error);
    }
  }

  aumentar(id: number) {
    this.contador ++;
    const index = this.addedproducts.findIndex(productico => productico.id == id);
    this.addedproducts[index].quantity += 1;

    this.btnState(this.addedproducts[index].quantity, index)
    this.addLocalStorage();
  }

  disminuir(id: number) {
    this.contador --;
    const index = this.addedproducts.findIndex(productico => productico.id == id);
    this.addedproducts[index].quantity -= 1;

    this.btnState(this.addedproducts[index].quantity, index)
    this.addLocalStorage();
  }

  btnState(cantidad: number, index: number) {
    if (cantidad <= 1) {
      this.addedproducts[index].btndisabled = true;
    } else{
      this.addedproducts[index].btndisabled = false;
    }
  }
}
