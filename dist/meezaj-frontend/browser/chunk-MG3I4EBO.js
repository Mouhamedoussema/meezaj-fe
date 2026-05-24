import {
  CartService
} from "./chunk-DEKEX3XQ.js";
import {
  RouterLink
} from "./chunk-DNOABDGR.js";
import {
  DecimalPipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-LIZQVVZX.js";

// src/app/pages/cart/cart.component.ts
var _forTrack0 = ($index, $item) => $item.product.id + $item.size;
var _c0 = (a0) => ["/product", a0];
function CartComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2, "Your cart is empty.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 5);
    \u0275\u0275text(4, "Continue Shopping");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_8_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r2.product.imageUrls[0], \u0275\u0275sanitizeUrl)("alt", item_r2.product.name);
  }
}
function CartComponent_Conditional_8_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.product.name[0]);
  }
}
function CartComponent_Conditional_8_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 16);
    \u0275\u0275template(2, CartComponent_Conditional_8_For_3_Conditional_2_Template, 1, 2, "img", 17)(3, CartComponent_Conditional_8_For_3_Conditional_3_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18)(5, "a", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 21);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 22)(13, "div", 23)(14, "button", 24);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_For_3_Template_button_click_14_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQty(item_r2, item_r2.quantity - 1));
    });
    \u0275\u0275text(15, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 24);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_For_3_Template_button_click_18_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateQty(item_r2, item_r2.quantity + 1));
    });
    \u0275\u0275text(19, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 25);
    \u0275\u0275listener("click", function CartComponent_Conditional_8_For_3_Template_button_click_20_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(item_r2));
    });
    \u0275\u0275text(21, "Remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 26);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, item_r2.product.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(2, (item_r2.product.imageUrls == null ? null : item_r2.product.imageUrls.length) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, item_r2.product.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Size: ", item_r2.size, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(11, 10, item_r2.product.price, "1.2-2"), " ", item_r2.product.currency, "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r2.quantity);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(24, 13, item_r2.product.price * item_r2.quantity, "1.2-2"), " ", item_r2.product.currency, " ");
  }
}
function CartComponent_Conditional_8_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Add ", \u0275\u0275pipeBind2(2, 1, 100 - ctx_r2.total, "1.2-2"), " TND more for free shipping");
  }
}
function CartComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275repeaterCreate(2, CartComponent_Conditional_8_For_3_Template, 25, 20, "div", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "h2");
    \u0275\u0275text(6, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "span");
    \u0275\u0275text(15, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 11);
    \u0275\u0275elementStart(19, "div", 12)(20, "span");
    \u0275\u0275text(21, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, CartComponent_Conditional_8_Conditional_25_Template, 3, 4, "p", 13);
    \u0275\u0275elementStart(26, "a", 14);
    \u0275\u0275text(27, "Proceed to Checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 15);
    \u0275\u0275text(29, "Continue Shopping");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.items);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("Subtotal (", ctx_r2.totalItems, " item", ctx_r2.totalItems !== 1 ? "s" : "", ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 6, ctx_r2.total, "1.2-2"), " TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.total >= 100 ? "Free" : "7.00 TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(24, 9, ctx_r2.finalTotal, "1.2-2"), " TND");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(25, ctx_r2.total < 100 ? 25 : -1);
  }
}
var CartComponent = class _CartComponent {
  constructor(cart) {
    this.cart = cart;
    this.items = [];
  }
  ngOnInit() {
    this.cart.items$.subscribe((items) => {
      this.items = items;
    });
  }
  get total() {
    return this.cart.total;
  }
  get totalItems() {
    return this.cart.count;
  }
  get finalTotal() {
    return this.total + (this.total >= 100 ? 0 : 7);
  }
  updateQty(item, qty) {
    this.cart.updateQuantity(item.product.id, item.size, qty);
  }
  remove(item) {
    this.cart.remove(item.product.id, item.size);
  }
  static {
    this.\u0275fac = function CartComponent_Factory(t) {
      return new (t || _CartComponent)(\u0275\u0275directiveInject(CartService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [[1, "container", "cart-page"], [1, "cart-header"], [1, "label-tag"], [1, "divider"], [1, "empty-cart"], ["routerLink", "/shop", 1, "btn-primary"], [1, "cart-layout"], [1, "cart-items"], [1, "cart-item"], [1, "cart-summary"], [1, "summary-row"], [1, "summary-divider"], [1, "summary-row", "total-row"], [1, "shipping-note"], ["routerLink", "/checkout", 1, "btn-primary", "checkout-btn"], ["routerLink", "/shop", 1, "continue-link"], [1, "item-image", 3, "routerLink"], [3, "src", "alt"], [1, "item-details"], [1, "item-name", 3, "routerLink"], [1, "item-size"], [1, "item-price"], [1, "item-actions"], [1, "qty-controls"], [3, "click"], [1, "remove-btn", 3, "click"], [1, "item-total"], [1, "img-placeholder"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Your Selection");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Shopping Cart");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, CartComponent_Conditional_7_Template, 5, 0, "div", 4)(8, CartComponent_Conditional_8_Template, 30, 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(7, ctx.items.length === 0 ? 7 : 8);
      }
    }, dependencies: [RouterLink, DecimalPipe], styles: ["\n\n.cart-page[_ngcontent-%COMP%] {\n  padding-top: calc(72px + var(--spacing-lg));\n  padding-bottom: var(--spacing-xl);\n  min-height: 80vh;\n}\n.cart-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.cart-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4vw, 3rem);\n  margin-bottom: var(--spacing-xs);\n}\n.empty-cart[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-xl) 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n.empty-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: var(--spacing-lg);\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cart-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid var(--color-border);\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100px 1fr auto;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md) 0;\n  border-bottom: 1px solid var(--color-border);\n  align-items: start;\n}\n@media (max-width: 500px) {\n  .cart-item[_ngcontent-%COMP%] {\n    grid-template-columns: 80px 1fr;\n  }\n}\n.item-image[_ngcontent-%COMP%] {\n  aspect-ratio: 3/4;\n  background: var(--color-bg-alt);\n  overflow: hidden;\n  cursor: pointer;\n}\n.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--transition);\n}\n.item-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n.img-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-serif);\n  font-size: 2rem;\n  color: var(--color-border);\n}\n.item-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 1rem;\n  color: var(--color-black);\n  transition: opacity var(--transition);\n}\n.item-name[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n.item-size[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.05em;\n}\n.item-price[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-text);\n}\n.item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  margin-top: 0.5rem;\n}\n.qty-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--color-border);\n}\n.qty-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  font-size: 1rem;\n  color: var(--color-black);\n  transition: background var(--transition);\n}\n.qty-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-alt);\n}\n.qty-controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 36px;\n  text-align: center;\n  font-size: 0.85rem;\n  font-weight: 700;\n  border-left: 1px solid var(--color-border);\n  border-right: 1px solid var(--color-border);\n  line-height: 32px;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  text-decoration: underline;\n  transition: color var(--transition);\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-black);\n}\n.item-total[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n@media (max-width: 500px) {\n  .item-total[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.cart-summary[_ngcontent-%COMP%] {\n  background: var(--color-bg-alt);\n  padding: var(--spacing-md);\n  position: sticky;\n  top: calc(72px + var(--spacing-sm));\n}\n.cart-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: var(--spacing-md);\n  padding-bottom: var(--spacing-sm);\n  border-bottom: 1px solid var(--color-border);\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  color: var(--color-text);\n  margin-bottom: 0.75rem;\n}\n.summary-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--color-border);\n  margin: var(--spacing-sm) 0;\n}\n.total-row[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  color: var(--color-black);\n}\n.shipping-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  text-align: center;\n  margin: var(--spacing-xs) 0 var(--spacing-sm);\n}\n.checkout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: block;\n  margin-top: var(--spacing-md);\n}\n.continue-link[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-top: var(--spacing-sm);\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  text-decoration: underline;\n  transition: color var(--transition);\n}\n.continue-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-black);\n}\n/*# sourceMappingURL=cart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\pages\\cart\\cart.component.ts", lineNumber: 85 });
})();
export {
  CartComponent
};
//# sourceMappingURL=chunk-MG3I4EBO.js.map
