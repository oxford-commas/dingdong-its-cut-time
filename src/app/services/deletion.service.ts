import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DeletionService {
  constructor(private http: Http) {}

  deleteAccount(userId) {
    return this.http.delete(`/user/${userId}`);
  }
}