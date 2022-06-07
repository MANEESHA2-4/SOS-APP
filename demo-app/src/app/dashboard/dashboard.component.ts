import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CouchService } from '../couch.service';
import { ApiserviceService } from '../apiservice.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email: any;
  name: any;
 
  constructor(private activeparam:ActivatedRoute,private data:CouchService,private api:ApiserviceService,private database:DatabaseService) { 
    
  }


  ngOnInit(): void {
    let userId: any=localStorage.getItem("userdata")
    let user=JSON.parse(userId.toString())
    this.email=user['email']
   // this.name=user['password']
   


}


}

