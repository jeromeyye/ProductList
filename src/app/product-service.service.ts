import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Welcome, newProduct } from './models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private mockURL = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Welcome> {
    return this.http.get<Welcome>(this.mockURL);
  }
  addProduct(product: newProduct): Observable<Product> {
    return this.http.post<Product>(`${this.mockURL}/add`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.mockURL}/${id}`);
  }
}
