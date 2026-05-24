import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  styleUrl: './navbar.component.scss',
  template: `
    <nav [class.scrolled]="scrolled">
      <div class="progress-bar" [style.width.%]="progress" [class.visible]="progress > 0"></div>
      <div class="nav-inner container">
        <div class="nav-left">
          <a routerLink="/" class="nav-logo">MEEZAJ</a>
        </div>
        <div class="nav-center">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" class="nav-link">Home</a>
          <a routerLink="/shop" routerLinkActive="active" class="nav-link">Shop</a>
          <a routerLink="/about" routerLinkActive="active" class="nav-link">About</a>
        </div>
        <div class="nav-right">
          <a routerLink="/cart" class="cart-btn" [class.shake]="cartShake">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            @if (cartCount > 0) {
              <span class="cart-badge">{{ cartCount }}</span>
            }
          </a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  cartCount = 0;
  cartShake = false;
  progress = 0;
  private prevCount = 0;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.items$.subscribe(() => {
      const count = this.cart.count;
      if (count > this.prevCount) {
        this.cartShake = true;
        setTimeout(() => this.cartShake = false, 600);
      }
      this.prevCount = count;
      this.cartCount = count;
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 50;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.progress = max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0;
  }
}
