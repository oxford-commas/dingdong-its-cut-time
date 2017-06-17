import { Component, Input, OnInit } from '@angular/core';
import "rxjs/add/operator/takeWhile";
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
    private stateService: StateService,
    private locationService: LocationService
  ) {}

  public stylistProfile;
  public isMapViewInit: boolean = false;
  public lng: number;
  public lat: number;
  private alive: boolean = true;

  ngOnInit() {
    this.stylistProfile = this.stateService.retrieveCustomer();
    this.stylistProfile.markers = [];
    this.adjustMapViewForStylistLocation(this.stylistProfile.billingaddress);
    this.renderMarkers();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  renderMarkers() {
    const bookings = this.stylistProfile.confirmedBookings.concat(this.stylistProfile.pendingBookings);
    bookings.map(marker => {
      this.decorateMarkerCoordinates(marker.location, (lat, lng) => {
        marker.latitude = lat;
        marker.longitude = lng;
        marker.label = {
          color: 'black',
          fontWeight: 'bold',
          text: marker.name
        }
      });
      this.stylistProfile.markers.push(marker);
    });
  }

  decorateMarkerCoordinates(location: string, callback) {
    this.locationService.getCoordinatesFromLocation(location)
      .takeWhile(() => this.alive)
      .subscribe(res => callback(res.lat, res.lng));
  }

  adjustMapViewForStylistLocation(location: string) {
    this.locationService.getCoordinatesFromLocation(location)
      .takeWhile(() => this.alive)
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