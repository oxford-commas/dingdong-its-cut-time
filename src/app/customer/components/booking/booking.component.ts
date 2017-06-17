import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { BookingService } from '../../../booking.service';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  // constructor(private bookingService: BookingService) {}

  @Input() index;
  @Input() name;
  @Input() image_url;
  @Input() time;
  @Input() location;
  @Input() detail;
  @Input() date;
  @Input() phoneNumber;
  @Input() isPending: boolean = false;
  @Output() handleDecline = new EventEmitter();
  @Output() handleClearHistory = new EventEmitter();
  @Output() handleCancel = new EventEmitter();
  @Output() handleComplete = new EventEmitter();
  @Output() handleCancelComplete = new EventEmitter();
  @Output() handleAccept = new EventEmitter();
  @Output() handleAskForPay = new EventEmitter();
  @Output() handlePay = new EventEmitter();

  public email;
  @Input() isAccept: boolean = false;
  @Input() isDecline: boolean = false;
  @Input() isHistory: boolean = false;
  @Input() isConfirmed: boolean = false;
  @Input() isPay: boolean = false;
  @Input() isReady: boolean = false;
  @Input() isCancel: boolean = false;
  @Input() isCancelComplete: boolean = false;

  @Input() stylistName;
  @Input() bookingId;

}