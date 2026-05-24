import {
  environment
} from "./chunk-FJ5G62QP.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-LIZQVVZX.js";

// src/app/core/services/product.service.ts
var ProductService = class _ProductService {
  constructor(http) {
    this.http = http;
    this.url = `${environment.apiUrl}/api/products`;
  }
  getAll() {
    return this.http.get(this.url);
  }
  getById(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  getFeatured() {
    return this.http.get(`${this.url}/featured`);
  }
  create(product) {
    return this.http.post(this.url, product);
  }
  update(id, product) {
    return this.http.put(`${this.url}/${id}`, product);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  static {
    this.\u0275fac = function ProductService_Factory(t) {
      return new (t || _ProductService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProductService
};
//# sourceMappingURL=chunk-X4BYX6E2.js.map
