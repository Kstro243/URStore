import { Component, DoCheck} from '@angular/core';
import { categoria } from 'src/app/models/categoria.model';
import { Producto } from 'src/app/models/product.module';
import { RequestAPIService } from 'src/app/services/RequestAPI/request-api.service';
import { ShoppingserviceService } from 'src/app/services/shoppingservice/shoppingservice.service';
import { ToggleAsideService } from 'src/app/services/toggleAside/toggle-aside.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck{
  constructor(
    public API: RequestAPIService,
    public list: ShoppingserviceService,
    public ToggleAside: ToggleAsideService
  ){}

  contador: number= 0;
  categories: categoria[] = [];
  products: Producto[] = [];

  ngOnInit(): void {
    this.API.getCategories()
    .subscribe(data => {
      this.categories = data;
    });

    const localStorageItem = localStorage.getItem('shoppinglist');
    if (!localStorageItem){
      localStorage.setItem('shoppinglist', JSON.stringify([]));
    } else {
      this.list.addedproducts = JSON.parse(localStorageItem);
      this.list.myCart.next(JSON.parse(localStorageItem));
    };

    this.list.myCart$.subscribe(productos => {
      this.products = productos;
    });
    this.contador = this.products.reduce((c: number, producto: Producto) => c + producto.quantity, 0);
  };

  ngDoCheck(): void {
    this.contador = this.products.reduce((c: number, producto: Producto) => c + producto.quantity, 0);
  }
}
