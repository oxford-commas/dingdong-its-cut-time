import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService, StateService } from '../../../services';

@Component({
  selector: 'signup-stylist',
  templateUrl: './signup-stylist.component.html',
  styleUrls: ['./signup-stylist.component.css']
})
export class SignupStylistComponent {
  private stylesPlaceHolder = ['fade', 'mullet', 'bowl cut', 'fade', 'mullet', 'bowl cut']

  constructor(
    private requestService: RequestService,
    private stateService: StateService,
    private router: Router) {}

  NgOnInit() {

  }

  handleSignup(form: NgForm) {
    let newStylist = {
      name: form.value.username,
      password: form.value.password,
      email: form.value.email,
      type: 1,
      billingaddress: form.value.address,
      styles: [1,2,3,4]
    }
    this.requestService.postStylist(newStylist)
      .subscribe(
        data => {
          this.requestService.getStylistByName(newStylist.name, newStylist.password)
            .subscribe(
              woo => {
                this.stateService.addCustomer(woo[0]);
                this.router.navigate(['/home']);
              }
            )
        }
      )
  }
}