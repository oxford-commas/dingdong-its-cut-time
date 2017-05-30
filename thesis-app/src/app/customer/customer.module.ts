import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  CustomerHomeComponent,
  CustomerNavbarComponent,
  CustomerDropDownComponent,
  CustomerBookingListComponent,
  CustomerMapComponent,
  CustomerMessageComponent
} from './components';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    CustomerHomeComponent,
    CustomerNavbarComponent,
    CustomerDropDownComponent,
    CustomerBookingListComponent,
    CustomerMapComponent,
    CustomerMessageComponent
  ]
})
export class CustomerModule{}