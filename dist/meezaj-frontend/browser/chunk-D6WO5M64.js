import {
  ProductService
} from "./chunk-X4BYX6E2.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-WSZGJ4KX.js";
import "./chunk-FJ5G62QP.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LIZQVVZX.js";

// src/app/pages/admin/admin-products/admin-products.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminProductsComponent_Conditional_6_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function AdminProductsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 5);
    \u0275\u0275listener("ngSubmit", function AdminProductsComponent_Conditional_6_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProduct());
    });
    \u0275\u0275elementStart(4, "div", 6)(5, "div", 7)(6, "label");
    \u0275\u0275text(7, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "label");
    \u0275\u0275text(11, "Price (TND) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9)(14, "label");
    \u0275\u0275text(15, "Material");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 7)(18, "label");
    \u0275\u0275text(19, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "textarea", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 7)(22, "label");
    \u0275\u0275text(23, "Story");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "textarea", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 7)(26, "label");
    \u0275\u0275text(27, "Image URLs ");
    \u0275\u0275elementStart(28, "span", 14);
    \u0275\u0275text(29, "(one per line)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "textarea", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 7)(32, "label");
    \u0275\u0275text(33, "Available Sizes ");
    \u0275\u0275elementStart(34, "span", 14);
    \u0275\u0275text(35, "(comma-separated: XS, S, M, L, XL)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 9)(38, "label");
    \u0275\u0275text(39, "Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 18)(42, "label", 19);
    \u0275\u0275element(43, "input", 20);
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "In Stock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "label", 19);
    \u0275\u0275element(47, "input", 21);
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "Featured");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(50, AdminProductsComponent_Conditional_6_Conditional_50_Template, 2, 1, "p", 22);
    \u0275\u0275elementStart(51, "div", 23)(52, "button", 24);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_6_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelForm());
    });
    \u0275\u0275text(53, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 25);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editingId ? "Edit Product" : "New Product");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(47);
    \u0275\u0275conditional(50, ctx_r1.formError ? 50 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving ? "Saving..." : ctx_r1.editingId ? "Update" : "Create", " ");
  }
}
function AdminProductsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Loading products...");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "No products yet. Add your first product above.");
    \u0275\u0275elementEnd();
  }
}
function AdminProductsComponent_Conditional_9_For_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    const product_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r4.imageUrls[0], \u0275\u0275sanitizeUrl)("alt", product_r4.name);
  }
}
function AdminProductsComponent_Conditional_9_For_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r4.name[0]);
  }
}
function AdminProductsComponent_Conditional_9_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 29);
    \u0275\u0275template(5, AdminProductsComponent_Conditional_9_For_22_Conditional_5_Template, 1, 2, "img", 30)(6, AdminProductsComponent_Conditional_9_For_22_Conditional_6_Template, 2, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 33);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "span", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 34)(21, "button", 35);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_9_For_22_Template_button_click_21_listener() {
      const product_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editProduct(product_r4));
    });
    \u0275\u0275text(22, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 36);
    \u0275\u0275listener("click", function AdminProductsComponent_Conditional_9_For_22_Template_button_click_23_listener() {
      const product_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteProduct(product_r4.id));
    });
    \u0275\u0275text(24, "Delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(5, (product_r4.imageUrls == null ? null : product_r4.imageUrls.length) ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 13, product_r4.price, "1.2-2"), " TND");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((product_r4.availableSizes == null ? null : product_r4.availableSizes.join(", ")) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("yes", product_r4.inStock)("no", !product_r4.inStock);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r4.inStock ? "In Stock" : "Out", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("yes", product_r4.featured);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r4.featured ? "Yes" : "No", " ");
  }
}
function AdminProductsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "table", 28)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Sizes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Featured");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275repeaterCreate(21, AdminProductsComponent_Conditional_9_For_22_Template, 25, 16, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.products);
  }
}
var AdminProductsComponent = class _AdminProductsComponent {
  constructor(productService, fb) {
    this.productService = productService;
    this.fb = fb;
    this.products = [];
    this.loading = true;
    this.showForm = false;
    this.editingId = null;
    this.saving = false;
    this.formError = "";
    this.form = this.fb.group({
      name: ["", Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      description: [""],
      story: [""],
      material: [""],
      weight: [""],
      sizesText: [""],
      imageUrlsText: [""],
      inStock: [true],
      featured: [false]
    });
  }
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.loading = true;
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
  openForm() {
    this.editingId = null;
    this.form.reset({ inStock: true, featured: false });
    this.showForm = true;
    this.formError = "";
  }
  editProduct(product) {
    this.editingId = product.id;
    this.form.patchValue({
      name: product.name,
      price: product.price,
      description: product.description,
      story: product.story,
      material: product.material,
      weight: product.weight,
      sizesText: product.availableSizes?.join(", ") ?? "",
      imageUrlsText: product.imageUrls?.join("\n") ?? "",
      inStock: product.inStock,
      featured: product.featured
    });
    this.showForm = true;
    this.formError = "";
  }
  cancelForm() {
    this.showForm = false;
    this.editingId = null;
  }
  saveProduct() {
    if (this.form.invalid)
      return;
    this.saving = true;
    this.formError = "";
    const v = this.form.value;
    const payload = {
      name: v.name,
      price: v.price,
      description: v.description,
      story: v.story,
      material: v.material,
      weight: v.weight,
      availableSizes: v.sizesText ? v.sizesText.split(",").map((s) => s.trim()).filter(Boolean) : [],
      imageUrls: v.imageUrlsText ? v.imageUrlsText.split("\n").map((s) => s.trim()).filter(Boolean) : [],
      inStock: v.inStock,
      featured: v.featured
    };
    const req = this.editingId ? this.productService.update(this.editingId, payload) : this.productService.create(payload);
    req.subscribe({
      next: () => {
        this.loadProducts();
        this.cancelForm();
        this.saving = false;
      },
      error: () => {
        this.formError = "Save failed. Check your credentials and try again.";
        this.saving = false;
      }
    });
  }
  deleteProduct(id) {
    if (!confirm("Delete this product?"))
      return;
    this.productService.delete(id).subscribe({
      next: () => {
        this.products = this.products.filter((p) => p.id !== id);
      },
      error: () => alert("Delete failed.")
    });
  }
  static {
    this.\u0275fac = function AdminProductsComponent_Factory(t) {
      return new (t || _AdminProductsComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProductsComponent, selectors: [["app-admin-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 2, consts: [[1, "admin-products"], [1, "page-header"], [1, "btn-primary", 3, "click"], [1, "form-panel"], [1, "loading-text"], [3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "field", "full"], ["type", "text", "formControlName", "name", "placeholder", "Product name"], [1, "field"], ["type", "number", "formControlName", "price", "placeholder", "0.00", "step", "0.01"], ["type", "text", "formControlName", "material", "placeholder", "100% Cotton"], ["formControlName", "description", "rows", "3", "placeholder", "Product description..."], ["formControlName", "story", "rows", "2", "placeholder", "The story behind this piece..."], [1, "hint"], ["formControlName", "imageUrlsText", "rows", "3", "placeholder", "https://example.com/image1.jpg"], ["type", "text", "formControlName", "sizesText", "placeholder", "XS, S, M, L, XL"], ["type", "text", "formControlName", "weight", "placeholder", "350g"], [1, "field", "toggles"], [1, "toggle"], ["type", "checkbox", "formControlName", "inStock"], ["type", "checkbox", "formControlName", "featured"], [1, "form-error"], [1, "form-actions"], ["type", "button", 1, "btn-outline", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "empty-text"], [1, "table-wrapper"], [1, "data-table"], [1, "thumb"], [3, "src", "alt"], [1, "product-name"], [1, "sizes-cell"], [1, "pill"], [1, "action-cell"], [1, "action-btn", "edit", 3, "click"], [1, "action-btn", "delete", 3, "click"], [1, "thumb-placeholder"]], template: function AdminProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275listener("click", function AdminProductsComponent_Template_button_click_4_listener() {
          return ctx.openForm();
        });
        \u0275\u0275text(5, "+ Add Product");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, AdminProductsComponent_Conditional_6_Template, 56, 5, "div", 3)(7, AdminProductsComponent_Conditional_7_Template, 2, 0, "p", 4)(8, AdminProductsComponent_Conditional_8_Template, 2, 0)(9, AdminProductsComponent_Conditional_9_Template, 23, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.showForm ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.loading ? 7 : ctx.products.length === 0 ? 8 : 9);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DecimalPipe], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--spacing-lg);\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.form-panel[_ngcontent-%COMP%] {\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  padding: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n}\n.form-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  margin-bottom: var(--spacing-md);\n  padding-bottom: var(--spacing-sm);\n  border-bottom: 1px solid var(--color-border);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-sm);\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.field.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field.toggles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: var(--spacing-md);\n  align-items: center;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]), .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid var(--color-border);\n  font-family: var(--font-sans);\n  font-size: 0.9rem;\n  color: var(--color-black);\n  outline: none;\n  transition: border-color var(--transition);\n  background: var(--color-bg);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):focus, .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-black);\n  background: var(--color-white);\n}\n.field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.hint[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n  font-size: 0.65rem;\n}\n.toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  cursor: pointer;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--color-text);\n}\n.toggle[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.form-error[_ngcontent-%COMP%] {\n  margin: var(--spacing-sm) 0;\n  font-size: 0.8rem;\n  color: #c0392b;\n  padding: 0.5rem;\n  border: 1px solid #c0392b;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-sm);\n  justify-content: flex-end;\n  margin-top: var(--spacing-md);\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--spacing-md);\n}\n.loading-text[_ngcontent-%COMP%], .empty-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n  padding: var(--spacing-lg) 0;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 800px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  font-size: 0.85rem;\n  color: var(--color-text);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-bg-alt);\n}\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-black);\n}\n.sizes-cell[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 53px;\n  overflow: hidden;\n  background: var(--color-bg-alt);\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.thumb-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-serif);\n  font-size: 1.2rem;\n  color: var(--color-border);\n}\n.pill[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.2rem 0.5rem;\n  border-radius: 2px;\n  background: var(--color-bg-alt);\n  color: var(--color-text-muted);\n}\n.pill.yes[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.pill.no[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.action-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  white-space: nowrap;\n}\n.action-btn[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.3rem 0.6rem;\n  border: 1px solid var(--color-border);\n  transition: all var(--transition);\n}\n.action-btn.edit[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-black);\n  color: var(--color-black);\n}\n.action-btn.delete[_ngcontent-%COMP%] {\n  color: #c0392b;\n  border-color: #c0392b;\n}\n.action-btn.delete[_ngcontent-%COMP%]:hover {\n  background: #c0392b;\n  color: white;\n}\n/*# sourceMappingURL=admin-products.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProductsComponent, { className: "AdminProductsComponent", filePath: "src\\app\\pages\\admin\\admin-products\\admin-products.component.ts", lineNumber: 136 });
})();
export {
  AdminProductsComponent
};
//# sourceMappingURL=chunk-D6WO5M64.js.map
