import { Component, inject } from '@angular/core';
import { BoletimService } from '../../shared/services/boletim/boletim.service';
import { Router, RouterLink } from '@angular/router';
import { Boletim } from '../../shared/interfaces/boletins/boletim.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boletins',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './boletins.component.html',
  styleUrl: './boletins.component.css'
})
export class BoletinsComponent {
  boletimService = inject(BoletimService);
  router = inject(Router);
  boletins: Boletim[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  ngOnInit(): void {
    this.fetchBoletins();
  }

  fetchBoletins() {
    this.isLoading = true;
    this.boletimService.getBoletins().subscribe({
      next: (data) => {
        this.boletins = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao carregas os boletins';
        this.isLoading = false;
      }
    })
  }
}
