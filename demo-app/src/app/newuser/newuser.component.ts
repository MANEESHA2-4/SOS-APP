import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { ToastarService } from '../toastarservice.service';
import * as lodash from 'lodash'
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  
  addform!:FormGroup;
  alluser!:any;
  exchange!:any;
  object:any=[];
  data: any=[];
  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private route:Router,private tostr: ToastarService) { }

  ngOnInit(): void {
    this.getNewUser();
    
  }
 
  removeUser(data:any,data1:any){
    this.api.deleteUser(data._id,data1._rev).subscribe(_res=>{
      console.log('Your data was Deleted from the database');
      this.tostr.showSuccess("Deleted",'Deleted succesfully');
    })
    setTimeout(function(){
      location.reload();
    },2000);
    
       
  }
  
    getNewUser(){
      this.api.getNewUser().subscribe(data=>{
        console.log(data);

        console.log('Data was fetching');
        this.alluser=data;
        this.alluser=this.alluser.docs;
        console.log(this.alluser);
        for(const i of this.alluser){
          
              this.object.push(i);
              console.log('Fetched successfuly in add component');
           
        }
      
        this.object=lodash.sortBy(this.alluser.filter((x:any)=>x.lastmodifieddate),'lastmodifieddate')
        console.log(this.data)
      },err=>{
        console.log(err);
      });
    }}