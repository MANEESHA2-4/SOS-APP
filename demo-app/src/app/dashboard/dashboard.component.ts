import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CouchService } from '../couch.service';
import { ApiserviceService } from '../apiservice.service';
import { DatabaseService } from '../database.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email: any;
  name: any;
  divboolean:number = 1;
 
  constructor(private activeparam:ActivatedRoute,private data:CouchService,private api:ApiserviceService,private database:DatabaseService,private route:Router,private shared:SharedService ) { 
    
  }

  changeTab(params:any)
  {
    this.divboolean = params;
  }

  ngOnInit(): void {
    let userId: any=localStorage.getItem("userdata")
    let user=JSON.parse(userId.toString())
    this.email=user['email']
   
   

}
out() {
  this.shared.navShow=true;
  localStorage.clear();
  this.route.navigate(['/login']);
  
}


}

