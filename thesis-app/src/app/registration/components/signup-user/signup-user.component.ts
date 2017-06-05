import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RequestService, StateService } from '../../../services';

@Component({
  selector: 'signup-user',
  templateUrl: './signup-user.component.html'
})
export class SignupUserComponent {
  constructor() {}

  handleSignup(form: NgForm) {
    console.log('ran', form.value);
    let newUser = {
      name: form.value.username,
      password: form.value.password,
      email: form.value.email,
      type: 1
    }
  }
}