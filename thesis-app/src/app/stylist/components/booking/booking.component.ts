import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBookingInformation } from '../../interfaces';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent {
  @Input() bookingInformation: IBookingInformation;
  @Output() confirmBooking = new EventEmitter();

  deleteBooking() {
    console.log('TODO: make a delete request to bookings table to delete this booking');
  }

}