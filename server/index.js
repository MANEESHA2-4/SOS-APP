const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(express.static('public'));
const port = 8000;
const cors = require('cors');
const dbconnection = require('./db');
const { request, response } = require('express');
app.use(bodyparser.json());
app.use(express.static('public'));
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);
app.post('/postquery', (request, response) => {
  console.log('Hello');
  // console.log(request);
  var object = {
    name: request.body.name,
    password: request.body.password,
    email: request.body.email,
    mobileNumber: request.body. mobileNumber
  };
  dbconnection.insert(object).then(
    (res) => {
      console.log('data posted');
      response.send(res);
    },
    (rej) => {
      console.log('data cant posted');
      response.send(rej);
    }
  );
  //   response.redirect("..");
  // console.log('Data added');
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});