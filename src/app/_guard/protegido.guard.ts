import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';

export const protegidoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const usuarioEstaLogado = authService.obterLoginStatus();

  if (!usuarioEstaLogado) {
    return router.navigate(['/login'])
  }

  return true;
};
