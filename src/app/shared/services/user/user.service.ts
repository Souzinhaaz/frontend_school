import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuth } from '../../interfaces/auth/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient = inject(HttpClient);
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
  });
  
  getUsers(): Observable<IAuth[]> {
    return this.httpClient.get<IAuth[]>('api/user', {headers: this.headers})
  }

  getUser(id: number): Observable<IAuth> {
    return this.httpClient.get<IAuth>(`api/user/${id}`, {headers: this.headers})
  }

  updateUser(payload: IAuth): Observable<IAuth> {
    return this.httpClient.put<IAuth>(`api/user`, payload, {headers: this.headers})
  }
  
}
