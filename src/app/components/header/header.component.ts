import { Component } from '@angular/core';
import { categoria } from 'src/app/models/categoria.model';
import { RequestAPIService } from 'src/app/services/RequestAPI/request-api.service';
import { ShoppingserviceService } from 'src/app/services/shoppingservice/shoppingservice.service';
import { ToggleAsideService } from 'src/app/services/toggleAside/toggle-aside.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public API: RequestAPIService,
    private list: ShoppingserviceService,
    public ToggleAside: ToggleAsideService
  ){}

  contador = 0;
  categories: categoria[] = [];

  ngOnInit(): void {
    this.API.getCategories()
    .subscribe(data => {
      this.categories = data;
    }),
    this.list.myCart$.subscribe(lista => {
      this.contador = lista.length;
    })
  }
}
