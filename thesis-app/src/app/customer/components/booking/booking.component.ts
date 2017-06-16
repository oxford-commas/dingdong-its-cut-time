import { Component, Input, OnInit } from '@angular/core';
// import { BookingService } from '../../../booking.service';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  // constructor(private bookingService: BookingService) {}

  @Input() name;
  @Input() image_url;
  @Input() time;
  @Input() location;
  @Input() detail;
  @Input() date;
  public email;
  @Input() phoneNumber;
  @Input() isPending: boolean = false;

  ngOnInit() {
    // this.boo
  }
}