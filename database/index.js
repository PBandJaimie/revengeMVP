let mysql = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'isthisTAB00?',
  database : 'dishPlease'
});

module.exports = {
  connection
};