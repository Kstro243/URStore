import { Component } from '@angular/core';
import { Producto } from 'src/app/models/product.module';
import { ToggleAsideService } from 'src/app/services/toggleAside/toggle-aside.service';
import { RequestAPIService } from 'src/app/services/RequestAPI/request-api.service';
import { AsideInfoService } from 'src/app/services/AsideInfo/aside-info.service';

@Component({
  selector: 'app-shopping-cards',
  templateUrl: './shopping-cards.component.html',
  styleUrls: ['./shopping-cards.component.scss']
})
export class ShoppingCardsComponent {
  products: Producto[] = []

  constructor(
    public ToggleAside: ToggleAsideService,
    public API: RequestAPIService,
    public Aside: AsideInfoService,
  ) {}

  ngOnInit(): void {
    this.API.getProducts()
    .subscribe(data => {
      this.products = data;
    });
  }
}
