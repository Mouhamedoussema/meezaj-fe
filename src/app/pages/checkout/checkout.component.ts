import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { OrderService } from '../../core/services/order.service';
import { ToastService } from '../../core/services/toast.service';
import { CartItem } from '../../core/models/cart.model';
import { CreateOrderRequest, PaymentMethod } from '../../core/models/order.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, DecimalPipe],
  styleUrl: './checkout.component.scss',
  template: `
    @if (true) {
      <div class="container checkout-page">
        <div class="checkout-header">
          <span class="label-tag">Final Step</span>
          <h1>Checkout</h1>
          <div class="divider"></div>
        </div>

        <div class="checkout-layout">
          <form [formGroup]="form" (ngSubmit)="submit()" class="checkout-form">
            <!-- Customer info -->
            <section class="form-section">
              <h2>Contact Information</h2>
              <div class="form-grid">
                <div class="form-field full">
                  <label>Full Name *</label>
                  <input type="text" formControlName="customerName" placeholder="Ahmed Ben Ali" />
                  @if (isInvalid('customerName')) {
                    <span class="error">Full name is required</span>
                  }
                </div>
                <div class="form-field">
                  <label>Email *</label>
                  <input type="email" formControlName="customerEmail" placeholder="ahmed@example.com" />
                  @if (isInvalid('customerEmail')) {
                    <span class="error">Valid email is required</span>
                  }
                </div>
                <div class="form-field">
                  <label>Phone *</label>
                  <input type="tel" formControlName="customerPhone" placeholder="+216 XX XXX XXX" />
                  @if (isInvalid('customerPhone')) {
                    <span class="error">Phone number is required</span>
                  }
                </div>
              </div>
            </section>

            <!-- Shipping -->
            <section class="form-section">
              <h2>Shipping Address</h2>
              <div class="form-grid">
                <div class="form-field full">
                  <label>Address *</label>
                  <input type="text" formControlName="shippingAddress" placeholder="Street address, apartment, etc." />
                  @if (isInvalid('shippingAddress')) {
                    <span class="error">Address is required</span>
                  }
                </div>
                <div class="form-field">
                  <label>City *</label>
                  <input type="text" formControlName="city" placeholder="Tunis" />
                  @if (isInvalid('city')) {
                    <span class="error">City is required</span>
                  }
                </div>
                <div class="form-field">
                  <label>Postal Code</label>
                  <input type="text" formControlName="postalCode" placeholder="1000" />
                </div>
                <div class="form-field full">
                  <label>Country *</label>
                  <input type="text" formControlName="country" placeholder="e.g. Tunisia, France, UAE" />
                  @if (isInvalid('country')) {
                    <span class="error">Country is required</span>
                  }
                </div>
              </div>
            </section>

            <!-- Payment Method -->
            <section class="form-section">
              <h2>Payment Method</h2>
              <div class="payment-options">
                <label class="payment-option" [class.selected]="selectedPayment === 'CARD'" (click)="selectPayment('CARD')">
                  <div class="payment-radio">
                    <div class="radio-dot" [class.active]="selectedPayment === 'CARD'"></div>
                  </div>
                  <div class="payment-label">
                    <span class="payment-title">Pay by Card</span>
                    <span class="payment-desc">Visa, Mastercard — secure online payment</span>
                  </div>
                  <div class="payment-icons">
                    <span class="card-icon">VISA</span>
                    <span class="card-icon">MC</span>
                  </div>
                </label>

                <label class="payment-option" [class.selected]="selectedPayment === 'CASH_ON_DELIVERY'" (click)="selectPayment('CASH_ON_DELIVERY')">
                  <div class="payment-radio">
                    <div class="radio-dot" [class.active]="selectedPayment === 'CASH_ON_DELIVERY'"></div>
                  </div>
                  <div class="payment-label">
                    <span class="payment-title">Cash on Delivery</span>
                    <span class="payment-desc">Pay when your order arrives</span>
                  </div>
                  <div class="payment-icons">
                    <span class="cod-icon">◎</span>
                  </div>
                </label>
              </div>

              @if (selectedPayment === 'CARD') {
                <div class="card-form" formGroupName="card">
                  <div class="form-grid">
                    <div class="form-field full">
                      <label>Cardholder Name *</label>
                      <input type="text" formControlName="cardName" placeholder="As it appears on your card" />
                      @if (isCardInvalid('cardName')) {
                        <span class="error">Cardholder name is required</span>
                      }
                    </div>
                    <div class="form-field full">
                      <label>Card Number *</label>
                      <input type="text" formControlName="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19"
                        (input)="formatCardNumber($event)" />
                      @if (isCardInvalid('cardNumber')) {
                        <span class="error">Valid 16-digit card number is required</span>
                      }
                    </div>
                    <div class="form-field">
                      <label>Expiry Date *</label>
                      <input type="text" formControlName="expiry" placeholder="MM/YY" maxlength="5"
                        (input)="formatExpiry($event)" />
                      @if (isCardInvalid('expiry')) {
                        <span class="error">Valid expiry date is required</span>
                      }
                    </div>
                    <div class="form-field">
                      <label>CVV *</label>
                      <input type="text" formControlName="cvv" placeholder="123" maxlength="4" />
                      @if (isCardInvalid('cvv')) {
                        <span class="error">CVV is required</span>
                      }
                    </div>
                  </div>
                  <p class="secure-note">🔒 Your card details are encrypted and secure</p>
                </div>
              }

              @if (selectedPayment === 'CASH_ON_DELIVERY') {
                <div class="cod-info">
                  <span class="cod-check">✓</span>
                  <div>
                    <p class="cod-title">No payment needed now</p>
                    <p class="cod-text">You'll pay in cash when your order is delivered. Please have the exact amount ready.</p>
                  </div>
                </div>
              }
            </section>

            <!-- Notes -->
            <section class="form-section">
              <h2>Order Notes <span class="optional">(optional)</span></h2>
              <div class="form-field full">
                <textarea formControlName="notes" rows="3" placeholder="Any special instructions?"></textarea>
              </div>
            </section>

            @if (submitError) {
              <p class="submit-error">{{ submitError }}</p>
            }

            <button type="submit" class="btn-primary submit-btn" [disabled]="submitting">
              {{ submitting ? 'Placing Order...' : 'Place Order — ' + (finalTotal | number:'1.2-2') + ' TND' }}
            </button>
          </form>

          <!-- Order summary -->
          <div class="order-summary">
            <h2>Your Order</h2>
            <div class="summary-items">
              @for (item of items; track item.product._id + item.size) {
                <div class="summary-item">
                  <div class="summary-item-img">
                    @if (item.product.imageUrls?.length) {
                      <img [src]="resolveUrl(item.product.imageUrls[0])" [alt]="item.product.name" />
                    } @else {
                      <div class="img-placeholder">{{ item.product.name[0] }}</div>
                    }
                    <span class="qty-badge">{{ item.quantity }}</span>
                  </div>
                  <div class="summary-item-info">
                    <span class="item-name">{{ item.product.name }}</span>
                    <span class="item-meta">{{ item.size }}</span>
                  </div>
                  <span class="item-price">{{ (item.product.price * item.quantity) | number:'1.2-2' }} TND</span>
                </div>
              }
            </div>
            <div class="summary-totals">
              <div class="total-row">
                <span>Subtotal</span>
                <span>{{ cartTotal | number:'1.2-2' }} TND</span>
              </div>
              <div class="total-row">
                <span>Shipping</span>
                <span>7.00 TND</span>
              </div>
              <div class="total-row">
                <span>Payment</span>
                <span>{{ selectedPayment === 'CARD' ? 'Card' : 'Cash on Delivery' }}</span>
              </div>
              <div class="total-divider"></div>
              <div class="total-row grand">
                <span>Total</span>
                <span>{{ finalTotal | number:'1.2-2' }} TND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  `
})
export class CheckoutComponent implements OnInit {
  form: FormGroup;
  items: CartItem[] = [];
  submitting = false;
  submitError = '';
  selectedPayment: PaymentMethod = 'CASH_ON_DELIVERY';

