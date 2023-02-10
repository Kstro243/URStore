import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/models/product.module';
import { ToggleAsideService } from 'src/app/services/toggleAside/toggle-aside.service';
import { AsideInfoService } from 'src/app/services/AsideInfo/aside-info.service';
import { ShoppingserviceService } from 'src/app/services/shoppingservice/shoppingservice.service';

@Component({
  selector: 'app-shopping-cards',
  templateUrl: './shopping-cards.component.html',
  styleUrls: ['./shopping-cards.component.scss']
})
export class ShoppingCardsComponent {
  @Input () products: Producto[] = []

  constructor(
    public ToggleAside: ToggleAsideService,
    public Aside: AsideInfoService,
    public list: ShoppingserviceService,
  ) {}

  ngOnInit(): void {
    const localStorageItem = localStorage.getItem('shoppinglist');
    if (!localStorageItem){
      localStorage.setItem('shoppinglist', JSON.stringify([]));
    } else {
      this.list.addedproducts = JSON.parse(localStorageItem);
      this.list.myCart.next(JSON.parse(localStorageItem));
    }
  };
}
