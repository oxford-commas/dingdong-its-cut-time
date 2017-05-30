var model = require('./model.js');

var addUserStylist = function(type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url, callback) {
  var sql = "INSERT INTO users_stylists (type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  model.con.query(sql, [type, name, password, billingaddress, phonenumber, email, site_url, gender, image_url],function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

var getUser = function(userId, callback) {
  model.con.query('SELECT * FROM `users_stylists` WHERE `id` = ?', [userId], function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
    //console.log('results is this ', results);
    callback(results);
  });
}


var addLocation = function (latitude, longitude, id, callback) {
  //var sql = "INSERT INTO users_stylists (latitude, longitude) VALUES (?, ? )";
  //console.log('I am in updates');
  var sql = 'UPDATE users_stylists SET latitude = ?, longitude = ? WHERE id = ?'
  model.con.query(sql, [latitude, longitude, id],function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    callback();
  });
}

module.exports.addLocation = addLocation;
module.exports.addUserStylist = addUserStylist;
module.exports.getUser = getUser;

//connection.query('UPDATE users SET Name = ? WHERE UserID = ?', [name, userId])
//var query = 'UPDATE employee SET profile_name = ?, phone =?, .. WHERE id=?';