var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'task3'
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    console.log(`mysql connected `);
  }
});
module.exports = connection;