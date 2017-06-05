import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { IMessage } from '../customer/interfaces';
import 'rxjs/Rx';

@Injectable()
export class MessageService {
  constructor(private http: Http) {}

  postMessage(message: IMessage) {
    return this.http.post('/api/messages', message);
  }

  getMessages(id: number) {
    return this.http.get(`/api/messages/${id}`)
      .map(res => res.json());
  }
}