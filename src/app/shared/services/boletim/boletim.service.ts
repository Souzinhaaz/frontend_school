import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boletim } from '../../interfaces/boletins/boletim.interface';

@Injectable({
  providedIn: 'root'
})
export class BoletimService {

  httpClient = inject(HttpClient);
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
  });

  getBoletins(): Observable<Boletim[]> {
    return this.httpClient.get<Boletim[]>('api/boletins', {headers: this.headers})
  }
}
