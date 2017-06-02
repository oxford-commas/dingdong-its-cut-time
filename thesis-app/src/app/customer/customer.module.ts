import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { UiModule } from '../ui/ui.module';

import { StripeService } from '../services';
import { LocationService } from '../services';
import { StylistService } from '../services';

import {
  CustomerHomeComponent,
  CustomerNavbarComponent,
  CustomerDropDownComponent,
  CloseToYouComponent,
  CustomerMapComponent,
  CustomerMessageComponent,
  CustomerInboxComponent,
  CustomerProfileComponent
  StylistProfileComponent,
  StylistHomeComponent
} from './components';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkYemtun-klcWc0toJ5R7gLtmHuPO32Xk' // TODO: Hide key
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
    CustomerProfileComponent,
    StylistProfileComponent,
    StylistHomeComponent
  ],
  providers: [
    StripeService,
    LocationService,
    StylistService
   ]
})

export class CustomerModule {}