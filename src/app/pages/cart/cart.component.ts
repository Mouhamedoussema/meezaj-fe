import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { DecimalPipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { CartItem } from '../../core/models/cart.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  styleUrl: './cart.component.scss',
  template: `
    <div class="container cart-page">
      <div class="cart-header">
        <span class="label-tag">Your Selection</span>
        <h1>Shopping Cart</h1>
        <div class="divider"></div>
      </div>

      @if (items.length === 0) {
        <div class="empty-cart">
          <p>Your cart is empty.</p>
          <a routerLink="/shop" class="btn-primary">Continue Shopping</a>
        </div>
      } @else {
        <div class="cart-layout">
          <!-- Items -->
          <div class="cart-items">
            @for (item of items; track item.product._id + item.size) {
              <div class="cart-item">
                <div class="item-image" [routerLink]="['/product', item.product._id]">
                  @if (item.product.imageUrls?.length) {
                    <img [src]="resolveUrl(item.product.imageUrls[0])" [alt]="item.product.name" />
                  } @else {
                    <div class="img-placeholder">{{ item.product.name[0] }}</div>
                  }
                </div>
                <div class="item-details">
                  <a [routerLink]="['/product', item.product._id]" class="item-name">{{ item.product.name }}</a>
                  <p class="item-size">Size: {{ item.size }}</p>
                  <p class="item-price">{{ item.product.price | number:'1.2-2' }} {{ item.product.currency }}</p>
                  <div class="item-actions">
                    <div class="qty-controls">
                      <button (click)="updateQty(item, item.quantity - 1)">−</button>
                      <span>{{ item.quantity }}</span>
                      <button (click)="updateQty(item, item.quantity + 1)">+</button>
                    </div>
                    <button class="remove-btn" (click)="remove(item)">Remove</button>
                  </div>
                </div>
                <div class="item-total">
                  {{ (item.product.price * item.quantity) | number:'1.2-2' }} {{ item.product.currency }}
                </div>
              </div>
            }
          </div>

          <!-- Summary -->
          <div class="cart-summary">
            <h2>Order Summary</h2>
            <div class="summary-row">
              <span>Subtotal ({{ totalItems }} item{{ totalItems !== 1 ? 's' : '' }})</span>
              <span>{{ total | number:'1.2-2' }} TND</span>
            </div>
            <div class="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-row total-row">
              <span>Total</span>
              <span>{{ total | number:'1.2-2' }} TND</span>
            </div>
            <a routerLink="/checkout" class="btn-primary checkout-btn">Proceed to Checkout</a>
            <a routerLink="/shop" class="continue-link">Continue Shopping</a>
          </div>
        </div>
      }
    </div>
  `
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.items$.subscribe(items => { this.items = items; });
  }

  resolveUrl(url: string): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl}${url}`;
  }

  get total(): number { return this.cart.total; }
  get totalItems(): number { return this.cart.count; }

  updateQty(item: CartItem, qty: number): void {
    this.cart.updateQuantity(item.product._id, item.size, qty);
  }

  remove(item: CartItem): void {
    this.cart.remove(item.product._id, item.size);
  }
}
