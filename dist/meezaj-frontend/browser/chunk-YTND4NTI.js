import {
  environment
} from "./chunk-FJ5G62QP.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-LIZQVVZX.js";

// src/app/core/services/order.service.ts
var OrderService = class _OrderService {
  constructor(http) {
    this.http = http;
    this.url = `${environment.apiUrl}/api/orders`;
  }
  create(order) {
    return this.http.post(this.url, order);
  }
  getAll() {
    return this.http.get(this.url);
  }
  getById(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateStatus(id, status) {
    return this.http.patch(`${this.url}/${id}/status`, { status });
  }
  static {
    this.\u0275fac = function OrderService_Factory(t) {
      return new (t || _OrderService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
  }
};

export {
  OrderService
};
//# sourceMappingURL=chunk-YTND4NTI.js.map
