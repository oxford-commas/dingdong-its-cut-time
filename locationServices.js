var https = require('https');

var getLocationPoints = function(location, callback) {
  // var p = 'https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyAODMU1aRyby6iXc5iv4-LXBq_Wb5hRZCA'
  var p = 'https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key=AIzaSyDts_evd3goemU-neN6oI3o-aIbJhPHPWA';
  https.get(p, (res) => {
    var st = '';
      res.on('data', (chunk) => {
        st += chunk;
      });
      res.on('end', ()=> {
        var points = [];
        var data = JSON.parse(st);
        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        console.log ('user latitude', lat);
        console.log('user longitude', lng);
        points.push(lat);
        points.push(lng);

        callback(points);
      })
  });
}

//helper function for reverse geocoding
var getLocationFromCoordinates = function(latlng, callback) {
  // var path = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=AIzaSyAODMU1aRyby6iXc5iv4-LXBq_Wb5hRZCA`;
  var path = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&key=AIzaSyDts_evd3goemU-neN6oI3o-aIbJhPHPWA`;
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