import { Routes } from '@angular/router';

import {
  CustomerHomeComponent,
  CustomerMessageComponent,
  StylistProfileComponent,
  CustomerProfileComponent,
  CloseToYouComponent
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
  },
  {
    path: 'customerProfile',
    component: CustomerProfileComponent
  },
  {
    path: 'closeToYou',
    component: CloseToYouComponent
  }
]