// const mysql = require('mysql');
// const config = require('./index.js');
const { connection } = require('./index.js');

const getAllRoommates = function(callback) {
  const queryString = 'SELECT * FROM roommates ORDER BY created ASC';
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
  const queryString = 'SELECT * FROM CHORES ORDER BY name ASC';
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
  const queryString = `SELECT * FROM log WHERE log.chore = "${chore}" ORDER BY date ASC`;
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
  const queryString = `INSERT INTO roommates(name, created) VALUES("${roommateName}", CURRENT_TIMESTAMP())`;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in addNewRoommate: ', err)
      callback(err);
    } else {
      callback(data);
    }
  })
}

const addNewChore = function(choreName, assignee, callback) {
  const queryString = `INSERT INTO chores(name, assignee, created) VALUES("${choreName}", "${assignee}", CURRENT_TIMESTAMP())`;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in addNewChore: ', err)
      callback(err);
    } else {
      callback(data);
    }
  })
}

const addNewLogEntry = function(roommateName, choreName, callback) {
  const queryString = `INSERT INTO log(roommate, chore, date) VALUES("${roommateName}", "${choreName}", CURRENT_TIMESTAMP())`;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in addNewLogEntry: ', err)
      callback(err);
    } else {
      callback(data);
    }
  })
}

const updateAssignee = function(chore, justCompleted, nextToDo, callback) {
  const queryString = `UPDATE chores SET assignee = "${nextToDo}" WHERE name = "${chore}" AND assignee = "${justCompleted}"`;
  connection.query(queryString, (err, data) => {
    if (err) {
      console.log('ERROR in updateAssignee: ', err)
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
  addNewRoommate,
  addNewChore,
  addNewLogEntry,
  updateAssignee
}