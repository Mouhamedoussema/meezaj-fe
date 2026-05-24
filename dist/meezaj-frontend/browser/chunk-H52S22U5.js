import {
  AuthService
} from "./chunk-HDDCS2LG.js";
import "./chunk-FJ5G62QP.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-DNOABDGR.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-LIZQVVZX.js";

// src/app/pages/admin/admin-layout/admin-layout.component.ts
var AdminLayoutComponent = class _AdminLayoutComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/admin/login"]);
  }
  static {
    this.\u0275fac = function AdminLayoutComponent_Factory(t) {
      return new (t || _AdminLayoutComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 0, consts: [[1, "admin-shell"], [1, "sidebar"], [1, "sidebar-logo"], [1, "sidebar-nav"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/products", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/orders", "routerLinkActive", "active", 1, "nav-item"], [1, "sidebar-footer"], ["routerLink", "/", 1, "nav-item"], [1, "logout-btn", 3, "click"], [1, "admin-main"]], template: function AdminLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
        \u0275\u0275text(3, "MEEZAJ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 3)(5, "a", 4)(6, "span");
        \u0275\u0275text(7, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "a", 5)(9, "span");
        \u0275\u0275text(10, "Products");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "a", 6)(12, "span");
        \u0275\u0275text(13, "Orders");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 7)(15, "a", 8);
        \u0275\u0275text(16, "\u2190 Storefront");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 9);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_17_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(18, "Sign Out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "main", 10);
        \u0275\u0275element(20, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.admin-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  min-height: 100vh;\n}\n@media (max-width: 768px) {\n  .admin-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.sidebar[_ngcontent-%COMP%] {\n  background: var(--color-black);\n  color: var(--color-white);\n  display: flex;\n  flex-direction: column;\n  padding: var(--spacing-md);\n  position: sticky;\n  top: 0;\n  height: 100vh;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: auto;\n    position: static;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--spacing-sm);\n    padding: var(--spacing-sm) var(--spacing-md);\n  }\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 1.2rem;\n  letter-spacing: 0.15em;\n  margin-bottom: var(--spacing-lg);\n}\n@media (max-width: 768px) {\n  .sidebar-logo[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  flex: 1;\n}\n@media (max-width: 768px) {\n  .sidebar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex: unset;\n    gap: var(--spacing-sm);\n  }\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.65rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.5);\n  transition: color var(--transition), background var(--transition);\n  border-radius: 2px;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  color: var(--color-white);\n  background: rgba(255, 255, 255, 0.05);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  color: var(--color-white);\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  padding-top: var(--spacing-sm);\n  margin-top: auto;\n}\n@media (max-width: 768px) {\n  .sidebar-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.logout-btn[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.4);\n  text-align: left;\n  padding: 0.4rem 0.75rem;\n  transition: color var(--transition);\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-white);\n}\n.admin-main[_ngcontent-%COMP%] {\n  background: var(--color-bg);\n  padding: var(--spacing-lg);\n  overflow-y: auto;\n}\n@media (max-width: 768px) {\n  .admin-main[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\pages\\admin\\admin-layout\\admin-layout.component.ts", lineNumber: 36 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-H52S22U5.js.map
