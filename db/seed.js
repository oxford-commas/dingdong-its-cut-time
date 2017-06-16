const helpers = require('./helpers.js');
const services = require('../locationServices.js');
var model = require('./model.js');

var CLEARDB_INSERT = false;

const stylistArray = [
  {
    'type': 1,
    'username': 'Shari Tharirian',
    'password': 'pass',
    'location': 'San Ramon, CA',
    'phoneNumber': '967-890-7890',
    'email': 'Shari@gmail.com',
    'website': 'ShariStyles.com',
    'gender': 'F',
    'image_url': 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiwht7f6MLUAhUV_WMKHbUXBNAQjRwIBw&url=http%3A%2F%2Fssw.uga.edu%2Ffaculty%2Fmiller.html&psig=AFQjCNGJfrY5Tz4kbk6hqm3278pXyNh4LA&ust=1497718067120059',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Wendy Moreno',
    'password': 'pass',
    'location': 'San Ramon, CA',
    'phoneNumber': '967-123-7890',
    'email': 'mateo@gmail.com',
    'website': 'MateoStyles.com',
    'gender': 'F',
    'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/aihtcss-bynZV_mMJwCSdw/348s.jpg',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Jenny Flair',
    'password': 'pass',
    'location': 'Brewer Subdivision, Hillsborough, CA',
    'phoneNumber': '967-123-7890',
    'email': 'rflair@gmail.com',
    'website': 'ricflairwoo.com',
    'gender': 'M',
    'image_url': 'http://www.eastbaytimes.com/wp-content/uploads/2016/07/20100129__zenjen31.jpg?w=400',
    'update': 'update me'
  },
  {
    'type': 1,
    'username': 'Paul Mitchels',
    'password': 'pass',
    'location': '1851 Lexington Ave, San Mateo, CA',
    'phoneNumber': '967-890-1238',
    'email': 'pmitchels@gmail.com',
    'website': 'pmitchels.com',
    'gender': 'M',
    'image_url': 'https://d1cesmq0xhh7we.cloudfront.net/c0e7a2e2-ff60-47f4-8618-02838a7728fdzoom.jpg',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Tess Jackson',
    'password': 'pass',
    'location': 'Redwood Shores, Redwood City, CA',
    'phoneNumber': '832-592-7890',
    'email': 'tess_jackson@gmail.com',
    'website': 'tess-jackson.com',
    'gender': 'M',
    'image_url': 'http://www.2-insurance.com/wp-content/uploads/2016/10/The-Number-One-Article-on-Beauty-Salon-Insurance.jpg',
    'update': 'update me'
  },
  {
    'type': 1,
    'username': 'Claire Mulhern',
    'password': 'pass',
    'location': '506 N Delaware St, San Mateo, CA',
    'phoneNumber': '650-558-2399',
    'email': 'clairemulhern@gmail.com',
    'website': 'clairemulhern.org',
    'gender': 'F',
    'image_url': 'https://static1.squarespace.com/static/55e47e06e4b0af38e246affe/t/55ef6a99e4b0fd8857a6e6f1/1447266577657/Molly+Baker+hair+stylist+at+Bespoke+Hair+Salon',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Kelsie Chapman',
    'password': 'pass',
    'location': 'Bush St & Grant Ave., San Francisco, CA',
    'phoneNumber': '503-321-7890',
    'email': 'kelsie_chapman@gmail.com',
    'website': 'kelsiechapman.com',
    'gender': 'M',
    'image_url': 'https://static1.squarespace.com/static/55be5008e4b055590b378eb7/t/5609a1dbe4b080746e856aeb/1443471836869/Jen+Dannelly.jpg',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Amelie Waliany',
    'password': 'cablecar',
    'location': '1201 Mason St, San Francisco, CA',
    'phoneNumber': '415-474-1887',
    'email': 'amelie_wal@gmail.com',
    'website': 'ameliewaliany.org',
    'gender': 'F',
    'image_url': 'https://www.mlaglobal.com/~/media/Allegis/MLAGlobal/Images/Consultant-Images/Gorodetsky-Anna.jpg?h=300&w=200&useCustomFunctions=1&centerCrop=1',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Mary Lucchino',
    'password': 'pass',
    'location': '1111 Gough St, San Francisco, CA',
    'phoneNumber': '415-567-2020',
    'email': 'mary_lucchino@gmail.com',
    'website': 'marylucchino.org',
    'gender': 'M',
    'image_url': 'http://salonplaza.com/wp-content/uploads/2016/03/hair_salon_booth_rental_norfolk_va.jpg',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Bobby Kim',
    'password': 'pass',
    'location': '1 Dr Carlton B Goodlett Pl, San Francisco, CA',
    'phoneNumber': '415-554-4000',
    'email': 'bobbykim@gmail.com',
    'website': 'bobbykim.com',
    'gender': 'M',
    'image_url': 'http://www.beautycollectivesalon.com/_wp/wp-content/uploads/2012/08/Beauty-Collective-Hair-Salon-Tarek-Makki.jpg',
    'update': 'update me'
  },
    {
    'type': 0,
    'username': 'Erin Zadkovsky',
    'password': 'pass',
    'location': 'Steiner St, San Francisco, CA',
    'phoneNumber': '415-218-0259',
    'email': 'erin.zadkovsky@gmail.com',
    'website': 'erin-zadkovsky.com',
    'gender': 'F',
    'image_url': 'https://static1.squarespace.com/static/55be5008e4b055590b378eb7/t/55d8b9fee4b07bbfae457d3a/1440266751320/shannon+brown.jpg',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Mary Min',
    'password': 'pass',
    'location': 'Lombard St, San Francisco, CA',
    'phoneNumber': '967-523-1235',
    'email': 'lombardi@gmail.com',
    'website': 'Lombardi.com',
    'gender': 'F',
    'image_url': 'http://thekinkteam.com/wp-content/uploads/2017/01/woman-hair-stylist-1.jpg',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Zack Howitt',
    'password': 'pass',
    'location': '900 North Point St, San Francisco, CA',
    'phoneNumber': '967-890-7890',
    'email': 'zack_howitt@gmail.com',
    'website': 'museemecanique.com',
    'gender': 'F',
    'image_url': 'http://www.crowdedfire.org/wp-content/uploads/2016/06/sean-sq.jpg',
    'update': 'update me'
  },
  {
    'type': 1,
    'username': 'Kayla Trumbo',
    'password': 'pass',
    'location': '375 11th St, San Francisco, CA',
    'phoneNumber': '415-626-1409',
    'email': 'kayla.trumbo@gmail.com',
    'website': 'kayla-trumbo.com',
    'gender': 'F',
    'image_url': 'http://www.lifesci.dundee.ac.uk/groups/jkdmm/photos/people_adj/Francesca_Carrieri.jpg',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Georgina Markoulakis',
    'password': 'pass',
    'location': '429 Castro St, San Francisco, CA',
    'phoneNumber': '415-621-6120',
    'email': 'm.georgina@gmail.com',
    'website': 'georgina.com',
    'gender': 'F',
    'image_url': 'https://1.bp.blogspot.com/-efOHqYMExpU/VwkyljSZWSI/AAAAAAAAnUs/Gzkkc-AyDfkATn6SCaRlOUR5cOa5GbvWA/s1600/Francesca%2BBlanchard.jpg',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Allison Press',
    'password': 'pass',
    'location': '55 Music Concourse Dr, San Francisco, CA',
    'phoneNumber': '415-379-8000',
    'email': 'acedemyofsciences@gmail.com',
    'website': 'acedemyofsciences.com',
    'gender': 'F',
    'image_url': 'https://static.wixstatic.com/media/34b34e_ebea2885cdd742b298edb91c5604d12c~mv2.jpg_srz_324_381_85_22_0.50_1.20_0.00_jpg_srz',
    'update': 'update me'
  },
  {
    'type': 0,
    'username': 'Liz Lemon',
    'password': 'pass',
    'location': '670 Kezar Dr, San Francisco, CA',
    'phoneNumber': '415-831-5500',
    'email': 'sfrecpark@gmail.com',
    'website': 'sfrecpark.org',
    'gender': 'F',
    'image_url': 'https://static1.squarespace.com/static/54ff5c28e4b0209aab116cd2/t/57247303859fd0c265e39dc5/1462006536961/?format=300w',
    'update': 'update me'
  },
  {
    'type': 1,
    'username': 'Noah Katz',
    'password': 'pass',
    'location': '3301 Lyon St, San Francisco, CA',
    'phoneNumber': '415-563-6504',
    'email': 'palaceoffinearts@gmail.com',
    'website': 'palaceoffinearts.org',
    'gender': 'M',
    'image_url': 'https://2q72xc49mze8bkcog2f01nlh-wpengine.netdna-ssl.com/wp-content/uploads/sites/10/2014/10/Kevin-Dowell-16-zagatsf-HI-RES.jpg',
    'update': 'update me'
  },
  {
    'type': 1,
    'username': 'Dorothy Burch',
    'password': 'pass',
    'location': '300 Divisadero St, San Francisco',
    'phoneNumber': '654-842-8945',
    'email': 'dorothy-burch@gmail.com',
    'website': 'dorothyburch.org',
    'gender': 'F',
    'image_url': 'http://ypenergy.org/bay-area/wp-content/uploads/sites/18/2015/03/FW.jpg',
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

const bookingsArray = [
  {
    id_users: userIndex(4),
    id_stylists: userIndex(2),
    isconfirmed: 0,
    isComplete: 0,
    time: 'in a minute',
    date: 'today',
    location: 'San Mateo, CA, CA',
    styles: [],
    detail: 'Mateo'
  },
  {
    id_users: userIndex(4),
    id_stylists: userIndex(2),
    isconfirmed: 1,
    isComplete: 0,
    time: 'in a minute',
    date: 'today',
    location: '1851 Lexington Ave, San Mateo, CA',
    styles: [],
    detail: 'mrhighland'
  },
  {
    id_users: userIndex(6),
    id_stylists: userIndex(2),
    isconfirmed: 0,
    isComplete: 0,
    date: 'September, 1, 2017',
    time: '11:00am',
    location: '2014 Lyon St, San Francisco',
    styles: [],
    detail: 'details'
  },
  {
    id_users: userIndex(15),
    id_stylists: userIndex(16),
    isconfirmed: 0,
    isComplete: 0,
    date: 'September, 1, 2017',
    time: '1:00pm',
    location: '2323 Lyon St, San Francisco',
    styles: [],
    detail: 'details'
  },
  {
    id_users: userIndex(15),
    id_stylists: userIndex(19),
    isconfirmed: 0,
    isComplete: 0,
    date: 'September, 1, 2017',
    time: '1:00pm',
    location: '2323 Lyon St, San Francisco',
    styles: [],
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

// messagesArray.forEach(message => helpers.postMessage(message));

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
    stylist.type,
    stylist.username,
    stylist.password,
    stylist.location,
    stylist.phoneNumber,
    stylist.email,
    stylist.website,
    stylist.gender,
    stylist.image_url,
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

bookingsArray.forEach(booking => {
  helpers.addToBookings(booking, resultFromServer => console.log(resultFromServer));
});

stylesArray.forEach(style => {
  helpers.addService(style, (res) => {
    console.log(res);
  });
});

// stylistServices.forEach(style => {
//   helpers.stylistservices(style.styleId, style.stylistId, (res) => {
//     console.log(res)
//   })
// });

// implant (image) in users_stylists
//   for (var i = 0; i < 21; i++) {
//     var id = i;
//     var url = 'uploads/1496879961184.jpg';
//     var url1 = 'uploads/1496880013410.jpg';
//   model.con.query('UPDATE users_stylists SET image_url = ? WHERE type = 1', [url], function(err, result) {
//     if (err) throw err;
//     console.log('inserted');
//   });
//   model.con.query('UPDATE users_stylists SET image_url = ? WHERE type = 0', [url1], function(err, result) {
//     if (err) throw err;
//     console.log('inserted');
//   });
// }