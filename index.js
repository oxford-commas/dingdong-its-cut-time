var express = require('express');
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
});
var upload = multer({ storage: storage });
//var upload = multer({ dest: 'uploads/' })
var https = require('https');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var helpers = require('./db/helpers.js');
var fs = require('fs');
var services = require('./locationServices.js');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'thesis-app/dist')));

/// placeholder validation for auth 0//
app.get('/api/validate/:username/:password', function(req, res) {
  var username = req.params.username;
  var password = req.params.password;
  helpers.validateUser(username, password, profile => {
    profile && res.status(200).json(profile);
  });
})

/////////
app.post('/api/stripe', function(req, res) {
  // Set your secret key: remember to change this to your live secret key in production
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  var stripe = require("stripe")("sk_test_y4yKjgB2RSkeKtTOmg6eXotO");
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

// get all users and stylists given user or stylist id
app.get('/api/userStylist/:id', function(req, res) {
  var userid = req.params.id;
  helpers.getUser(userid, function(data) {
    res.status(200).json(data[0]);
  });
});

//gets image of a user/stylist --- completed
app.get('/api/profile/:id', function(req, res, next) {
  console.log(req.params.id)
  helpers.getImagePath(req.params.id, function(data) {
    console.log(data);
    var file = data[0].image_url;
    console.log(path.join(__dirname + '/' + file));
    res.set({'Content-Type': 'image/jpeg'});
    res.sendFile(path.join(__dirname + '/' + file));
  });
});

// updates image url for the stylist/user given stylist/user id --- completed
app.post('/api/profile/:id', upload.single('avatar'), function (req, res, next) {
  console.log(req.params.id)
  console.log(req.file);
  console.log(req.file.path);
  helpers.updateImage(req.file.path, req.params.id, function() {
    console.log('added image')
    res.sendStatus(201);
  });
});

// get all stylists close to the user location
app.get('/api/stylists/:location', function(req, res) {
  var location = req.params.location;
  services.getLocationPoints(location, function(points) {
    var lat = points[0];
    var lng = points[1];
    helpers.getAllStylists(function(result) {
      var data = [];
      result.forEach(function(el) {
        var lat2 = el.latitude;
        var lng2 = el.longitude;
        var distance = helpers.calculateDistance(lat, lng, lat2, lng2, 'M');
        if (distance <= 15) {
          data.push(el);
        }
      });
      res.status(200).json(data);
    });
  });
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


// updates users or stylists information in the database
app.put('/api/userstylist/:id', function (req, res) {
  var id = req.params.id;
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
  helpers.updateProfile(type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url, id, function() {
    res.send('Got a PUT request at /api/userstylist/' + req.params.id);
  });
});

// updates location end points for a given userID
app.post('/api/location', function(req, res) {
  var location = req.body.location;
  var id = req.body.id;
  services.getLocationPoints(location, function(points) {
    var lat = points[0];
    var lng = points[1];
    helpers.addLocation(lat, lng, id, function() {
      res.sendStatus(201);
    });
  });
});

// add bookings to the database
app.post('/api/bookings', function(req, res) {
  helpers.addToBookings(req.body.id_users, req.body.id_stylists, req.body.isconfirmed, req.body.isComplete, req.body.time, req.body.location, function() {
    res.sendStatus(201);
  });
});

// get bookings for a customer that need to be paid for
app.get('/api/bookings/complete/:id', (req, res) => {
  var id = req.params.id;
  helpers.getBookingsDue(id, result => res.status(200).json(result));
});

// confirm a booking will occur
app.put('/api/bookings/:id', (req, res) => {
  var id = req.params.id;
  helpers.confirmBooking(id, result => res.status(200).json(result));
});

// complete a booking which is now ready to be paid for
app.put('/api/bookings/complete/:id', (req, res) => {
  var id = req.params.id;
  helpers.completeBooking(id, result => res.status(200).json(result));
});

// given stylistId, get their associated bookings and customer names
app.get('/api/bookings/:stylistId', function(req, res) {
  var stylistId = req.params.stylistId;
  helpers.getBookings(stylistId, data => res.status(200).json(data));
});

app.delete('/api/bookings/:id', (req, res) => {
  helpers.deleteBooking(req.params.id, results => res.status(200).json(results));
});

//given stylistId, get all stylists bookings
app.get('/api/stylistbookings/:stylistid', function(req, res) {
  helpers.getStylistBookings(req.params.stylistid, function(data) {
    res.status(200).json(data);
  });
});

//given userId, delete user info from the database along with the bookings
app.delete('/user/:userid', function (req, res) {
  helpers.deleteUser(req.params.userid);
  res.send('Got a DELETE request at /user')
});

//delete booking given booking id
app.delete('/booking/:bookingid', function (req, res) {
  helpers.deleteBooking(req.params.bookingid);
  res.send('Got a DELETE request at /booking')
});

//update bookings given booking id
app.put('/booking/:bookingid', function (req, res) {
  var id = req.params.bookingid;
  var id_users = req.body.userid;
  var id_stylists = req.body.stylistid;
  var time = req.body.time;
  var location = req.body.location;
  var isconfirmed = req.body.isconfirmed;
  helpers.updateBooking(id_users, id_stylists, isconfirmed, time, location, id, function() {
    res.send('Got a PUT(update) request at /booking')
  });

});

// HAIRCUT STYLES //

app.get('/api/stylistServices', (req, res) => {
  helpers.getAllStyles(results => res.status(200).send(results));
});

//given stylistId, delete stylist info from the database along with the bookings(foreign key constraint)
app.delete('/stylist/:stylistid', function (req, res) {
  helpers.deleteUser(req.params.stylistid);
  res.send('Got a DELETE request at /stylist')
})

//given stylistId, get all services for the stylists
app.get('/api/stylistServices/:id', function(req, res) {
  var s = [];
  helpers.getStylistServices(req.params.id, function(data) {
    data.forEach(function(el) {
      s.push(el.servicename);
    });
     res.status(200).json(s);
  });
});

// given stylistId and serviceId, add new service to the stylists_services for the stylist
app.post('/api/stylistServices', function(req, res) {
  helpers.stylistservices(req.body.serviceid, req.body.stylistid, function() {
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
      let convo = [message.sender, message.recipient];
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
    res.status(200).json(messages);
  });
});

app.delete('/api/messages', (req, res) => {
  var messageIds = req.body;
  helpers.deleteChat(messageIds, results => res.status(200).json(results));
});

// get coordinates for location/street address
app.get('/api/coordinates/:location', function(req, res) {
  var location = req.params.location;
  services.getLocationPoints(location, function(coords) {
    var coordinates = {
      lat: coords[0],
      lng: coords[1]
    }
    res.status(200).json(coordinates);
  });
});

// get location/street address from coordinates
app.get('/api/streetaddress/:latlng', function(req, res) {
  var latlng = req.params.latlng;
  services.getLocationFromCoordinates(latlng, function(location) {
    var address = location.results[0].formatted_address;
    res.status(200).json(address);
  });
});


app.get('/', function(req, res) {
 res.sendFile('thesis-app/dist/index.html', {"root": __dirname});
});

app.set('port', (process.env.PORT || 4200))

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
