var helpers = require('./helpers.js');
var services = require('../locationServices.js')

helpers.addUserStylist(0, 'Shari', 'ShariPassword', 'San Ramon, CA, CA', '967-890-7890', 'Shari.gmail.com', 'ShariStylists.com', 'F', 'update me', function(result) {
  console.log('this is result from adding', result.insertId);
  // Get id from result
  var id = result.insertId;
  var location = 'San Ramon, CA'
  // get location points/add longitude and latitude in stylists/users profile in database based on location provided
  services.getLocationPoints(location, function(points) {
    var lat = points[0];
    var lng = points[1];
    helpers.addLocation(lat, lng, id, function() {
      console.log(result)
    });
  });
});

helpers.addUserStylist(0, 'Robin', 'RobinPassword', 'Walnut Creek, CA', '968-890-7890', 'Robin.gmail.com', 'RobinStylists.com', 'M', 'update me', function(result) {
  console.log('this is result from adding', result.insertId);
  // Get id from result
  var id = result.insertId;
  var location = 'Walnut Creek, CA'
  // get location points/add longitude and latitude in stylists/users profile in database based on location provided
  services.getLocationPoints(location, function(points) {
    var lat = points[0];
    var lng = points[1];
    helpers.addLocation(lat, lng, id, function() {
      console.log(result)
    });
  });
});