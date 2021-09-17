var mysql      = require('mysql');
//connections string 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'task'
});

//connecting 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    console.log(`mysql connected `);
  }
});
module.exports = connection;