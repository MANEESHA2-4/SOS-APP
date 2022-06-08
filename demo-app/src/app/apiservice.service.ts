import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  contact(formobject:any){
    console.log('hello');
    
    return this.http.post('http://localhost:8000/mail/',formobject)
  }

 
  checkuserlogin(email:any,_password:any)
 {
  return this.http.get<any>('http://localhost:8000/getdata/'+email);
 }


 sendmail(formvalue:any) {
    return this.http.post<any>('http://localhost:8000/mail/',formvalue);
}
checkadminlogin(email:any,_password:any)
{
 return this.http.get<any>('http://localhost:8000/getadmindata/'+email);
}


}