import { NgModule } from '@angular/core';

import { PaymentInputComponent } from './components';

@NgModule({
  declarations: [
    PaymentInputComponent
  ],
  exports: [
    PaymentInputComponent
  ]
})
export class PaymentModule { }