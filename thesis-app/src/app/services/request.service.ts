import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class RequestService {
  constructor(private http: Http) {

  }
  postLocation() {
    const headers = new Headers({'Content-Type': 'application/json'})
    this.http.post('/location', '....', {headers: headers})
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

// // adds users or stylist information in the database --- completed
// app.post('/api/userstylist', function (req, res) {
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
//   helpers.addUserStylist(type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url, function(result) {
//     console.log('this is result from adding', result.insertId);
//     // Get id from result
//     var id = result.insertId;
//     // get location points/add longitude and latitude in stylists/users profile in database based on location provided
//     services.getLocationPoints(location, function(points) {
//       var lat = points[0];
//       var lng = points[1];
//       helpers.addLocation(lat, lng, id, function() {
//         res.sendStatus(201);
//       });
//     });
//   });

// })

// // app.post('/location', function(req, res) {
// //   var location = req.body.location;
// //   var p = 'https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyAODMU1aRyby6iXc5iv4-LXBq_Wb5hRZCA'

// //   https.get(p, (res) => {
// //     var st = '';
// //     var lat;
// //     var lng;
// //       res.on('data', (chunk) => {
// //         st += chunk;
// //       });
// //       res.on('end', ()=> {
// //         var data = JSON.parse(st);
// //         lat = data.results[0].geometry.location.lat;
// //         lng = data.results[0].geometry.location.lng;
// //         helpers.addLocation(lng);
// //       })
// //   });
// //   res.sendStatus(201);
// // })
