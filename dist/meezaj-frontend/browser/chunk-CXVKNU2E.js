import {
  ProductService
} from "./chunk-X4BYX6E2.js";
import {
  OrderService
} from "./chunk-YTND4NTI.js";
import "./chunk-FJ5G62QP.js";
import {
  RouterLink
} from "./chunk-DNOABDGR.js";
import {
  DatePipe,
  DecimalPipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LIZQVVZX.js";

// src/app/pages/admin/admin-dashboard/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminDashboardComponent_Conditional_38_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 14);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 15);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r1.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 6, order_r1.total, "1.2-2"), " TND");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-status", order_r1.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, order_r1.createdAt, "MMM d, y"));
  }
}
function AdminDashboardComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 12)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, AdminDashboardComponent_Conditional_38_For_15_Template, 14, 12, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.recentOrders);
  }
}
function AdminDashboardComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "No orders yet.");
    \u0275\u0275elementEnd();
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor(orderService, productService) {
    this.orderService = orderService;
    this.productService = productService;
    this.orders = [];
    this.products = [];
    this.loading = true;
  }
  ngOnInit() {
    this.orderService.getAll().subscribe((o) => {
      this.orders = o;
      this.loading = false;
    });
    this.productService.getAll().subscribe((p) => {
      this.products = p;
    });
  }
  get pendingCount() {
    return this.orders.filter((o) => o.status === "PENDING").length;
  }
  get totalRevenue() {
    return this.orders.filter((o) => o.status !== "CANCELLED").reduce((sum, o) => sum + (o.total ?? 0), 0);
  }
  get recentOrders() {
    return this.orders.slice(0, 5);
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(t) {
      return new (t || _AdminDashboardComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(ProductService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 8, consts: [[1, "dashboard"], [1, "page-header"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-label"], [1, "stat-value"], ["routerLink", "/admin/orders", 1, "stat-link"], [1, "stat-value", "pending"], ["routerLink", "/admin/products", 1, "stat-link"], [1, "recent-section"], [1, "section-title"], ["routerLink", "/admin/orders"], [1, "data-table"], [1, "order-id"], [1, "status-badge"], [1, "date-cell"], [1, "empty-text"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Dashboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3)(6, "span", 4);
        \u0275\u0275text(7, "Total Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11, "View all \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 3)(13, "span", 4);
        \u0275\u0275text(14, "Pending Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 7);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 6);
        \u0275\u0275text(18, "Manage \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 3)(20, "span", 4);
        \u0275\u0275text(21, "Total Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 5);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 3)(26, "span", 4);
        \u0275\u0275text(27, "Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 5);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "a", 8);
        \u0275\u0275text(31, "Manage \u2192");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 9)(33, "div", 10)(34, "h2");
        \u0275\u0275text(35, "Recent Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "a", 11);
        \u0275\u0275text(37, "View all");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, AdminDashboardComponent_Conditional_38_Template, 16, 0, "table", 12)(39, AdminDashboardComponent_Conditional_39_Template, 2, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.orders.length);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.pendingCount);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(24, 5, ctx.totalRevenue, "1.2-2"), " TND");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.products.length);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(38, ctx.recentOrders.length ? 38 : !ctx.loading ? 39 : -1);
      }
    }, dependencies: [RouterLink, DecimalPipe, DatePipe], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n}\n@media (max-width: 900px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  padding: var(--spacing-md);\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-family: var(--font-serif);\n  color: var(--color-black);\n  line-height: 1;\n}\n.stat-value.pending[_ngcontent-%COMP%] {\n  color: #c0392b;\n}\n.stat-link[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.05em;\n  transition: color var(--transition);\n  margin-top: auto;\n  padding-top: 0.5rem;\n}\n.stat-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-black);\n}\n.recent-section[_ngcontent-%COMP%] {\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n  padding: var(--spacing-md);\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-md);\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-family: var(--font-sans);\n  font-weight: 700;\n  letter-spacing: 0.05em;\n}\n.section-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.05em;\n  transition: color var(--transition);\n}\n.section-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-black);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-size: 0.85rem;\n  color: var(--color-text);\n  border-bottom: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-bg-alt);\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-black);\n}\n.date-cell[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8rem;\n}\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.5rem;\n  border-radius: 2px;\n}\n.status-badge[data-status=PENDING][_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge[data-status=CONFIRMED][_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.status-badge[data-status=SHIPPED][_ngcontent-%COMP%] {\n  background: #cce5ff;\n  color: #004085;\n}\n.status-badge[data-status=DELIVERED][_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge[data-status=CANCELLED][_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n  text-align: center;\n  padding: var(--spacing-md) 0;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\pages\\admin\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 77 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-CXVKNU2E.js.map
