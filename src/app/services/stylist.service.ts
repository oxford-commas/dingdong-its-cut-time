import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { LocationService } from './location.service';

@Injectable()

export class StylistService {
  constructor(
    private http: Http,
    private locationService: LocationService
    ) {}

  private url: string = `/api/stylists/${location}`;

  getStylistsInLocation(location) {
    return this.http.get(`/api/stylists/${location}`)
      .map(res => res.json());
  }
}
