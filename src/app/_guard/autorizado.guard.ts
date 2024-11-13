import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const autorizadoGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  return router.parseUrl("/login");
};
