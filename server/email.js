const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require('cors');
const setmail = require('./send');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
    cors({
        origin:'http://localhost:4200'
    })
)

app.get('/', function (request, response) {
    response.json({"name":"maneesha"});
  });

  app.post('/mail',(request,response,next)=>{
    console.log('mmm');
   
    var object ={
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email_id,
        mobile:request.body.Mobile,
    }
    setmail.getemail(request.body.email_id);
    console.log(object);
})
  app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on http://localhost:${port}`);
  });