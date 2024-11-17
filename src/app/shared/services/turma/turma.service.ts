import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turma } from '../../interfaces/turmas/turma.interface';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  httpClient = inject(HttpClient);
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
  });

  getTurmas(): Observable<Turma[]> {
    return this.httpClient.get<Turma[]>('api/turmas', {headers: this.headers})
  }
  
}
