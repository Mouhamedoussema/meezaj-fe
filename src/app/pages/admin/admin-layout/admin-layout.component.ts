import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  styleUrl: './admin-layout.component.scss',
  template: `
    <div class="admin-shell">
      <aside class="sidebar">
        <div class="sidebar-logo">MEEZAJ</div>
        <nav class="sidebar-nav">
          <a routerLink="/admin/dashboard" routerLinkActive="active" class="nav-item">
            <span>Dashboard</span>
          </a>
          <a routerLink="/admin/products" routerLinkActive="active" class="nav-item">
            <span>Products</span>
          </a>
          <a routerLink="/admin/orders" routerLinkActive="active" class="nav-item">
            <span>Orders</span>
          </a>
        </nav>
        <div class="sidebar-footer">
          <a routerLink="/" class="nav-item">← Storefront</a>
          <button class="logout-btn" (click)="logout()">Sign Out</button>
        </div>
      </aside>
      <main class="admin-main">
        <router-outlet />
      </main>
    </div>
  `
})
export class AdminLayoutComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/admin/login']);
  }
}
