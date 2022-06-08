import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { ToastarService } from '../toastarservice.service';
@Component({
  selector: 'app-viewquery',
  templateUrl: './viewquery.component.html',
  styleUrls: ['./viewquery.component.css']
})
export class ViewqueryComponent implements OnInit {
  personemail:any;
  addform!:FormGroup;
  alluser!:any;
  exchange!:any;
  object:any=[];
  constructor(private formbuilder:FormBuilder,private api:DatabaseService,private route:Router,private tostr: ToastarService) { }

  ngOnInit(): void {
    this.getQuery();
  }
  // erase (id:string,rev:string){
  //   this.api.deletequery(id,rev).subscribe((data) => {
  //     console.log(data);
  //     // alert("your data was deleted");
  //     // window.location.reload();
  //     this.tostr.showSuccess("Deleted",'Deleted succesfully');
  //     window.setTimeout(function(){location.reload()},1500)
  //   });
    
  // }

  deletequery(data:any,data1:any){
    this.api.remove(data._id,data1._rev).subscribe(_res=>{
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
  // getQuery(){
  //   this.store=[];
  //   this.api.getQuery().subscribe(res=>{
  //     console.log(res);
  //     console.log("response is comming");
  //     this.alluser=res;
      // this.alluser=this.alluser.data;
      // this.alluser=this.alluser.rows;
      // console.log(this.alluser);
      // const temp = this.alluser;
    //   for (const key in this.alluser) {
    //         if (Object.prototype.hasOwnProperty.call(this.alluser, key)) {
    //           const element = this.alluser[key];
    //           console.log(element.id);
    //           this.api.getAllQuery(element.id).subscribe(res=>{
    //             console.log(res);
    //             this.exchange=res;
    //             this.store.push(this.exchange);
    //             console.log("data receved");
    //           },rej=>{
    //             console.log("error"+rej);
    //           })
            
    //         }
    //       }
    // },rej=>{
    //     console.log("opps! Somthing went wrong"+rej);
    // })}}
    getQuery(){
      this.api.getQuery().subscribe(data=>{
        console.log(data);
        console.log('Data was fetching');
        this.alluser=data;
        this.alluser=this.alluser.docs;
        console.log(this.alluser);
        for(const i of this.alluser){
          // if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
          //   const elt = this.alldata[i];
          //   console.log(elt.id);
          //   this.api.supplierId(elt.id).subscribe(res=>{
          //     console.log(res);
              this.object.push(i);
              console.log('Fetched successfuly in add component');
            // })
          // }
    
        }
      
      },err=>{
        console.log(err);
      });
    }}