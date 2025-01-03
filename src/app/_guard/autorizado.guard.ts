import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';

export const autorizadoGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.obterLoginStatus()) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
