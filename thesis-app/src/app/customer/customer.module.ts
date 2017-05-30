import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from 'angular2-google-maps/core';

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkYemtun-klcWc0toJ5R7gLtmHuPO32Xk' // TODO: Hide key
    })
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

export class CustomerModule {}