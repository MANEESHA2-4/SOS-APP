const nodemail = require('nodemailer');
let sender = nodemail.createTransport({
    service:'gmail',
    auth:{
        user:'sosapp24@gmail.com',
        pass:'ypeqxzkuxilkhuwa'
    }
})
module.exports.getemail = function(params)
{
    
  
    let composemail = {
        from:'sosapp24@gmail.com',
        to:params,
        subject:'Emergency-SOS',
        text:'Welcome to Emergency-SOS...Hi! I am here to help you'
    }
    sender.sendMail(composemail,function(err,res){
        if(err)
        {
            console.log("Mail not sent",err);
        }
        else{
            console.log("Mail sent",res);
        }
    })
}
