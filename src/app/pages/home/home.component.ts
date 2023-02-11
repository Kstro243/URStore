import { Component } from '@angular/core';
import { Producto } from 'src/app/models/product.module';
import { RequestAPIService } from 'src/app/services/RequestAPI/request-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos: Producto[] = []
  limit: number = 12;
  offset: number = 0;

  constructor(
    public API: RequestAPIService,
  ) {}


  ngOnInit(): void {
    this.API.getProducts(this.limit, this.offset)
    .subscribe(data => {
      this.productos = data;
    });
  }
}
