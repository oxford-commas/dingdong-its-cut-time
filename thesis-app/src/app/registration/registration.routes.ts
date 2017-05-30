import { Routes } from '@angular/router';

import { SignInFormComponent } from './components';
import { SignUpCustomerFormComponent } from './components';
import { SignUpStylistFormComponent } from './components';

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
  },
  {
    path: 'customerSignUp',
    component: SignUpCustomerFormComponent
  },
  {
    path: 'stylistSignUp',
    component: SignUpStylistFormComponent
  }
]