import {
  ProductService
} from "./chunk-X4BYX6E2.js";
import {
  CartService
} from "./chunk-DEKEX3XQ.js";
import "./chunk-FJ5G62QP.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-DNOABDGR.js";
import {
  DecimalPipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LIZQVVZX.js";

// src/app/pages/product/product.component.ts
function ProductComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275element(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275elementEnd()();
  }
}
function ProductComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.activeImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.product.name[0]);
  }
}
function ProductComponent_Conditional_1_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function ProductComponent_Conditional_1_Conditional_5_For_2_Template_div_click_0_listener() {
      const img_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.activeImage = img_r3);
    });
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.activeImage === img_r3);
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r3, \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ProductComponent_Conditional_1_Conditional_5_For_2_Template, 2, 4, "div", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.product.imageUrls);
  }
}
function ProductComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "Currently Out of Stock");
    \u0275\u0275elementEnd();
  }
}
function ProductComponent_Conditional_1_Conditional_19_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedSize);
  }
}
function ProductComponent_Conditional_1_Conditional_19_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ProductComponent_Conditional_1_Conditional_19_Conditional_0_For_7_Template_button_click_0_listener() {
      const size_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectedSize = size_r6);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r0.selectedSize === size_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", size_r6, " ");
  }
}
function ProductComponent_Conditional_1_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 31)(2, "span");
    \u0275\u0275text(3, "Size");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductComponent_Conditional_1_Conditional_19_Conditional_0_Conditional_4_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33);
    \u0275\u0275repeaterCreate(6, ProductComponent_Conditional_1_Conditional_19_Conditional_0_For_7_Template, 2, 3, "button", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(4, ctx_r0.selectedSize ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.product.availableSizes);
  }
}
function ProductComponent_Conditional_1_Conditional_19_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "Added to cart \u2713");
    \u0275\u0275elementEnd();
  }
}
function ProductComponent_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ProductComponent_Conditional_1_Conditional_19_Conditional_0_Template, 8, 1, "div", 23);
    \u0275\u0275elementStart(1, "div", 24)(2, "span");
    \u0275\u0275text(3, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "button", 26);
    \u0275\u0275listener("click", function ProductComponent_Conditional_1_Conditional_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeQty(-1));
    });
    \u0275\u0275text(6, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 27);
    \u0275\u0275listener("click", function ProductComponent_Conditional_1_Conditional_19_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.changeQty(1));
    });
    \u0275\u0275text(10, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, ProductComponent_Conditional_1_Conditional_19_Conditional_11_Template, 2, 0, "p", 28);
    \u0275\u0275elementStart(12, "button", 29);
    \u0275\u0275listener("click", function ProductComponent_Conditional_1_Conditional_19_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToCart());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 30);
    \u0275\u0275text(15, "View Cart");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, (ctx_r0.product.availableSizes == null ? null : ctx_r0.product.availableSizes.length) ? 0 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.qty <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.qty);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(11, ctx_r0.addedToCart ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ((tmp_6_0 = ctx_r0.product.availableSizes == null ? null : ctx_r0.product.availableSizes.length) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0) > 0 && !ctx_r0.selectedSize);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = ctx_r0.product.availableSizes == null ? null : ctx_r0.product.availableSizes.length) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 0) > 0 && !ctx_r0.selectedSize ? "Select a Size" : "Add to Cart", " ");
  }
}
function ProductComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 13);
    \u0275\u0275text(2, "The Story");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.product.story);
  }
}
function ProductComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Material: ", ctx_r0.product.material, "");
  }
}
function ProductComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Weight: ", ctx_r0.product.weight, "");
  }
}
function ProductComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275template(3, ProductComponent_Conditional_1_Conditional_3_Template, 1, 2, "img", 9)(4, ProductComponent_Conditional_1_Conditional_4_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProductComponent_Conditional_1_Conditional_5_Template, 3, 0, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 11)(7, "a", 12);
    \u0275\u0275text(8, "\u2190 Back to Shop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h1");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 14);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ProductComponent_Conditional_1_Conditional_18_Template, 2, 0, "p", 15)(19, ProductComponent_Conditional_1_Conditional_19_Template, 16, 6);
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275element(21, "div", 17);
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, ProductComponent_Conditional_1_Conditional_24_Template, 5, 1, "div", 18);
    \u0275\u0275elementStart(25, "div", 19)(26, "span", 13);
    \u0275\u0275text(27, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ul");
    \u0275\u0275template(29, ProductComponent_Conditional_1_Conditional_29_Template, 2, 1, "li")(30, ProductComponent_Conditional_1_Conditional_30_Template, 2, 1, "li");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, (ctx_r0.product.imageUrls == null ? null : ctx_r0.product.imageUrls.length) ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(5, ((tmp_2_0 = ctx_r0.product.imageUrls == null ? null : ctx_r0.product.imageUrls.length) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : 0) > 1 ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.product.material);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 11, ctx_r0.product.price, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.product.currency);
    \u0275\u0275advance();
    \u0275\u0275conditional(18, !ctx_r0.product.inStock ? 18 : 19);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.product.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(24, ctx_r0.product.story ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(29, ctx_r0.product.material ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(30, ctx_r0.product.weight ? 30 : -1);
  }
}
function ProductComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "p");
    \u0275\u0275text(2, "Product not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 37);
    \u0275\u0275text(4, "Back to Shop");
    \u0275\u0275elementEnd()();
  }
}
var ProductComponent = class _ProductComponent {
  constructor(route, productService, cart) {
    this.route = route;
    this.productService = productService;
    this.cart = cart;
    this.product = null;
    this.loading = true;
    this.activeImage = "";
    this.selectedSize = "";
    this.qty = 1;
    this.addedToCart = false;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get("id"));
      this.productService.getById(id).subscribe({
        next: (p) => {
          this.product = p;
          this.activeImage = p.imageUrls?.[0] ?? "";
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    });
  }
  changeQty(delta) {
    this.qty = Math.max(1, this.qty + delta);
  }
  addToCart() {
    if (!this.product)
      return;
    const size = this.selectedSize || "One Size";
    this.cart.add(this.product, size, this.qty);
    this.addedToCart = true;
    setTimeout(() => {
      this.addedToCart = false;
    }, 2500);
  }
  static {
    this.\u0275fac = function ProductComponent_Factory(t) {
      return new (t || _ProductComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CartService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductComponent, selectors: [["app-product"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "container", "page-loading"], [1, "skeleton-img"], [1, "skeleton-info"], [1, "skeleton-line", "wide"], [1, "skeleton-line", "narrow"], [1, "skeleton-line", "medium"], [1, "container", "product-layout"], [1, "gallery"], [1, "gallery-main"], [3, "src", "alt"], [1, "gallery-thumbs"], [1, "product-info"], ["routerLink", "/shop", 1, "breadcrumb"], [1, "label-tag"], [1, "price"], [1, "out-of-stock"], [1, "description"], [1, "divider"], [1, "story"], [1, "details"], [1, "img-placeholder"], [1, "thumb", 3, "active"], [1, "thumb", 3, "click"], [1, "size-section"], [1, "qty-section"], [1, "qty-controls"], [3, "click", "disabled"], [3, "click"], [1, "added-msg"], [1, "btn-primary", "add-btn", 3, "click", "disabled"], ["routerLink", "/cart", 1, "btn-outline", "view-cart-btn"], [1, "size-label"], [1, "selected-size"], [1, "size-grid"], [1, "size-btn", 3, "selected"], [1, "size-btn", 3, "click"], [1, "container", "not-found"], ["routerLink", "/shop", 1, "btn-outline"]], template: function ProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductComponent_Conditional_0_Template, 6, 0, "div", 0)(1, ProductComponent_Conditional_1_Template, 31, 14)(2, ProductComponent_Conditional_2_Template, 5, 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.loading ? 0 : ctx.product ? 1 : 2);
      }
    }, dependencies: [RouterLink, DecimalPipe], styles: ["\n\n.product-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-xl);\n  padding-top: calc(72px + var(--spacing-lg));\n  padding-bottom: var(--spacing-xl);\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .product-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-lg);\n  }\n}\n.gallery-main[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  background: var(--color-bg-alt);\n  overflow: hidden;\n}\n.gallery-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.img-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.img-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 6rem;\n  color: var(--color-border);\n}\n.gallery-thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 72px;\n  aspect-ratio: 3/4;\n  cursor: pointer;\n  opacity: 0.5;\n  overflow: hidden;\n  border: 1px solid transparent;\n  transition: all var(--transition);\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.thumb.active[_ngcontent-%COMP%], .thumb[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  border-color: var(--color-black);\n}\n.product-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  color: var(--color-text-muted);\n  transition: color var(--transition);\n}\n.breadcrumb[_ngcontent-%COMP%]:hover {\n  color: var(--color-black);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 3vw, 2.5rem);\n  margin: 0.25rem 0;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--color-black);\n  font-family: var(--font-sans);\n}\n.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n  font-weight: 400;\n}\n.out-of-stock[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  padding: var(--spacing-sm) 0;\n  border-top: 1px solid var(--color-border);\n  border-bottom: 1px solid var(--color-border);\n}\n.size-section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--spacing-sm);\n}\n.size-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  margin-bottom: 0.75rem;\n}\n.selected-size[_ngcontent-%COMP%] {\n  color: var(--color-black);\n}\n.size-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.size-btn[_ngcontent-%COMP%] {\n  min-width: 44px;\n  height: 44px;\n  padding: 0 0.75rem;\n  border: 1px solid var(--color-border);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--color-text);\n  background: transparent;\n  transition: all var(--transition);\n  cursor: pointer;\n}\n.size-btn[_ngcontent-%COMP%]:hover, .size-btn.selected[_ngcontent-%COMP%] {\n  border-color: var(--color-black);\n  background: var(--color-black);\n  color: var(--color-white);\n}\n.qty-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n}\n.qty-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  border: 1px solid var(--color-border);\n}\n.qty-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  font-size: 1.1rem;\n  color: var(--color-black);\n  transition: background var(--transition);\n}\n.qty-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-bg-alt);\n}\n.qty-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n}\n.qty-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 48px;\n  text-align: center;\n  font-size: 0.9rem;\n  font-weight: 700;\n  border-left: 1px solid var(--color-border);\n  border-right: 1px solid var(--color-border);\n  line-height: 44px;\n}\n.added-msg[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #2d7a3a;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n}\n.add-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.add-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.add-btn[_ngcontent-%COMP%]:disabled:hover {\n  background: var(--color-black);\n  color: var(--color-white);\n}\n.view-cart-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: block;\n}\n.description[_ngcontent-%COMP%], .story[_ngcontent-%COMP%], .details[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-sm);\n  border-top: 1px solid var(--color-border);\n}\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .story[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.9;\n  color: var(--color-text);\n  margin-top: 0.75rem;\n}\n.description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .story[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-top: 0.75rem;\n}\n.description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .story[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n  padding: 0.3rem 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.page-loading[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-xl);\n  padding-top: calc(72px + var(--spacing-lg));\n  padding-bottom: var(--spacing-xl);\n}\n.skeleton-img[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  background: var(--color-bg-alt);\n  animation: _ngcontent-%COMP%_pulse 1.5s ease infinite;\n}\n.skeleton-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  padding-top: 2rem;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  background: var(--color-bg-alt);\n  animation: _ngcontent-%COMP%_pulse 1.5s ease infinite;\n}\n.skeleton-line.wide[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.skeleton-line.medium[_ngcontent-%COMP%] {\n  width: 55%;\n}\n.skeleton-line.narrow[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n.not-found[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) 0;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n/*# sourceMappingURL=product.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductComponent, { className: "ProductComponent", filePath: "src\\app\\pages\\product\\product.component.ts", lineNumber: 127 });
})();
export {
  ProductComponent
};
//# sourceMappingURL=chunk-224TXWFH.js.map
