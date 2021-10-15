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

const getAllChores = function(callback) {
  const queryString = SELECT * FROM chores;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in getAllChores: ', err)
      callback(err);
    } else {
      console.log('getAllChores DATA: ', data)
      callback(data);
    }
  });
};

const getChoreLog = function(chore, callback) {
  const choreId = `SELECT id FROM chores WHERE name = "${chore}"`;
  const queryString = `SELECT * FROM log WHERE chore_id = "${choreId}"`;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in getChoreLog: ', err)
      callback(err);
    } else {
      console.log('getChoreLog DATA: ', data)
      callback(data);
    }
  });
};

module.exports = {
  getAllRoommates,
  getAllChores,
  getChoreLog
}