import {
  BehaviorSubject,
  __spreadProps,
  __spreadValues,
  ɵɵdefineInjectable
} from "./chunk-LIZQVVZX.js";

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  constructor() {
    this.STORAGE_KEY = "meezaj_cart";
    this.itemsSubject = new BehaviorSubject(this.loadFromStorage());
    this.items$ = this.itemsSubject.asObservable();
  }
  get items() {
    return this.itemsSubject.value;
  }
  get count() {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }
  get total() {
    return this.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }
  add(product, size, quantity = 1) {
    const items = [...this.items];
    const idx = items.findIndex((i) => i.product.id === product.id && i.size === size);
    if (idx >= 0) {
      items[idx] = __spreadProps(__spreadValues({}, items[idx]), { quantity: items[idx].quantity + quantity });
    } else {
      items.push({ product, size, quantity });
    }
    this.persist(items);
  }
  updateQuantity(productId, size, quantity) {
    const items = this.items.map((i) => i.product.id === productId && i.size === size ? __spreadProps(__spreadValues({}, i), { quantity }) : i).filter((i) => i.quantity > 0);
    this.persist(items);
  }
  remove(productId, size) {
    this.persist(this.items.filter((i) => !(i.product.id === productId && i.size === size)));
  }
  clear() {
    this.persist([]);
  }
  persist(items) {
    this.itemsSubject.next(items);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
  }
  loadFromStorage() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY) ?? "[]");
    } catch {
      return [];
    }
  }
  static {
    this.\u0275fac = function CartService_Factory(t) {
      return new (t || _CartService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};

export {
  CartService
};
//# sourceMappingURL=chunk-DEKEX3XQ.js.map
