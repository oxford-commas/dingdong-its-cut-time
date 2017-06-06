import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBookingInformation } from '../../interfaces';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent {
  @Input() bookingInformation: IBookingInformation;
  @Output() confirmBooking = new EventEmitter();
  @Output() deleteBooking = new EventEmitter();
  @Output() completeBooking = new EventEmitter();
}