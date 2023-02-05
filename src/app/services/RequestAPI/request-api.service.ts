import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/models/product.module';

@Injectable({
  providedIn: 'root'
})
export class RequestAPIService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Producto[]>('https://fakestoreapi.com/products')
  }
}
