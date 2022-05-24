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
app.post('/post_query', (request, response) => {
  
  var object = {
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    country: request.body.country,
    mobileno: request.body. mobileno
  };
  dbconnection.insert(object,'add_form').then(
    (res) => {if(res){
      console.log('data posted');
      response.send(res);
    }else{
      response.send('error');
    }
    }),
    console.log('Data Added');
});
app.get('/get_query', (request, response) => {
  console.log('start');
  dbconnection.get('add_form').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});
app.get('/get_all_query/:id', (request, response) => {
  dbconnection.getAll(request.params.id, 'add_form').then((res) => {
    if (res) {
      console.log(res);
      response.send(res);
    } else {
      response.send('error');
    }
  });

  console.log('end');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});