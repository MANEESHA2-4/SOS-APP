import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from '../database.service';
import { ToastarService } from '../toastarservice.service';
@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  addform!:FormGroup;
  store:any=[];
  value:boolean=true;
  route: any;
 
  currentpage = {name:'string'}
  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private active:ActivatedRoute,private tostr:ToastarService) {
    this.active.params.subscribe((data:Params)=>{
      this.currentpage = {
        name:data['name']
      }
    })
    console.log("parameter",this.currentpage.name);
    localStorage.setItem('replydata',this.currentpage.name);
   
    
  
    
   }

  ngOnInit(): void {
    this.addform=this.formbuilder.group({
      admin:['',Validators.required],
      username:['',Validators.required],
      message:['',Validators.required],
      _id:[''],
      _rev:[''],
    })
    let store:any=localStorage.getItem('userdata');
    const userdetails = JSON.parse(store);
    console.log(userdetails);
   

    
    
    this.addform.controls['username'].setValue(this.currentpage.name);

    
  }

  addReply(formvalue:NgForm){
    console.log('hi');
    console.log(formvalue);
    this.store.push(formvalue)
    this.api.addReply(formvalue).subscribe(res=>{
     console.log("hello"+res);
     console.log("Your data was posted successfully!");
    this.tostr.showSuccess("Success","Reply Sent");
    //  alert('your data is added successfully')
     },rej=>{
     console.log("opps! Can not post data"+rej);
     });
  }



}