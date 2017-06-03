import { Component, Input, OnInit } from '@angular/core';

import { RequestService} from '../services';

@Component({
   selector: 'stylist-home',
   templateUrl: './stylist-home.component.html'
})
export class StylistHomeComponent implements OnInit {
  constructor(
    private requestService: RequestService,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.requestService.getStylistById(1)
      .subscribe(
        data => this.hardCodedStylistProfile = data,
        err => console.log(err),
        () => isProfileFetched = true
      );

    this.bookingService.fetchBookingsForStylist(1)
      .subscribe(
        data => this.bookings = data,
        err => console.log(err)
      );
  }

  @Input() stylistProfile
  public isProfileFetched: boolean = false;
  public hardCodedStylistProfile: any;
  public bookings: any;
}