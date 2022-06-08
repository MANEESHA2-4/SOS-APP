import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm} from '@angular/forms';
import { ToastarService } from '../toastarservice.service';

import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  addform!:FormGroup;
  store:any=[];
  obj:any;


  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private tostr: ToastarService) { }

  ngOnInit(): void {
      this.addform=this.formbuilder.group({
       firstname:['',Validators.required],
       lastname:['',Validators.required],
       email:['',Validators.required],
       mobileno:['',Validators.required],
       query:['',Validators.required],
       _id:[''],
       _rev:[''],
      })
     }
    
    
     
     addQuery(formvalue:NgForm){
       console.log('hi');
       console.log(formvalue);
       this.store.push(formvalue)
       this.api.addQuery(formvalue).subscribe(res=>{
        this.obj=res;
        console.log("hello"+this.obj);
        console.log("Your data was posted successfully!");
        // window.location.replace("/query")
        // alert('your data is added successfully')
        this.tostr.showSuccess("Success","Data added succesfully")
        },rej=>{
        console.log("opps! Can not post data"+rej);
        });
     }
     
}
