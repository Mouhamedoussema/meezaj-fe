import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateOrderRequest, Order } from '../models/order.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly url = `${environment.apiUrl}/api/orders`;

  constructor(private http: HttpClient) {}

  create(order: CreateOrderRequest): Observable<Order> {
    return this.http.post<Order>(this.url, order);
  }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url);
  }

  getById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.url}/${id}`);
  }

  updateStatus(id: string, status: string): Observable<Order> {
    return this.http.patch<Order>(`${this.url}/${id}/status`, { status });
  }
}
