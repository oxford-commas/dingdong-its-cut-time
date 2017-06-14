import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RequestService {
  constructor(private http: Http) {

  }
  postLocation(location: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/location', location, {headers: headers})
  }

  postStylist(stylist: {}) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('/api/userstylist', stylist, {headers: headers});
  }

  getStyles() {
    return this.http.get(`/api/stylistServices`)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

  postStyleForStylist(serviceid: number, stylistid: number) {
    var stylist = {
      serviceid: serviceid,
      stylistid: stylistid
    }
    return this.http.post(`/api/stylistservices`, stylist)
  }

  getStylistById(id: number) {
    return this.http.get(`/api/userStylist/${id}`)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

  getStylistByName(name: string, password: string) {
    return this.http.get(`/api/validate/${name}/${password}`)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

  getStylistByLocation(location: string) {
    return this.http.get(`/api/stylists/${location}`)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

  getUserImg(id: number) {
    return this.http.get(`/api/profile/${id}`)
      .map(
        (response: Response) => {
          return response;
        }
      )
  }

  postUserImg(id: number, img: any) {
    // const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(`/api/profile/${id}`, img);
  }

  changeUser(obj: any) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const url = `/api/userstylist/${obj.id}`;
    return this.http.put(`/api/userstylist/${obj.id}`, obj, {headers: headers})
      .map(
        (response: Response) => {
          return response;
      }
    )
  }
}

// // updates image url for the stylist/user given stylist/user id --- completed
// app.post('/api/profile/:id', upload.single('avatar'), function (req, res, next) {
//   console.log(req.params.id)
//   console.log(req.file);
//   console.log(req.file.path);
//   helpers.updateImage(req.file.path, req.params.id, function() {
//     console.log('added image')
//     res.sendStatus(201);
//   });
// });