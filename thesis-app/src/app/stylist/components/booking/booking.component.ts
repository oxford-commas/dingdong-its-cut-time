import { Component, Input, OnInit } from '@angular/core';
import { IBookingInformation, createDefaultBookingInformation  } from '../../interfaces/';

import { RequestService } from '../../../services';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit{
  constructor(private requestService: RequestService) {}

  @Input() bookingInformation: IBookingInformation = createDefaultBookingInformation();
  public isBookingNameFetched: boolean = false;

  ngOnInit() {
    this.requestService.getStylistById(this.bookingInformation.id_users)
      .subscribe(
        data => this.bookingInformation.name = data.name,
        err => console.log(err),
        () => this.isBookingNameFetched = true
      );
  }

  confirmBooking() {
    console.log('TODO: make a PUT request to bookings table to change isconfirmed = false to isconfirmed = true');
  }

  deleteBooking() {
    console.log('TODO: make a delete request to bookings table to delete this booking');
  }

}