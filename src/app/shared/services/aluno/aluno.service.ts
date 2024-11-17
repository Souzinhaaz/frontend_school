import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../../interfaces/alunos/aluno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  httpClient = inject(HttpClient);
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
  });

  getAlunos(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>('api/alunos', {headers: this.headers})
  }

}
