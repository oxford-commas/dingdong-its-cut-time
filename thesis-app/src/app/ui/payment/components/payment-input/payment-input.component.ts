import { Component, Input } from '@angular/core';

import { StripeService } from '../../../../services';

@Component({
  selector: 'payment-input',
  template: `<button (click)="openCheckout()">Purchase</button>`
})
export class PaymentInputComponent {
  constructor(private stripeService: StripeService) {}

  @Input() customerName: string;

  public openCheckout() {
    const stripeService = this.stripeService;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sQaWXln9tozJFEdLFrFHgNUU',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        stripeService.postToken(token.id);
      }
    });

    handler.open({
      name: 'Ding Dong It\'s Cut Time',
      description: `Payment method for: ${this.customerName}`,
      amount: 2000
    });

  }
}