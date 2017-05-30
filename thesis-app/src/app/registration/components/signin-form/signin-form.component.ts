import { Component } from '@angular/core';

import { IUserInformationData } from '../../interfaces';

@Component({
  selector: 'signin-form',
  template: `
    Login Page
    <div>{{logo}}</div>
    <username-password
      (onInputsChange)="setUserData($event)"
    >
    </username-password>
  `
})
export class SignInFormComponent {
  public logo: string = 'placeholder for logo url';
  private userInformationData: IUserInformationData;

  setUserData(userInput: IUserInformationData) {
    this.userInformationData = userInput;
    console.log(this.userInformationData);
  }
}