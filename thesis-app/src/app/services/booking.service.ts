import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BookingService {
  constructor(private http: Http) {}

  fetchBookingsForStylist(id: number) {
    return this.http.get(`/api/stylistbookings/${id}`)
      .map(res => res.json());
  }
}