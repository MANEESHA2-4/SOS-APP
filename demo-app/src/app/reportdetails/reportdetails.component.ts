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
  erase (id:string,rev:string){
    
    this.api.deletereport(id,rev).subscribe((data) => {
      console.log(data);
      // alert("your data was deleted");
      
      this.tostr.showSuccess("Deleted",'Deleted succesfully');
      window.setTimeout(function(){location.reload()},1500)
      
    });
    // location.reload();
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
  
  });
}}