import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../core/models/product.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  styleUrl: './product-card.component.scss',
  template: `
    <article #cardEl class="card" [routerLink]="['/product', product._id]"
      (mousemove)="onMouseMove($event, cardEl)"
      (mouseleave)="onMouseLeave(cardEl)">
      <div class="card-image">
        @if (product.imageUrls?.length) {
          <img [src]="resolveUrl(product.imageUrls[0])" [alt]="product.name" loading="lazy" />
          @if (product.imageUrls.length > 1) {
            <img class="img-hover" [src]="resolveUrl(product.imageUrls[1])" [alt]="product.name" loading="lazy" />
          }
        } @else {
          <div class="img-placeholder">
            <span>{{ product.name[0] }}</span>
          </div>
        }
        @if (!product.inStock) {
          <span class="badge-soldout">Sold Out</span>
        }
        @if (product.featured && product.inStock) {
          <span class="badge-featured">Featured</span>
        }
        <div class="card-quick-add">Quick View</div>
      </div>
      <div class="card-info">
        <h3 class="card-name">{{ product.name }}</h3>
        <p class="card-price">{{ product.price | number:'1.2-2' }} {{ product.currency }}</p>
        @if (product.availableSizes?.length) {
          <div class="card-sizes">
            @for (size of product.availableSizes; track size) {
              <span class="size-dot">{{ size }}</span>
            }
          </div>
        }
      </div>
    </article>
  `
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  resolveUrl(url: string): string {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${environment.apiUrl}${url}`;
  }

  onMouseMove(e: MouseEvent, card: HTMLElement): void {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    card.style.transform = `translate(${x}px, ${y}px)`;
    card.style.transition = 'transform 0.1s ease';
  }

  onMouseLeave(card: HTMLElement): void {
    card.style.transform = 'translate(0, 0)';
    card.style.transition = 'transform 0.6s ease';
  }
}
