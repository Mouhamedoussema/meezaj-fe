import {
  environment
} from "./chunk-FJ5G62QP.js";
import {
  BehaviorSubject,
  HttpClient,
  HttpHeaders,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-LIZQVVZX.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http) {
    this.http = http;
    this.STORAGE_KEY = "meezaj_admin_creds";
    this.loggedInSubject = new BehaviorSubject(this.hasStoredCreds());
    this.isLoggedIn$ = this.loggedInSubject.asObservable();
  }
  login(username, password) {
    const creds = btoa(`${username}:${password}`);
    const headers = new HttpHeaders({ Authorization: `Basic ${creds}` });
    return this.http.get(`${environment.apiUrl}/api/auth/verify`, { headers }).pipe(tap(() => {
      sessionStorage.setItem(this.STORAGE_KEY, creds);
      this.loggedInSubject.next(true);
    }));
  }
  logout() {
    sessionStorage.removeItem(this.STORAGE_KEY);
    this.loggedInSubject.next(false);
  }
  getCredentials() {
    return sessionStorage.getItem(this.STORAGE_KEY);
  }
  get isLoggedIn() {
    return this.loggedInSubject.value;
  }
  hasStoredCreds() {
    return !!sessionStorage.getItem(this.STORAGE_KEY);
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-HDDCS2LG.js.map
