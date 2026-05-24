import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly url = `${environment.apiUrl}/api/products`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  getFeatured(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/featured`);
  }

  create(product: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  update(id: string, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${id}`, product);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  uploadImage(file: File): Observable<{ url: string }> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post<{ url: string }>(`${environment.apiUrl}/api/upload`, form);
  }
}
