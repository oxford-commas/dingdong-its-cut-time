import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { IUserInformationData } from '../../interfaces';

import { RequestService, StateService } from '../../../services';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html'
})
export class SignInFormComponent {
  public logo: string = 'placeholder for logo url';
  private userInformationData: IUserInformationData;

  constructor(
    private router: Router,
    private requestService: RequestService,
    private stateService: StateService){}

  ngOnInit() {
    console.log(this.requestService, this.stateService)
  }

  setUserData(userInput: IUserInformationData) {
    this.userInformationData = {
      ...this.userInformationData,
      ...userInput
    };
  }

  handleLogin(form: NgForm) {
    this.requestService.getStylistById(1)
      .subscribe(
        data => {
          this.stateService.addCustomer(data);
          this.router.navigate(['/home']);
        }
      )
  }
}