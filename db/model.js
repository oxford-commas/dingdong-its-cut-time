var mysql = require('mysql');

var con = mysql.createPool(process.env.CLEARDB_DATABASE_URL);

module.exports.con = con;