const controllers = require('./../database/controllers.js');

const getRoommates = (req, res) => {
  controllers.getAllRoommates((roommates) => {
    console.log('roommates in server routes: ', roommates)
    res.send(roommates)
  })
}

const getChores = (req, res) => {
  controllers.getAllChores((chores) => {
    console.log('chores in server routes: ', chores)
    res.send(chores)
  })
}

const getLog = (req, res) => {
  console.log('looking for chore to log: ', req.body)
  let chore = req.body
  controllers.getChoreLog(chore, (log) => {
    console.log('log for chore in server routes: ', log)
    res.send(log)
  })
}




module.exports = {
  getRoommates,
  getChores,
  getLog
}
