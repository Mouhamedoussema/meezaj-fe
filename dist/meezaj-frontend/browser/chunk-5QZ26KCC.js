import {
  OrderService
} from "./chunk-YTND4NTI.js";
import {
  CartService
} from "./chunk-DEKEX3XQ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-WSZGJ4KX.js";
import "./chunk-FJ5G62QP.js";
import {
  Router,
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

// src/app/pages/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.product.id + $item.size;
function CheckoutComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5, "Order Confirmed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1");
    \u0275\u0275text(7, "Thank You!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 4);
    \u0275\u0275text(11, "Continue Shopping");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("Your order #", ctx_r0.orderId, " has been placed. We'll send a confirmation to ", ctx_r0.orderEmail, ".");
  }
}
function CheckoutComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Full name is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Valid email is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Phone number is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Address is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_1_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "City is required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_1_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.submitError);
  }
}
function CheckoutComponent_Conditional_1_For_65_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 34);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r3.product.imageUrls[0], \u0275\u0275sanitizeUrl)("alt", item_r3.product.name);
  }
}
function CheckoutComponent_Conditional_1_For_65_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.product.name[0]);
  }
}
function CheckoutComponent_Conditional_1_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 33);
    \u0275\u0275template(2, CheckoutComponent_Conditional_1_For_65_Conditional_2_Template, 1, 2, "img", 34)(3, CheckoutComponent_Conditional_1_For_65_Conditional_3_Template, 2, 1);
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36)(7, "span", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 39);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, (item_r3.product.imageUrls == null ? null : item_r3.product.imageUrls.length) ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.size);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 5, item_r3.product.price * item_r3.quantity, "1.2-2"), " TND");
  }
}
function CheckoutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "span", 3);
    \u0275\u0275text(3, "Final Step");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "Checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8)(8, "form", 9);
    \u0275\u0275listener("ngSubmit", function CheckoutComponent_Conditional_1_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(9, "section", 10)(10, "h2");
    \u0275\u0275text(11, "Contact Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "label");
    \u0275\u0275text(15, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 13);
    \u0275\u0275template(17, CheckoutComponent_Conditional_1_Conditional_17_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 15)(19, "label");
    \u0275\u0275text(20, "Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 16);
    \u0275\u0275template(22, CheckoutComponent_Conditional_1_Conditional_22_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 15)(24, "label");
    \u0275\u0275text(25, "Phone *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 17);
    \u0275\u0275template(27, CheckoutComponent_Conditional_1_Conditional_27_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "section", 10)(29, "h2");
    \u0275\u0275text(30, "Shipping Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 11)(32, "div", 12)(33, "label");
    \u0275\u0275text(34, "Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 18);
    \u0275\u0275template(36, CheckoutComponent_Conditional_1_Conditional_36_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 15)(38, "label");
    \u0275\u0275text(39, "City *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 19);
    \u0275\u0275template(41, CheckoutComponent_Conditional_1_Conditional_41_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 15)(43, "label");
    \u0275\u0275text(44, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 12)(47, "label");
    \u0275\u0275text(48, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "section", 10)(51, "h2");
    \u0275\u0275text(52, "Order Notes ");
    \u0275\u0275elementStart(53, "span", 22);
    \u0275\u0275text(54, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 12);
    \u0275\u0275element(56, "textarea", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, CheckoutComponent_Conditional_1_Conditional_57_Template, 2, 1, "p", 24);
    \u0275\u0275elementStart(58, "button", 25);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 26)(61, "h2");
    \u0275\u0275text(62, "Your Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 27);
    \u0275\u0275repeaterCreate(64, CheckoutComponent_Conditional_1_For_65_Template, 14, 8, "div", 28, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 29)(67, "div", 30)(68, "span");
    \u0275\u0275text(69, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 30)(74, "span");
    \u0275\u0275text(75, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(78, "div", 31);
    \u0275\u0275elementStart(79, "div", 32)(80, "span");
    \u0275\u0275text(81, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span");
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "number");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(17, ctx_r0.isInvalid("customerName") ? 17 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(22, ctx_r0.isInvalid("customerEmail") ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(27, ctx_r0.isInvalid("customerPhone") ? 27 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(36, ctx_r0.isInvalid("shippingAddress") ? 36 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(41, ctx_r0.isInvalid("city") ? 41 : -1);
    \u0275\u0275advance(16);
    \u0275\u0275conditional(57, ctx_r0.submitError ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting ? "Placing Order..." : "Place Order", " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.items);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(72, 12, ctx_r0.cartTotal, "1.2-2"), " TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.cartTotal >= 100 ? "Free" : "7.00 TND");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(84, 15, ctx_r0.finalTotal, "1.2-2"), " TND");
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor(fb, cart, orderService, router) {
    this.fb = fb;
    this.cart = cart;
    this.orderService = orderService;
    this.router = router;
    this.items = [];
    this.submitting = false;
    this.submitError = "";
    this.orderSuccess = false;
    this.orderId = null;
    this.orderEmail = "";
    this.form = this.fb.group({
      customerName: ["", Validators.required],
      customerEmail: ["", [Validators.required, Validators.email]],
      customerPhone: ["", Validators.required],
      shippingAddress: ["", Validators.required],
      city: ["", Validators.required],
      postalCode: [""],
      country: [{ value: "Tunisia", disabled: false }],
      notes: [""]
    });
  }
  ngOnInit() {
    this.cart.items$.subscribe((items) => {
      this.items = items;
      if (items.length === 0 && !this.orderSuccess) {
        this.router.navigate(["/cart"]);
      }
    });
  }
  get cartTotal() {
    return this.cart.total;
  }
  get finalTotal() {
    return this.cartTotal + (this.cartTotal >= 100 ? 0 : 7);
  }
  isInvalid(field) {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.items.length === 0)
      return;
    this.submitting = true;
    this.submitError = "";
    const v = this.form.value;
    const payload = {
      customerName: v.customerName,
      customerEmail: v.customerEmail,
      customerPhone: v.customerPhone,
      shippingAddress: v.shippingAddress,
      city: v.city,
      postalCode: v.postalCode ?? "",
      country: v.country ?? "Tunisia",
      notes: v.notes ?? "",
      items: this.items.map((i) => ({
        product: { id: i.product.id },
        size: i.size,
        quantity: i.quantity
      }))
    };
    this.orderService.create(payload).subscribe({
      next: (order) => {
        this.orderId = order.id;
        this.orderEmail = payload.customerEmail;
        this.cart.clear();
        this.orderSuccess = true;
        this.submitting = false;
      },
      error: () => {
        this.submitError = "Failed to place order. Please try again.";
        this.submitting = false;
      }
    });
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(t) {
      return new (t || _CheckoutComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "container", "success-page"], [1, "success-box"], [1, "success-icon"], [1, "label-tag"], ["routerLink", "/shop", 1, "btn-primary"], [1, "container", "checkout-page"], [1, "checkout-header"], [1, "divider"], [1, "checkout-layout"], [1, "checkout-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-grid"], [1, "form-field", "full"], ["type", "text", "formControlName", "customerName", "placeholder", "Ahmed Ben Ali"], [1, "error"], [1, "form-field"], ["type", "email", "formControlName", "customerEmail", "placeholder", "ahmed@example.com"], ["type", "tel", "formControlName", "customerPhone", "placeholder", "+216 XX XXX XXX"], ["type", "text", "formControlName", "shippingAddress", "placeholder", "Street address, apartment, etc."], ["type", "text", "formControlName", "city", "placeholder", "Tunis"], ["type", "text", "formControlName", "postalCode", "placeholder", "1000"], ["type", "text", "formControlName", "country", "readonly", ""], [1, "optional"], ["formControlName", "notes", "rows", "3", "placeholder", "Any special instructions?"], [1, "submit-error"], ["type", "submit", 1, "btn-primary", "submit-btn", 3, "disabled"], [1, "order-summary"], [1, "summary-items"], [1, "summary-item"], [1, "summary-totals"], [1, "total-row"], [1, "total-divider"], [1, "total-row", "grand"], [1, "summary-item-img"], [3, "src", "alt"], [1, "qty-badge"], [1, "summary-item-info"], [1, "item-name"], [1, "item-meta"], [1, "item-price"], [1, "img-placeholder"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CheckoutComponent_Conditional_0_Template, 12, 2, "div", 0)(1, CheckoutComponent_Conditional_1_Template, 85, 18);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.orderSuccess ? 0 : 1);
      }
    }, dependencies: [RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DecimalPipe], styles: ["\n\n.checkout-page[_ngcontent-%COMP%] {\n  padding-top: calc(72px + var(--spacing-lg));\n  padding-bottom: var(--spacing-xl);\n}\n.checkout-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.checkout-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4vw, 3rem);\n  margin-bottom: var(--spacing-xs);\n}\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: var(--spacing-lg);\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .checkout-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.checkout-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-md);\n}\n.form-section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--spacing-md);\n}\n.form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.05em;\n  margin-bottom: var(--spacing-sm);\n  font-family: var(--font-sans);\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  color: var(--color-text-muted);\n}\n.optional[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 400;\n  color: var(--color-text-muted);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-sm);\n}\n@media (max-width: 500px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.form-field.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  border: 1px solid var(--color-border);\n  background: var(--color-white);\n  font-family: var(--font-sans);\n  font-size: 0.9rem;\n  color: var(--color-black);\n  outline: none;\n  transition: border-color var(--transition);\n  width: 100%;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-black);\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:read-only, .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:read-only {\n  background: var(--color-bg-alt);\n  cursor: default;\n}\n.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #c0392b;\n  letter-spacing: 0.05em;\n}\n.submit-error[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #c0392b;\n  padding: var(--spacing-sm);\n  border: 1px solid #c0392b;\n  text-align: center;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled:hover {\n  background: var(--color-black);\n  color: var(--color-white);\n}\n.order-summary[_ngcontent-%COMP%] {\n  background: var(--color-bg-alt);\n  padding: var(--spacing-md);\n  position: sticky;\n  top: calc(72px + var(--spacing-sm));\n}\n.order-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  margin-bottom: var(--spacing-md);\n  padding-bottom: var(--spacing-sm);\n  border-bottom: 1px solid var(--color-border);\n}\n.summary-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 56px 1fr auto;\n  gap: 0.75rem;\n  align-items: center;\n}\n.summary-item-img[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 1;\n  background: var(--color-bg);\n  overflow: hidden;\n}\n.summary-item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.img-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-serif);\n  font-size: 1.2rem;\n  color: var(--color-border);\n}\n.qty-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: var(--color-black);\n  color: var(--color-white);\n  font-size: 0.55rem;\n  font-weight: 700;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.summary-item-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.item-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-black);\n  line-height: 1.3;\n}\n.item-meta[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.05em;\n}\n.item-price[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.summary-totals[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--spacing-sm);\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  color: var(--color-text);\n  margin-bottom: 0.6rem;\n}\n.total-row.grand[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  color: var(--color-black);\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--color-border);\n}\n.total-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--color-border);\n  margin: 0.5rem 0;\n}\n.success-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 72px;\n}\n.success-box[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 480px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.success-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.success-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--color-text-muted);\n  line-height: 1.7;\n}\n.success-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border: 2px solid var(--color-black);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin-bottom: var(--spacing-sm);\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src\\app\\pages\\checkout\\checkout.component.ts", lineNumber: 153 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=chunk-5QZ26KCC.js.map
