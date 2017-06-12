import { Component, Input } from '@angular/core';
import {
  LocationService,
  BookingService,
  StateService
} from '../../../services';

@Component({
  selector: 'stylist-map',
  templateUrl: './stylist-map.component.html',
  styleUrls: ['./stylist-map.component.css' ]
})
export class StylistMapComponent {
  @Input() lng: number;
  @Input() lat: number;
  @Input() markers: Array<any>;
  public zoom: number = 12;
}