import {
  OrderService
} from "./chunk-YTND4NTI.js";
import "./chunk-FJ5G62QP.js";
import {
  DatePipe,
  DecimalPipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4
} from "./chunk-LIZQVVZX.js";

// src/app/pages/admin/admin-orders/admin-orders.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminOrdersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Loading orders...");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "No orders yet.");
    \u0275\u0275elementEnd();
  }
}
function AdminOrdersComponent_Conditional_8_For_24_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const order_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", s_r4)("selected", order_r2.status === s_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4);
  }
}
function AdminOrdersComponent_Conditional_8_For_24_Conditional_28_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(order_r2.notes);
  }
}
function AdminOrdersComponent_Conditional_8_For_24_Conditional_28_Conditional_9_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.product == null ? null : item_r5.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.size);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xD7 ", item_r5.quantity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 4, item_r5.unitPrice, "1.2-2"), " TND");
  }
}
function AdminOrdersComponent_Conditional_8_For_24_Conditional_28_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275repeaterCreate(4, AdminOrdersComponent_Conditional_8_For_24_Conditional_28_Conditional_9_For_5_Template, 10, 7, "div", 20, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(order_r2.items);
  }
}
function AdminOrdersComponent_Conditional_8_For_24_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 14)(1, "td", 15)(2, "div", 16)(3, "div", 17)(4, "span", 18);
    \u0275\u0275text(5, "Shipping Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminOrdersComponent_Conditional_8_For_24_Conditional_28_Conditional_8_Template, 5, 1, "div", 17)(9, AdminOrdersComponent_Conditional_8_For_24_Conditional_28_Conditional_9_Template, 6, 0, "div", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate4("", order_r2.shippingAddress, ", ", order_r2.city, " ", order_r2.postalCode, ", ", order_r2.country, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(8, order_r2.notes ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(9, (order_r2.items == null ? null : order_r2.items.length) ? 9 : -1);
  }
}
function AdminOrdersComponent_Conditional_8_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 7);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_8_For_24_Template_td_click_1_listener() {
      const order_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggle(order_r2.id));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 8)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "select", 10);
    \u0275\u0275listener("change", function AdminOrdersComponent_Conditional_8_For_24_Template_select_change_19_listener($event) {
      const order_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateStatus(order_r2, $event.target.value));
    });
    \u0275\u0275repeaterCreate(20, AdminOrdersComponent_Conditional_8_For_24_For_21_Template, 2, 3, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 12);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "button", 13);
    \u0275\u0275listener("click", function AdminOrdersComponent_Conditional_8_For_24_Template_button_click_26_listener() {
      const order_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggle(order_r2.id));
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, AdminOrdersComponent_Conditional_8_For_24_Conditional_28_Template, 10, 6, "tr", 14);
  }
  if (rf & 2) {
    let tmp_17_0;
    const order_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("expanded", ctx_r2.expandedId === order_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r2.customerName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r2.customerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r2.customerPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r2.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_17_0 = order_r2.items == null ? null : order_r2.items.length) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 14, order_r2.total, "1.2-2"), " TND");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", order_r2.status);
    \u0275\u0275attribute("data-status", order_r2.status);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.statuses);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 17, order_r2.createdAt, "MMM d"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.expandedId === order_r2.id ? "\u25B2" : "\u25BC", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(28, ctx_r2.expandedId === order_r2.id ? 28 : -1);
  }
}
function AdminOrdersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, AdminOrdersComponent_Conditional_8_For_24_Template, 29, 20, null, null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r2.orders);
  }
}
var ORDER_STATUSES = ["PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"];
var AdminOrdersComponent = class _AdminOrdersComponent {
  constructor(orderService) {
    this.orderService = orderService;
    this.orders = [];
    this.loading = true;
    this.expandedId = null;
    this.statuses = ORDER_STATUSES;
  }
  ngOnInit() {
    this.orderService.getAll().subscribe({
      next: (o) => {
        this.orders = o;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  toggle(id) {
    this.expandedId = this.expandedId === id ? null : id;
  }
  updateStatus(order, status) {
    this.orderService.updateStatus(order.id, status).subscribe((updated) => {
      const idx = this.orders.findIndex((o) => o.id === order.id);
      if (idx >= 0)
        this.orders[idx] = updated;
    });
  }
  static {
    this.\u0275fac = function AdminOrdersComponent_Factory(t) {
      return new (t || _AdminOrdersComponent)(\u0275\u0275directiveInject(OrderService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOrdersComponent, selectors: [["app-admin-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "admin-orders"], [1, "page-header"], [1, "count"], [1, "loading-text"], [1, "empty-text"], [1, "table-wrapper"], [1, "data-table"], [1, "order-id", 3, "click"], [1, "contact-cell"], [1, "amount-cell"], [1, "status-select", 3, "change", "value"], [3, "value", "selected"], [1, "date-cell"], [1, "expand-btn", 3, "click"], [1, "detail-row"], ["colspan", "9"], [1, "order-detail"], [1, "detail-group"], [1, "detail-label"], [1, "items-list"], [1, "order-item-row"]], template: function AdminOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
        \u0275\u0275text(3, "Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, AdminOrdersComponent_Conditional_6_Template, 2, 0, "p", 3)(7, AdminOrdersComponent_Conditional_7_Template, 2, 0)(8, AdminOrdersComponent_Conditional_8_Template, 25, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.orders.length, " total");
        \u0275\u0275advance();
        \u0275\u0275conditional(6, ctx.loading ? 6 : ctx.orders.length === 0 ? 7 : 8);
      }
    }, dependencies: [DecimalPipe, DatePipe], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: var(--spacing-sm);\n  margin-bottom: var(--spacing-lg);\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n  letter-spacing: 0.1em;\n}\n.loading-text[_ngcontent-%COMP%], .empty-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n  padding: var(--spacing-lg) 0;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: var(--color-white);\n  border: 1px solid var(--color-border);\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 900px;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid var(--color-border);\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  font-size: 0.85rem;\n  color: var(--color-text);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--color-bg-alt);\n}\n.data-table[_ngcontent-%COMP%]   tr.expanded[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--color-bg-alt);\n}\n.order-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-black);\n  cursor: pointer;\n}\n.contact-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.contact-cell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 0.75rem;\n  color: var(--color-text-muted);\n}\n.amount-cell[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.date-cell[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.8rem;\n  white-space: nowrap;\n}\n.status-select[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.3rem 0.5rem;\n  border: 1px solid var(--color-border);\n  background: transparent;\n  cursor: pointer;\n  outline: none;\n  transition: border-color var(--transition);\n}\n.status-select[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-black);\n}\n.status-select[data-status=PENDING][_ngcontent-%COMP%] {\n  color: #856404;\n}\n.status-select[data-status=CONFIRMED][_ngcontent-%COMP%] {\n  color: #0c5460;\n}\n.status-select[data-status=SHIPPED][_ngcontent-%COMP%] {\n  color: #004085;\n}\n.status-select[data-status=DELIVERED][_ngcontent-%COMP%] {\n  color: #155724;\n}\n.status-select[data-status=CANCELLED][_ngcontent-%COMP%] {\n  color: #721c24;\n}\n.expand-btn[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--color-text-muted);\n  transition: color var(--transition);\n}\n.expand-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-black);\n}\n.detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #f9f8f6 !important;\n  padding: 0;\n}\n.order-detail[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) 1rem var(--spacing-md);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  display: block;\n  margin-bottom: 0.3rem;\n}\n.detail-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-text);\n}\n.items-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.order-item-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  font-size: 0.85rem;\n  color: var(--color-text);\n}\n.order-item-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-weight: 600;\n  min-width: 120px;\n}\n/*# sourceMappingURL=admin-orders.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOrdersComponent, { className: "AdminOrdersComponent", filePath: "src\\app\\pages\\admin\\admin-orders\\admin-orders.component.ts", lineNumber: 110 });
})();
export {
  AdminOrdersComponent
};
//# sourceMappingURL=chunk-6II6I33I.js.map
