import { Component } from '@angular/core';

import { RequestService } from '../../../services';
import { LocationService } from '../../../services';
import { StylistService } from '../../../services';

@Component({
  selector: 'customer-home',
  templateUrl: 'customer-home.component.html'
})
export class CustomerHomeComponent {
  constructor(
    private requestService: RequestService,
    private locationService: LocationService,
    private stylistService: StylistService
  ) {

    // this.customerProfile = requestService.getStylistById(0).subscribe(
    //   res => console.log(res),
    //   err => console.log(err)
    // );

    // Default inititialization to sanfrancisco
    stylistService.getStylistsInLocation('sanfrancisco')
    .subscribe(data => {
      this.stylistsCloseToYou = data;
    }, err => console.log(err));

  }

  public currentLocation: any;
  public customerProfile: any;
  public stylistsCloseToYou: any;

  getLocation() {
    console.log('Clicked!');
    this.currentLocation = this.locationService.getCurrentPosition().subscribe(res => res);
    console.log('Location is:', this.currentLocation);
  }

}