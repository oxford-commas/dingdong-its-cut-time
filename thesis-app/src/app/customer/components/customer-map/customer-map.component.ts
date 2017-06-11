import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../../services';
import { StylistService } from '../../../services';
import { GoogleMapsAPIWrapper } from '../../../../../node_modules/angular2-google-maps/core/services/google-maps-api-wrapper';

@Component({
  selector: 'customer-map',
  templateUrl: './customer-map.component.html',
  styleUrls: [ './customer-map.component.css' ]
})

export class CustomerMapComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private stylistService: StylistService,
    private router: Router,
    private googleMapsAPIWrapper: GoogleMapsAPIWrapper
  ) {}

  public currentLocation: string;
  public lng: number;
  public lat: number;
  public zoom: number = 12;

  @Input() searchLocation: string;

  ngOnInit() {
    this.getLatLng((lat, lng) => this.getLocationFromCoordinates(lat, lng, (location) => this.getStylistsInLocation(location)));
    this.getLatLng((lat, lng) => this.getLocationFromCoordinates(lat, lng, (location) => this.adjustMapViewForLocation(location)));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.adjustMapViewForLocation(this.searchLocation);
    this.getStylistsInLocation(this.searchLocation);
    this.locationService.getCurrentPosition(this.lat, this.lng);
  }

  getLatLng(next) {
    this.locationService.getCurrentPosition(null, null)
      .subscribe(res =>  {
        this.lat = res.coords.latitude;
        this.lng = res.coords.longitude;
        next(this.lat, this.lng);
      });
  }

  adjustMapViewForLocation(location: string) {
    this.locationService.getCoordinatesFromLocation(location)
      .subscribe(res => {
        this.lat = res.lat;
        this.lng = res.lng;
      });
  }

  getStylistsInLocation(location: string) {
    this.stylistService.getStylistsInLocation(location)
      .subscribe(data => {
        this.stylists = data;
        this.stylists.map(stylist => {
          stylist.label = {
            color: 'black',
            fontWeight: 'bold',
            text: stylist.name
          }
        })
      }, err => console.log(err));
  }

  getLocationFromCoordinates(lat, lng, next) {
    this.locationService.getLocationFromCoordinates(lat, lng)
      .subscribe(location => {
        this.currentLocation = location;
        next(this.currentLocation);
      }, err => console.log(err));
  }

  goToStylist(id) {
    this.router.navigateByUrl(`/stylistProfile/${id}`);
  }

  // helper function to get coordinates of a point on map
  mapClicked($event: any) {
    let lat = $event.coords.lat;
    let lng = $event.coords.lng;
  }

  public stylists: any

  icon: icon = {
    url: "https://maxcdn.icons8.com/Share/icon/Healthcare//scissors1600.png",
    scaledSize: {
      height: 45,
      width: 45
    },
    labelOrigin: {
      x: 0,
      y: 0
    },
  }

}

// interfaces for type safety

interface label {
  color: string;
  fontWeight: string;
  text: string;
}

interface icon {
  url: string;
  scaledSize: size;
  labelOrigin: point;
}

interface size {
  height: number;
  width: number;
}

interface point {
  x: number;
  y: number;
}