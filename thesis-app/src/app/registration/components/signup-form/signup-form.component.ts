import { Component } from '@angular/core';
import { RequestService } from '../../../services/request.service';

import { IAccountInformation, IUserInformationData, IStylistInformationData, createDefaultUserInformationData } from '../../interfaces/registration-data';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html'
})
export class SignUpFormComponent {

  constructor(private requestService: RequestService) {
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
    console.log('posting ', this.userInformationData);
    this.requestService.postStylist(this.userInformationData)
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      )
  }

  public clearForm() {
    this.userInformationData = {
      ...this.userInformationData,
      stylistInformationData: null
    }
  }

}