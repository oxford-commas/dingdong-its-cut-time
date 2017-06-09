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
  constructor(
    private requestService: RequestService,
    private bookingService: BookingService,
    private stateService: StateService,
    private locationService: LocationService
  ) {}

  public stylistProfile;
  public isProfileFetched: boolean = false;
  public isMapViewInit: boolean = false;
  public bookings: any;
  public customerLat: number;
  public customerLng: number;
  public lng: number;
  public lat: number;

  ngOnInit() {
    this.stylistProfile = this.stateService.retrieveCustomer();
    this.stylistProfile.markers = [];
    this.adjustMapViewForStylistLocation(this.stylistProfile.billingaddress);
    this.bookingService.fetchBookingsForStylist(this.stylistProfile.id)
      .subscribe(
        data => {
          this.bookings = data;
          this.bookings.map(marker => {
            this.decorateMarkerCoordinates(marker.location, (lat, lng) => {
              marker.latitude = lat;
              marker.longitude = lng;
              marker.label = {
                color: 'black',
                fontWeight: 'bold',
                text: marker.customer
              }
            });
            this.stylistProfile.markers.push(marker);
          });
          this.stylistProfile = this.stateService.retrieveCustomer();
        },
        err => console.log(err),
        () => this.isProfileFetched = true
      );
  }

  confirmBooking(id: number, index: number) {
    this.bookingService.confirmBooking(id)
      .subscribe(
        result => console.log(result),
        err => console.log(err)
      );
  }

  deleteBooking(id: number, index: number) {
    this.bookings.splice(index, 1);
    this.stylistProfile.markers.splice(index, 1);
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

  decorateMarkerCoordinates(location: string, callback) {
    this.locationService.getCoordinatesFromLocation(location)
      .subscribe(res => {
        this.customerLat = res.lat;
        this.customerLng = res.lng;
        callback(this.customerLat, this.customerLng);
      });
  }

  adjustMapViewForStylistLocation(location: string) {
    this.locationService.getCoordinatesFromLocation(location)
      .subscribe(res =>
        this.stylistProfile.currentLocation = {
          lat: res.lat,
          lng: res.lng
        },
        err => console.log(err),
        () => this.isMapViewInit = true
      );
  }

}