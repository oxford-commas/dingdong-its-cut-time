var express = require('express');
var https = require('https');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var helpers = require('../db/helpers.js');
var services = require('./locationServices.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get all users and stylists given user or stylist id
app.get('/api/userStylist/:id', function(req, res){
  var userid = req.params.id;
  helpers.getUser(userid, function(data) {
    console.log('this is data', data[0])
    res.status(200).json(data[0]);
  });
});

// get all stylists close to the user location
app.get('/api/stylists/:location', function(req, res) {
  var location = req.params.location;
  console.log(location);
  services.getLocationPoints(location, function(points) {
    var lat = points[0];
    var lng = points[1];
    console.log('lat', lat, 'lng', lng)
  });

  res.sendStatus(200);
});

// adds users or stylist information in the database
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
    // Get id from results
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

})

app.post('/location', function(req, res) {
  var location = req.body.location;
  var p = 'https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyAODMU1aRyby6iXc5iv4-LXBq_Wb5hRZCA'

  https.get(p, (res) => {
    var st = '';
    var lat;
    var lng;
      res.on('data', (chunk) => {
        st += chunk;
      });
      res.on('end', ()=> {
        var data = JSON.parse(st);
        lat = data.results[0].geometry.location.lat;
        lng = data.results[0].geometry.location.lng;
        helpers.addLocation(lng);
      })
  });
  res.sendStatus(201);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})