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
  private stylesPlaceHolder = [];

  constructor(
    private requestService: RequestService,
    private stateService: StateService,
    private router: Router) {}

  ngOnInit() {
    this.requestService.getStyles()
      .subscribe(
        styles => {
          styles.forEach(style => this.stylesPlaceHolder.push(style));
        }
      )
  }

  handleSignup(form: NgForm) {
    let newStylist = {
      name: form.value.username,
      password: form.value.password,
      email: form.value.email,
      type: 0,
      billingaddress: form.value.address
    }
    let styles = [];
    for (var key in form.value) {
      if (form.value[key] === true) {
        styles.push(parseInt(key));
      }
    }
    console.log(styles)
    this.requestService.postStylist(newStylist)
      .subscribe(
        data => {
          this.requestService.getStylistByName(newStylist.name, newStylist.password)
            .subscribe(
              woo => {
                styles.forEach(style => {
                  this.requestService.postStyleForStylist(style, woo[0].id)
                    .subscribe(data => data);
                });
                if (woo[0].type === 1) {
                  this.stateService.addCustomer(woo[0]);
                  this.router.navigate(['/landing']);
                } else if (woo[0].type === 0) {
                  this.stateService.addCustomer(woo[0]);
                  this.router.navigate(['/landing']);
                } else {
                  this.router.navigate(['/login']);
                }
              }
            );
        }
      );
  }
}