import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // authService = inject(AuthService);
  
  form = new FormGroup({
    email: new FormControl<string>('', { 
      nonNullable: true, 
      validators: Validators.required
    }),
    senha: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    })
  })

  // onSubmit() {
  //   this.authService.login({
  //     email: this.form.controls.email.value,
  //     senha: this.form.controls.senha.value
  //   })
  //   .subscribe(() => {
  //     alert("Sucesso!");
  //   })
  // }

}
