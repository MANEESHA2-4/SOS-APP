import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm} from '@angular/forms';
import { ToastarService } from '../toastarservice.service';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-reportform',
  templateUrl: './reportform.component.html',
  styleUrls: ['./reportform.component.css']
})
export class ReportformComponent implements OnInit {
  addform!:FormGroup;
  store:any=[];


  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private tostr: ToastarService) { }

  ngOnInit(): void {
      this.addform=this.formbuilder.group({
       name:['',Validators.required],
      
    mobileno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] ,

       dateofbirth:['',Validators.required],
       gender:['',Validators.required],
       city:['',Validators.required],
       time:['',Validators.required],
       _id:[''],
       _rev:[''],
      })
     }
    
    
     
     addReport(formvalue:NgForm){
       console.log('hi');
       console.log(formvalue);
       this.store.push(formvalue)
       this.api.addReport(formvalue).subscribe(res=>{
        console.log("hello"+res);
        console.log("Your data was posted successfully!");
        
        this.tostr.showSuccess("Success","Data added successfully")
        },rej=>{
        console.log("opps! Can not post data"+rej);
        });
     }
     
}
