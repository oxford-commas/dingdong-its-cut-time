const helpers = require('./helpers.js');
const services = require('../locationServices.js');
var model = require('./model.js');

var CLEARDB_INSERT = false;



const stylistArray = [
  {
    id: 1,
    'username': 'Shari',
    'password': 'ShariPassword',
    'location': 'San Ramon, CA',
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
    'location': 'San Ramon, CA',
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
    id: 1,
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
    id: 1,
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
    'email': 'cityhall@gmail.com',
    'website': 'cityhall.com',
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
    id: 1,
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
    'username': 'acedemyofsciences',
    'password': 'acedemyofsciences',
    'location': '55 Music Concourse Dr, San Francisco, CA',
    'phoneNumber': '415-379-8000',
    'email': 'acedemyofsciences@gmail.com',
    'website': 'acedemyofsciences.com',
    'style': 'T',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'deyoung',
    'password': 'deyoung',
    'location': '50 Hagiwara Tea Garden Dr, San Francisco, CA',
    'phoneNumber': '415-750-3600',
    'email': 'deyoung@gmail.com',
    'website': 'deyoung.famsf.org',
    'style': 'T, P',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'kezarstadium',
    'password': 'kezarstadium',
    'location': '670 Kezar Dr, San Francisco, CA',
    'phoneNumber': '415-831-5500',
    'email': 'sfrecpark@gmail.com',
    'website': 'sfrecpark.org',
    'style': 'F, T, P',
    'update': 'update me'
  },
  {
    id: 1,
    'username': 'palaceoffinearts',
    'password': 'palaceoffinearts',
    'location': '3301 Lyon St, San Francisco, CA',
    'phoneNumber': '415-563-6504',
    'email': 'palaceoffinearts@gmail.com',
    'website': 'palaceoffinearts.org',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'parisienne',
    'password': 'frenchstyle',
    'location': '18 Rue du Renard, 75004 Paris',
    'phoneNumber': '555-268-7691',
    'email': 'toureiffel@gmail.com',
    'website': 'parisstyle.org',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 1,
    'username': 'andrew',
    'password': 'lam',
    'location': '60 Queen St W, Toronto',
    'phoneNumber': '654-842-8945',
    'email': 'drew@gmail.com',
    'website': 'drewcutshair.org',
    'style': 'M',
    'update': 'update me'
  },
  {
    id: 1,
    'username': 'parul',
    'password': 'bir',
    'location': 'San Jose',
    'phoneNumber': '785-214-4086',
    'email': 'parul@gmail.com',
    'website': 'parulstyle.org',
    'style': 'F',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'matt',
    'password': 'pass',
    'location': 'West Hollywood, LA',
    'phoneNumber': '932-895-5343',
    'email': 'matt@gmail.com',
    'website': 'mattcuts.org',
    'style': 'M',
    'update': 'update me'
  },
  {
    id: 0,
    'username': 'ilke',
    'password': 'akcay',
    'location': 'Cihangir Istnbul',
    'phoneNumber': '675-933-2586',
    'email': 'ilke@gmail.com',
    'website': 'ilkestyle.org',
    'style': 'F',
    'update': 'update me'
  }
]


function userIndex(num) {
  if (CLEARDB_INSERT) {
    return 2 + (10 * (num-1));
  } else {
    return num;
  }
}

const booksingsArray = [
    {
    id_users: 7,
    id_stylists: 2,
    isconfirmed: 0,
    isComplete: 0,
    date: 'September, 1, 2017',
    time: '1:00am',
    location: '1023 Lyon St, San Francisco',
    detail: 'details'
  },
  {
    id_users: 6,
    id_stylists: 2,
    isconfirmed: 0,
    isComplete: 0,
    date: 'September, 1, 2017',
    time: '11:00am',
    location: '2014 Lyon St, San Francisco',
    detail: 'details'
  },
  {
    id_users: 4,
    id_stylists: 2,
    isconfirmed: 1,
    isComplete: 0,
    date: 'September, 1, 2017',
    time: '1:00pm',
    location: '2323 Lyon St, San Francisco',
    detail: 'details'
  },
  {
    id_users: 10,
    id_stylists: 2,
    isconfirmed: 1,
    isComplete: 0,
    date: 'September, 1, 2017',
    time: '1:00pm',
    location: '2323 Lyon St, San Francisco',
    detail: 'details'
  }
]

