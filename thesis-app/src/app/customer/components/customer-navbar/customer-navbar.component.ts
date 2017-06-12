import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StylistService, LocationService, StateService } from '../../../services';

@Component({
  selector: 'customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent {
  constructor (
    private stylistService: StylistService,
    private locationService: LocationService,
    private stateService: StateService
  ) {}

  @Input() searchLocation: string;
  @Output() locationChange = new EventEmitter();

  public profile = this.stateService.retrieveCustomer();

  public handleSearchLocationChange(newLocation) {
    this.searchLocation = newLocation;
    this.locationChange.emit(newLocation);
  }
}