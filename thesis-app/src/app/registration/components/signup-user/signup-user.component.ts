import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RequestService, StateService } from '../../../services';

@Component({
  selector: 'signup-user',
  templateUrl: './signup-user.component.html'
})
export class SignupUserComponent {
  constructor(
    private requestService: RequestService,
    private stateService: StateService
  ) {}

  ngOnInit() {}

  handleSignup(form: NgForm) {
    console.log('ran', form.value);
    let newUser = {
      name: form.value.username,
      password: form.value.password,
      email: form.value.email,
      type: 1
    }
    this.requestService.postStylist(newUser)
      .subscribe(
        data => {
          console.log(data, 'data')
          // on the response object set the state
          // this.stateService.addCustomer(data);
          // then navigate to home based on the customer id
        }
      )
  }
}

