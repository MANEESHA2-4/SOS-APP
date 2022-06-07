import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import{DatabaseService}from'../database.service'
 import { ToastarService } from '../toastarservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // formgroups!: FormGroup;

  // constructor(private formbuilder:FormBuilder) { }
  successMessage:string =""
userdata :  any = [];
  regForm!:FormGroup;

  constructor(private api:DatabaseService,private formbuilder:FormBuilder,private alert :ToastarService,private route : Router) { }
ngOnInit(): void {
  this.regForm = this.formbuilder.group({
    name: ['',[Validators.required]],
    mobileNumber: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
    email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
    password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
  })
}

storing(formvalue:any) {
this.api.storedata(formvalue).subscribe((data)=>{
      console.log("data returned from server",data);
     
    console.log(data.id);
    var userid = data.id;

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
    
   console.log("from form",formvalue);

   
  },rej => {
  console.log(rej);
  // this.alert.showError("data cant post","error");
});}
register(FormValue:NgForm){
  this.successMessage = "Successfully Registered..."
this.api.registerdata(FormValue).subscribe((data)=>{
  alert("Data posted Successfully");
  this.regForm.reset();
},rej=>{
  console.log("Error"+rej);
});
console.log(FormValue)
}
}

 
  
