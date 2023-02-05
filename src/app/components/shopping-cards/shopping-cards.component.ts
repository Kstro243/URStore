import { Component } from '@angular/core';
import { Producto } from 'src/app/models/product.module';
import { ToggleAsideService } from 'src/app/services/toggleAside/toggle-aside.service';

@Component({
  selector: 'app-shopping-cards',
  templateUrl: './shopping-cards.component.html',
  styleUrls: ['./shopping-cards.component.scss']
})
export class ShoppingCardsComponent {
  products: Producto[] = [
    {
      name: 'Cosa para vender',
      price: 123,
      image: './assets/descarga.jpg',
      category: 'all',
    }, {
      name: 'Cosa para vender',
      price: 123,
      image: './assets/descarga.jpg',
      category: 'all',
    }, {
      name: 'Cosa para vender',
      price: 123,
      image: './assets/descarga.jpg',
      category: 'all',
    }, {
      name: 'Cosa para vender',
      price: 123,
      image: './assets/descarga.jpg',
      category: 'all',
    }, {
      name: 'Cosa para vender',
      price: 123,
      image: './assets/descarga.jpg',
      category: 'all',
    }, {
      name: 'Cosa para vender',
      price: 123,
      image: './assets/descarga.jpg',
      category: 'all',
    }, {
      name: 'Cosa para vender',
      price: 123,
      image: './assets/descarga.jpg',
      category: 'all',
    },
  ]

  constructor(
    public ToggleAside: ToggleAsideService
  ) {}
}
