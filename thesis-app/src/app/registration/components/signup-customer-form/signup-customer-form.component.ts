import { Component } from '@angular/core';

import { IUserInformationData } from '../../interfaces';

@Component({
  selector: 'signup-customer-form',
  templateUrl: './signup-customer-form.component.html'
})
export class SignUpCustomerFormComponent {
  private customerInformationData: IUserInformationData;

  public handleCustomerInput(customerAccountInput: IUserInformationData) {
    this.customerInformationData = customerAccountInput;
    console.log('Setting customerInformationData', this.customerInformationData);
  }

  public handleCustomerSignUp() {
    console.log('TODO: POST customer data: ', this.customerInformationData, ' to server');
  }
}