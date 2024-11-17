import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AlunoService } from '../../shared/services/aluno/aluno.service';
import { Aluno } from '../../shared/interfaces/alunos/aluno.interface';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {
  alunoService = inject(AlunoService);
  router = inject(Router);
  alunos: Aluno[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  ngOnInit(): void {
    this.fetchAlunos();
  }

  fetchAlunos() {
    this.isLoading = true;
    this.alunoService.getAlunos().subscribe({
      next: (data) => {
        this.alunos = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregas os alunos';
        this.isLoading = false;
      }
    })
  }

}