const messagesArray = [
  {

    id_sender: userIndex(1),
    id_recipient: userIndex(2),
    subjectHeading: 'Shari to mateo',
    body: 'Give me a fade bro!!!',

    time: new Date(),
    location: 'San Ramon, CA'
  },
  {

    id_sender: userIndex(2),
    id_recipient: userIndex(1),
    subjectHeading: 'Mateo to Shari',
    body: 'yea, i gotchu girl, lets meet there',
    time: new Date(),
    location: 'San Ramon, CA'
  },
  {

    id_sender: userIndex(1),
    id_recipient: userIndex(10),
    subjectHeading: 'Shari to cityhall',
    body: 'I want to color my hair pink',
    time: new Date(),
    location: 'San Francisco'
  },
  {

    id_sender: userIndex(10),
    id_recipient: userIndex(1),
    subjectHeading: 'cityhall to shari',
    body: 'can do',
    time: new Date(),
    location: 'San francisco'
  },
  {
    id_sender: userIndex(2),
    id_recipient: userIndex(3),
    subjectHeading: 'idk',
    body: 'idk',
    time: new Date(),
    location: '3301 Lyon St'
  }
];

messagesArray.forEach(message => helpers.postMessage(message));

const stylesArray = [
  'Afro',
  'Bangs',
  'Blow Out',
  'Bowl Cut',
  'Buzz Cut',
  'Caesar',
  'Conk',
  'Cornrows',
  'Crew Cut',
  'Dreadlocks',
  'Fade',
  'Fauxhawk',
  'Feathered Hair',
  'Fishtail',
  'Flattop',
  'Frosted Tips',
  'Highlights',
  'Hime Cut',
  'Intergalactic Waves',
  'Layered Hair',
  'Mullet',
  'Pixie Cut',
  'Pompadour',
  'Quiff'
]

