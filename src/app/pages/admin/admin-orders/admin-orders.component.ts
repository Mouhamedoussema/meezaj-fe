import { Component, OnInit } from '@angular/core';
import { DecimalPipe, DatePipe } from '@angular/common';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/models/order.model';

const ORDER_STATUSES = ['PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED'] as const;

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [DecimalPipe, DatePipe],
  styleUrl: './admin-orders.component.scss',
  template: `
    <div class="admin-orders">
      <div class="page-header">
        <h1>Orders</h1>
        <span class="count">{{ orders.length }} total</span>
      </div>

      @if (loading) {
        <p class="loading-text">Loading orders...</p>
      } @else if (orders.length === 0) {
        <p class="empty-text">No orders yet.</p>
      } @else {
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Contact</th>
                <th>City</th>
                <th>Items</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              @for (order of orders; track order._id) {
                <tr [class.expanded]="expandedId === order._id">
                  <td class="order-id" (click)="toggle(order._id)">{{ order._id }}</td>
                  <td>
                    <strong>{{ order.customerName }}</strong>
                  </td>
                  <td class="contact-cell">
                    <span>{{ order.customerEmail }}</span>
                    <span>{{ order.customerPhone }}</span>
                  </td>
                  <td>{{ order.city }}</td>
                  <td>{{ order.items?.length ?? 0 }}</td>
                  <td class="amount-cell">{{ order.total | number:'1.2-2' }} TND</td>
                  <td>
                    <span class="payment-badge" [attr.data-method]="order.paymentMethod">
                      {{ order.paymentMethod === 'CARD' ? 'Card' : 'COD' }}
                    </span>
                  </td>
                  <td>
                    <select class="status-select" [attr.data-status]="order.status"
                      [value]="order.status" (change)="updateStatus(order, $any($event.target).value)">
                      @for (s of statuses; track s) {
                        <option [value]="s" [selected]="order.status === s">{{ s }}</option>
                      }
                    </select>
                  </td>
                  <td class="date-cell">{{ order.createdAt | date:'MMM d' }}</td>
                  <td>
                    <button class="expand-btn" (click)="toggle(order._id)">
                      {{ expandedId === order._id ? '▲' : '▼' }}
                    </button>
                  </td>
                </tr>
                @if (expandedId === order._id) {
                  <tr class="detail-row">
                    <td colspan="10">
                      <div class="order-detail">
                        <div class="detail-group">
                          <span class="detail-label">Shipping Address</span>
                          <p>{{ order.shippingAddress }}, {{ order.city }} {{ order.postalCode }}, {{ order.country }}</p>
                        </div>
                        @if (order.notes) {
                          <div class="detail-group">
                            <span class="detail-label">Notes</span>
                            <p>{{ order.notes }}</p>
                          </div>
                        }
                        @if (order.items?.length) {
                          <div class="detail-group">
                            <span class="detail-label">Items</span>
                            <div class="items-list">
                              @for (item of order.items; track item._id) {
                                <div class="order-item-row">
                                  <span>{{ item.product?.name }}</span>
                                  <span>{{ item.size }}</span>
                                  <span>× {{ item.quantity }}</span>
                                  <span>{{ item.unitPrice | number:'1.2-2' }} TND</span>
                                </div>
                              }
                            </div>
                          </div>
                        }
                      </div>
                    </td>
                  </tr>
                }
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  `
})
export class AdminOrdersComponent implements OnInit {
  orders: Order[] = [];
  loading = true;
  expandedId: string | null = null;
  statuses = ORDER_STATUSES;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getAll().subscribe({
      next: (o) => { this.orders = o; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  toggle(id: string): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  updateStatus(order: Order, status: string): void {
    this.orderService.updateStatus(order._id, status).subscribe(updated => {
      const idx = this.orders.findIndex(o => o._id === order._id);
      if (idx >= 0) this.orders[idx] = updated;
    });
  }
}
