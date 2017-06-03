import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StylistHomeComponent, BookingComponent } from './components';

import { RequestService, BookingService } from '../services';

@NgModule({
  imports: [
    CommonModule
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