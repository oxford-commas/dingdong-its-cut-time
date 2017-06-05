import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

import { RequestService } from '../../../services';

@Component({
  selector: 'signup-stylist',
  templateUrl: './signup-stylist.component.html',
  styleUrls: ['./signup-stylist.component.css']
})
export class SignupStylistComponent {
  private stylesPlaceHolder = ['fade', 'mullet', 'bowl cut', 'fade', 'mullet', 'bowl cut']

  constructor(
    private requestService: RequestService) {}

  handleSignup(form: NgForm) {
    console.log(this.requestService);
    console.log(form.value, 'ran');
  }
}