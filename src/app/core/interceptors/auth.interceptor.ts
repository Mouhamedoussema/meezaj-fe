import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const creds = this.auth.getCredentials();
    if (creds) {
      const cloned = req.clone({ setHeaders: { Authorization: `Basic ${creds}` } });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
