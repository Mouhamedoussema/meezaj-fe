import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './footer.component.scss',
  template: `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="brand-name">MEEZAJ</span>
            <p class="brand-tagline">Wear Your Identity</p>
          </div>
          <div class="footer-links">
            <span class="footer-heading">Shop</span>
            <a routerLink="/">Home</a>
            <a routerLink="/shop">All Products</a>
            <a routerLink="/cart">Cart</a>
          </div>
          <div class="footer-links">
            <span class="footer-heading">Info</span>
            <a routerLink="/about">About</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">Size Guide</a>
          </div>
          <div class="footer-links">
            <span class="footer-heading">Contact</span>
            <a href="mailto:meezaj93@gmail.com">meezaj93&#64;gmail.com</a>
            <a href="https://www.instagram.com/meezaj.streetweartn/" target="_blank" rel="noopener">Instagram</a>
            <a href="tel:+21693802445">+216 93 802 445</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© {{ year }} MEEZAJ. All rights reserved.</span>
          <a routerLink="/admin/login" class="admin-link">Admin</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
