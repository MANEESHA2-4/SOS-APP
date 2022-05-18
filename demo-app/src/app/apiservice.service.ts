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
}
