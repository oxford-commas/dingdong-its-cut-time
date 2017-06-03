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
  constructor(
    private requestService: RequestService,
    private locationService: LocationService,
    private stylistService: StylistService,
    private stateService: StateService
  ) {

    // this.customerProfile = requestService.getStylistById(0).subscribe(
    //   res => console.log(res),
    //   err => console.log(err)
    // );

    // Default location inititialization to sanfrancisco
    stylistService.getStylistsInLocation('sanfrancisco')
      .subscribe(data => {
        this.stylistsCloseToYou = data;
      }, err => console.log(err));


  }

  ngOnInit() {
    // Fetch the currently logged in user
    // TODO: get id from router params passed down from login navigation
    this.requestService.getStylistById(1)
      .subscribe(
        data => {
          this.stateService.addCustomer(data);
          this.customerProfile = this.stateService.customerProfile[0]
          console.log(this.customerProfile);
        },
        err => console.log(err),
        () => this.isProfileFetched = true);

  }

  public isProfileFetched = false;
  public currentLocation: any;
  public customerProfile: any;
  public stylistsCloseToYou: any;

  getLocation() {
    console.log('Clicked!');
    this.currentLocation = this.locationService.getCurrentPosition()
      .subscribe(res =>  {
        console.log(res)
      });
    console.log('Location is:', this.currentLocation);
  }

}