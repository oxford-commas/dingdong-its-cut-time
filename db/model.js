var mysql = require('mysql');

/*
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dingdong'
});
*/
// console.log("URL: ", process.env.CLEARDB_DATABASE_URL);

var con = mysql.createPool(process.env.CLEARDB_DATABASE_URL);

module.exports.con = con;

