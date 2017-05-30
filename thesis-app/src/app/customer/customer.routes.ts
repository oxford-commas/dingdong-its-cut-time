import { Routes } from '@angular/router';

import {
  CustomerHomeComponent,
  CustomerMessageComponent
 } from './components';

export const customerRoutes: Routes = [
  {
    path: 'home',
    component: CustomerHomeComponent
  },
  {
    path: 'messages',
    component: CustomerMessageComponent
  }
]