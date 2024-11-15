import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { autorizadoGuard } from './_guard/autorizado.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [autorizadoGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/register/register.component').then(m => m.RegisterComponent)
  }
];
