import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/models/product.module';

@Injectable({
  providedIn: 'root'
})
export class RequestAPIService {
  APIurl = 'https://fakestoreapi.com/products';
  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Producto[]>(this.APIurl)
  }

  getProducto(id: number) {
    return this.http.get<Producto>(`${this.APIurl}/${id}`)
  }
}
