import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { IMessage } from '../customer/interfaces';
import 'rxjs/Rx';

@Injectable()
export class MessageService {
  constructor(private http: Http) {}

  postMessage(message: IMessage) {
    return this.http.post('/api/messages', message)
      .map(res => res.json())
      .share();
  }

  getMessages(id: number) {
    return this.http.get(`/api/messages/${id}`)
      .map(res => this.convertToArray(res.json()))
      .share();
  }

  deleteChatHistory(ids) {
    const requestOptions = new RequestOptions({body: ids});
    return this.http.delete('/api/messages', requestOptions)
      .map(res => res.json())
      .share();
  }

  convertToArray(obj) {
    return Object.keys(obj).map(key => ({
        sender_id: key,
        sender: obj[key].sender,
        messages: obj[key].messages
      })
    );
  }
}