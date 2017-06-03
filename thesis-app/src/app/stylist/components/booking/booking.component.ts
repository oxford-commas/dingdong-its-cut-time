import { Component, Input, OnInit } from '@angular/core';

import { RequestService } from '../../../services';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit{
  constructor(private requestService: RequestService) {}

  @Input() bookingInformation: any; //TODO: interface this
  public isBookingNameFetched: boolean = false;

  ngOnInit() {
    this.requestService.getStylistById(this.bookingInformation.id_users)
      .subscribe(
        data => this.bookingInformation.name = data,
        err => console.log(err),
        () => this.isBookingNameFetched = true
      );
    // this.bookingInformation = {
    //   name: 'Andrew',
    //   isconfirmed: false,
    //   time: '9:00am',
    //   location: 'toronto'
    // }
  }

  confirmBooking() {

  }

}