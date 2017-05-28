import { Routes } from '@angular/router';

import { SignInFormComponent } from './components';

export const registrationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SignInFormComponent,
    children: [
      // insert children routes eg. ...childrenRoute
    ]
  }
]