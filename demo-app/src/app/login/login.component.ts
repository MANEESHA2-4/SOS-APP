
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  successMessage:string ="";
  loginForm!: FormGroup; 
  userdata : any = [];

  sos : any = {
    email:'',
    password:''
  }

  constructor(private fb: FormBuilder,private api:ApiserviceService,private route: Router) {
    this.loginForm = this.fb.group({
      email : [this.sos.email],
      password : [this.sos.password]
    })
   }
ngOnInit(): void {
  this.loginForm = this.fb.group({
    email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
    password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
  })
}



login(obj:any){
  this.email=obj.email
  this.password=obj.password
 this.api.checkuserlogin(this.email,this.password).subscribe(data=>{
     console.log(data);
     this.userId=data.docs[0]._id;
     localStorage.setItem("UserId",this.userId)
     this.userId=localStorage.getItem("UserId")

     if((data.docs[0].password === this.password))
     {
       alert("success!!")
       this.userdata = {obj}
  localStorage.setItem("userdata",JSON.stringify(this.userdata.obj));
      this.route.navigate(['dashboard'],{queryParams:{data:this.UserId}});
      localStorage.setItem('emailreply',this.email);
     }
     else{
      alert("Login authentication failed");
     }
    })
  
 }

}
