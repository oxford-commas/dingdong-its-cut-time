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

con.getConnection(function(err, connection) {
  // Use the connection
  connection.query('SELECT something FROM sometable', function (error, results, fields) {
    // And done with the connection.
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
});

module.exports.con = con;

