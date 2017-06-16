import { Component, Input, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import "rxjs/add/operator/takeWhile";
import { Router } from '@angular/router';
import { LocationService, StylistService } from '../../../services';

@Component({
  selector: 'customer-map',
  templateUrl: './customer-map.component.html',
  styleUrls: [ './customer-map.component.css' ]
})

export class CustomerMapComponent implements OnInit, OnDestroy {
  constructor(
    private locationService: LocationService,
    private stylistService: StylistService,
    private router: Router
  ) {}

  public currentLocation: string;
  public lng: number;
  public lat: number;
  public zoom: number = 12;
  private alive: boolean = true;

  @Input() searchLocation: string;

  ngOnInit() {
    this.getLatLng((lat, lng) => this.getLocationFromCoordinates(lat, lng, (location) => this.getStylistsInLocation(location)));
    this.getLatLng((lat, lng) => this.getLocationFromCoordinates(lat, lng, (location) => this.adjustMapViewForLocation(location)));
  }

  ngOnDestroy() {
    this.alive = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.adjustMapViewForLocation(this.searchLocation);
    this.getStylistsInLocation(this.searchLocation);
    this.locationService.getCurrentPosition(this.lat, this.lng);
  }

  getLatLng(next) {
    this.locationService.getCurrentPosition(null, null)
      .takeWhile(() => this.alive)
      .subscribe(res =>  {
        this.lat = res.coords.latitude;
        this.lng = res.coords.longitude;
        next(this.lat, this.lng);
      });
  }

  adjustMapViewForLocation(location: string) {
    this.locationService.getCoordinatesFromLocation(location)
      .takeWhile(() => this.alive)
      .subscribe(res => {
        this.lat = res.lat;
        this.lng = res.lng;
      });
  }

  getStylistsInLocation(location: string) {
    this.stylistService.getStylistsInLocation(location)
      .takeWhile(() => this.alive)
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
      .takeWhile(() => this.alive)
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