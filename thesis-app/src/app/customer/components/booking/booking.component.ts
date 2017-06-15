import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RequestService } from '../../../services';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  constructor(private requestService: RequestService) {}

  @Input() name;
  @Input() id_stylists;
  @Input() time;
  @Input() phoneNumber;
  @Input() location;
  @Input() isPending: boolean = false;
  public image_url;
  public isPictureFetched = false;

  ngOnInit() {
    this.requestService.getStylistById(this.id_stylists)
      .subscribe(
        data => {
          console.log('!!!!', data);
          this.image_url = data.image_url;
        },
        err => console.log(err),
        () => this.isPictureFetched = true
      );
  }
}