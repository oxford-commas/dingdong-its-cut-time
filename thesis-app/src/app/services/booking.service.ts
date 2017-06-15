import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BookingService {
  constructor(private http: Http) {}

  addBooking(booking) {
    console.log('POSTING BOOKING!!!!');
    return this.http.post(`/api/bookings`, booking)
      .map(res => res);
  }

  confirmBooking(id: number) {
    return this.http.put(`/api/bookings/${id}`, id)
      .map(res => res.json());
  }

  deleteBooking(id: number) {
    return this.http.delete(`/api/bookings/${id}`)
      .map(res => res.json());
  }

  fetchDueBookings(id: number, type: number) {
    return this.http.get(`/api/bookings/complete/${type}/${id}`)
      .map(res => res.json());
  }

  putDueBooking(id: number) {
    return this.http.put(`/api/bookings/complete/${id}`, id)
      .map(res => res.json());
  }

  putCompleteBooking(id: number) {
    return this.http.put(`/api/bookings/complete/ready/${id}`, id)
      .map(res => res.json());
  }

  putCancelPayment(id: number) {
    return this.http.put(`/api/bookings/complete/cancel/${id}`, id)
      .map(res => res.json());
  }

  cancelConfirmedBooking(id: number) {
    return this.http.put(`/api/bookings/cancel/${id}`, id)
      .map(res => res.json())
  }

  fetchConfirmedBookings(id: number, type: number) {
    return this.http.get(`/api/bookings/confirmed/${type}/${id}`)
      .map(res => res.json());
  }

  fetchPendingBookings(id: number, type: number) {
    return this.http.get(`/api/bookings/pending/${type}/${id}`)
      .map(res => res.json());
  }

}