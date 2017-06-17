import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import "rxjs/add/operator/takeWhile";
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

export class CustomerHomeComponent implements OnInit, OnDestroy {
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
  private alive: boolean = true;

  ngOnInit() {
    this.getLocationCoordinates((lat, lng) => this.getLocationFromCoordinates(lat, lng, (location) => this.debounce(this.updateCloseToYou(location))));
    this.searchLocation = this.location || this.currentLocation;
  }

  ngOnDestroy() {
    this.alive = false;
  }

  onSearchLocationChange(): void {
    this.searchLocation = this.location;
    this.debounce(this.updateCloseToYou(this.searchLocation));
  }

  getLocationCoordinates(next) {
    this.locationService.getCurrentPosition(null, null)
      .takeWhile(() => this.alive)
      .subscribe(res =>  {
        this.latitude = res.coords.latitude;
        this.longitude = res.coords.longitude;
        console.log('this.latitude', this.latitude, 'this.longitude', this.longitude);
        next(this.latitude, this.longitude);
      });
  }

  getLocationFromCoordinates(lat, lng, next) {
    this.locationService.getLocationFromCoordinates(lat, lng)
      .takeWhile(() => this.alive)
      .subscribe(location => {
        this.currentLocation = location;
        console.log('curr loc', this.currentLocation);
        next(this.currentLocation);
      }, err => console.log(err));
  }

  updateCloseToYou(location: string) {
    this.stylistService.getStylistsInLocation(location)
      .takeWhile(() => this.alive)
      .subscribe(
        data => this.stylistsCloseToYou = data,
        err => console.log(err)
      );
  }

  debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

}