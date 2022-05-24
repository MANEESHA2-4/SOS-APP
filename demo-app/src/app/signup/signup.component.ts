import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';

import{DatabaseService}from'../database.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // formgroups!: FormGroup;

  // constructor(private formbuilder:FormBuilder) { }
  successMessage:string =""

  regForm!:FormGroup;

  constructor(private api:DatabaseService,private formbuilder:FormBuilder) { }
ngOnInit(): void {
  this.regForm = this.formbuilder.group({
    name: ['',[Validators.required]],
    mobileNumber: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
    email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
    password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
  })
}




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
