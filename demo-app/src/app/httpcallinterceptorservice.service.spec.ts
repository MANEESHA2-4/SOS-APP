import { Injectable, Injector } from '@angular/core';
import {  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable()
export class HttpCallInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted request' + request.url);
    return next.handle(request).pipe(
      tap(evt => {
        console.log(evt)
        // this.toastr.success("Details Entered Successfully")
      }, err => {
        console.log(err)
      
      })
    )
  }
 }

