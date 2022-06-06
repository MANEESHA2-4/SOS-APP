import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  addform!:FormGroup;
  store:any=[];
  constructor(private formbuilder:FormBuilder,private api:DatabaseService) { }

  ngOnInit(): void {
    this.addform=this.formbuilder.group({
      name:['',Validators.required],
      message:['',Validators.required],
      _id:[''],
      _rev:[''],
    })
  }
  addreply(formvalue:NgForm){
    console.log('hi');
    console.log(formvalue);
    this.store.push(formvalue)
    this.api.addmessage(formvalue).subscribe(res=>{
     console.log("hello"+res);
     console.log("Your data was posted successfully!");
     // window.location.replace("/query")
     alert('your data is added successfully')
     },rej=>{
     console.log("opps! Can not post data"+rej);
     });
  }



}