import { Component } from '@angular/core';

// import { IStylistInformationData } from '../../interfaces';

@Component({
  selector: 'signup-stylist-form',
  templateUrl: './signup-stylist-form.component.html'
})
export class SignUpStylistFormComponent {
  constructor() {
    console.log('TODO: make GET request to get styling options for dropdown');
  }

  private stylistInformationData: any = {}; // change to interface

  public handleAccountInput(stylistAccountInput) {
    this.stylistInformationData.username = stylistAccountInput.username;
    this.stylistInformationData.password = stylistAccountInput.password;
  }

  public handleServiceLocationChange(serviceLocation) {
    this.stylistInformationData.serviceLocation = serviceLocation;
  }

  public handleGenderChange(gender) {
    this.stylistInformationData.gender = gender;
  }

  public handlePersonalUrlChange(personalUrl) {
    this.stylistInformationData.personalUrl = personalUrl;
  }

  public handleStylistSignUp() {
    console.log('TODO: make POST request to create stylist', this.stylistInformationData);
  }
}