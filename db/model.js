var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'dingdong'
// });

var con = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);

con.connect();

module.exports.con = con;

