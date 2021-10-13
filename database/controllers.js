const mysql = require('mysql');
const config = require('./index.js');
const connection = mysql.createConnection(config);

const getAllRoommates = function(callback) {
  const queryString = SELECT * FROM roommates;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in getAllRoommates: ', err)
      callback(err);
    } else {
      console.log('getAllRoommates DATA: ', data)
      callback(data);
    }
  });
};

module.exports = {
  getAllRoommates
}