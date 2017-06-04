import { Component, Input, OnInit } from '@angular/core';

import { RequestService, BookingService} from '../../../services';

@Component({
   selector: 'stylist-home',
   templateUrl: './stylist-home.component.html'
})
export class StylistHomeComponent implements OnInit {
  constructor(
    private requestService: RequestService,
    private bookingService: BookingService
  ) {}

  @Input() stylistProfile;

  public isProfileFetched: boolean = false;
  public bookings: any;

  ngOnInit() {
    this.requestService.getStylistById(2)
      .subscribe(
        data => this.stylistProfile = data,
        err => console.log(err)
      );

    this.bookingService.fetchBookingsForStylist(2)
      .subscribe(
        data => this.bookings = data,
        err => console.log(err),
        () => this.isProfileFetched = true
      );
  }


}