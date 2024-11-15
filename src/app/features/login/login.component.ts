import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastService = inject(ToastrService);

  form = new FormGroup({
    email: new FormControl<string>('', { 
      nonNullable: true, 
      validators: [Validators.email, Validators.required]
    }),
    senha: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  })

  onSubmit() {
    this.authService.login({
      email: this.form.controls.email.value,
      senha: this.form.controls.senha.value
    })
    .subscribe({
      next: () => {
        this.toastService.success("Usuário Logado com sucesso!")
        this.router.navigate(['']);
      },
      error: () => this.toastService.error("Credenciais inválidas!")
    })
  }

}
