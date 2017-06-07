import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylistHomeComponent, BookingComponent } from './components';
import { CustomerModule } from '../customer/customer.module';
import { RequestService, BookingService } from '../services';

@NgModule({
  imports: [
    CommonModule,
    CustomerModule
  ],
  declarations: [
    StylistHomeComponent,
    BookingComponent
  ],
  providers: [
    RequestService,
    BookingService
  ]
})
export class StylistHomeModule {
}