const { connection } = require('./../database/index.js');
const controllers = require('./../database/controllers.js');

const getRoommates = (req, res) => {
  controllers.getAllRoommates((roommates) => {
    let rms = [];
    for (let i = 0; i < roommates.length; i++) {
      let currentRm = roommates[i];
      rms.push(currentRm.name);
    }
    res.send(rms);
  })
}

const getChores = (req, res) => {
  controllers.getAllChores((chores) => {
    let choresAndAssignees = [];
    for (let i = 0; i < chores.length; i++) {
      let currentChore = chores[i];
      choresAndAssignees.push(chores[i]);
    }
    res.send(choresAndAssignees);
  })
}

const getChoreLog = (req, res) => {
  let choreLogs = [];
  let chore = req.query.chore;
  controllers.getAllLogs(chore, (log) => {
    for (let i = 0; i < log.length; i++) {
      let currentEntry = log[i];
      choreLogs.push(currentEntry);
    }
    res.send(choreLogs);
  })
}

const addRoommate = (req, res) => {
  let name = req.body.name
  controllers.addNewRoommate(name, (success) => {
    res.send('ok')
  })
}

module.exports = {
  getRoommates,
  getChores,
  getChoreLog,
  addRoommate
}
