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
  const queryString = 'SELECT chores.name AS chore, roommates.name AS assignee FROM roommates JOIN chores ON roommates.id = chores.assignee_id';
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
  const choreId = `SELECT id FROM chores WHERE name = "${chore}"`;
  console.log('choreID: ', choreId)
  const queryString = `SELECT * FROM log WHERE chore_id = "${choreId}"`;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in getAllLogs: ', err)
      callback(err);
    } else {
      console.log('getAllLogs DATA: ', data)
      callback(data);
    }
  });
};

module.exports = {
  getAllRoommates,
  getAllChores,
  getAllLogs
}