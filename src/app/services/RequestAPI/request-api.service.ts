import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/models/product.module';

@Injectable({
  providedIn: 'root'
})
export class RequestAPIService {
  APIurl = 'https://api.escuelajs.co/api/v1/products';
  constructor(
    private http: HttpClient
  ) { }

  getProducts(limit: number, offset: number) {
    return this.http.get<Producto[]>(`${this.APIurl}`, {
      params: {limit, offset}
    })
  }

  getProducto(id: number) {
    return this.http.get<Producto>(`${this.APIurl}/${id}`)
  }
}
