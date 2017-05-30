import { Component } from '@angular/core';

@Component({
  selector: 'customer-map',
  templateUrl: './customer-map.component.html',
  styleUrls: [ './customer-map.component.css' ]
})

export class CustomerMapComponent {

  title: string = 'Stylists in your area';

  // initial center position for the map
  public lat: number = 37.7632355;
  public lng: number = -122.4637079;

  // initial zoom value for the map
  public zoom: number = 14;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  // helper function to get coordinates of a point on map
  mapClicked($event: any) {
    let lat = $event.coords.lat;
    let lng = $event.coords.lng;
    console.log(`lat: ${lat}, lng: ${lng}`);
  }

  markers: marker[] = [
    {
      lat: 37.75990516443671,
      lng: -122.44880676269531,
      label: {
        color: 'black',
        fontWeight: 'bold',
        text: 'Stylist A'
      }
    },
    {
      lat: 37.75556223086148,
      lng: -122.47598919677734,
      label: {
        color: 'black',
        fontWeight: 'bold',
        text: 'Stylist B'
      }
    },
    {
      lat: 37.772357937683546,
      lng: -122.4686336517334,
      label: {
        color: 'black',
        fontWeight: 'bold',
        text: 'Stylist C'
      }
    },
    {
      lat: 37.76268722227398,
      lng: -122.46271133422852,
      label: {
        color: 'black',
        fontWeight: 'bold',
        text: 'Stylist D'
      }
    },
    {
      lat: 37.75359425514886,
      lng: -122.45790481567383,
      label: {
        color: 'black',
        fontWeight: 'bold',
        text: 'Stylist E'
      }
    }
  ]

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

interface marker {
  lat: number;
  lng: number;
  label?: label;
}

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
