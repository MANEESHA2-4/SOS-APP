import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  addform!:FormGroup;
  alluser!:any;
  exchange!:any;
  store:any=[];
  constructor(private formbuilder:FormBuilder,private api:DatabaseService) { }

  ngOnInit(): void {
   this.get();
  }
  erase (id:string,rev:string){
    this.api.deletecontact(id,rev).subscribe((data) => {
      console.log(data);
      alert("your data was deleted");
      window.location.reload();
    });
    
  }
  get(){
    this.api.get().subscribe(res=>{
     console.log(res);
     console.log("response is comming");
     this.alluser=res;
     
     this.alluser=this.alluser.rows;
     console.log(this.alluser);
     for (const key in this.alluser) {
        if (Object.prototype.hasOwnProperty.call(this.alluser, key)) {
         const element = this.alluser[key];
         console.log(element.id);
         this.api.getAll(element.id).subscribe(res=>{
          console.log(res);
          this.exchange=res;
          console.log(this.exchange);
          
          this.store.push(this.exchange);
          console.log("data is came");
         },rej=>{
          console.log("error"+rej);
         })
        
        }
       }
    },rej=>{
      console.log("opps! Somthing went wrong"+rej);
    })
  }}
