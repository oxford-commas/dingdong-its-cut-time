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
    'username': 'Mateo',
    'password': 'MateoPassword',
    'location': 'San Mateo, CA, CA',
    'phoneNumber': '967-123-7890',
    'email': 'mateo@gmail.com',
    'website': 'MateoStyles.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Ric Flair',
    'password': 'WOO',
    'location': 'Brewer Subdivision, Hillsborough, CA',
    'phoneNumber': '967-123-7890',
    'email': 'rflair@gmail.com',
    'website': 'ricflairwoo.com',
    'style': 'M',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'mrhighland',
    'password': 'highlandpassword',
    'location': '1851 Lexington Ave, San Mateo, CA',
    'phoneNumber': '967-890-1238',
    'email': 'highlands@gmail.com',
    'website': 'HighlandsSuper.com',
    'style': 'P',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'redwood',
    'password': 'redwoodpassword',
    'location': 'Redwood Shores, Redwood City, CA',
    'phoneNumber': '832-592-7890',
    'email': 'redwood@gmail.com',
    'website': 'redwoodshores.com',
    'style': 'P',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Big Bess',
    'password': 'BigBessington',
    'location': '506 N Delaware St, San Mateo, CA',
    'phoneNumber': '650-558-2399',
    'email': 'someemail@gmail.com',
    'website': 'sanmateohigh.org',
    'style': 'P',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'Dragons Gate',
    'password': 'dragonsgate',
    'location': 'Bush St & Grant Ave., San Francisco, CA',
    'phoneNumber': '503-321-7890',
    'email': 'dragonsgate@gmail.com',
    'website': 'welcometothedragon.com',
    'style': 'T',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'cablecar',
    'password': 'cablecar',
    'location': '1201 Mason St, San Francisco, CA',
    'phoneNumber': '415-474-1887',
    'email': 'cablecablecable@gmail.com',
    'website': 'cablecarmuseum.org',
    'style': 'P',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'saintmary',
    'password': 'saintmary',
    'location': '1111 Gough St, San Francisco, CA',
    'phoneNumber': '415-567-2020',
    'email': 'saintmary@gmail.com',
    'website': 'stmarycathedralsf.org',
    'style': 'P',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'cityhall',
    'password': 'cityhall',
    'location': '1 Dr Carlton B Goodlett Pl, San Francisco, CA',
    'phoneNumber': '415-554-4000',
    'email': 'cityhalldontgotnotemail@gmail.com',
    'website': 'wedontlbelieveintechnology.com',
    'style': 'P',
    'update': 'update me'
  },
    {
    id: 0,
    'username': 'ladiespainted',
    'password': 'paintedladies',
    'location': 'Steiner St, San Francisco, CA',
    'phoneNumber': '415-218-0259',
    'email': 'paintedladies@gmail.com',
    'website': 'paintedladies.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'lombardi',
    'password': 'lombardi',
    'location': 'Lombard St, San Francisco, CA',
    'phoneNumber': '967-523-1235',
    'email': 'lombardi@gmail.com',
    'website': 'Lombardi.com',
    'style': 'F, P',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'ghirardelli',
    'password': 'ghirardelli',
    'location': '900 North Point St, San Francisco, CA',
    'phoneNumber': '415-775-5500',
    'email': 'ghirardellisq@gmail.com',
    'website': 'ghirardellisq.com',
    'style': 'F, T',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'museemecanique',
    'password': 'museemecanique',
    'location': '45 Sausalito San Francisco Pier 41, San Francisco, CA',
    'phoneNumber': '967-890-7890',
    'email': 'museemecanique@gmail.com',
    'website': 'museemecanique.com',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'dnalounge',
    'password': 'dnalounge',
    'location': '375 11th St, San Francisco, CA',
    'phoneNumber': '415-626-1409',
    'email': 'dnalounge@gmail.com',
    'website': 'dnalounge.com',
    'style': 'F, T, P',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'castro',
    'password': 'castro',
    'location': '429 Castro St, San Francisco, CA',
    'phoneNumber': '415-621-6120',
    'email': 'castrotheatre@gmail.com',
    'website': 'castrotheatre.com',
    'style': 'P',
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
    stylist.update, (resultFromServer) => {
      var id = resultFromServer.insertId;
      services.getLocationPoints(stylist.location, (points) => {
        let lat = points[0];
        let lng = points[1];
        helpers.addLocation(lat, lng, id, (res) => {
          console.log(res);
        })
      })
    });
});