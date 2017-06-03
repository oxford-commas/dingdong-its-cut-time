import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BookingService {
  constructor(private http: Http) {}

  fetchBookingsForStylist(id: number) {
    this.http.get(`/api/stylistbookings/${stylistid}`)
      .map(res => res.json());
  }
}