import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { Product } from '../../core/models/product.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  styleUrl: './product.component.scss',
  template: `
    @if (loading) {
      <div class="container page-loading">
        <div class="skeleton-img"></div>
        <div class="skeleton-info">
          <div class="skeleton-line wide"></div>
          <div class="skeleton-line narrow"></div>
          <div class="skeleton-line medium"></div>
        </div>
      </div>
    } @else if (product) {
      <div class="container product-layout">
        <!-- Image gallery -->
        <div class="gallery">
          <div class="gallery-main">
            @if (product.imageUrls?.length) {
              <img [src]="resolveUrl(activeImage)" [alt]="product.name" />
            } @else {
              <div class="img-placeholder">
                <span>{{ product.name[0] }}</span>
              </div>
            }
          </div>
          @if ((product.imageUrls?.length ?? 0) > 1) {
            <div class="gallery-thumbs">
              @for (img of product.imageUrls; track img) {
                <div class="thumb" [class.active]="activeImage === img" (click)="activeImage = img">
                  <img [src]="resolveUrl(img)" [alt]="product.name" />
                </div>
              }
            </div>
          }
        </div>

        <!-- Product info -->
        <div class="product-info">
          <a routerLink="/shop" class="breadcrumb">← Back to Shop</a>
          <span class="label-tag">{{ product.material }}</span>
          <h1>{{ product.name }}</h1>
          <p class="price">{{ product.price | number:'1.2-2' }} <span>{{ product.currency }}</span></p>

          @if (!product.inStock) {
            <p class="out-of-stock">Currently Out of Stock</p>
          } @else {
            <!-- Size selector -->
            @if (product.availableSizes?.length) {
              <div class="size-section">
                <div class="size-label">
                  <span>Size</span>
                  @if (selectedSize) { <span class="selected-size">{{ selectedSize }}</span> }
                </div>
                <div class="size-grid">
                  @for (size of product.availableSizes; track size) {
                    <button class="size-btn" [class.selected]="selectedSize === size" (click)="selectedSize = size">
                      {{ size }}
                    </button>
                  }
                </div>
              </div>
            }

            <!-- Quantity -->
            <div class="qty-section">
              <span>Quantity</span>
              <div class="qty-controls">
                <button (click)="changeQty(-1)" [disabled]="qty <= 1">−</button>
                <span>{{ qty }}</span>
                <button (click)="changeQty(1)">+</button>
              </div>
            </div>

            <!-- Add to cart -->
            @if (addedToCart) {
              <p class="added-msg">Added to cart ✓</p>
            }
            <button class="btn-primary add-btn" (click)="addToCart()"
              [disabled]="(product.availableSizes?.length ?? 0) > 0 && !selectedSize">
              {{ (product.availableSizes?.length ?? 0) > 0 && !selectedSize ? 'Select a Size' : 'Add to Cart' }}
            </button>
            <a routerLink="/cart" class="btn-outline view-cart-btn">View Cart</a>
          }

          <!-- Description -->
          <div class="description">
            <div class="divider"></div>
            <p>{{ product.description }}</p>
          </div>

          <!-- Story -->
          @if (product.story) {
            <div class="story">
              <span class="label-tag">The Story</span>
              <p>{{ product.story }}</p>
            </div>
          }

          <!-- Details -->
          <div class="details">
            <span class="label-tag">Details</span>
            <ul>
              @if (product.material) { <li>Material: {{ product.material }}</li> }
              @if (product.weight) { <li>Weight: {{ product.weight }}</li> }
            </ul>
          </div>
        </div>
      </div>
    } @else {
      <div class="container not-found">
        <p>Product not found.</p>
        <a routerLink="/shop" class="btn-outline">Back to Shop</a>
      </div>
    }
  `
})
export class ProductComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  activeImage = '';
  selectedSize = '';
  qty = 1;
  addedToCart = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')!;
      this.productService.getById(id).subscribe({
        next: (p) => {
          this.product = p;
          this.activeImage = p.imageUrls?.[0] ?? '';
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
    });
  }

  resolveUrl(url: string): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl}${url}`;
  }

  changeQty(delta: number): void {
    this.qty = Math.max(1, this.qty + delta);
  }

  addToCart(): void {
    if (!this.product) return;
    const size = this.selectedSize || 'One Size';
    this.cart.add(this.product, size, this.qty);
    this.addedToCart = true;
    setTimeout(() => { this.addedToCart = false; }, 2500);
  }
}
