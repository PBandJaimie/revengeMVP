// const mysql = require('mysql');
// const config = require('./index.js');
const { connection } = require('./index.js');

const getAllRoommates = function(callback) {
  const queryString = 'SELECT * FROM roommates';
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in getAllRoommates: ', err)
      callback(err);
    } else {
      callback(data);
    }
  });
};

const getAllChores = function(callback) {
  const queryString = 'SELECT * FROM CHORES';
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in getAllChores: ', err)
      callback(err);
    } else {
      callback(data);
    }
  });
};

const getAllLogs = function(chore, callback) {
  const queryString = `SELECT * FROM log WHERE log.chore = "${chore}"`;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in getAllLogs: ', err)
      callback(err);
    } else {
      callback(data);
    }
  });
};

const addNewRoommate = function(roommateName, callback) {
  console.log('adding roomate in controllers')
  const queryString = `INSERT INTO roommates(name) VALUES("${roommateName}")`;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in addNewRoommate: ', err)
      callback(err);
    } else {
      callback(data);
    }
  })
}



module.exports = {
  getAllRoommates,
  getAllChores,
  getAllLogs,
  addNewRoommate
}