  constructor(
    private fb: FormBuilder,
    private cart: CartService,
    private orderService: OrderService,
    private router: Router,
    private toast: ToastService
  ) {
    this.form = this.fb.group({
      customerName: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerPhone: ['', Validators.required],
      shippingAddress: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: [''],
      country: ['Tunisia', Validators.required],
      notes: [''],
      card: this.fb.group({
        cardName: [''],
        cardNumber: [''],
        expiry: [''],
        cvv: ['']
      })
    });
  }

  ngOnInit(): void {
    this.cart.items$.subscribe(items => {
      this.items = items;
      if (items.length === 0) this.router.navigate(['/cart']);
    });
  }

  resolveUrl(url: string): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl}${url}`;
  }

  get cartTotal(): number { return this.cart.total; }
  get finalTotal(): number { return this.cartTotal + 7; }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  isCardInvalid(field: string): boolean {
    const ctrl = this.form.get('card')?.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  selectPayment(method: PaymentMethod): void {
    this.selectedPayment = method;
    const card = this.form.get('card')!;
    if (method === 'CARD') {
      card.get('cardName')!.setValidators(Validators.required);
      card.get('cardNumber')!.setValidators([Validators.required, Validators.pattern(/^\d{4} \d{4} \d{4} \d{4}$/)]);
      card.get('expiry')!.setValidators([Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]);
      card.get('cvv')!.setValidators([Validators.required, Validators.pattern(/^\d{3,4}$/)]);
    } else {
      card.get('cardName')!.clearValidators();
      card.get('cardNumber')!.clearValidators();
      card.get('expiry')!.clearValidators();
      card.get('cvv')!.clearValidators();
    }
    card.updateValueAndValidity();
    Object.keys((card as FormGroup).controls).forEach(k => card.get(k)!.updateValueAndValidity());
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let v = input.value.replace(/\D/g, '').substring(0, 16);
    input.value = v.replace(/(.{4})/g, '$1 ').trim();
    this.form.get('card.cardNumber')!.setValue(input.value, { emitEvent: false });
  }

  formatExpiry(event: Event): void {
    const input = event.target as HTMLInputElement;
    let v = input.value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
    input.value = v;
    this.form.get('card.expiry')!.setValue(input.value, { emitEvent: false });
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.items.length === 0) return;

    this.submitting = true;
    this.submitError = '';

    const v = this.form.value;
    const payload: CreateOrderRequest = {
      customerName: v.customerName,
      customerEmail: v.customerEmail,
      customerPhone: v.customerPhone,
      shippingAddress: v.shippingAddress,
      city: v.city,
      postalCode: v.postalCode ?? '',
      country: v.country ?? 'Tunisia',
      notes: v.notes ?? '',
      paymentMethod: this.selectedPayment,
      items: this.items.map(i => ({
        productId: i.product._id,
        size: i.size,
        quantity: i.quantity
      }))
    };

    this.orderService.create(payload).subscribe({
      next: (order) => {
        const firstName = payload.customerName.split(' ')[0];
        this.cart.clear();
        this.submitting = false;
        this.toast.show(`Thank you ${firstName}! Your order is confirmed — wear it with pride. 🇹🇳`);
        this.router.navigate(['/']);
      },
      error: () => {
        this.submitError = 'Failed to place order. Please try again.';
        this.submitting = false;
      }
    });
  }
}
