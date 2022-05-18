import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm,FormBuilder,Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactform!: FormGroup;
  value:boolean=true;
  constructor(private api:ApiserviceService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactform = this.fb.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email_id:['',Validators.required],
      Mobile:['',Validators.required],
    })
  }
  send(Formvalue:NgForm){
    console.log("hi");
    console.log(Formvalue);
    this.api.contact(Formvalue).subscribe((data)=>{
      console.log(Formvalue);
      
    })
  }
}
