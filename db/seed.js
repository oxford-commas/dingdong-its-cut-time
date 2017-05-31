var helpers = require('./helpers.js');
var services = require('../locationServices.js')

var stylistArray = [
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
    {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStylists.com',
    'style': 'F',
    'update': 'update me'
  }
]

stylistArray.forEach(stylist => {
  helpers.addUserStylist(
    stylist.id,
    stylist.username,
    stylist.password,
    stylist.location,
    stylist.phoneNumber,
    stylist.email,
    stylist.website,
    stylist.type,
    stylist.update, (res) => {
      var id = result.insertId;
      services.getLocationPoints(stylist.location, (points) => {
        let lat = points[0];
        let lng = points[1];
        helpers.addLocation(lat, lng, id, (res) => {
          console.log(res);
        })
      })
    }
})

// helpers.addUserStylist(id, username, password, location, phoneNumber, email, website, type, update, (result) => {
//   var id = result.insertId
//   services.getLocationPoints(location, (points) => {
//     let lat = points[0];
//     let lng = points[1];
//     helpers.addLocation(lat, lng, id, (res) => {
//       console.log(res);
//     })
//   });
// });

// helpers.addUserStylist(0, 'Shari', 'ShariPassword', 'San Ramon, CA, CA', '967-890-7890', 'Shari.gmail.com', 'ShariStylists.com', 'F', 'update me', function(result) {
//   console.log('this is result from adding', result.insertId);
//   // Get id from result
//   var id = result.insertId;
//   var location = 'San Ramon, CA'
//   // get location points/add longitude and latitude in stylists/users profile in database based on location provided
//   services.getLocationPoints(location, function(points) {
//     var lat = points[0];
//     var lng = points[1];
//     helpers.addLocation(lat, lng, id, function() {
//       console.log(result)
//     });
//   });
// });

// helpers.addUserStylist(0, 'Robin', 'RobinPassword', 'Walnut Creek, CA', '968-890-7890', 'Robin.gmail.com', 'RobinStylists.com', 'M', 'update me', function(result) {
//   console.log('this is result from adding', result.insertId);
//   // Get id from result
//   var id = result.insertId;
//   var location = 'Walnut Creek, CA'
//   // get location points/add longitude and latitude in stylists/users profile in database based on location provided
//   services.getLocationPoints(location, function(points) {
//     var lat = points[0];
//     var lng = points[1];
//     helpers.addLocation(lat, lng, id, function() {
//       console.log(result)
//     });
//   });
// });