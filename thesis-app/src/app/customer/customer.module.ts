import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { UiModule } from '../ui/ui.module';

import {
  StripeService,
  LocationService,
  StylistService,
  DeletionService,
  MessageService,
  StateService,
  StylistStylesService
} from '../services';

import {
  CustomerHomeComponent,
  CustomerNavbarComponent,
  CustomerDropDownComponent,
  CloseToYouComponent,
  CustomerMapComponent,
  CustomerMessageComponent,
  CustomerInboxComponent,
  StylistProfileComponent,
  CustomerProfileComponent,
  ChatHistoryComponent,
  LandingComponent,
  BookingComponent
} from './components';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiVQjsDczrtUuAdadrUB2lFn39QEWK43A'
    }),
    UiModule
  ],
  declarations: [
    CustomerHomeComponent,
    CustomerNavbarComponent,
    CustomerDropDownComponent,
    CloseToYouComponent,
    CustomerMapComponent,
    CustomerMessageComponent,
    CustomerInboxComponent,
    StylistProfileComponent,
    CustomerProfileComponent,
    ChatHistoryComponent,
    LandingComponent,
    BookingComponent
  ],
  providers: [
    StripeService,
    LocationService,
    StylistService,
    DeletionService,
    MessageService,
    StateService,
    StylistStylesService
   ],
 exports: [
   CustomerNavbarComponent,
   BookingComponent
 ]
})

export class CustomerModule {}