import { Component } from '@angular/core';

import { RequestService } from '../../../services';
import { LocationService } from '../../../services';


@Component({
  selector: 'customer-home',
  templateUrl: 'customer-home.component.html'
})
export class CustomerHomeComponent {
  constructor(
    private _requestService: RequestService,
    private locationService: LocationService,
    ) {

    this.customerProfile = _requestService.getStylistById(0).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  public currentLocation: any;

  getLocation() {
    console.log('Clicked!');
    this.currentLocation = this.locationService.getCurrentPosition().subscribe(res => res);
    console.log('Location is:', this.currentLocation);
  }

  public customerProfile: any; //TODO: interface
}