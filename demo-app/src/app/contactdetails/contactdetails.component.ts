import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {

  addform!:FormGroup;
  alluser!:any;
  exchange!:any;
  store:any=[];
  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private route:Router) { }

  ngOnInit(): void {
    this.getmessage();
  }
  erase (id:string,rev:string){
    this.api.deletemail(id,rev).subscribe((data) => {
      console.log(data);
      alert("your data was deleted");
      window.location.reload();
    });
    
  }
  getmessage(){
    this.store=[];
    this.api.getmessage().subscribe(res=>{
      console.log(res);
      console.log("response is comming");
      this.alluser=res;
      this.alluser=this.alluser.rows;
      console.log(this.alluser);
      
      for (const key in this.alluser) {
            if (Object.prototype.hasOwnProperty.call(this.alluser, key)) {
              const element = this.alluser[key];
              console.log(element.id);
              this.api.getAllmessage(element.id).subscribe(res=>{
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
    })
  }
}