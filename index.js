var express = require('express');
var https = require('https');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var helpers = require('./db/helpers.js');
var services = require('./locationServices.js');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'thesis-app/dist')));

app.post('/api/stripe', function(req, res) {
  // Set your secret key: remember to change this to your live secret key in production
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  var stripe = require("stripe")("sk_test_y4yKjgB2RSkeKtTOmg6eXotO");
  console.log('HELLO!!', req.body);
  // Token is created using Stripe.js or Checkout!
  // Get the payment token submitted by the form:
  var token = req.body.stripeToken; // Using Express
  // Charge the user's card:
  var charge = stripe.charges.create({
    amount: 1000,
    currency: "cad",
    description: "Example charge",
    source: token,
  }, function(err, charge) {
  // asynchronously called
  console.log('error charging card ', err, charge);
  });
});



// get all users and stylists given user or stylist id --- completed
app.get('/api/userStylist/:id', function(req, res) {
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

// add bookings to the database --- completed
app.post('/api/bookings', function(req, res) {
  console.log(req.body);
  helpers.addToBookings(req.body.id_users, req.body.id_stylists, req.body.isconfirmed, req.body.time, req.body.location, function() {
    res.sendStatus(201);
  });
});

// given userId, get all the user bookings
app.get('/api/userbookings/:userid', function(req, res) {
  console.log(req.params.userid);
  helpers.getUserBookings(req.params.userid, function(data) {
    res.status(200).json(data);
  });
});

//given stylistId, get all stylists bookings
app.get('/api/stylistbookings/:stylistid', function(req, res) {
  console.log(req.params.userid);
  helpers.getStylistBookings(req.params.stylistid, function(data) {
    res.status(200).json(data);
  });
});

//given userId, delete user info from the database along with the bookings
app.delete('/user/:userid', function (req, res) {
  console.log(req.params.userid);
  helpers.deleteUser(req.params.userid);
  res.send('Got a DELETE request at /user')
});

//given stylistId, delete stylist info from the database along with the bookings(foreign key constraint)
app.delete('/stylist/:stylistid', function (req, res) {
  console.log(req.params.stylistid);
  helpers.deleteUser(req.params.stylistid);
  res.send('Got a DELETE request at /stylist')
})

//given stylistId, get all services for the stylists --- completed
app.get('/api/stylistServices/:id', function(req, res) {
  var s = [];
  helpers.getStylistServices(req.params.id, function(data) {
    console.log(data);
    data.forEach(function(el) {
      s.push(el.servicename);
    });
     res.status(200).json(s);
  });
});

// given stylistId and serviceId, add new service to the stylists_services for the stylist
app.post('/api/stylistServices', function(req, res) {
  helpers.stylistservices(req.body.serviceid, req.body.stylistid, function() {
    console.log('hey')
    res.sendStatus(201);
  });
})

// MESSAGE ROUTES //

app.post('/api/messages', (req, res) => {
  helpers.postMessage(req.body, (data) => {
    res.status(200).json(data);
  });
});

app.get('/api/messages/:id', (req, res) => {
  helpers.getMessages(req.params.id, (data) => {
    let messages = {};
    data.forEach(message => {
      let convo = [message.id_sender, message.id_recipient];
      // check if convo or convo reverse is already a key in messages
      if (messages.hasOwnProperty(convo) || messages.hasOwnProperty(convo.reverse())) {
        // if convo exists in messages
        if (messages[convo]) {
          // push message into that
          messages[convo].push(message);
        } else {
        // if convo reverse exists in messages
          // push message into that
          messages[convo.reverse()].push(message);
        }
      } else {
        //initialize convo at message as empty array
        messages[convo] = [];
        messages[convo].push(message);
      }
    });
    res.status(200).json(data);
  });
});




app.get('*', function(req, res) {
 res.sendFile(path.join(__dirname, 'thesis-app/dist/index.html'));
});

app.listen(4200, function () {
  console.log('Example app listening on port 4200!')
});
