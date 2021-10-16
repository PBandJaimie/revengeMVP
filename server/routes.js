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

const addChore = (req, res) => {
  let chore = req.body.name;
  let assignee = req.body.assignee;
  controllers.addNewChore(chore, assignee, (success) => {
    res.send('ok')
  })
}

const addLogEntry = (req, res) => {
  let roommateName = req.body.name;
  let chore = req.body.chore;
  let names = [];
  let newAssignee = '';
  controllers.addNewLogEntry(roommateName, chore, (success) => {
    controllers.getAllRoommates((roommatesData) => {
      for (let i = 0; i < roommatesData.length; i++) {
        names.push(roommatesData[i].name)
      }
      let completedByIndex = names.indexOf(roommateName);
      let nextIndex = completedByIndex + 1;
      let newAssignee = names[nextIndex] || names[0];
      controllers.updateAssignee(chore, roommateName, newAssignee, (updated) => {
        res.send('ok');
      })
    })
  })
}

module.exports = {
  getRoommates,
  getChores,
  getChoreLog,
  addRoommate,
  addChore,
  addLogEntry
}
