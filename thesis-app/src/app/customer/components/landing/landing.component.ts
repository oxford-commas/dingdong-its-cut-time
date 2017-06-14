import { Component } from '@angular/core';

import { StateService, BookingService } from '../../../services';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(
    private stateService: StateService,
    private bookingService: BookingService
  ) {
    console.log('landing component state initialization: ', this.profile)
  }

  public profile = this.stateService.retrieveCustomer();

  acceptBooking(id: number, index: number) {
    const booking = this.profile.pendingBookings.splice(index, 1).pop();
    this.profile.confirmedBookings.push(booking);
    this.bookingService.confirmBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }

  declineBooking(id: number, index: number) {
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

  completeBooking(id: number, index: number) {
    const confirmedBooking = this.profile.confirmedBookings.splice(index, 1).pop();
    this.profile.dueBookings.push(confirmedBooking);
    this.bookingService.putCompleteBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
    this.bookingService.putDueBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }

  cancelBooking(id: number, index: number) {
    const confirmedBooking = this.profile.confirmedBookings.splice(index, 1).pop();
    this.profile.pendingBookings.push(confirmedBooking);
    this.bookingService.cancelConfirmedBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }

  cancelPayment(id: number, index: number) {
    const dueBooking = this.profile.dueBookings.splice(index, 1).pop();
    this.profile.confirmedBookings.push(dueBooking);
    this.bookingService.putCancelPayment(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }
}