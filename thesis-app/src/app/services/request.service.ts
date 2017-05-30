import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RequestService {
  constructor(private http: Http) {

  }
  postLocation(location: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('/location', location, {headers: headers})
  }

  postStylist(stylist: {}) {
    const headers = new Headers({'Content-Type': 'application/json'});
    this.http.post('/api/userstylist', stylist, {headers: headers});
  }

  getStylistById(id: number) {
    return this.http.get(`/api/userStylist/${id}`)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

}

// app.get('/api/userStylist/:id', function(req, res){
//   var userid = req.params.id;
//   helpers.getUser(userid, function(data) {
//     res.status(200).json(data[0]);
//   });
// });

// // get all stylists close to the user location --- completed
// app.get('/api/stylists/:location', function(req, res) {
//   var location = req.params.location;
//   console.log(location);
//   services.getLocationPoints(location, function(points) {
//     var lat = points[0];
//     var lng = points[1];
//     console.log('lat', lat, 'lng', lng)
//     helpers.getAllStylists(function(result) {
//       var data = [];
//       result.forEach(function(el) {
//         var lat2 = el.latitude;
//         var lng2 = el.longitude;
//         var distance = helpers.calculateDistance(lat, lng, lat2, lng2, 'M');
//         console.log(distance);
//         if (distance <= 15) {
//           data.push(el);
//         }
//       });
//       res.status(200).json(data);

//     });
//   });
// });

