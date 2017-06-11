import { NgModule } from '@angular/core';

import { PaymentModule } from './payment/payment.module';

@NgModule({
  exports: [
    PaymentModule
  ]
})
export class UiModule {}