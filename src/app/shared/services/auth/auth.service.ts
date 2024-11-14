import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../interfaces/auth/user.interface';
import { LoginPayload } from '../../interfaces/auth/login-payload.interface';
import { RegisterPayload } from '../../interfaces/auth/register-payload.interface';
import { LoginResponse } from '../../interfaces/auth/login-response.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient = inject(HttpClient);

  login(payload: LoginPayload) {
    return this.httpClient.post<LoginResponse>('api/auth/login', payload).pipe(
      tap((value) => {
        localStorage.setItem("auth-token", value.token);
        localStorage.setItem("usuario", value.nome);
      })
    );
  }

  register(payload: RegisterPayload) {
    return this.httpClient.post<User>('api/auth/register', payload);
  }

  logoff() {
    localStorage.clear();
  }

  obterLoginStatus = () => !!localStorage.getItem("auth-token");
  
}
