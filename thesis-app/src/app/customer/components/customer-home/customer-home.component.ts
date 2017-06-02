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

    stylistService.getStylistsInLocation('sanfrancisco')
    .subscribe(data => {
      this.stylistsCloseToYou = data;
      console.log('setting value ...', this.stylistsCloseToYou);
    }, err => console.log(err));

  }

  public currentLocation: any;
  public customerProfile: any; //TODO: interface
  public stylistsCloseToYou: any;
  //  = [{
  //   name: 'Andrew',
  //   blurb: 'i like to cut hair',
  //   styling: ['perm', 'perm', 'perm']
  // }, {
  //   name: 'Bob',
  //   blurb: 'i dont like to cut hair',
  //   styling: ['merp', 'merp', 'merp']
  // }];

  getLocation() {
    console.log('Clicked!');
    this.currentLocation = this.locationService.getCurrentPosition().subscribe(res => res);
    console.log('Location is:', this.currentLocation);
  }

}