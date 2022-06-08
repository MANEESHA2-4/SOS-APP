import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { ToastarService } from '../toastarservice.service';

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
  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private route:Router,private tostr: ToastarService) { }

  ngOnInit(): void {
    this.getnewuser();
  }
  // erase (id:string,rev:string){
  //   this.api.deletequery(id,rev).subscribe((data) => {
  //     console.log(data);
  //     alert("your data was deleted");
  //     window.location.reload();
  //   });
    
  // }
  removeuser(data:any,data1:any){
    this.api.deleteuser(data._id,data1._rev).subscribe(_res=>{
      console.log('Your data was Deleted from the database');
      this.tostr.showSuccess("Deleted",'Deleted succesfully');
    })
    setTimeout(function(){
      location.reload();
    },2000);
    
       
  }
  
    getnewuser(){
      this.api.getnewuser().subscribe(data=>{
        console.log(data);
        console.log('Data was fetching');
        this.alluser=data;
        this.alluser=this.alluser.docs;
        console.log(this.alluser);
        for(const i of this.alluser){
          // if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
          //   const elt = this.alldata[i];
          //   console.log(elt.id);
          //   this.api.supplierId(elt.id).subscribe(res=>{
          //     console.log(res);
              this.object.push(i);
              console.log('Fetched successfuly in add component');
            // })
          // }
    
        }
      
      },err=>{
        console.log(err);
      });
    }}