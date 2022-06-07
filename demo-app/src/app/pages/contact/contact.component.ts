import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  [x: string]: any;
  contactform!: FormGroup;
  value:boolean=true;

  constructor(private api:ApiserviceService,private fb:FormBuilder,private route:Router) {
    let store:any=localStorage.getItem('userdata');
    const userdetails = JSON.parse(store);
    console.log(userdetails);
    this.contactform = this.fb.group({
      _id:[''],
      _rev:[''],
      first_name:['',Validators.required],
     
      email_id:['',Validators.required],
      Mobile:['',Validators.required],
    })
    
    
    this.contactform.controls['email_id'].setValue(userdetails?.email);

  


   }

  ngOnInit(): void {
    console.log("contact");
  }
logout(){
  localStorage.clear();
  this.route.navigate(['/login'])

}
back(formvalue:any){
  console.log(formvalue)
  this.api.sendmail(formvalue).subscribe((res)=> {
    console.log(res);
  });
alert("Mail sent successfully");
  this.route.navigate(['/dashboard'])


}




  send(Formvalue:NgForm){
    console.log("hi");
    console.log(Formvalue);
    this.api.contact(Formvalue).subscribe((data)=>{
      console.log(Formvalue);
      console.log(data);
      
    })
  }
}
