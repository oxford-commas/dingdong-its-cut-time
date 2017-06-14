import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerHomeComponent } from '../customer-home/customer-home.component';
import { CustomerMessageComponent } from '../customer-message/customer-message.component';
import { CustomerProfileComponent } from '../customer-profile/customer-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CustomerHomeComponent },
  { path: 'messages', component: CustomerMessageComponent },
  { path: 'settings', component: CustomerProfileComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class CustomerDropdownRoutingModule {
}