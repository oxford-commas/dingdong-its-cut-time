import { Component, Input } from '@angular/core';

import { StripeService } from '../../../services';

@Component({
  selector: 'customer-profile',
  templateUrl: './customer-profile.component.html'
})
export class CustomerProfileComponent {
  constructor(private _stripeService: StripeService) {
  }
  // @Input() customerProfile: any; // TODO: interface
  @Input() customerProfile: any = {
    name: 'andrew',
    image_url: 'https://qph.ec.quoracdn.net/main-qimg-3b0b70b336bbae35853994ce0aa25013-c',
    longitude: 3,
    latitude: 3,
    payments: ['creditcard1', 'creditcard2']
  }

  public showView: boolean = true;

  public showAccountView() {
    this.showView = true;
  }

  public showPaymentView() {
    this.showView = false;
  }

  public handleDeleteAccount() {
    console.log('TODO: DELETE account');
  }

  public handleSaveChanges() {
    console.log('TODO: PUT the changes');
  }

  public openCheckout() {
    const that = this._stripeService
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sQaWXln9tozJFEdLFrFHgNUU',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log('token: ', token.id);
        that.postToken(token.id);
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2000
    });

  }
}