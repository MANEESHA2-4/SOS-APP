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

  sendreply(formvalue:any) {
    return this.http.post<any>('http://localhost:8000/mail/',formvalue);
}

remove(id:any,id1:any){
  return this.http.delete(`http://localhost:8000/deletequery/${id}/${id1}`);
}
clear(id:any,id1:any){
  return this.http.delete(`http://localhost:8000/deletereport/${id}/${id1}`);
}
clearreport(id:any,id1:any){
  return this.http.delete(`http://localhost:8000/clearreport/${id}/${id1}`);
}
deletecontact(id:any,id1:any){
  return this.http.delete(`http://localhost:8000/deletecontact/${id}/${id1}`);
}
deleteuser(id:any,id1:any){
  return this.http.delete(`http://localhost:8000/deleteuser/${id}/${id1}`);
}
  // registerdata(formObject:any){
  //   return this.http.post('http://localhost:8000/postquery',formObject)
  // }
  getnewuser(){
    return this.http.get('http://localhost:8000/get_usersignup/')
   }
  add(doc:any){
    console.log(doc);
    return this.http.post('http://localhost:8000/addcontact/',doc);
  }
  delete(id:string,rev:string){
    const urld = this.url+'login_form/'+id+'/?rev='+rev;
    return this.http.delete(urld,this.httpOptions);

  }
  // deletecontact(id:string,rev:string){
  //   const urld = this.url+'login_form/'+id+'/?rev='+rev;
  //   return this.http.delete(urld,this.httpOptions);

  // }
  deletemail(id:string,rev:string){
    const urld = this.url+'login_form/'+id+'/?rev='+rev;
    return this.http.delete(urld,this.httpOptions);

  }
 
   
storedata(formvalue:any){
  return this.http.post<any>('http://localhost:8000/signupdata/',formvalue);
}



  get(){
    return this.http.get('http://localhost:8000/removecontact/');
  }
  getAll(id:any){
    return this.http.get(`http://localhost:8000/get_all_query/${id}`);
  }
  

  addQuery(doc:any){
       console.log(doc);
       return this.http.post('http://localhost:8000/addQuery/',doc)
     }
     getQuery(){
      return this.http.get('http://localhost:8000/viewQuery/')
     }
     getAllQuery(id:any){
      return this.http.get(`http://localhost:8000/get_all_data/${id}`);
     }
    

     addreply(doc:any){
      console.log(doc);
      return this.http.post('http://localhost:8000/post_reply/',doc)
    }
    getreply(id:any){
     return this.http.get(`http://localhost:8000/get_reply/${id}`)
    }
    getAllreply(id:any){
     return this.http.get(`http://localhost:8000/get_all_reply/${id}`);
    }

     addreport(doc:any){
      console.log(doc);
      return this.http.post('http://localhost:8000/sendreport/',doc)
    }
    getreport(){
     return this.http.get('http://localhost:8000/showreport/')
    }
    getAllreport(id:any){
     return this.http.get(`http://localhost:8000/get_all_report/${id}`);
    }

addmessage(doc:any){
  console.log(doc);
  return this.http.post('http://localhost:8000/post_feedback/',doc)
}
getmessage(){
 return this.http.get('http://localhost:8000/get_feedback/')
}
getAllmessage(id:any){
 return this.http.get(`http://localhost:8000/get_all_msg/${id}`);
}
report(db:string,doc: object):Observable<{}> {

  const url = this.url+db;
  return this.http.post(url,doc,this.httpOptions)
  
  
}


}
