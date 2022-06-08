import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  constructor(private route:Router) { console.log("dashboard-admin")  }

  ngOnInit(): void {
    console.log("dashboard-admin") 
  
  }
  out() {
    localStorage.clear();
    this.route.navigate(['/admin']);
    
  }

}
