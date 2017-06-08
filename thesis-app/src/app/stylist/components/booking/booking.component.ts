import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBookingInformation } from '../../interfaces';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  @Input() bookingInformation: IBookingInformation;
  @Output() confirmBooking = new EventEmitter();
  @Output() deleteBooking = new EventEmitter();
  @Output() completeBooking = new EventEmitter();
}