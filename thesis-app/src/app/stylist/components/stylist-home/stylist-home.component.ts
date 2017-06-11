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

  ngOnInit() {
    this.stylistProfile = this.stateService.retrieveCustomer();

    this.bookingService.fetchBookingsForStylist(this.stylistProfile.id)
      .subscribe(
        data => this.bookings = data,
        err => console.log(err),
        () => this.isProfileFetched = true
      );
  }
}