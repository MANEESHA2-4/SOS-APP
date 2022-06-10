import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { ToastarService } from '../toastarservice.service';
@Component({
  selector: 'app-reportdetails',
  templateUrl: './reportdetails.component.html',
  styleUrls: ['./reportdetails.component.css']
})
export class ReportdetailsComponent implements OnInit {

  addform!:FormGroup;
  alluser!:any;
  exchange!:any;
  object:any=[];
  toastr: any;
  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private route:Router, private tostr: ToastarService) { }

  ngOnInit(): void {
    this.getreport();
  }


  deleteReport(data:any,data1:any){
    this.api.clearReport(data._id,data1._rev).subscribe(_res=>{
      console.log('Your data was Deleted from the database');
      this.tostr.showSuccess("Deleted",'Deleted succesfully');
    })
    setTimeout(function(){
      location.reload();
    },2000);
    
       
  }


  reply(sendmail:any)
  {

    this.route.navigate(['reply',sendmail]);
    
  }


 
getreport(){
  this.api.getreport().subscribe(data=>{
    console.log(data);
    console.log('Data was fetching');
    this.alluser=data;
    this.alluser=this.alluser.docs;
    console.log(this.alluser);
    for(const i of this.alluser){
      
          this.object.push(i);
          console.log('Fetched successfuly in add component');
     

    }
  
  },err=>{
    console.log(err);
  });
}}