const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});