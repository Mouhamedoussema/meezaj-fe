import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastService } from './core/services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AsyncPipe],
  styles: [`
    .toast {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%) translateY(0);
      background: var(--color-black);
      color: var(--color-white);
      padding: 1rem 2rem;
      font-family: var(--font-sans);
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      z-index: 9999;
      white-space: nowrap;
      animation: toastIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
      max-width: 90vw;
      white-space: normal;
      text-align: center;
    }
    @keyframes toastIn {
      from { opacity: 0; transform: translateX(-50%) translateY(20px); }
      to   { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
  `],
  template: `
    <app-navbar />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    @if (toast.message$ | async; as msg) {
      @if (msg) {
        <div class="toast">{{ msg }}</div>
      }
    }
  `
})
export class AppComponent {
  constructor(public toast: ToastService) {}
}
