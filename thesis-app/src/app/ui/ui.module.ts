import { NgModule } from '@angular/core';

import { PaymentModule } from './payment/payment.module';

@NgModule({
  imports: [
    PaymentModule
  ],
  exports: [
    PaymentModule
  ]
})
export class UiModule { }