import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  @Input() name;
  @Input() time;
  @Input() phoneNumber;
}