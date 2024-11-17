import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAuth } from '../../interfaces/auth/auth.interface';
import { LoginPayload } from '../../interfaces/auth/login-payload.interface';
import { RegisterPayload } from '../../interfaces/auth/register-payload.interface';
import { LoginResponse } from '../../interfaces/auth/login-response.interface';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient = inject(HttpClient);

  private isLoggedInSubject: BehaviorSubject<boolean>;
  isLoggedIn$: Observable<boolean>;

  constructor() {
    const isLoggedIn = this.obterLoginStatus();
    this.isLoggedInSubject = new BehaviorSubject<boolean>(isLoggedIn);
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }

  login(payload: LoginPayload): Observable<any> {
    return this.httpClient.post<LoginResponse>('api/auth/login', payload).pipe(
      tap((value) => {
        localStorage.setItem("auth-token", value.token);
        localStorage.setItem("usuario", value.nome);
        this.isLoggedInSubject.next(true);
      })
    );
  }

  register(payload: RegisterPayload) {
    return this.httpClient.post<IAuth>('api/auth/register', payload);
  }

  logout() {
    localStorage.clear();
    this.isLoggedInSubject.next(false);
  }

  obterLoginStatus = () => !!localStorage.getItem("auth-token");

  updateLoginStatus() {
    const status = this.obterLoginStatus();
    this.isLoggedInSubject.next(status);
  }
}
