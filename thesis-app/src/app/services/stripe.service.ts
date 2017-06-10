import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class StripeService {
  constructor(private _http: Http) {
  }

  postToken(token: any, bookingId: number) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post('http://127.0.0.1:4200/api/stripe', {
      stripeToken: token,
      bookingId: bookingId
    }, {headers: headers}).map(res => res.json());
  }
}