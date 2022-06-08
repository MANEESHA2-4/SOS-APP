import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {
  addform!:FormGroup;
  alluser!:any;
  exchange!:any;
  object:any=[];
  constructor(private api:DatabaseService ) {}

  ngOnInit(): void {
    this.getreply()
  }

  
  
getreply(){
  this.object=[];
let id=localStorage.getItem("emailreply");
console.log("id",id)
  this.api.getreply(id).subscribe(data=>{
    console.log(data);
    console.log('Data was fetching');
    this.alluser=data;
    this.alluser=this.alluser.docs;
    console.log(this.alluser);
    for(const i of this.alluser){
      
          this.object.push(i);
          console.log('Fetched successfuly in add component',this.object);
       

    }
  
  });
}
}