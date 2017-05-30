import { Component, Input } from '@angular/core';

@Component({
  selector: 'customer-booking-list',
  templateUrl: './customer-booking-list.component.html'
})
export class CustomerBookingListComponent {
  constructor() {
    //make GET request for booking information
  }

  @Input() bookings: any = [{ // TODO: replace with booking information from server
    name: 'Andrew',
    blurb: 'i like to cut hair',
    styling: ['perm', 'perm', 'perm']
  }, {
    name: 'Bob',
    blurb: 'i dont like to cut hair',
    styling: ['merp', 'merp', 'merp']
  }];
}