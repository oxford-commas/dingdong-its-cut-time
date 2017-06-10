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

  // public currentLocation: string;
  // public lng: number;
  // public lat: number;
  // public stylists: any

  // ngOnInit() {
  //   this.getLatLng((lat, lng) => this.getLocationFromCoordinates(lat, lng, (location) => this.getStylistsInLocation(location)));
  // }

  // getLatLng(next) {
  //   this.locationService.getCurrentPosition(null, null)
  //     .subscribe(res =>  {
  //       this.lat = res.coords.latitude;
  //       this.lng = res.coords.longitude;
  //       next(this.lat, this.lng);
  //     });
  // }

  // getStylistsInLocation(location: string) {
  //   this.stylistService.getStylistsInLocation(location)
  //     .subscribe(
  //       data => this.stylists = data
  //     , err => console.log(err)
  //     );
  // }

  // getLocationFromCoordinates(lat, lng, next) {
  //   this.locationService.getLocationFromCoordinates(lat, lng)
  //     .subscribe(location => {
  //       this.currentLocation = location;
  //       this.searchLocation = this.currentLocation;
  //       next(this.currentLocation);
  //     }, err => console.log(err));
  // }

}