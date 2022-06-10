import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { ToastarService } from '../toastarservice.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  star = 5;
addform!:FormGroup;
store:any=[];
  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private tostr: ToastarService) { }

  ngOnInit(): void {
    this.addform=this.formbuilder.group({
      name:['',Validators.required],
      message:['',Validators.required],
      _id:[''],
      _rev:[''],
    })
  }


addMessage(formvalue:NgForm){
  console.log('hi');
  console.log(formvalue);
  this.store.push(formvalue)
  this.api.addMessage(formvalue).subscribe(res=>{
   console.log("hello"+res);
   console.log("Your data was posted successfully!");
   
  this.tostr.showSuccess("Success","Feedback sent successfully")
   },rej=>{
   console.log("opps! Can not post data"+rej);
   });
}
}