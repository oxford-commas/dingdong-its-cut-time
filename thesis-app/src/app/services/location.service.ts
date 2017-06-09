import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable() export class LocationService {
  constructor(private http: Http) {}
  // wraps the Geolocation API into an observable
  // returns an observable of Position
  getCurrentPosition(lat: any, lng: any): Observable<Position> {
    return new Observable((observer: Observer<Position>) => {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          observer.next(position);
          observer.complete();
        },
        (error: PositionError) => {
          observer.next({
            coords: {
              latitude: lat || 37.7686994600975,
              longitude: lng || -122.4440860748291,
              accuracy: 50,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              speed: null
            },
            timestamp: null
          });
          observer.complete();
      });
    });
  }

  getCoordinatesFromLocation(location: string): Observable<{lat: number, lng: number}> {
    return this.http.get(`/api/coordinates/${location}`)
      .map(this.fetchData)
      .catch(this.handleError);
  }

  getLocationFromCoordinates(lat: any, lng: any) {
    var latlng = `${String(lat || 48.8567696)},${String(lng || 2.3529625)}`;
    return this.http.get(`/api/streetaddress/${latlng}`)
      .map(this.fetchData)
      .catch(this.handleError);
  }

  private fetchData(res: Response) {
    let data = res.json();
    return data || {};
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

}