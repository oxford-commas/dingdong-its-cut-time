import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { RequestService } from './request.service';
import 'rxjs/Rx';

@Injectable()
export class BookingService {
  constructor(private http: Http) {}

  fetchBookingsForStylist(id: number) {
    return this.http.get(`/api/bookings/${id}`)
      .map(res => res.json());
  }

  confirmBooking(id: number) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put(`/api/bookings/${id}`, headers)
      .map(res => res.json());
  }
}