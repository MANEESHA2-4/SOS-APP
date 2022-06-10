import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import{DatabaseService}from'../database.service'
 import { ToastarService } from '../toastarservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  successMessage:string =""
userdata :  any = [];
  regForm!:FormGroup;

  constructor(private api:DatabaseService,private formbuilder:FormBuilder,private alert :ToastarService,private route : Router) { }
ngOnInit(): void {
  this.regForm = this.formbuilder.group({
    name: ['',[Validators.required]],
    
    mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] ,
    email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
    password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
  })
}

storing(formvalue:any) {
this.api.storeData(formvalue).subscribe((data)=>{
      console.log("data returned from server",data);
     
    console.log(data.id);
    let userid = data.id;

    console.log("userid",userid);

  this.userdata = formvalue

  formvalue.id = userid;
  console.log(formvalue);
   this.userdata = {
    formvalue
  }
  console.log(this.userdata);
  console.log(this.userdata.formvalue);

  localStorage.setItem("userdata",JSON.stringify(this.userdata.formvalue));

  this.route.navigate(['dashboard']);
 this.alert.showSuccess("Success","Data posted Successfully");
    
   console.log("from form",formvalue);

   
  },rej => {
  console.log(rej);

});}

}

 
  
