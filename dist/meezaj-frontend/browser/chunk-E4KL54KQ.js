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
import {
  AuthService
} from "./chunk-HDDCS2LG.js";
import "./chunk-FJ5G62QP.js";
import {
  Router
} from "./chunk-DNOABDGR.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LIZQVVZX.js";

// src/app/pages/admin/admin-login/admin-login.component.ts
function AdminLoginComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var AdminLoginComponent = class _AdminLoginComponent {
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.loading = false;
    this.error = "";
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    if (this.auth.isLoggedIn) {
      this.router.navigate(["/admin/dashboard"]);
    }
  }
  submit() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.error = "";
    const { username, password } = this.form.value;
    this.auth.login(username, password).subscribe({
      next: () => this.router.navigate(["/admin/dashboard"]),
      error: () => {
        this.error = "Invalid credentials. Please try again.";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function AdminLoginComponent_Factory(t) {
      return new (t || _AdminLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 4, consts: [[1, "login-page"], [1, "login-box"], [1, "login-logo"], [1, "login-sub"], [3, "ngSubmit", "formGroup"], [1, "field"], ["type", "text", "formControlName", "username", "placeholder", "admin", "autocomplete", "username"], ["type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password"], [1, "error-msg"], ["type", "submit", 1, "btn-primary", "submit-btn", 3, "disabled"]], template: function AdminLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "MEEZAJ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "Admin Portal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "form", 4);
        \u0275\u0275listener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_6_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(7, "div", 5)(8, "label");
        \u0275\u0275text(9, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5)(12, "label");
        \u0275\u0275text(13, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, AdminLoginComponent_Conditional_15_Template, 2, 1, "p", 8);
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(15, ctx.error ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Signing in..." : "Sign In", " ");
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--color-bg-alt);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-md);\n}\n.login-box[_ngcontent-%COMP%] {\n  background: var(--color-white);\n  padding: var(--spacing-lg);\n  width: 100%;\n  max-width: 380px;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n  border: 1px solid var(--color-border);\n}\n.login-logo[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 1.8rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  color: var(--color-black);\n  text-align: center;\n}\n.login-sub[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.25em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n  text-align: center;\n  display: block;\n  margin-bottom: var(--spacing-sm);\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--color-text-muted);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  border: 1px solid var(--color-border);\n  font-family: var(--font-sans);\n  font-size: 0.9rem;\n  color: var(--color-black);\n  outline: none;\n  transition: border-color var(--transition);\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-black);\n}\n.error-msg[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #c0392b;\n  text-align: center;\n  padding: 0.5rem;\n  border: 1px solid #c0392b;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 0.5rem;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled:hover {\n  background: var(--color-black);\n  color: var(--color-white);\n}\n/*# sourceMappingURL=admin-login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src\\app\\pages\\admin\\admin-login\\admin-login.component.ts", lineNumber: 39 });
})();
export {
  AdminLoginComponent
};
//# sourceMappingURL=chunk-E4KL54KQ.js.map
