import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductCardComponent, RevealDirective],
  styleUrl: './home.component.scss',
  template: `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <span class="label-tag hero-anim-1">New Collection — 2026</span>
        <h1 class="hero-title hero-anim-2">Wear Your<br>Identity</h1>
        <p class="hero-sub hero-anim-3">Tunisian luxury streetwear. Limited pieces, unlimited expression.</p>
        <a routerLink="/shop" class="btn-primary hero-anim-4">Explore the Collection</a>
      </div>
      <div class="hero-image">
        <img src="assets/hero.png" alt="MEEZAJ Collection"
          [style.transform]="'translateY(' + parallaxY + 'px)'" />
      </div>
    </section>

    <!-- Featured Products -->
    <section class="section-products">
      <div class="container">
        <div class="section-header" appReveal>
          <span class="label-tag">The Collection</span>
          <h2>Featured Pieces</h2>
          <div class="divider"></div>
        </div>
        @if (loading) {
          <div class="loading-grid">
            @for (n of skeletons; track n) {
              <div class="skeleton"></div>
            }
          </div>
        } @else if (featured.length) {
          <div class="products-grid">
            @for (product of featured; track product._id; let i = $index) {
              <div appReveal [delay]="i * 80">
                <app-product-card [product]="product" />
              </div>
            }
          </div>
        } @else {
          <div class="empty-state">
            <p>Collection coming soon.</p>
            <a routerLink="/shop" class="btn-outline" style="margin-top:1.5rem">View All</a>
          </div>
        }
        <div class="section-footer" appReveal>
          <a routerLink="/shop" class="btn-outline">View All Pieces</a>
        </div>
      </div>
    </section>

    <!-- Brand Story -->
    <section class="section-story">
      <div class="container">
        <div class="story-grid">
          <div class="story-image" appReveal="left">
            <img src="assets/story.jpg" alt="Our Story" />
          </div>
          <div class="story-content" appReveal="right">
            <span class="label-tag">Our Story</span>
            <h2>Crafted for Those<br>Who Wear Culture</h2>
            <div class="divider"></div>
            <p>
              At MEEZAJ, we believe clothing is more than fabric — it's a message.
              We source only the finest tissues to craft pieces worthy of our clients,
              because you deserve nothing less than the best. Every order we serve
              carries the soul of Tunisian culture, stitched with pride and delivered
              with trust. Wear your roots. Wear MEEZAJ.
            </p>
            <a href="#" class="btn-outline" style="margin-top:2rem">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Material Callout -->
    <section class="section-callout">
      <div class="container">
        <div class="callout-grid">
          <div class="callout-item" appReveal [delay]="0">
            <span class="callout-icon">◇</span>
            <h3>Premium Materials</h3>
            <p>Sourced locally and internationally for lasting quality.</p>
          </div>
          <div class="callout-item" appReveal [delay]="120">
            <span class="callout-icon">◇</span>
            <h3>Limited Editions</h3>
            <p>Small runs, carefully crafted. New stocks may follow — grab yours before it's gone.</p>
          </div>
          <div class="callout-item" appReveal [delay]="240">
            <span class="callout-icon">◇</span>
            <h3>Worldwide Delivery</h3>
            <p>We deliver across Tunisia and worldwide. Your order, wherever you are.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  featured: Product[] = [];
  loading = true;
  skeletons = [1, 2, 3, 4];
  parallaxY = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getFeatured().subscribe({
      next: (products) => { this.featured = products; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.parallaxY = window.scrollY * 0.22;
  }
}
