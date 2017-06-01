import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RequestService } from '../../../services/request.service';

import { IAccountInformation, IUserInformationData, IStylistInformationData, createDefaultUserInformationData } from '../../interfaces/registration-data';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html'
})
export class SignUpFormComponent {

  constructor(private requestService: RequestService, private router: Router) {
  }

  // hardcoded styling data
  public styling: Array<string> = ['Fade', 'Perm', 'Hair Coloring', 'Taper Fade', 'Bangs', 'Buzz Cut', 'Pompadour'];

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
        res => {
          console.log('Succesfully posted: ', res);
          this.router.navigate(['/home']);
        },
        err => console.log('Error posting: ', err)
      )
  }

  public clearForm() {
    this.userInformationData = {
      ...this.userInformationData,
      stylistInformationData: null
    }
  }

}