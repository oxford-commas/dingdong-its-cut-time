import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CustomerService {

  constructor(private http: Http) {}

  getConfirmedCustomersForStylist(stylistId) {
    return this.http.get(`/api/bookings/${stylistId}`)
      .map(res => res.json());
  }
}