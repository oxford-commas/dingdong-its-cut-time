import { Component } from '@angular/core';

import { StateService, BookingService } from '../../../services';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  constructor(
    private stateService: StateService,
    private bookingService: BookingService
  ) {console.log('landing component init: ', this.profile)}

  public profile = this.stateService.retrieveCustomer();

  removeConfirmedBooking(id: number, index: number) {
    this.profile.confirmedBookings.splice(index, 1);
    this.bookingService.seenConfirmedBooking(id)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}