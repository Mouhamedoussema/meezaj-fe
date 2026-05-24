import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  styleUrl: './about.component.scss',
  template: `
    <!-- Hero -->
    <section class="about-hero">
      <div class="about-hero-bg"></div>
      <div class="container about-hero-content">
        <span class="label-tag">Our Story</span>
        <h1>More Than<br>a Brand</h1>
      </div>
    </section>

    <!-- Mission -->
    <section class="section-mission">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-text" appReveal="left">
            <span class="label-tag">Who We Are</span>
            <h2>Born from Culture,<br>Built with Pride</h2>
            <div class="divider"></div>
            <p>
              MEEZAJ was born from a simple belief: that what you wear tells the world
              who you are. We are a Tunisian luxury streetwear brand dedicated to crafting
              pieces that carry meaning — pieces that blend the richness of Tunisian culture
              with the energy of modern street style.
            </p>
            <p>
              Every collection is a limited run, carefully designed and handpicked for
              quality. We don't mass produce. We create with intention, for people who
              value authenticity over trends.
            </p>
          </div>
          <div class="mission-image" appReveal="right">
            <img src="assets/story.jpg" alt="MEEZAJ Story" />
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-values">
      <div class="container">
        <div class="values-header" appReveal>
          <span class="label-tag">What Drives Us</span>
          <h2>Our Values</h2>
        </div>
        <div class="values-grid">
          <div class="value-item" appReveal [delay]="0">
            <span class="value-num">01</span>
            <h3>Quality First</h3>
            <p>We source only the finest fabrics — locally and internationally — because our clients deserve nothing less. Every stitch is a commitment to excellence.</p>
          </div>
          <div class="value-item" appReveal [delay]="120">
            <span class="value-num">02</span>
            <h3>Cultural Identity</h3>
            <p>Tunisian heritage runs through everything we make. MEEZAJ is a celebration of where we come from — worn with confidence, shared with the world.</p>
          </div>
          <div class="value-item" appReveal [delay]="240">
            <span class="value-num">03</span>
            <h3>Trust & Service</h3>
            <p>We serve every order with care and respect. From the first click to delivery at your door, your experience is our priority — wherever you are in the world.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tunisia -->
    <section class="section-tunisia">
      <div class="container">
        <div class="tunisia-grid">
          <div class="tunisia-content" appReveal="left">
            <span class="label-tag">Made in Tunisia</span>
            <h2>Rooted in Tunisia,<br>Reaching the World</h2>
            <div class="divider"></div>
            <p>
              Tunisia has always been a crossroads of culture — Mediterranean, Arab, African,
              and beyond. MEEZAJ channels that energy into streetwear that speaks globally
              while staying true to its roots. We're proud of where we come from, and we
              want the world to wear that pride too.
            </p>
            <div class="tunisia-stats">
              <div class="stat-item">
                <span class="stat-num">100%</span>
                <span class="stat-label">Curated Quality</span>
              </div>
              <div class="stat-item">
                <span class="stat-num">∞</span>
                <span class="stat-label">Cultural Expression</span>
              </div>
              <div class="stat-item">
                <span class="stat-num">TN</span>
                <span class="stat-label">Made with Pride</span>
              </div>
              <div class="stat-item">
                <span class="stat-num">🌍</span>
                <span class="stat-label">Worldwide Delivery</span>
              </div>
            </div>
          </div>
          <div appReveal="right">
            <img src="assets/hero.png" alt="MEEZAJ Collection" style="width:100%;object-fit:cover;" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-cta">
      <div class="container">
        <div class="cta-content" appReveal>
          <span class="label-tag">Ready to Wear Your Identity?</span>
          <h2>Explore the Collection</h2>
          <div class="cta-actions">
            <a routerLink="/shop" class="btn-primary">Shop Now</a>
            <a href="https://www.instagram.com/meezaj.streetweartn/" target="_blank" rel="noopener" class="btn-outline">Follow on Instagram</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
