import { Routes } from '@angular/router';

import { SignInFormComponent } from './components';
import { SignUpFormComponent } from './components';

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
  }
]