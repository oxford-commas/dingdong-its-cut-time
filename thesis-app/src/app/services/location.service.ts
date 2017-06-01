import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable() export class LocationService {
  constructor() {}
  // wraps the Geolocation API into an observable
  // returns An observable of Position
  getCurrentPosition(): Observable<Position> {
    return new Observable((observer: Observer<Position>) => {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          observer.next(position);
          console.log('Position is:', position);
          observer.complete();
        },
        (error: PositionError) => {
          console.log('Geolocation service: ' + error.message);
          observer.error(error);
      });
    });
  }
}
