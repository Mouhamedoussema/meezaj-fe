import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe, DatePipe } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models/order.model';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink, DecimalPipe, DatePipe],
  styleUrl: './admin-dashboard.component.scss',
  template: `
    <div class="dashboard">
      <div class="page-header">
        <h1>Dashboard</h1>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-label">Total Orders</span>
          <span class="stat-value">{{ orders.length }}</span>
          <a routerLink="/admin/orders" class="stat-link">View all →</a>
        </div>
        <div class="stat-card">
          <span class="stat-label">Pending Orders</span>
          <span class="stat-value pending">{{ pendingCount }}</span>
          <a routerLink="/admin/orders" class="stat-link">Manage →</a>
        </div>
        <div class="stat-card">
          <span class="stat-label">Total Revenue</span>
          <span class="stat-value">{{ totalRevenue | number:'1.2-2' }} TND</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Products</span>
          <span class="stat-value">{{ products.length }}</span>
          <a routerLink="/admin/products" class="stat-link">Manage →</a>
        </div>
      </div>

      <div class="recent-section">
        <div class="section-title">
          <h2>Recent Orders</h2>
          <a routerLink="/admin/orders">View all</a>
        </div>
        @if (recentOrders.length) {
          <table class="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              @for (order of recentOrders; track order.id) {
                <tr>
                  <td class="order-id">{{ order.id }}</td>
                  <td>{{ order.customerName }}</td>
                  <td>{{ order.total | number:'1.2-2' }} TND</td>
                  <td><span class="status-badge" [attr.data-status]="order.status">{{ order.status }}</span></td>
                  <td class="date-cell">{{ order.createdAt | date:'MMM d, y' }}</td>
                </tr>
              }
            </tbody>
          </table>
        } @else if (!loading) {
          <p class="empty-text">No orders yet.</p>
        }
      </div>
    </div>
  `
})
export class AdminDashboardComponent implements OnInit {
  orders: Order[] = [];
  products: Product[] = [];
  loading = true;

  constructor(
    private orderService: OrderService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.orderService.getAll().subscribe(o => { this.orders = o; this.loading = false; });
    this.productService.getAll().subscribe(p => { this.products = p; });
  }

  get pendingCount(): number {
    return this.orders.filter(o => o.status === 'PENDING').length;
  }

  get totalRevenue(): number {
    return this.orders
      .filter(o => o.status !== 'CANCELLED')
      .reduce((sum, o) => sum + (o.total ?? 0), 0);
  }

  get recentOrders(): Order[] {
    return this.orders.slice(0, 5);
  }
}
