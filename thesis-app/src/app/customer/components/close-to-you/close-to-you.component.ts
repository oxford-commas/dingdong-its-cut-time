import { Component, Input } from '@angular/core';

@Component({
  selector: 'close-to-you',
  templateUrl: './close-to-you.component.html'
})
export class CloseToYouComponent {
  constructor() {
    console.log('received data... ', this.stylistInformation);
  }
  @Input() stylistInformation: any;
}