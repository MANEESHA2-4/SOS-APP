import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  deletecontact(id:string,rev:string){
    const urld = this.url+'add_form/'+id+'/?rev='+rev;
    return this.http.delete(urld,this.httpOptions);

  }
  deletemail(id:string,rev:string){
    const urld = this.url+'contact_form/'+id+'/?rev='+rev;
    return this.http.delete(urld,this.httpOptions);

  }
  deletequery(id:string,rev:string){
    const urld = this.url+'query-data/'+id+'/?rev='+rev;
    return this.http.delete(urld,this.httpOptions);

  }
  deletereport(id:string,rev:string){
    const urld = this.url+'query-data/'+id+'/?rev='+rev;
    return this.http.delete(urld,this.httpOptions);

  }
   
storedata(formvalue:any){
  return this.http.post<any>('http://localhost:8000/postdata/',formvalue);
}



  get(){
    return this.http.get('http://localhost:8000/get_query/');
  }
  getAll(id:any){
    return this.http.get(`http://localhost:8000/get_all_query/${id}`);
  }
  // getdata(id:any){
  //   return this.http.get(`http://localhost:8000/get__query/${id}`);
  // }

  addQuery(doc:any){
       console.log(doc);
       return this.http.post('http://localhost:8000/post_data/',doc)
     }
     getQuery(){
      return this.http.get('http://localhost:8000/get_data/')
     }
     getAllQuery(id:any){
      return this.http.get(`http://localhost:8000/get_all_data/${id}`);
     }
    



     addreport(doc:any){
      console.log(doc);
      return this.http.post('http://localhost:8000/post_report/',doc)
    }
    getreport(){
     return this.http.get('http://localhost:8000/get_report/')
    }
    getAllreport(id:any){
     return this.http.get(`http://localhost:8000/get_all_report/${id}`);
    }

addmessage(doc:any){
  console.log(doc);
  return this.http.post('http://localhost:8000/post_msg/',doc)
}
getmessage(){
 return this.http.get('http://localhost:8000/get_msg/')
}
getAllmessage(id:any){
 return this.http.get(`http://localhost:8000/get_all_msg/${id}`);
}
report(db:string,doc: object):Observable<{}> {

  const url = this.url+db;
  // this.mail(doc);
  return this.http.post(url,doc,this.httpOptions)
  
  
}

}
