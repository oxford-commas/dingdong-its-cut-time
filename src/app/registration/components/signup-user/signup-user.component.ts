import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RequestService, StateService } from '../../../services';

@Component({
  selector: 'signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent {
  constructor(
    private requestService: RequestService,
    private stateService: StateService,
    private router: Router
  ) {}

  handleSignup(form: NgForm) {
    let newUser = {
      name: form.value.username,
      password: form.value.password,
      email: form.value.email,
      image_url: 'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png',
      type: 1
    }
    this.requestService.postStylist(newUser)
      .subscribe(
        data => {
          console.log('ran');
          this.requestService.getStylistByName(newUser.name, newUser.password)
            .subscribe(
              woo => {
                this.stateService.addCustomer(woo[0]);
                this.router.navigate(['/landing']);
              }
            )
        }
      )
  }
};