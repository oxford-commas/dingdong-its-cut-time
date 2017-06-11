import { Component } from '@angular/core';

import { StateService } from '../../../services';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  constructor(private stateService: StateService) {}

  public profile = this.stateService.retrieveCustomer();
  public confirmedBookings = this.profile.confirmedBookings;
  public dueBookings = this.profile.dueBookings;
  public messages = this.profile.messages;

}