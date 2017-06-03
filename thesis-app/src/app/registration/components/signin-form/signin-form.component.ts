import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { IUserInformationData } from '../../interfaces';

import { RequestService, StateService } from '../../../services';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html'
})
export class SignInFormComponent {
  constructor(
    private router: Router,
    private requestService: RequestService,
    private stateService: StateService){}

  public logo: string = 'placeholder for logo url';
  private userInformationData: IUserInformationData;

  ngOnInit() {
    console.log(this.requestService, this.stateService)
  }

  setUserData(userInput: IUserInformationData) {
    this.userInformationData = {
      ...this.userInformationData,
      ...userInput
    };
  }

  handleLogin() {
    console.log('TODO: authorize user ', this.userInformationData);
    this.router.navigate(['/home']);
  }
}