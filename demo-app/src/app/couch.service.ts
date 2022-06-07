import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CouchService {

  Urlpwd = 'https://apikey-v2-15a2mog1stn0kv0gjnidlq2eoth4psp58f8ov9zs42i6:aabcfd48d07fe38f4760f6cd11b83b4a@b4af4ef2-55e1-4a9b-9b02-8168e5964652-bluemix.cloudantnosqldb.appdomain.cloud/'
  temp: any;
  pusharray: any = [];
  url = 'https://e212ecf3-82ab-4f31-b454-c3866556584d-bluemix.cloudantnosqldb.appdomain.cloud /'
  dbUserName = 'apikey-v2-1zxymrqa2rwcwp3esoqslwcsrnsvh2ggpy6jmusqnlz9';
  dbPassword = '8db4bc5abe318da5e50e638f8cb126b5';
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };
  viewid: any;
  response: any;
  typedData: any;
  total: any;
  constructor(private http: HttpClient) { }

  login(email: string, password: string, type: string) {
    let url = this.url + 'energy-management-login/_find'
    let loginData = {
      selector: {
        type: type,
        email: email,
        password: password
      },
      fields: ["_id", "firstName", "email", "phone", "lastName", "password"]
    };
    return this.http.post(url, loginData, this.httpOptions)
  }


  getByType(type: string, fields: any) {
    let url = this.url + 'energy-management-login/_find'
    let typedData = {
      selector: {
        type: type
      },
      fields: fields
    };
    return this.http.post(url, typedData, this.httpOptions)

  }


  getByTypedUser(type: string, id: any) {
    let url = this.url + 'energy-management-login/_find'
    let typedData = {
      selector: {
        type: type,
        user: id
      }

    };
    return this.http.post(url, typedData, this.httpOptions)

  }



  deleteData(id: any, rev: any): Observable<{}> {
    const urld = this.url + 'energy-management-login/' + id + '/?rev=' + rev;
    return this.http.delete(urld, this.httpOptions);
  }

  getDocByIds(db: string, id: any): Observable<{}> {
    const url = this.url + db + '/' + id;
    return this.http.get(url, this.httpOptions);

  }
  getDataById(database: string, id: any) {
    const url = this.url + database + '/' + id;
    return this.http.get(url, this.httpOptions);
  }
  getnumbers(db: string): Observable<{}> {
    const url = this.url + db + '/_all_docs';
    return this.http.get(url, this.httpOptions)

  }
  checkuserlogin(email: any) {
    return this.http.get<any>('http://localhost:8000/getdata/' + email);
  }
  getDataByViewDoc(db: string, type: string) {
    let userObject: any = localStorage.getItem('userData')
    let user = JSON.parse(userObject.toString())
    console.log(user)
    const url = this.url + db + '/_design/' + type + '/_view' + '/new-view' + '?include_docs=true'
    const objectview = {
      "keys": [type + user['_id']]
    }
    return this.http.post(url, objectview, this.httpOptions)
  }

}
