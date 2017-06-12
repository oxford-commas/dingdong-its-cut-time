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
  userProfile: any;

  constructor(
    private requestService: RequestService,
    private locationService: LocationService,
    private stylistService: StylistService,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.customerProfile = this.stateService.retrieveCustomer();
    this.isProfileFetched = true;
    this.getLocationCoordinates(this.latitude, this.longitude);
    this.getLocationFromCoordinates(this.latitude, this.longitude);
    this.searchLocation = this.currentLocation;
    // this.pinStylistsAtLocation(this.searchLocation);
    this.requestService.getStylistByLocation('sanfrancisco')
      .subscribe(data => this.stylistsCloseToYou = data, err => console.log(err));
  }

  pinStylistsAtLocation(location: any) {
    this.stylistService.getStylistsInLocation(location)
      .subscribe(data => {
        this.stylistsCloseToYou = data;
      }, err => console.log(err));
  }

  onSearchLocationChange(location: string): void {
    this.searchLocation = location;
    this.getStylistsInLocation(this.searchLocation);
  }

  getLocationCoordinates(next) {
    this.locationService.getCurrentPosition(null, null)
      .subscribe(res =>  {
        this.latitude = res.coords.latitude;
        this.longitude = res.coords.longitude;
        console.log('this.latitude', this.latitude, 'this.longitude', this.longitude);
        next(this.latitude, this.longitude);
      });
  }

  getLocationFromCoordinates(lat, lng, next) {
    this.locationService.getLocationFromCoordinates(lat, lng)
      .subscribe(location => {
        this.currentLocation = location;
        console.log('curr loc', this.currentLocation);
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
        data => this.stylistsCloseToYou = data,
        err => console.log(err)
      );
  }

}