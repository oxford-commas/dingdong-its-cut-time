import { Routes } from '@angular/router';

import {
  CustomerHomeComponent,
  CustomerMessageComponent,
  StylistProfileComponent
 } from './components';

export const customerRoutes: Routes = [
  {
    path: 'home',
    component: CustomerHomeComponent
  },
  {
    path: 'messages',
    component: CustomerMessageComponent
  },
  {
    path: 'stylistProfile',
    component: StylistProfileComponent
  }
]