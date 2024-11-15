import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastService = inject(ToastrService);

  form = new FormGroup({
    nome: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    }),
    email: new FormControl<string>('', { 
      nonNullable: true, 
      validators: Validators.required
    }),
    senha: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    })
  })

  onSubmit() {
    this.authService.register({
      nome: this.form.controls.nome.value,
      email: this.form.controls.email.value,
      senha: this.form.controls.senha.value
    })
    .subscribe({
      next: () => {
        this.toastService.success("Usuário cadastrado com sucesso!")
        this.router.navigate(['login']);
      },
      error: () => this.toastService.error("Erro inesperado! Por favor, tente novamente mais tarde")
    })
  }

}
