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
    this.list.myCart$.subscribe(productos => {
      this.products = productos;
    })
  }
}
