import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
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
  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private route:Router) { }

  ngOnInit(): void {
    this.getnewuser();
  }
  erase (id:string,rev:string){
    this.api.deletequery(id,rev).subscribe((data) => {
      console.log(data);
      alert("your data was deleted");
      window.location.reload();
    });
    
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
      
      });
    }}