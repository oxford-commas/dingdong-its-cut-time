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
  ) {
    console.log('landing component state initialization: ', this.profile)
  }

  public profile = this.stateService.retrieveCustomer();

  // removeConfirmedBooking(id: number, index: number) {
  //   this.profile.confirmedBookings.splice(index, 1);
  //   this.bookingService.seenConfirmedBooking(id)
  //     .subscribe(
  //       data => console.log(data),
  //       err => console.log(err)
  //     );
  // }

  confirmBooking(id: number, index: number) {
    const booking = this.profile.pendingBookings.splice(index, 1).pop();
    this.profile.confirmedBookings.push(booking);
    this.bookingService.confirmBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }

  deleteBooking(id: number, index: number) {
    this.profile.pendingBookings.splice(index, 1);
    this.bookingService.deleteBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }

  payBooking(id: number, index: number) {
    this.profile.dueBookings.splice(index, 1);
    this.bookingService.deleteBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }

  requestPayment(id: number, index: number) {
    this.profile.dueBookings.splice(index, 1);
    this.bookingService.putDueBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }
}