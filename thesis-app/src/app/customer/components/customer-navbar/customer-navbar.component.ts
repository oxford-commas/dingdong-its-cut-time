import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StylistService } from '../../../services';
import { LocationService } from '../../../services';

@Component({
  selector: 'customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent {
  constructor(
    private stylistService: StylistService,
    private locationService: LocationService
    ) {}

  @Input() customerId: number;
  @Input() searchLocation: string;
  @Output() locationChange = new EventEmitter();

  public handleSearchLocationChange(newLocation) {
    console.log('new location:', newLocation)
    this.searchLocation = newLocation;
    this.locationChange.emit(newLocation);
  }

  public logo: string = 'put logo url here';
  public currentCustomer: string = 'Matt';
  public isDropDownHidden: boolean = true;

}