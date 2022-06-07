import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  object:any=[];
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
    this.api.get().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alluser=data;
      this.alluser=this.alluser.docs;
      console.log(this.alluser);
      for(const i of this.alluser){
        
            this.object.push(i);
            console.log('Fetched successfuly in add component');
          
  
      }
    
    });
  }}