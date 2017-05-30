import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  CustomerHomeComponent,
  CustomerNavbarComponent,
  CustomerDropDownComponent,
  CustomerBookingListComponent,
  CustomerMapComponent,
  CustomerMessageComponent,
  CustomerInboxComponent,
  StylistProfileComponent
} from './components';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    CustomerHomeComponent,
    CustomerNavbarComponent,
    CustomerDropDownComponent,
    CustomerBookingListComponent,
    CustomerMapComponent,
    CustomerMessageComponent,
    CustomerInboxComponent,
    StylistProfileComponent
  ]
})
export class CustomerModule{}