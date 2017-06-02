import { Routes } from '@angular/router';

import {
  CustomerHomeComponent,
  CustomerMessageComponent,
  CustomerProfileComponent,
  StylistProfileComponent,
  StylistHomeComponent
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
    path: 'stylistProfile/:id',
    component: StylistProfileComponent
  },
  {
    path: 'customerProfile',
    component: CustomerProfileComponent
  },
  {
    path: 'stylistHome',
    component: StylistHomeComponent
  }
]