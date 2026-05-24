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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-LIZQVVZX.js";

// src/app/components/product-card/product-card.component.ts
var _c0 = (a0) => ["/product", a0];
function ProductCardComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.product.imageUrls[1], \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
  }
}
function ProductCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
    \u0275\u0275template(1, ProductCardComponent_Conditional_2_Conditional_1_Template, 1, 2, "img", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.product.imageUrls[0], \u0275\u0275sanitizeUrl)("alt", ctx_r0.product.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.product.imageUrls.length > 1 ? 1 : -1);
  }
}
function ProductCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.product.name[0]);
  }
}
function ProductCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "Sold Out");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "Featured");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r2);
  }
}
function ProductCardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, ProductCardComponent_Conditional_12_For_2_Template, 2, 1, "span", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.product.availableSizes);
  }
}
var ProductCardComponent = class _ProductCardComponent {
  static {
    this.\u0275fac = function ProductCardComponent_Factory(t) {
      return new (t || _ProductCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 13, consts: [[1, "card", 3, "routerLink"], [1, "card-image"], [1, "badge-soldout"], [1, "badge-featured"], [1, "card-info"], [1, "card-name"], [1, "card-price"], [1, "card-sizes"], ["loading", "lazy", 3, "src", "alt"], ["loading", "lazy", 1, "img-hover", 3, "src", "alt"], [1, "img-placeholder"], [1, "size-dot"]], template: function ProductCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "article", 0)(1, "div", 1);
        \u0275\u0275template(2, ProductCardComponent_Conditional_2_Template, 2, 3)(3, ProductCardComponent_Conditional_3_Template, 3, 1)(4, ProductCardComponent_Conditional_4_Template, 2, 0, "span", 2)(5, ProductCardComponent_Conditional_5_Template, 2, 0, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "h3", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, ProductCardComponent_Conditional_12_Template, 3, 0, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, ctx.product.id));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(2, (ctx.product.imageUrls == null ? null : ctx.product.imageUrls.length) ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(4, !ctx.product.inStock ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.product.featured && ctx.product.inStock ? 5 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.product.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(11, 8, ctx.product.price, "1.2-2"), " ", ctx.product.currency, "");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(12, (ctx.product.availableSizes == null ? null : ctx.product.availableSizes.length) ? 12 : -1);
      }
    }, dependencies: [RouterLink, DecimalPipe], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n}\n.card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child {\n  opacity: 0;\n}\n.card[_ngcontent-%COMP%]:hover   .img-hover[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n.card-image[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 3/4;\n  overflow: hidden;\n  background: var(--color-bg-alt);\n  margin-bottom: var(--spacing-sm);\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: opacity var(--transition);\n}\n.card-image[_ngcontent-%COMP%]   .img-hover[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.img-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--color-bg-alt);\n}\n.img-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 4rem;\n  color: var(--color-border);\n  text-transform: uppercase;\n}\n.badge-soldout[_ngcontent-%COMP%], .badge-featured[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--spacing-sm);\n  left: var(--spacing-sm);\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  padding: 0.3rem 0.6rem;\n}\n.badge-soldout[_ngcontent-%COMP%] {\n  background: var(--color-black);\n  color: var(--color-white);\n}\n.badge-featured[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-black);\n  border: 1px solid var(--color-black);\n}\n.card-name[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 1rem;\n  font-weight: 400;\n  color: var(--color-black);\n  margin-bottom: 0.25rem;\n}\n.card-price[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n  margin-bottom: 0.5rem;\n}\n.card-sizes[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n}\n.size-dot[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: var(--color-text-muted);\n}\n/*# sourceMappingURL=product-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src\\app\\components\\product-card\\product-card.component.ts", lineNumber: 45 });
})();

export {
  ProductCardComponent
};
//# sourceMappingURL=chunk-PB7STGZZ.js.map
