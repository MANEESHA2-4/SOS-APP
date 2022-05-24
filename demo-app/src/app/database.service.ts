import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

   url = 'https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud/'
   dbUserName = 'apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9'
   dbPassword = '8db4bc5abe318da5e50e638f8cb126b5'
   basicAuth ='Basic ' +btoa(this.dbUserName+':'+this.dbPassword)

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization' : this.basicAuth
    })
  }

  registerdata(formObject:any){
    return this.http.post('http://localhost:8000/postquery',formObject)
  }
  add(doc:any){
    console.log(doc);
    return this.http.post('http://localhost:8000/post_query/',doc);
  }
  delete(id:string,rev:string){
    const urld = this.url+'add_form/'+id+'/?rev='+rev;
    return this.http.delete(urld,this.httpOptions);

  }

  get(){
    return this.http.get('http://localhost:8000/get_query/');
  }
  getAll(id:any){
    return this.http.get(`http://localhost:8000/get_all_query/${id}`);
  }
  
}
