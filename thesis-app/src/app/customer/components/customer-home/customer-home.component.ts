import { Component, Input, OnInit } from '@angular/core';

import { CustomerNavbarComponent } from '../customer-navbar/';
import { CustomerMapComponent } from '../customer-map/';

import {
  LocationService,
  StylistService,
  StateService } from '../../../services';

@Component({
  selector: 'customer-home',
  templateUrl: 'customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})

export class CustomerHomeComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private stylistService: StylistService,
    private stateService: StateService
  ) {}

  public currentLocation: any;
  public location: string = this.location || this.currentLocation;
  public stylistsCloseToYou: any;
  public searchLocation: string;
  public latitude: number;
  public longitude: number;

  ngOnInit() {
    this.getLocationCoordinates((lat, lng) => this.getLocationFromCoordinates(lat, lng, (location) => this.updateCloseToYou(location)));
    this.searchLocation = this.location || this.currentLocation;
  }

  onSearchLocationChange(): void {
    this.searchLocation = this.location;
    this.updateCloseToYou(this.searchLocation);
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

  updateCloseToYou(location: string) {
    this.stylistService.getStylistsInLocation(location)
      .subscribe(
        data => this.stylistsCloseToYou = data,
        err => console.log(err)
      );
  }

}