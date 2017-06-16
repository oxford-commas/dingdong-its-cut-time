var https = require('https');
var config = require('./config/config');
// config/environment variables
//const key = process.env.API_KEY

const key = process.env.API_KEY || config.API_KEY;

var getLocationPoints = function(location, callback) {
  var p = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`;
  https.get(p, (res) => {
    var st = '';
      res.on('data', (chunk) => {
        st += chunk;
      });
      res.on('end', ()=> {
        var points = [];
        var data = JSON.parse(st);

        console.log("Data: ", data);

        if (data.results.length > 0) {
          var lat = data.results[0].geometry.location.lat;
          var lng = data.results[0].geometry.location.lng;
          console.log ('user latitude', lat);
          console.log('user longitude', lng);
          points.push(lat);
          points.push(lng);

          callback(points);
        }

      })
  });
}

//helper function for reverse geocoding
var getLocationFromCoordinates = function(latlng, callback) {
  var path = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=${key}`;
  https.get(path, res => {
    var data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        var address = JSON.parse(data);
        callback(address);
      })
  });
}

module.exports.getLocationPoints = getLocationPoints;
module.exports.getLocationFromCoordinates = getLocationFromCoordinates;