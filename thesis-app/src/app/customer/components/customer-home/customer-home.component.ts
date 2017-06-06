import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../../services';
import { LocationService } from '../../../services';
import { StylistService } from '../../../services';
import { BookingService } from '../../../services';

@Component({
  selector: 'customer-home',
  templateUrl: 'customer-home.component.html'
})
export class CustomerHomeComponent implements OnInit {
  constructor(
    private requestService: RequestService,
    private locationService: LocationService,
    private stylistService: StylistService,
    private bookingService: BookingService
  ) {

    // this.customerProfile = requestService.getStylistById(0).subscribe(
    //   res => console.log(res),
    //   err => console.log(err)
    // );
  }

  public isProfileFetched = false;
  public currentLocation: any;
  public customerProfile: any;
  public stylistsCloseToYou: any;

  ngOnInit() {
    // Default location inititialization to sanfrancisco
    this.stylistService.getStylistsInLocation('sanfrancisco')
      .subscribe(data => {
        this.stylistsCloseToYou = data;
      }, err => console.log(err));

    // Fetch the currently logged in user
    // TODO: get id from router params passed down from login navigation
    this.requestService.getStylistById(1)
      .subscribe(
        data => {
          this.customerProfile = data;
          console.log('fetch customer profile with hardcoded id 1: ', this.customerProfile);
        },
        err => console.log(err),
        () => this.isProfileFetched = true
      );

    // instead of using socket.io, check for bookings due on interval
    setInterval(() => this.checkForBookingsDue(4), 2000);
  }


  getLocation() {
    console.log('Clicked!');
    this.currentLocation = this.locationService.getCurrentPosition()
      .subscribe(res =>  {
        console.log(res)
      });
    console.log('Location is:', this.currentLocation);
  }

  checkForBookingsDue(id: number) {
    this.bookingService.fetchDueBookings(id)
      .subscribe(
        data => console.log('fetching dues....', data),
        err => console.log(err)
      );
  }

}