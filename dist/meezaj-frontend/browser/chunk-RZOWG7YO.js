import {
  ProductCardComponent
} from "./chunk-PB7STGZZ.js";
import {
  ProductService
} from "./chunk-X4BYX6E2.js";
import "./chunk-FJ5G62QP.js";
import "./chunk-DNOABDGR.js";
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
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-LIZQVVZX.js";

// src/app/pages/shop/shop.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ShopComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.products.length, " piece", ctx_r0.products.length !== 1 ? "s" : "", "");
  }
}
function ShopComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function ShopComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ShopComponent_Conditional_9_For_2_Template, 1, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.skeletons);
  }
}
function ShopComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 7);
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275property("product", product_r2);
  }
}
function ShopComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ShopComponent_Conditional_10_For_2_Template, 1, 1, "app-product-card", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.products);
  }
}
function ShopComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p");
    \u0275\u0275text(2, "No products available yet.");
    \u0275\u0275elementEnd()();
  }
}
var ShopComponent = class _ShopComponent {
  constructor(productService) {
    this.productService = productService;
    this.products = [];
    this.loading = true;
    this.skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  }
  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (p) => {
        this.products = p;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function ShopComponent_Factory(t) {
      return new (t || _ShopComponent)(\u0275\u0275directiveInject(ProductService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShopComponent, selectors: [["app-shop"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "shop-header"], [1, "container"], [1, "label-tag"], [1, "divider"], [1, "count"], [1, "products-grid"], [1, "skeleton"], [3, "product"], [1, "empty-state"]], template: function ShopComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "The Collection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "All Products");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 3);
        \u0275\u0275template(7, ShopComponent_Conditional_7_Template, 2, 2, "p", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 1);
        \u0275\u0275template(9, ShopComponent_Conditional_9_Template, 3, 0, "div", 5)(10, ShopComponent_Conditional_10_Template, 3, 0)(11, ShopComponent_Conditional_11_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, !ctx.loading ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(9, ctx.loading ? 9 : ctx.products.length ? 10 : 11);
      }
    }, dependencies: [ProductCardComponent], styles: ["\n\n.shop-header[_ngcontent-%COMP%] {\n  padding: calc(72px + var(--spacing-lg)) 0 var(--spacing-md);\n  border-bottom: 1px solid var(--color-border);\n  margin-bottom: var(--spacing-lg);\n}\n.shop-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4vw, 3rem);\n  margin-bottom: var(--spacing-xs);\n}\n.count[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.1em;\n  margin-top: var(--spacing-sm);\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--spacing-md);\n  padding-bottom: var(--spacing-xl);\n}\n@media (max-width: 1024px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-sm);\n  }\n}\n.skeleton[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  background:\n    linear-gradient(\n      90deg,\n      var(--color-bg-alt) 25%,\n      var(--color-border) 50%,\n      var(--color-bg-alt) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-xl) 0;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=shop.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShopComponent, { className: "ShopComponent", filePath: "src\\app\\pages\\shop\\shop.component.ts", lineNumber: 44 });
})();
export {
  ShopComponent
};
//# sourceMappingURL=chunk-RZOWG7YO.js.map
