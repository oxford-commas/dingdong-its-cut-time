import { Routes } from '@angular/router';

import {
  ErrorFormsComponent,
  SignInFormComponent,
  SignUpFormComponent,
  SignupUserComponent,
  SignupStylistComponent } from './components';

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
  },
  {
    path: 'signupstylist',
    component: SignupStylistComponent
  },
  {
    path: 'error',
    component: ErrorFormsComponent
  }
]