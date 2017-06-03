import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ICustomerMessage } from '../customer/interfaces';
import 'rxjs/Rx';

@Injectable()
export class MessageService {
  constructor(private http: Http) {}

  postMessage(message: ICustomerMessage) {
    return this.http.post('/api/messages', message);
  }
}