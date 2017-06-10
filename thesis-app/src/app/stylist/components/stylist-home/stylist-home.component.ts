import { Component, Input, OnInit } from '@angular/core';

import {
  RequestService,
  BookingService,
  StateService,
  LocationService
  } from '../../../services/';

@Component({
   selector: 'stylist-home',
   templateUrl: './stylist-home.component.html',
   styleUrls: ['./stylist-home.component.css']
})
export class StylistHomeComponent implements OnInit {
  public stylistLocation: any;
  constructor(
    private requestService: RequestService,
    private bookingService: BookingService,
    private stateService: StateService,
    private locationService: LocationService
  ) {}

  @Input() stylistProfile;
  public isProfileFetched: boolean = false;
  public bookings: any;
  public customerLat: number;
  public customerLng: number;
  public paymentConfirmations: any;

  ngOnInit() {
    this.stylistProfile = this.stateService.retrieveCustomer();

    this.bookingService.fetchBookingsForStylist(this.stylistProfile.id)
      .subscribe(
        data => this.bookings = data,
        err => console.log(err),
        () => this.isProfileFetched = true
      );

    // render the latest bookings
    setInterval(() => this.renderBookings(), 5000);

    // render payment confirmations
    setInterval(() => this.renderPaymentConfirmations() , 5000);
  }

  renderBookings() {
    this.bookingService.fetchBookingsForStylist(this.stylistProfile.id)
      .subscribe(
        data => this.bookings = data,
        err => console.log(err)
      );
  }

  renderPaymentConfirmations() {
    this.bookingService.fetchPurchasedBookings(this.stylistProfile.id)
      .subscribe(
        data => {this.paymentConfirmations = data;console.log(this.paymentConfirmations)},
        err => console.log(err)
      );
  }

  confirmBooking(id: number, index: number) {
    this.bookingService.confirmBooking(id)
      .subscribe(
        result => this.bookings[index].isconfirmed = 1,
        err => console.log(err)
      );
  }

  deleteBooking(id: number, index: number) {
    if (index) this.bookings.splice(index, 1);
    this.bookingService.deleteBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }

  completeBooking(id: number, index: number) {
    this.bookings.splice(index, 1);
    this.bookingService.completeBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }


}