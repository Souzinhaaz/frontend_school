import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { autorizadoGuard } from './_guard/autorizado.guard';
import { protegidoGuard } from './_guard/protegido.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [protegidoGuard]
  },
  {
    path: 'turmas',
    loadComponent: () => import('./features/turmas/turmas.component').then(m => m.TurmasComponent),
    canActivate: [protegidoGuard]
  },
  {
    path: 'alunos',
    loadComponent: () => import('./features/alunos/alunos.component').then(m => m.AlunosComponent),
    canActivate: [protegidoGuard]
  },
  {
    path: 'boletins',
    loadComponent: () => import('./features/boletins/boletins.component').then(m => m.BoletinsComponent),
    canActivate: [protegidoGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent),
    canActivate: [autorizadoGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./features/register/register.component').then(m => m.RegisterComponent),
    canActivate: [autorizadoGuard]
  },

];
