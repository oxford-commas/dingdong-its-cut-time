import { Component, Input, Output, EventEmitter } from '@angular/core';

import { StripeService } from '../../../../services';

@Component({
  selector: 'payment-input',
  template: `
    <div
      class="glyphicon glyphicon-usd"
      (click)="openCheckout()"
    >
      <span>{{this.stylistName}}</span>
    </div>`,
  styleUrls: ['./payment-input.component.css']
})
export class PaymentInputComponent {
  constructor(private stripeService: StripeService) {}

  @Input() stylistName: string;
  @Output() handleProcessedPayment = new EventEmitter<any>();
  public data: any;

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sQaWXln9tozJFEdLFrFHgNUU',
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.stripeService.postToken(token.id)
          .subscribe(
            data => this.emitPayment(data),
            err => console.log(err)
          );
      },
      name: 'It\'s Cut Time',
      image: 'https://images.vexels.com/media/users/3/142424/isolated/lists/06653acc92d56535056c9ec4d6036ecf-scissors-haircut-blades.png'
    });
    handler.open({
      description: `To: ${this.stylistName}`,
      amount: 2000
    });
  }

  emitPayment(data) {
    this.handleProcessedPayment.emit(data);
  }
}