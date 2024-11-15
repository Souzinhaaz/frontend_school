import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { autorizadoGuard } from './_guard/autorizado.guard';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [autorizadoGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
