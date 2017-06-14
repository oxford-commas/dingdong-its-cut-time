import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class StylistStylesService {
  constructor(private http: Http) {}

  fetchAllStyles() {
    return this.http.get('/api/stylistServices')
      .map(res => res.json());
  }

  fetchStyles(id: number) {
    return this.http.get(`/api/stylistServices/${id}`)
      .map(res => res.json());
  }
}