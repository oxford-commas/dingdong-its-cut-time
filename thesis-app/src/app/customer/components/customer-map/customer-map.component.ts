import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../../services';
import { StylistService } from '../../../services';

@Component({
  selector: 'customer-map',
  templateUrl: './customer-map.component.html',
  styleUrls: [ './customer-map.component.css' ]
})

export class CustomerMapComponent {
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

    // sets the initial center position for the map
    this.getLatLng();
  }

  @Input() coordinates;

  title: string = 'Stylists in your area';

  public lat: number;
  public lng: number;

  // initial zoom value for the map
  public zoom: number = 14;

  getLatLng() {
    this.locationService.getCurrentPosition()
      .subscribe(res =>  {
        this.lat = res.coords.latitude;
        this.lng = res.coords.longitude;
        console.log(`Latitude is: ${this.lat}, longitude is: ${this.lng}`);
      });
  }

  goToStylist(id) {
    this.router.navigateByUrl('/stylistProfile/${id}')
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
// TODO: Separate these to their own files under interfaces folder

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
