import { Routes } from '@angular/router';

import {
  SignInFormComponent,
  SignUpFormComponent,
  SignupUserComponent } from './components';

export const registrationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SignInFormComponent
  },
  {
    path: 'signup',
    component: SignUpFormComponent
  },
  {
    path: 'signupuser',
    component: SignupUserComponent
  }
]