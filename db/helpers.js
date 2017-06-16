var model = require('./model.js');

var addUserStylist = function(type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url, aboutMe, callback) {
  var sql = "INSERT INTO users_stylists (type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url, aboutMe) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  model.con.getConnection(function(err, connection){
    connection.query(sql, [type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url, aboutMe], function (err, result) {
      connection.release();
      if (err) console.log(err);
      callback(result);
    });
  });
};

var getUser = function(userId, callback) {
  var sql = 'SELECT * FROM `users_stylists` WHERE `id` = ?';

  model.con.getConnection(function(err, connection){
    connection.query(sql, [userId], function (err, result) {
      connection.release();
      if (err) throw err;
      callback(results);
    });
  });
};

// stylists are saved in database with type 0
var getAllStylists = function(callback) {
  var sql = 'SELECT * FROM `users_stylists` WHERE `type` = 0';
  model.con.getConnection(function(err, connection){
    connection.query(sql, function(error, results, fields) {
      connection.release();
      if (err) throw err;
      callback(results);
    });
  });

};

var addLocation = function (latitude, longitude, id, callback) {
  var sql = 'UPDATE users_stylists SET latitude = ?, longitude = ? WHERE id = ?'
  executeQuery(sql, [latitude, longitude, id], function(err, results) {
    if (err) throw err;
    callback();
  });
};

var calculateDistance = function distance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = Math.PI * lat1/180
  var radlat2 = Math.PI * lat2/180
  var theta = lon1-lon2
  var radtheta = Math.PI * theta/180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist)
  dist = dist * 180/Math.PI
  dist = dist * 60 * 1.1515
  if (unit=="K") { dist = dist * 1.609344 }
  if (unit=="N") { dist = dist * 0.8684 }
  return dist
};

function executeQuery(sql, vals, callback) {
  model.con.getConnection(function(err, connection) {
    connection.query(sql, vals, function(error, results, fields) {
      connection.release();
      //console.log("Query results: ", sql, vals, results, error);
      callback(err, results);
    });
  });
};

//update image url for the userStylists
var updateImage = function (imageUrl, id, callback) {
  var sql = 'UPDATE users_stylists SET image_url = ? WHERE id = ?';
  executeQuery(sql, [imageUrl, id], function(err, results) {
    if (err) throw err;
    callback();
  });
};

var updateProfile = function(type, name, password, billingaddress, phonenumber, email, site_url, gender, aboutMe, image_url, id, callback) {
  var sql = 'UPDATE users_stylists SET type = ?, name = ?, password = ?, billingaddress = ?, phonenumber = ?, email = ?, site_url = ?, gender = ?, aboutMe = ?, image_url = ? WHERE id = ?'

  var values = [type, name, password, billingaddress, phonenumber, email, site_url, gender, aboutMe, image_url, id];

  executeQuery(sql, values, function(err, results) {
    if (err) throw err;
    callback();
  });
};

var addToBookings = function(booking, callback) {
  var sql = 'INSERT INTO bookings (id_users, id_stylists, isconfirmed, time, date, location, isComplete, detail) VALUES (?, ?, ?, ?, ?, ?,?,?)';
  var values = [booking.id_users, booking.id_stylists, booking.isconfirmed, booking.time, booking.date, booking.location, booking.isComplete, booking.detail];
  executeQuery(sql, values, function(err, results) {
    if (err) throw err;
    for (var i = 0; i < booking.styles.length; i++) {
      executeQuery('INSERT INTO bookings_styles (id_booking, id_style) VALUES (?, ?)', [results.insertId, booking.styles[i]], function(err, results) {
        if (err) throw err;
      });

    }
    callback(results);
  });
};

