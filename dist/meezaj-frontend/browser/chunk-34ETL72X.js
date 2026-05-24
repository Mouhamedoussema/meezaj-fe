import {
  ProductCardComponent
} from "./chunk-PB7STGZZ.js";
import {
  ProductService
} from "./chunk-X4BYX6E2.js";
import "./chunk-FJ5G62QP.js";
import {
  RouterLink
} from "./chunk-DNOABDGR.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-LIZQVVZX.js";

// src/app/pages/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function HomeComponent_Conditional_24_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 25);
  }
}
function HomeComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_24_For_2_Template, 1, 0, "div", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.skeletons);
  }
}
function HomeComponent_Conditional_25_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 27);
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275property("product", product_r2);
  }
}
function HomeComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_25_For_2_Template, 1, 1, "app-product-card", 27, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.featured);
  }
}
function HomeComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p");
    \u0275\u0275text(2, "Collection coming soon.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 29);
    \u0275\u0275text(4, "View All");
    \u0275\u0275elementEnd()();
  }
}
var HomeComponent = class _HomeComponent {
  constructor(productService) {
    this.productService = productService;
    this.featured = [];
    this.loading = true;
    this.skeletons = [1, 2, 3, 4];
  }
  ngOnInit() {
    this.productService.getFeatured().subscribe({
      next: (products) => {
        this.featured = products;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(ProductService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 1, consts: [[1, "hero"], [1, "hero-content"], [1, "label-tag"], [1, "hero-title"], [1, "hero-sub"], ["routerLink", "/shop", 1, "btn-primary"], [1, "hero-image"], [1, "hero-img-placeholder"], [1, "section-products"], [1, "container"], [1, "section-header"], [1, "divider"], [1, "loading-grid"], [1, "section-footer"], ["routerLink", "/shop", 1, "btn-outline"], [1, "section-story"], [1, "story-grid"], [1, "story-image"], [1, "story-img-placeholder"], [1, "story-content"], ["href", "#", 1, "btn-outline", 2, "margin-top", "2rem"], [1, "section-callout"], [1, "callout-grid"], [1, "callout-item"], [1, "callout-icon"], [1, "skeleton"], [1, "products-grid"], [3, "product"], [1, "empty-state"], ["routerLink", "/shop", 1, "btn-outline", 2, "margin-top", "1.5rem"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "New Collection \u2014 2025");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 3);
        \u0275\u0275text(5, "Wear Your");
        \u0275\u0275element(6, "br");
        \u0275\u0275text(7, "Identity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 4);
        \u0275\u0275text(9, "Tunisian luxury streetwear. Limited pieces, unlimited expression.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 5);
        \u0275\u0275text(11, "Explore the Collection");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "span");
        \u0275\u0275text(15, "MEEZAJ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(16, "section", 8)(17, "div", 9)(18, "div", 10)(19, "span", 2);
        \u0275\u0275text(20, "The Collection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "h2");
        \u0275\u0275text(22, "Featured Pieces");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, HomeComponent_Conditional_24_Template, 3, 0, "div", 12)(25, HomeComponent_Conditional_25_Template, 3, 0)(26, HomeComponent_Conditional_26_Template, 5, 0);
        \u0275\u0275elementStart(27, "div", 13)(28, "a", 14);
        \u0275\u0275text(29, "View All Pieces");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "section", 15)(31, "div", 9)(32, "div", 16)(33, "div", 17);
        \u0275\u0275element(34, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 19)(36, "span", 2);
        \u0275\u0275text(37, "Our Story");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h2");
        \u0275\u0275text(39, "Born in Tunisia,");
        \u0275\u0275element(40, "br");
        \u0275\u0275text(41, "Made for the World");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "div", 11);
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44, " MEEZAJ is more than a brand \u2014 it's a statement. Each piece is designed to fuse Tunisian heritage with contemporary streetwear aesthetics. Limited runs, premium materials, and a story sewn into every stitch. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "a", 20);
        \u0275\u0275text(46, "Learn More");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(47, "section", 21)(48, "div", 9)(49, "div", 22)(50, "div", 23)(51, "span", 24);
        \u0275\u0275text(52, "\u25C7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "h3");
        \u0275\u0275text(54, "Premium Materials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p");
        \u0275\u0275text(56, "Sourced locally and internationally for lasting quality.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 23)(58, "span", 24);
        \u0275\u0275text(59, "\u25C7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "h3");
        \u0275\u0275text(61, "Limited Editions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p");
        \u0275\u0275text(63, "Small runs ensure exclusivity. Once gone, gone forever.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 23)(65, "span", 24);
        \u0275\u0275text(66, "\u25C7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "h3");
        \u0275\u0275text(68, "Free Shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p");
        \u0275\u0275text(70, "On all orders above 100 TND within Tunisia.");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(24);
        \u0275\u0275conditional(24, ctx.loading ? 24 : ctx.featured.length ? 25 : 26);
      }
    }, dependencies: [RouterLink, ProductCardComponent], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding-top: 72px;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    min-height: auto;\n  }\n}\n.hero-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: var(--spacing-xl) var(--spacing-lg) var(--spacing-xl) calc(var(--spacing-xl) * 0.75);\n}\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-lg) var(--spacing-md);\n    order: 2;\n  }\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(3rem, 6vw, 5.5rem);\n  line-height: 1.05;\n  margin: var(--spacing-sm) 0 var(--spacing-md);\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  max-width: 380px;\n  margin-bottom: var(--spacing-md);\n  line-height: 1.8;\n}\n.hero-image[_ngcontent-%COMP%] {\n  background: var(--color-bg-alt);\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .hero-image[_ngcontent-%COMP%] {\n    aspect-ratio: 4/3;\n    order: 1;\n  }\n}\n.hero-img-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f0ede8 0%,\n      #e8e4dc 100%);\n}\n.hero-img-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: clamp(2rem, 8vw, 6rem);\n  letter-spacing: 0.3em;\n  color: rgba(26, 26, 26, 0.08);\n  text-transform: uppercase;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.section-products[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) 0 var(--spacing-lg);\n}\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--spacing-lg);\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 3vw, 2.5rem);\n  margin-bottom: var(--spacing-sm);\n}\n.section-header[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  margin: var(--spacing-sm) auto;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--spacing-md);\n}\n@media (max-width: 1024px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-sm);\n  }\n}\n.loading-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--spacing-md);\n}\n@media (max-width: 1024px) {\n  .loading-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .loading-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.skeleton[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-bg-alt) 25%,\n      var(--color-border) 50%,\n      var(--color-bg-alt) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 2px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.section-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--spacing-lg);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-xl) 0;\n  color: var(--color-text-muted);\n}\n.section-story[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) 0;\n  background: var(--color-bg-alt);\n}\n.story-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-xl);\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .story-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-lg);\n  }\n}\n.story-image[_ngcontent-%COMP%] {\n  aspect-ratio: 4/5;\n}\n.story-img-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e4dc 0%,\n      #d8d3c8 100%);\n}\n.story-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  margin: var(--spacing-sm) 0 var(--spacing-sm);\n  line-height: 1.3;\n}\n.story-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  line-height: 1.9;\n  font-size: 0.95rem;\n}\n.section-callout[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) 0;\n}\n.callout-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--spacing-lg);\n  text-align: center;\n}\n@media (max-width: 640px) {\n  .callout-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-md);\n  }\n}\n.callout-item[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n}\n.callout-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: var(--spacing-sm) 0 0.5rem;\n}\n.callout-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.callout-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 106 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-34ETL72X.js.map
