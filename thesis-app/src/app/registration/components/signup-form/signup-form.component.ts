import { Component } from '@angular/core';

import { IAccountInformation, IUserInformationData, IStylistInformationData, createDefaultUserInformationData } from '../../interfaces/registration-data';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html'
})
export class SignUpFormComponent {
  constructor() {
    console.log('TODO: make service to GET request to get styling options for dropdown');
  }

  // hardcoded styling data
  public styling: Array<string> = ['hard', 'coded', 'styles'];

  private userInformationData: IUserInformationData = createDefaultUserInformationData();

  public handleAccountInput(accountInformation: IAccountInformation) {
    this.userInformationData = {
      ...this.userInformationData,
      ...accountInformation
    };
  }

  public handleStylistInput(stylistInformationData: IStylistInformationData) {
    this.userInformationData = {
      ...this.userInformationData,
      stylistInformationData
    };
  }

  public handleSignUp() {
    console.log('TODO: make POST request to create new account', this.userInformationData);
  }

  public clearForm() {
    this.userInformationData = {
      ...this.userInformationData,
      stylistInformationData: null
    }
  }

}