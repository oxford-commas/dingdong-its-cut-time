import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

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
  ) {}

  ngOnInit() {
    this.customerProfile = this.stateService.retrieveCustomer();
    this.isProfileFetched = true;
    // instead of using socket.io, check for bookings due on interval
    setInterval(() => this.checkForBookingsDue(this.customerProfile.id), 5000);
    setInterval(() => this.checkForBookingsConfirmed(this.customerProfile.id), 5000);
    this.getLocationCoordinates((lat, lng) => this.getLocationFromCoordinates(lat, lng, (location) => this.getStylistsInLocation(location)));
    this.searchLocation = this.currentLocation;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('line 50 arrived', this.searchLocation);
  //   this.getStylistsInLocation(this.searchLocation);
  // }

  pinStylistsAtLocation(location: any) {
    this.stylistService.getStylistsInLocation(location)
      .subscribe(data => {
        this.stylistsCloseToYou = data;
      }, err => console.log(err));
  }

  onSearchLocationChange(location: string): void {
    this.searchLocation = location;
    console.log('New search location is:', this.searchLocation);
    this.getStylistsInLocation(this.searchLocation);
  }

  getLocationCoordinates(next) {
    this.locationService.getCurrentPosition(null, null)
      .subscribe(res =>  {
        this.latitude = res.coords.latitude;
        this.longitude = res.coords.longitude;
        next(this.latitude, this.longitude);
      });
  }

  getLocationFromCoordinates(lat, lng, next) {
    this.locationService.getLocationFromCoordinates(lat, lng)
      .subscribe(location => {
        this.currentLocation = location;
        next(this.currentLocation);
      }, err => console.log(err));
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

  getStylistsInLocation(location: string) {
    this.stylistService.getStylistsInLocation(location)
      .subscribe(
        data => this.stylistsCloseToYou = data
      , err => console.log(err)
      );
  }

}