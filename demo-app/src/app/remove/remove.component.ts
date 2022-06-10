import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { ToastarService } from '../toastarservice.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  addform!:FormGroup;
  divBoolean:any;
  alluser!:any;
  exchange!:any;
  object:any=[];
  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private tostr: ToastarService,private route :Router) { }

  ngOnInit(): void {
   this.divBoolean = 1;
   this.get();
  }
  

removeContact(data:any,data1:any){
    this.api.deletecontact(data._id,data1._rev).subscribe(_res=>{
      console.log('Your data was Deleted from the database');
      this.tostr.showSuccess("Deleted",'Deleted succesfully');
      this.get();
      
    
    })
   
  }

  get(){
    this.api.get().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.object = [];
      this.alluser=data;
      this.alluser=this.alluser.docs;
      console.log(this.alluser);
      for(const i of this.alluser){
        
            this.object.push(i);
            console.log('Fetched successfuly in add component');
           
      }
   

    
    },err=>{
      console.log(err);
    });
  }}