var getBookings = function(userId, callback) {
  var sql = `
    SELECT b.id, b.id_stylists, b.isconfirmed, b.time, b.location, b.isComplete
    FROM bookings b INNER JOIN users_stylists us
    WHERE b.id_stylists = ? AND b.id_users = us.id`;
  executeQuery(sql, [userId], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var getPendingBookings = (userId, type, callback) => {
  if (type === 0) {
    var sql = `
      SELECT b.id, b.id_stylists, b.isconfirmed, b.time, b.location, b.isComplete, us.phonenumber, us.name, us.image_url
      FROM bookings b INNER JOIN users_stylists us
      WHERE b.id_stylists = ? AND b.isconfirmed = 0 AND us.id = b.id_users`;
  } else if (type === 1) {
    var sql = `
      SELECT b.id, b.id_stylists, b.isconfirmed, b.time, b.location, b.isComplete, us.phonenumber, us.name, us.image_url
      FROM bookings b INNER JOIN users_stylists us
      WHERE b.id_users = ? AND b.isconfirmed = 0 AND us.id = b.id_stylists`;
  }
  executeQuery(sql, [userId], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var confirmBooking = (bookingId, callback) => {
  var sql = `
    UPDATE bookings
    SET isconfirmed = 1
    WHERE bookings.id = ?`;

  executeQuery(sql, [bookingId], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var cancelConfirmedBooking = (bookingId, callback) => {
  var sql = `
    UPDATE bookings
    SET isconfirmed = 0
    WHERE bookings.id = ?`;
  executeQuery(sql, [bookingId], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var completeBooking = (id, callback) => {
  var sql = `
    UPDATE bookings
    SET isComplete = 1
    WHERE bookings.id = ?`;
  executeQuery(sql, [id], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var getStylistBookings = function(stylistId, callback) {
  var sql = 'SELECT * FROM `bookings` WHERE `id_stylists` = ?';
  executeQuery(sql, [stylistId], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var getBookingsDue = (id, type, callback) => {
  if (type === 0) {
    var sql = `SELECT b.id, b.id_stylists, b.time, b.location, us.name, us.email, us.phonenumber, us.image_url
      FROM bookings b INNER JOIN users_stylists us
      WHERE b.isComplete = 1
      AND b.id_stylists = ?
      AND us.id = b.id_users`;
  } else if (type === 1) {
    var sql = `SELECT b.id, b.id_stylists, b.time, b.location, us.name, us.email, us.phonenumber, us.image_url
      FROM bookings b INNER JOIN users_stylists us
      WHERE b.isComplete = 1
      AND b.id_users = ?
      AND us.id = b.id_stylists`;
  }

  executeQuery(sql, [id], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var readyConfirmedBooking = (id, callback) => {
  var sql = `
    UPDATE bookings
    SET isconfirmed = 2
    WHERE bookings.id = ?
  `;

  executeQuery(sql, [id], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var cancelPaymentBooking = (id, callback) => {
  var sql = `
    UPDATE bookings
    SET isComplete = 0, isconfirmed = 1
    WHERE bookings.id = ?
  `;
  executeQuery(sql, [id], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var deleteBooking = (id, callback) => {
  var sql = 'DELETE FROM bookings WHERE id = ?';
  executeQuery(sql, [id], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var historyBooking = (id, callback) => {
  var sql = 'UPDATE bookings SET isComplete = 2 WHERE bookings.id = ?';
  executeQuery(sql, [id], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var getHistoryBookings = (id, type, callback) => {
  if (type === 0) {
    var sql = `SELECT b.id, b.id_stylists, b.time, b.location, us.name, us.email, us.phonenumber, us.image_url
      FROM bookings b INNER JOIN users_stylists us
      WHERE b.isComplete = 2
      AND b.id_stylists = ?
      AND us.id = b.id_users`;
  } else if (type === 1) {
    var sql = `SELECT b.id, b.id_stylists, b.time, b.location, us.name, us.email, us.phonenumber, us.image_url
      FROM bookings b INNER JOIN users_stylists us
      WHERE b.isComplete = 2
      AND b.id_users = ?
      AND us.id = b.id_stylists`;
  }
  executeQuery(sql, [id], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var deleteUser = function(userId) {
  var sql = 'delete from `users_stylists` where `id` = ?';
  executeQuery(sql, [userId], function(err, results){
    if (err) throw err;
  });
};

var deleteBooking = function(bookingId) {

  var sql = 'delete from `bookings` where `id` = ?';
  executeQuery(sql, [bookingId], function(err, results){
    if (err) throw err;
  });
};

var updateBooking = function(id_users, id_stylists, isconfirmed, time, location, id, callback) {
  var sql = 'UPDATE `bookings` SET id_users = ?, id_stylists = ?, isconfirmed = ?, time = ?, location = ? where id = ?'
  var vals = [id_users, id_stylists, isconfirmed, time, location, id];
  executeQuery(sql, vals, function(err, results){
    if (err) throw err;
    callback();
  });


};

var getConfirmed = (id, type, callback) => {
  if (type === 0) {
    var sql = `
      SELECT b.id, b.id_stylists, b.time, b.location, us.name, us.email, us.phonenumber, us.image_url
      FROM bookings b INNER JOIN users_stylists us
      WHERE b.isconfirmed = 1 AND b.id_stylists = ?
      AND us.id = b.id_users AND b.isComplete = 0
    `;
  } else if (type === 1) {
    var sql = `
      SELECT b.id, b.id_stylists, b.time, b.location, us.name, us.email, us.phonenumber, us.image_url
      FROM bookings b INNER JOIN users_stylists us
      WHERE b.isconfirmed = 1 AND b.id_users = ?
      AND us.id = b.id_stylists AND b.isComplete = 0
    `;
  }
  executeQuery(sql, [id], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

// helper to add service to the services table in database
var addService = function(serviceName, callback) {
  var sql = 'INSERT INTO services (servicename) VALUES (?)';
  executeQuery(sql, [serviceName], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var stylistservices = function(serviceId, stylistId, callback) {
  var sql = 'INSERT INTO stylists_services (id_services, id_users_stylists) VALUES (?, ?)';
  executeQuery(sql, [serviceId, stylistId], function(err, results){
    if (err) throw err;
    callback();
  });
};

var getStylistServices = function(stylistId, callback) {

  var sql = 'select `servicename` from `stylists_services` as ss, `services` as s  where `id_users_stylists`= ? and ss.id_services = s.id';
  executeQuery(sql, [stylistId], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var getStyles = function(stylistId, callback) {
  var sql = `
    SELECT s.servicename, s.id FROM
    services s INNER JOIN stylists_services ss
    WHERE ss.id_users_stylists = ?
    AND ss.id_services = s.id`;
  executeQuery(sql, [stylistId], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var getAllStyles = (callback) => {
  executeQuery('SELECT * FROM services', [], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var updateStyles = (stylistId, styles) => {
  model.con.query('DELETE FROM stylists_services WHERE id_users_stylists = ?', [stylistId]);
  for (var i = 0; i < styles.length; i++) {
    var sql = `
      INSERT INTO stylists_services (id_services, id_users_stylists)
      VALUES(?, ?)`;
    executeQuery(sql, [styles[i], stylistId], function(err, results){
      if (err) throw err;
    });
  }
};

/////////////////////
// MESSAGE HELPERS //
/////////////////////
var postMessage = (message, callback) => {
  var sql = 'INSERT INTO messages (id_sender, id_recipient, subjectHeading, body, time, location) VALUES (?, ?, ?, ?, ?, ?)';
  var vals = [message.id_sender, message.id_recipient, message.subjectHeading, message.body, message.time, message.location];
  executeQuery(sql, vals, function(err, results){
    if (err) throw err;
    executeQuery(`INSERT INTO recipients (id, name)
        VALUES (?, (SELECT name FROM users_stylists WHERE users_stylists.id = ?))`,
        [message.id_sender, message.id_recipient], function(err, results) {
          if (err) throw err;
          callback();
        });
  });

};

var getMessages = (id, callback) => {
  var sql =  `SELECT r.name as recipient, us.name as sender, m.subjectHeading, m.body, m.time, m.location, m.id, m.id_sender, m.id_recipient
    FROM messages m
    INNER JOIN recipients r ON (m.id_recipient = ? OR m.id_sender = ?) AND m.id = r.messageId
    INNER JOIN users_stylists us ON us.id = m.id_sender`;
  executeQuery(sql, [id, id, ], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var deleteChat = (ids, callback) => {
  executeQuery(`DELETE FROM messages WHERE id in (?)`, [ids], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

//get image_url from users_Stylists
var getImagePath = function(id, callback) {
  executeQuery('select `image_url` from `users_stylists` where id = ?', [id], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

var validateUser = (username, password, callback) => {
  var sql = 'SELECT * FROM users_stylists WHERE name = ? AND password = ?';
  executeQuery(sql, [username, password], function(err, results){
    if (err) throw err;
    callback(results);
  });
};

module.exports.addLocation = addLocation;
module.exports.addUserStylist = addUserStylist;
module.exports.getUser = getUser;
module.exports.getAllStylists = getAllStylists;
module.exports.calculateDistance = calculateDistance;
module.exports.addToBookings = addToBookings;
module.exports.getStylistBookings = getStylistBookings;
module.exports.getBookings = getBookings;
module.exports.deleteUser = deleteUser;
module.exports.addService = addService;
module.exports.stylistservices = stylistservices;
module.exports.getStyles = getStyles;
module.exports.getMessages = getMessages;
module.exports.postMessage = postMessage;
module.exports.deleteChat = deleteChat;
module.exports.confirmBooking = confirmBooking;
module.exports.completeBooking = completeBooking;
module.exports.deleteBooking = deleteBooking;
module.exports.getBookingsDue = getBookingsDue;
module.exports.updateProfile = updateProfile;
module.exports.updateBooking = updateBooking;
module.exports.updateImage = updateImage;
module.exports.getImagePath = getImagePath;
module.exports.validateUser = validateUser;
module.exports.getAllStyles = getAllStyles;
module.exports.getConfirmed = getConfirmed;
module.exports.readyConfirmedBooking = readyConfirmedBooking;
module.exports.getPendingBookings = getPendingBookings;
module.exports.cancelConfirmedBooking = cancelConfirmedBooking;
module.exports.cancelPaymentBooking = cancelPaymentBooking;
module.exports.updateStyles = updateStyles;
module.exports.historyBooking = historyBooking;
module.exports.getHistoryBookings = getHistoryBookings;