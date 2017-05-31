var mysql = require('../server/node_modules/mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dingdong'
});

con.connect();

module.exports.con = con;

