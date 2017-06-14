import { Component, Input } from '@angular/core';

@Component({
  selector: 'close-to-you',
  templateUrl: './close-to-you.component.html',
  styleUrls: ['./close-to-you.component.css']
})
export class CloseToYouComponent {
  @Input() stylistInformation: any;
}