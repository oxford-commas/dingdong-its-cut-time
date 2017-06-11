import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../../services';
import { StylistService } from '../../../services';

@Component({
  selector: 'close-to-you',
  templateUrl: './close-to-you.component.html',
  styleUrls: ['./close-to-you.component.css']
})
export class CloseToYouComponent {
    constructor(
    private locationService: LocationService,
    private stylistService: StylistService,
    private router: Router
  ) {}

  @Input() stylistInformation: any;
  @Input() searchLocation: string;

}