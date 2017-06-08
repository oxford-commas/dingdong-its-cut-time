import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { StylistService, LocationService, StateService } from '../../../services';

@Component({
  selector: 'customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent {
  @Input() customerId: number;
  @Input() searchLocation: string;
  @Output() locationChange = new EventEmitter();

  private currentCustomer: any;

  constructor(
    private stylistService: StylistService,
    private locationService: LocationService,
    private stateService: StateService
    ) {}

  ngOnInit() {
    this.currentCustomer = this.stateService.retrieveCustomer();
  }

  public handleSearchLocationChange(newLocation) {
    this.searchLocation = newLocation;
    this.locationChange.emit(newLocation);
  }
}