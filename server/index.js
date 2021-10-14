const express = require('express');
const app = express();
const http = require('http');
const port = 8000;
const bodyParser = require('body-parser');
const routes = require('./routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/roommates', routes.getRoommates)
app.get('/chores', routes.getChores)


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});