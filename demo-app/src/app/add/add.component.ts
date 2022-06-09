import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addform!:FormGroup;
  store:any=[];
  


  constructor(private formbuilder:FormBuilder,private api:DatabaseService) { }

  ngOnInit(): void {
      this.addform=this.formbuilder.group({
       firstname:['',Validators.required],
       lastname:['',Validators.required],
       country:['',Validators.required],
       mobileno:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
       _id:[''],
       _rev:[''],
      })
     }
    
    
     
     add(formvalue:any){
       console.log('hi');
       console.log(formvalue);
       this.store.push(formvalue)
       this.api.add(formvalue).subscribe(res=>{
        console.log("hello"+res);
        console.log("Your data was posted successfully!");
       window.location.replace("/dashboard")
        alert('your data is added successfully')
        },rej=>{
        console.log("opps! Can not post data"+rej);
        });
     }
}