var express = require('express');
var https = require('https');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var helpers = require('./db/helpers.js');
var services = require('./locationServices.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// get all users and stylists given user or stylist id --- completed
app.get('/api/userStylist/:id', function(req, res){
  var userid = req.params.id;
  helpers.getUser(userid, function(data) {
    res.status(200).json(data[0]);
  });
});

// get all stylists close to the user location --- completed
app.get('/api/stylists/:location', function(req, res) {
  var location = req.params.location;
  console.log(location);
  services.getLocationPoints(location, function(points) {
    var lat = points[0];
    var lng = points[1];
    console.log('lat', lat, 'lng', lng)
    helpers.getAllStylists(function(result) {
      var data = [];
      result.forEach(function(el) {
        var lat2 = el.latitude;
        var lng2 = el.longitude;
        var distance = helpers.calculateDistance(lat, lng, lat2, lng2, 'M');
        console.log(distance);
        if (distance <= 15) {
          data.push(el);
        }
      });
      res.status(200).json(data);

    });
  });
});

// adds users or stylist information in the database --- completed
app.post('/api/userstylist', function (req, res) {
  var type = req.body.type;
  var name = req.body.name;
  var password = req.body.password;
  var billingaddress = req.body.billingaddress;
  var phonenumber = req.body.phonenumber;
  var email = req.body.email;
  var site_url = req.body.site_url;
  var gender = req.body.gender;
  var image_url = req.body.image_url;
  var location = req.body.location;
  helpers.addUserStylist(type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url, function(result) {
    console.log('this is result from adding', result.insertId);
    // Get id from result
    var id = result.insertId;
    // get location points/add longitude and latitude in stylists/users profile in database based on location provided
    services.getLocationPoints(location, function(points) {
      var lat = points[0];
      var lng = points[1];
      helpers.addLocation(lat, lng, id, function() {
        res.sendStatus(201);
      });
    });
  });
});

// updates location end points for a given userID  ----completed
app.post('/api/location', function(req, res) {
  var location = req.body.location;
  var id = req.body.id;
  services.getLocationPoints(location, function(points) {
    var lat = points[0];
    var lng = points[1];
    console.log(lat);
    console.log(lng)
    console.log(id)
    helpers.addLocation(lat, lng, id, function() {
      res.sendStatus(201);
    });
  });

});

// add bookings to the database
app.post('/api/bookings', function(req, res) {
  helpers.addToBookings(req.body.userid, req.body.stylistid, req.body.isConfirmed, req.body.time, req.body.location, function() {
    res.sendStatus(201);
  });
});

// given stylistId, get all users  who are booked with this stylist)
app.get('/api/bookings/:stylistid', function(req, res) {

})

app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
});