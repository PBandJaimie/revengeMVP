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
  console.log('looking for chore to log: ', req.body)
  let chore = req.body
  controllers.getAllLogs(chore, (log) => {
    console.log('log for chore in server routes: ', log)
    res.send(log)
  })
}


module.exports = {
  getRoommates,
  getChores,
  getChoreLog
}
