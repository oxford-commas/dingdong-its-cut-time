import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup-stylist',
  templateUrl: './signup-stylist.component.html',
  styleUrls: ['./signup-stylist.component.css']
})
export class SignupStylistComponent {
  constructor() {}

  handleSignup(form: NgForm) {
    console.log(form.value, 'ran');
  }
}