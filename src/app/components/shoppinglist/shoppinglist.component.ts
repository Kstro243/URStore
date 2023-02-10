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
  cantidad: number = 0;
  btndisabled: boolean = true;

  constructor(
    public list: ShoppingserviceService
  ) {}

  ngOnInit(): void {
    this.list.myCart$.subscribe(productos => {
      this.products = productos;
    })
  }

  btnState() {
    if (this.cantidad <= 0) {
      this.btndisabled = true;
    } else{
      this.btndisabled = false;
    }
  }
  aumentar() {
    this.cantidad = this.cantidad + 1;
    this.btnState();
  }
  disminuir() {
    this.cantidad = this.cantidad -1;
    this.btnState();
  }
}
