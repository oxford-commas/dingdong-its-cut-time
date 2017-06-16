import { Component, Input, Output, EventEmitter } from '@angular/core';

import { StripeService, BookingService } from '../../../../services';

@Component({
  selector: 'payment-input',
  template: `<button (click)="openCheckout()">Pay</button>`,
  styleUrls: ['./payment-input.component.css']
})
export class PaymentInputComponent {
  constructor(private stripeService: StripeService, private bookingService: BookingService) {}

  @Input() stylistName: string;
  @Output() handleProcessedPayment = new EventEmitter<any>();
  @Input() bookingId: number;
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
    // console.log('emitting', data, ' from ', this.handleProcessedPayment);
    // this.handleProcessedPayment.emit(data);
    this.bookingService.putHistoryBooking(this.bookingId)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}