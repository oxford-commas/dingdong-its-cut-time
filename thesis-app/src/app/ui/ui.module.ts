import { NgModule } from '@angular/core';

import { PaymentModule } from './payment/payment.module';
import { LandingComponent } from './components';

@NgModule({
  declarations: [
    LandingComponent
  ],
  exports: [
    PaymentModule,
    LandingComponent
  ]
})
export class UiModule {}