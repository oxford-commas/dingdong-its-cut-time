import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { IUserInformationData } from '../../interfaces';

import { RequestService, StateService } from '../../../services';

@Component({
  selector: 'signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
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
    this.requestService.getStylistByName(form.value.username, form.value.password)
      .subscribe(
        data => {
          if (data[0].type === 1) {
            this.stateService.addCustomer(data[0]);
            this.router.navigate(['/landing']);
          } else if (data[0].type === 0) {
            this.stateService.addCustomer(data[0]);
            this.router.navigate(['/stylisthome']);
          } else {
            this.router.navigate(['/login']);
          }
        }
      )
  }
}