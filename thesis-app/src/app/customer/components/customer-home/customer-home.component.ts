import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { CustomerNavbarComponent } from '../customer-navbar/';
import { CustomerMapComponent } from '../customer-map/';

import { RequestService } from '../../../services';
import { LocationService } from '../../../services';
import { StylistService } from '../../../services';
import { StateService } from '../../../services';

@Component({
  selector: 'customer-home',
  templateUrl: 'customer-home.component.html',
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
  userProfile: any

  constructor(
    private requestService: RequestService,
    private locationService: LocationService,
    private stylistService: StylistService,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.customerProfile = this.stateService.customerProfile[0];
    this.isProfileFetched = true;
    this.getLocationCoordinates(this.latitude, this.longitude);
    this.getLocationFromCoordinates(this.latitude, this.longitude);
    this.getStylistsAtLocation(this.currentLocation);
  }

  ngOnChanges() {
    this.getStylistsAtLocation(this.searchLocation);
    this.getLocationCoordinates(this.latitude, this.longitude);
  }

  getStylistsAtLocation(location: any) {
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
    console.log('Location is:', this.currentLocation);
  }

  getLocationFromCoordinates(lat, lng) {
    this.locationService.getLocationFromCoordinates(lat, lng)
      .subscribe(res => {
        console.log(res);
        this.currentLocation = res;
      });
    console.log('Current location is:', this.currentLocation);
  }

}