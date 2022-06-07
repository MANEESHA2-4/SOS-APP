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
var nano = require('nano');
const setmail = require('./send');
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);

app.post('/mail',(request,response,next)=>{
  console.log('mmm');
 
  var object ={
      first_name:request.body.first_name,
      
      email:request.body.email_id,
      mobile:request.body.Mobile,
  }
  // console.log(email);
  setmail.getemail(request.body.email_id);
  console.log(object);
})

app.post('/postdata', function (req,res) {
  var name = req.body.firstname;
  console.log(name);
  var objectnew = {
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
  }).catch((err=>{
    console.log("err2",err);
    res.status(400).send({
      message:err
    })
    }));
})
  
app.get('/get_newuser', (request, response) => {
  console.log('start');
  var data={
    selector:{
      type:"user",
    }
  }
  
  dbconnection.get(data,"login_form").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});





app.get('/getdata/:id', (req,res) => {
  console.log("retreived......",req.params.id);

 
  var object = {
      selector: {
          
          "email" : req.params.id
       
          

      }
  }
  dbconnection.trainee.find(object).then((data => {
    
     
      console.log("firstname",data);  
      res.json(data);      
      
  }))
})
  



//------------add-form----------------//




app.post('/post_query', (request, response) => {
  
  var object = {
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    country: request.body.country,
    mobileno: request.body. mobileno,
    type:"add"
  };
  dbconnection.insert(object,'login_form').then(
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
  console.log('start',request.params.id);
  var data={
    selector:{
      type:"add",
      username:request.params.id,
    
    }
  }
  console.log("email",data);
  dbconnection.get(data,'login_form').then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});
// app.get('/get_all_query/:id', (request, response) => {
//   dbconnection.getAll(request.params.id, 'add_form').then((res) => {
//     if (res) {
//       console.log(res);
//       response.send(res);
//     } else {
//       response.send('error');
//     }
//   });

//   console.log('end');
// });



//---------------query--------//
app.post('/post_data', (request, response) => {
  var object = {
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    email: request.body.email,
    mobileno: request.body.mobileno,
    query: request.body.query,
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


app.get('/get_data', (request, response) => {
  console.log('start');
  var data={
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
});



// app.get('/get_all_data/:id', (request, response) => {
//   dbconnection.getAll(request.params.id, 'query-data').then((res) => {
//     if (res) {
//       console.log(res);
//       response.send(res);
//     } else {
//       response.send('error');
//     }
//   });

//   console.log('end');
// });

//--------reply-----------//
app.post('/post_reply', (request, response) => {
  var object = {
    message: request.body.message,
    username:request.body.username,
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

app.get('/get_reply/:id', (request, response) => {
  console.log('start',request.params.id);
  var data={
    selector:{
     username:request.params.id,
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

// app.get('/get_all_reply/:id', (request, response) => {
//   dbconnection.getAll(request.params.id, 'login-form').then((res) => {
//     if (res) {
//       console.log(res);
//       response.send(res);
//     } else {
//       response.send('error');
//     }
//   });

//   console.log('end');
// });

//-----------------------//

app.post('/post_report', (request, response) => {
  var object = {
    name: request.body.name,
    dateofbirth: request.body.dateofbirth,
    gender: request.body.gender,
    mobileno: request.body.mobileno,
    city: request.body.city,
    time:request.body.time,
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

app.get('/get_report', (request, response) => {
  console.log('start');
  var data={
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

// app.get('/get_all_report/:id', (request, response) => {
//   dbconnection.getAll(request.params.id, 'query-data').then((res) => {
//     if (res) {
//       console.log(res);
//       response.send(res);
//     } else {
//       response.send('error');
//     }
//   });

//   console.log('end');
// });
//-----------------------//






app.post('/post_msg', (request, response) => {
  var object = {
    name: request.body.name,
    message: request.body.message,
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


app.get('/get_msg', (request, response) => {
  console.log('start');
  var data={
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


// app.get('/get_all_msg/:id', (request, response) => {
//   dbconnection.getAll(request.params.id, 'contact_form').then((res) => {
//     if (res) {
//       console.log(res);
//       response.send(res);
//     } else {
//       response.send('error');
//     }
//   });

//   console.log('end');
// });




app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
