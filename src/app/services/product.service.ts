import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jewelry } from '../models/jewelry'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Jewelry[]> {
    return this.http.get<Jewelry[]>(this.productsUrl);
  }
}
