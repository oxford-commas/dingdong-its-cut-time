import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';

import {
  StylistHomeComponent,
  StylistMapComponent,
} from './components';

import { CustomerModule } from '../customer/customer.module';
import { RequestService, BookingService, LocationService } from '../services';

@NgModule({
  imports: [
    CommonModule,
    CustomerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiVQjsDczrtUuAdadrUB2lFn39QEWK43A'
    }),
  ],
  declarations: [
    StylistHomeComponent,
    StylistMapComponent
  ],
  providers: [
    RequestService,
    BookingService,
    LocationService
  ]
})
export class StylistHomeModule {
}