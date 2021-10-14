const controllers = require('./../database/controllers.js');

const getRoommates = (req, res) => {
  controllers.getAllRoommates((roommates) => {
    console.log('roommates is server routes: ', roommates)
    res.send(roommates)
  })
}

const getChores = (req, res) => {
  controllers.getAllChores((chores) => {
    console.log('roommates is server routes: ', chores)
    res.send(chores)
  })
}




module.exports = {
  getRoommates,
  getChores
}
