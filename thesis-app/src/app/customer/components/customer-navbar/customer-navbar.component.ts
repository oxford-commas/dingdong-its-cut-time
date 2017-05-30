import { Component } from '@angular/core';

@Component({
  selector: 'customer-navbar',
  templateUrl: './customer-navbar.component.html'
})
export class CustomerNavbarComponent {
  constructor() {
    console.log('GET a default map initialization');
    console.log('GET the name of user logged in');
    console.log('GET the google map and populate it with stylist coordinates');
  }

  public logo: string = 'put logo url here';
  public currentCustomer: string = 'hardcoded currentCustomer name';
  public isDropDownHidden: boolean = true;

  public handleStreetAddressChange(streetAddress) {
    console.log('TODO: GET stylist name/coordinates/styling/blurb close to this streetAddress: ', streetAddress);
  }

  public showDropDown() {
    console.log('show dropdown');
  }

}