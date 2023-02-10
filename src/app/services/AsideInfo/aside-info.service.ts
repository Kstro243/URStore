import { Injectable } from '@angular/core';
import { RequestAPIService } from '../RequestAPI/request-api.service';
import { Producto } from 'src/app/models/product.module';

@Injectable({
  providedIn: 'root'
})
export class AsideInfoService {
  constructor(
    public API: RequestAPIService,
  ) {}
  producto: Producto = {
    id: 0,
    title: '',
    price: 0,
    images: [],
    category: {
      id: 0,
      name: '',
      image: ''
    },
    description: '',
    quantity: 0
  };
  onShowAside(id: number) {
    this.API.getProducto(id)
    .subscribe(data => {
      this.producto = data
    })
    return this.producto
  }
}
