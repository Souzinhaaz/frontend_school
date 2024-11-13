import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../interfaces/auth/user.interface';
import { LoginPayload } from '../../interfaces/auth/login-payload.interface';
import { RegisterPayload } from '../../interfaces/auth/register-payload.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient = inject(HttpClient);

  login(payload: LoginPayload) {
    return this.httpClient.post<User>('api/auth/login', payload);
  }

  register(payload: RegisterPayload) {
    return this.httpClient.post<User>('api/auth/register', payload);
  }
}
