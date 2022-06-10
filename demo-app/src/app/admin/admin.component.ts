

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastarService } from '../toastarservice.service';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  [x: string]: any;
  successMessage:string ="";
  loginForm!: FormGroup; 

  sos : any = {
    email:'',
    password:''
  }

  constructor(private fb: FormBuilder,private api:ApiserviceService,private route: Router,private tostr: ToastarService) {
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
 this.api.checkadminlogin(this.email,this.password).subscribe(data=>{
     console.log(data);
     if((data.docs[0].email == this.email && data.docs[0].password == this.password && data.docs[0].type == "admin"))
     {
       this.tostr.showSuccess("valid","logged in successfully")
      //  alert("success!!")
      this.route.navigate(['dashboard-admin']);
     }
     else{
       alert("Login authentication failed");
      

     }
    },err=>{
      console.log(err);
    })
  
 }

}