const stylistServices = [
  {
    styleId: userIndex(2),
    stylistId: userIndex(1)
  },
  {
    styleId: userIndex(3),
    stylistId: userIndex(1)
  },
  {
    styleId: userIndex(13),
    stylistId: userIndex(1)
  },
  {
    styleId: userIndex(16),
    stylistId: userIndex(1)
  },
  {
    styleId: userIndex(20),
    stylistId: userIndex(1)
  },
  {
    styleId: userIndex(22),
    stylistId: userIndex(1)
  },
  {
    styleId: userIndex(24),
    stylistId: userIndex(1)
  },
  {
    styleId: userIndex(4),
    stylistId: userIndex(2)
  },
  {
    styleId: userIndex(5),
    stylistId: userIndex(2)
  },
  {
    styleId: userIndex(6),
    stylistId: userIndex(2)
  },
  {
    styleId: userIndex(8),
    stylistId: userIndex(2)
  },
  {
    styleId: userIndex(9),
    stylistId: userIndex(2)
  },
  {
    styleId: userIndex(11),
    stylistId: userIndex(2)
  },
  {
    styleId: userIndex(6),
    stylistId: userIndex(2)
  },
  {
    styleId: userIndex(21),
    stylistId: userIndex(3)
  },
  {
    styleId: userIndex(9),
    stylistId: userIndex(3)
  },
  {
    styleId: userIndex(24),
    stylistId: userIndex(3)
  },
  {
    styleId: userIndex(24),
    stylistId: userIndex(5)
  },
  {
    styleId: userIndex(9),
    stylistId: userIndex(5)
  },
  {
    styleId: userIndex(11),
    stylistId: userIndex(5)
  },
  {
    styleId: userIndex(2),
    stylistId: userIndex(7)
  },
  {
    styleId: userIndex(3),
    stylistId: userIndex(7)
  },
  {
    styleId: userIndex(16),
    stylistId: userIndex(7)
  },
  {
    styleId: userIndex(6),
    stylistId: userIndex(8)
  },
  {
    styleId: userIndex(8),
    stylistId: userIndex(8)
  },
  {
    styleId: userIndex(9),
    stylistId: userIndex(8)
  },
  {
    styleId: userIndex(20),
    stylistId: userIndex(9)
  },
  {
    styleId: userIndex(4),
    stylistId: userIndex(9)
  },
  {
    styleId: userIndex(5),
    stylistId: userIndex(9)
  },
  {
    styleId: userIndex(20),
    stylistId: userIndex(10)
  },
  {
    styleId: userIndex(4),
    stylistId: userIndex(10)
  },
  {
    styleId: userIndex(5),
    stylistId: userIndex(10)
  },
  {
    styleId: userIndex(5),
    stylistId: userIndex(11)
  },
  {
    styleId: userIndex(11),
    stylistId: userIndex(11)
  },
  {
    styleId: userIndex(21),
    stylistId: userIndex(11)
  },
  {
    styleId: userIndex(24),
    stylistId: userIndex(12)
  },
  {
    styleId: userIndex(9),
    stylistId: userIndex(12)
  },
  {
    styleId: userIndex(11),
    stylistId: userIndex(12)
  },
  {
    styleId: userIndex(9),
    stylistId: userIndex(13)
  },
  {
    styleId: userIndex(5),
    stylistId: userIndex(13)
  },
  {
    styleId: userIndex(4),
    stylistId: userIndex(13)
  },
  {
    styleId: userIndex(9),
    stylistId: userIndex(14)
  },
  {
    styleId: userIndex(6),
    stylistId: userIndex(14)
  },
  {
    styleId: userIndex(4),
    stylistId: userIndex(14)
  },
  {
    styleId: userIndex(3),
    stylistId: userIndex(16)
  },
  {
    styleId: userIndex(15),
    stylistId: userIndex(16)
  },
  {
    styleId: userIndex(19),
    stylistId: userIndex(16)
  },
  {
    styleId: userIndex(1),
    stylistId: userIndex(17)
  },
  {
    styleId: userIndex(11),
    stylistId: userIndex(17)
  },
  {
    styleId: userIndex(23),
    stylistId: userIndex(17)
  },
  {
    styleId: userIndex(5),
    stylistId: userIndex(18)
  },
  {
    styleId: userIndex(17),
    stylistId: userIndex(18)
  },
  {
    styleId: userIndex(16),
    stylistId: userIndex(18)
  },
  {
    styleId: userIndex(1),
    stylistId: userIndex(19)
  },
  {
    styleId: userIndex(2),
    stylistId: userIndex(19)
  },
  {
    styleId: userIndex(3),
    stylistId: userIndex(19)
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


booksingsArray.forEach(booking => {
  helpers.addToBookings(booking, resultFromServer => console.log(resultFromServer));
});

stylesArray.forEach(style => {
  helpers.addService(style, (res) => {
    console.log(res);
  });
});

stylistServices.forEach(style => {
  helpers.stylistservices(style.styleId, style.stylistId, (res) => {
    console.log(res)
  })
});

// implant image in users_stylists
for (var i = 0; i < 21; i++) {
    var id = i;
    var url = 'uploads/1496879961184.jpg';
    var url1 = 'uploads/1496880013410.jpg';
  model.con.query('UPDATE users_stylists SET image_url = ? WHERE type = 1', [url],function (err, result) {
    if (err) throw err;
    console.log('inserted');
  });
  model.con.query('UPDATE users_stylists SET image_url = ? WHERE type = 0', [url1],function (err, result) {
    if (err) throw err;
    console.log('inserted');
  });
}