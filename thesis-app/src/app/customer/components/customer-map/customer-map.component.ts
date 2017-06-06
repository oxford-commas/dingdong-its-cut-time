import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../../services';
import { StylistService } from '../../../services';

@Component({
  selector: 'customer-map',
  templateUrl: './customer-map.component.html',
  styleUrls: [ './customer-map.component.css' ]
})

export class CustomerMapComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private stylistService: StylistService,
    private router: Router
  ) {
    stylistService.getStylistsInLocation('sanfrancisco')
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

    // sets the initial center position for the map to a default location
    this.getLatLng();
  }

  @Input() searchLocation: string;

  // initial zoom value for the map
  public lng: number;
  public lat: number;
  public zoom: number = 14;

  ngOnInit() {
    this.getLatLng();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Lets seee: this.searchLocation', this.searchLocation);
    this.adjustMapViewForLocation(this.searchLocation);
    this.getStylistsInLocation(this.searchLocation);
  }

  getLatLng() {
    this.locationService.getCurrentPosition(null, null)
      .subscribe(res =>  {
        console.log(res);
        console.log(JSON.stringify(res));
        console.log(res.coords);
        this.lat = res.coords.latitude;
        this.lng = res.coords.longitude;
        console.log(`Latitude is: ${this.lat}, longitude is: ${this.lng}`);
      });
  }

  adjustMapViewForLocation(location: string) {
    this.locationService.getCoordinatesForLocation(location)
      .subscribe(res => {
        console.log(res);
        console.log(JSON.stringify(res));
        this.lat = res.lat;
        this.lng = res.lng;
        console.log(`Latitude is: ${this.lat}, longitude is: ${this.lng}`);
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

  goToStylist(id) {
    this.router.navigateByUrl(`/stylistProfile/${id}`);
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  // helper function to get coordinates of a point on map
  mapClicked($event: any) {
    let lat = $event.coords.lat;
    let lng = $event.coords.lng;
    console.log(`lat: ${lat}, lng: ${lng}`);
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