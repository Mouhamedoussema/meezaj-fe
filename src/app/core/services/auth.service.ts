import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly STORAGE_KEY = 'meezaj_admin_creds';
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasStoredCreds());

  isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const creds = btoa(`${username}:${password}`);
    const headers = new HttpHeaders({ Authorization: `Basic ${creds}` });
    return this.http.get(`${environment.apiUrl}/api/auth/verify`, { headers }).pipe(
      tap(() => {
        sessionStorage.setItem(this.STORAGE_KEY, creds);
        this.loggedInSubject.next(true);
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.STORAGE_KEY);
    this.loggedInSubject.next(false);
  }

  getCredentials(): string | null {
    return sessionStorage.getItem(this.STORAGE_KEY);
  }

  get isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }

  private hasStoredCreds(): boolean {
    return !!sessionStorage.getItem(this.STORAGE_KEY);
  }
}
