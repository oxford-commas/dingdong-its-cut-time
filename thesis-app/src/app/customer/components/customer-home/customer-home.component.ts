import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { CustomerNavbarComponent } from '../customer-navbar/';
import { CustomerMapComponent } from '../customer-map/';

import { RequestService,
       LocationService,
       StylistService,
       BookingService,
       StateService } from '../../../services';

@Component({
  selector: 'customer-home',
  templateUrl: 'customer-home.component.html',
  styleUrls: ['./customer-home.component.css'],
  providers: [LocationService]
})

export class CustomerHomeComponent implements OnInit {
  public isProfileFetched = false;
  public currentLocation: any;
  public customerProfile: any;
  public stylistsCloseToYou: any;
  public searchLocation: string;
  public latitude: number;
  public longitude: number;
  public bookingsDue: any;
  public bookingsConfirmed: any;
  userProfile: any;

  constructor(
    private requestService: RequestService,
    private locationService: LocationService,
    private stylistService: StylistService,
    private bookingService: BookingService,
    private stateService: StateService
  ) {
    this.getLocationCoordinates(this.latitude, this.longitude);
  }

  ngOnInit() {
    this.customerProfile = this.stateService.retrieveCustomer();
    this.isProfileFetched = true;
    this.getLocationCoordinates(this.latitude, this.longitude);
    this.getLocationFromCoordinates(this.latitude, this.longitude);
    this.searchLocation = this.currentLocation;
    // this.pinStylistsAtLocation(this.searchLocation);
    // instead of using socket.io, check for bookings due on interval
    setInterval(() => this.checkForBookingsDue(this.customerProfile.id), 5000);
    setInterval(() => this.checkForBookingsConfirmed(this.customerProfile.id), 5000);
    this.requestService.getStylistByLocation('sanfrancisco')
      .subscribe(data => this.stylistsCloseToYou = data, err => console.log(err));
  }

  pinStylistsAtLocation(location: any) {
    this.stylistService.getStylistsInLocation(this.currentLocation)
      .subscribe(data => {
        this.stylistsCloseToYou = data;
      }, err => console.log(err));
  }

  onSearchLocationChange(location: string): void {
    this.searchLocation = location;
    console.log('New search location is:', this.searchLocation);
  }

  getLocationCoordinates(lat, lng) {
    this.locationService.getCurrentPosition(lat, lng)
      .subscribe(res =>  {
        console.log(res);
        this.currentLocation = res;
      });
  }

  getLocationFromCoordinates(lat, lng) {
    this.locationService.getLocationFromCoordinates(lat, lng)
      .subscribe(res => {
        console.log(res);
        this.currentLocation = res;
      });
  }

  checkForBookingsDue(id: number) {
    this.bookingService.fetchDueBookings(id)
      .subscribe(
        data => {
          console.log('fetching dues....', data);
          this.bookingsDue = data;
        },
        err => {
          console.log(err);
        }
      );
  }

  checkForBookingsConfirmed(id: number) {
    this.bookingService.fetchConfirmedBookings(id)
      .subscribe(
        data => {
          this.bookingsConfirmed = data;
          console.log('fetching confirmed', data);
        },
        err => {
          console.log(err);
        }
      );
  }

  removeConfirmedBooking(id, index) {
    console.log('hey',id, index);
    this.bookingsConfirmed.splice(index, 1);
    this.bookingService.seenConfirmedBooking(id)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}



