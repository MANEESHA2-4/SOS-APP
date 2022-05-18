import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) { }
  registerdata(formObject:any){
    return this.http.post('http://localhost:8000/postquery',formObject)
  }
}
