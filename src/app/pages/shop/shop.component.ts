import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductCardComponent, RevealDirective],
  styleUrl: './shop.component.scss',
  template: `
    <div class="shop-header">
      <div class="container" appReveal>
        <span class="label-tag">The Collection</span>
        <h1>All Products</h1>
        <div class="divider"></div>
        @if (!loading) {
          <p class="count">{{ products.length }} piece{{ products.length !== 1 ? 's' : '' }}</p>
        }
      </div>
    </div>

    <div class="container">
      @if (loading) {
        <div class="products-grid">
          @for (n of skeletons; track n) {
            <div class="skeleton"></div>
          }
        </div>
      } @else if (products.length) {
        <div class="products-grid">
          @for (product of products; track product.id) {
            <app-product-card [product]="product" />
          }
        </div>
      } @else {
        <div class="empty-state">
          <p>No products available yet.</p>
        </div>
      }
    </div>
  `
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (p) => { this.products = p; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
