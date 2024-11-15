import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';

export const autorizadoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const usuarioEstaLogado = authService.obterLoginStatus();

  if (!usuarioEstaLogado) {
    return router.navigate(['/login'])
  }

  return true;
};
