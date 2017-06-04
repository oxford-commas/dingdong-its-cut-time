import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../../services';
import { LocationService } from '../../../services';
import { StylistService } from '../../../services';
import { StateService } from '../../../services';

@Component({
  selector: 'customer-home',
  templateUrl: 'customer-home.component.html'
})
export class CustomerHomeComponent implements OnInit {
  public isProfileFetched = false;
  public currentLocation: any;
  public customerProfile: any;
  public stylistsCloseToYou: any;
  userProfile: any

  constructor(
    private requestService: RequestService,
    private locationService: LocationService,
    private stylistService: StylistService,
    private stateService: StateService
  ) {

  }

  ngOnInit() {
    this.customerProfile = this.stateService.customerProfile[0];
    this.isProfileFetched = true;
    // // Default location inititialization to sanfrancisco
    this.stylistService.getStylistsInLocation(this.stateService.customerProfile[0].billingaddress)
      .subscribe(data => {
        this.stylistsCloseToYou = data;
      }, err => console.log(err));
  }

  getLocation() {
    console.log('Clicked!');
    this.currentLocation = this.locationService.getCurrentPosition()
      .subscribe(res =>  {
        console.log(res)
      });
    console.log('Location is:', this.currentLocation);
  }

}