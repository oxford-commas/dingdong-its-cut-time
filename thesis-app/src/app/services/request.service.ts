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
    return this.http.post('http://localhost:4200/api/userstylist', stylist, {headers: headers});
  }

  getStyles() {
    return this.http.get(`/api/stylistServices`)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
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



// app.put('/api/userstylist/:id', function (req, res) {
//   var id = req.params.id;
//   var type = req.body.type;
//   var name = req.body.name;
//   var password = req.body.password;
//   var billingaddress = req.body.billingaddress;
//   var phonenumber = req.body.phonenumber;
//   var email = req.body.email;
//   var site_url = req.body.site_url;
//   var gender = req.body.gender;
//   var image_url = req.body.image_url;
//   var location = req.body.location;
//   helpers.updateProfile(type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url, id, function() {
//     res.send('Got a PUT request at /api/userstylist/' + req.params.id);
//   });
// });