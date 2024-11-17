import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TurmaService } from '../../shared/services/turma/turma.service';
import { Turma } from '../../shared/interfaces/turmas/turma.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-turmas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './turmas.component.html',
  styleUrl: './turmas.component.css'
})
export class TurmasComponent implements OnInit {
  turmaService = inject(TurmaService);
  router = inject(Router);
  turmas: Turma[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  ngOnInit(): void {
    this.fetchTurmas();
  }

  fetchTurmas() {
    this.isLoading = true;
    this.turmaService.getTurmas().subscribe({
      next: (data) => {
        this.turmas = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregas as turmas';
        this.isLoading = false;
      }
    })
  }

}
