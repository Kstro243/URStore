import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/models/product.module';
import { categoria } from 'src/app/models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class RequestAPIService {
  APIurl = 'https://api.escuelajs.co/api/v1';
  constructor(
    private http: HttpClient
  ) { }

  getProducts(limit: number, offset: number) {
    return this.http.get<Producto[]>(`${this.APIurl}/products`, {
      params: {limit, offset}
    })
  }

  getProducto(id: number) {
    return this.http.get<Producto>(`${this.APIurl}/products/${id}`)
  }

  getProductsbyCategory(categoryId: string, limit: number, offset: number) {
    return this.http.get<Producto[]>(`${this.APIurl}/categories/${categoryId}/products`, {
      params: {limit, offset}
    })
  }

  getCategories() {
    return this.http.get<categoria[]>(`${this.APIurl}/categories`)
  }
}
