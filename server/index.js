const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(express.static('public'));
const port = 8000;
const cors = require('cors');
const dbconnection = require('./db');
 
app.use(bodyparser.json());
app.use(express.static('public'));
let nano = require('nano');
const setmail = require('./send');
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);


//---------------------mail---------------------//
app.post('/mail',(_request,_response,_next)=>{
  console.log('mmm');
 
  let object ={
      first_name:_request.body.first_name,
      
      email:_request.body.email_id,
      mobile:_request.body.Mobile,
  }
  
  setmail.getemail(_request.body.email_id);
  console.log(object);
})


//---------------------signup------------------------//

app.post('/signupdata', function (req,res) {
  let name = req.body.firstname;
  console.log(name);
  let objectnew = {
      name : req.body.name,
      mobileNumber : req.body.mobileNumber,
      email : req.body.email,
      password : req.body.password,
      "type" : "user"
      
      
  }
  console.log("data from angular",objectnew);
  dbconnection.trainee.insert(objectnew).then((data) => {
      console.log("data inserted successfully",data);
      res.send(data);
  },).catch((err=>{
    console.log("err2",err);
    res.status(400).send({
      message:err
    })
    }));
})
  
app.get('/get_usersignup', (_request, response) => {
  console.log('start');
  let data={
    selector:{
      type:"user",
    }
  }
  
  dbconnection.get(data,"login_form").then((login_res) => {
    if (login_res) {
      response.send(login_res);
    } else {
      response.send('error');
    }
  });
});



//------------------validation---------------------//

app.get('/checkuserlogin/:id', (req,res) => {
  console.log("retreived......",req.params.id);

 
  let object = {
      selector: {
          
          "email" : req.params.id,
          "type" : "user"
       
          

      }
  }
  dbconnection.trainee.find(object).then((data => {
    
     
      console.log("firstname",data);  
      res.json(data);      
      
  }))
})

//------------------admin-----------------------//
app.get('/getadmindata/:id', (req,res) => {
  console.log("retreived......",req.params.id);

 
  let object = {
      selector: {
          
          "email" : req.params.id,
          "type" : "admin"
       
          

      }
  }
  dbconnection.trainee.find(object).then((data => {
    
     
      console.log("firstname",data);  
      res.json(data);      
      
  }))
}) 



//------------add-form----------------//




app.post('/addcontact', (_request, response) => {
  
  let object = {
    firstname: _request.body.firstname,
    lastname: _request.body.lastname,
    country: _request.body.country,
    mobileno: _request.body. mobileno,
    type:"add"
  };
  dbconnection.insert(object,'login_form').then(
    (res) => {if(res){
      console.log('data posted');
      response.send(res);
    }else{
      response.send('error');
    }
    })
    console.log('Data Added');
});

//----------------------------removeform-----------------//

app.get('/removecontact', (request, response) => {
  console.log('start',request.params.id);
  let data={
    selector:{
      type:"add",
      username:request.params.id,
    
    }
  }
  // console.log("email",data);
  dbconnection.get(data,'login_form').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});



//---------------query-------------------------------//
app.post('/addQuery', (_request, response) => {
  let object = {
    firstname: _request.body.firstname,
    lastname: _request.body.lastname,
    email: _request.body.email,
    mobileno: _request.body.mobileno,
    query: _request.body.query,
    type:"query"
   
  };
  dbconnection.insert(object,"login_form" ).then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});


app.get('/viewQuery', (_request, response) => {
  console.log('start');
  let data={
    selector:{
      type:"query",
    }
  }
  
  dbconnection.get(data,"login_form").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});







//--------reply--------------------------------------------//
app.post('/post_reply', (_request, response) => {
  let object = {
    message: _request.body.message,
    username:_request.body.username,
   type:"reply"
   
  };
  dbconnection.insert(object,"login_form" ).then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});

app.get('/get_reply/:id', (_request, response) => {
  console.log('start',_request.params.id);
  let data={
    selector:{
     username:_request.params.id,
      type:"reply",
      
    }
  }
 console.log("email",data);
  dbconnection.get(data,"login_form").then((res) => {
    console.log(res,"response");
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});



//--------report-----------------------------------------//

app.post('/sendreport', (_request, response) => {
  let object = {
    name: _request.body.name,
    dateofbirth: _request.body.dateofbirth,
    gender: _request.body.gender,
    mobileno: _request.body.mobileno,
    city: _request.body.city,
    time:_request.body.time,
    type:"report"
  };
  dbconnection.insert(object, 'login_form').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});

app.get('/showreport', (_request, response) => {
  console.log('start');
  let data={
    selector:{
      type:"report",
    }
  }
  dbconnection.get(data,'login_form').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});

//------------------feedback-----------------------------//

app.post('/post_feedback', (_request, response) => {
  let object = {
    name: _request.body.name,
    message: _request.body.message,
type:'message'
    
  };
  dbconnection.insert(object, 'login_form').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});


app.get('/get_feedback', (_request, response) => {
  console.log('start');
  let data={
    selector:{
      type:"message",
    }
  }
  dbconnection.get(data,'login_form').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});

//-------deletequery------------------------------------------//

app.delete("/deletequery/:id/:id1", (request, _response) => {
  dbconnection
   .del_id(request.params.id, request.params.id1, "login_form")
   .then((res) => {
    if (res) {
     response.send(res);
    } else {
     response.send("error");
    }
   }).catch((err)=>{
    console.log("UserNot exist!!!",err);
    
  });
 });

 //---------deletereport--------------//

 app.delete("/clearreport/:id/:id1", (request, response) => {
  dbconnection
   .del_id(request.params.id, request.params.id1, "login_form")
   .then((res) => {
    if (res) {
     response.send(res);
    } else {
     response.send("error");
    }
   }).catch((err)=>{
    console.log("UserNot exist!!!",err);
    
  });
 });

//-----------------delete registered user------------------------//

app.delete("/deleteuser/:id/:id1", (request, response) => {
  dbconnection
   .del_id(request.params.id, request.params.id1, "login_form")
   .then((res) => {
    if (res) {
     response.send(res);
    } else {
     response.send("error");
    }
   }).catch((err)=>{
     console.log("UserNot exist!!!",err);

   });
 });

//-----------------------------------deletecontact--------------------//
 
app.delete("/deletecontact/:id/:id1", (request, response) => {
  dbconnection
   .del_id(request.params.id, request.params.id1, "login_form")
   .then((res) => {
    if (res) {
     response.send(res);
    } else {
     response.send("error");
    }
   }).catch((err)=>{
    console.log("UserNot exist!!!",err);
    
  });
 });



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
