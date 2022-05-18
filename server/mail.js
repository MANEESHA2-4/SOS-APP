const express =  require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const port = 8000;
app.use(
    cors({
        origin:'http://localhost:4200'
    })
)
app.use(express.static('public'));
app.use(bodyparser.json);
app.get('/',(req,res)=>{
    res.json({"name":"maneesha"});
})
app.post('/mail',(request,response)=>{
    console.log('mmm');
    console.log(request);
    var object ={
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        email:request.body.email_id,
        mobile:request.body.Mobile,
    }
    console.log(object);
})
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`http://localhost:${port}`);
})