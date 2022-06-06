import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-viewquery',
  templateUrl: './viewquery.component.html',
  styleUrls: ['./viewquery.component.css']
})
export class ViewqueryComponent implements OnInit {

  addform!:FormGroup;
  alluser!:any;
  exchange!:any;
  store:any=[];
  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private route:Router) { }

  ngOnInit(): void {
    this.getQuery();
  }
  erase (id:string,rev:string){
    this.api.deletequery(id,rev).subscribe((data) => {
      console.log(data);
      alert("your data was deleted");
      window.location.reload();
    });
    
  }
  getQuery(){
    this.store=[];
    this.api.getQuery().subscribe(res=>{
      console.log(res);
      console.log("response is comming");
      this.alluser=res;
      // this.alluser=this.alluser.data;
      this.alluser=this.alluser.rows;
      console.log(this.alluser);
      // const temp = this.alluser;
      for (const key in this.alluser) {
            if (Object.prototype.hasOwnProperty.call(this.alluser, key)) {
              const element = this.alluser[key];
              console.log(element.id);
              this.api.getAllQuery(element.id).subscribe(res=>{
                console.log(res);
                this.exchange=res;
                this.store.push(this.exchange);
                console.log("data receved");
              },rej=>{
                console.log("error"+rej);
              })
            
            }
          }
    },rej=>{
        console.log("opps! Somthing went wrong"+rej);
    })}}