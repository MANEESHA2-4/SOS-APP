


// @Injectable()
// export class HttpCallInterceptorService implements HttpInterceptor {
//   constructor(private injector: Injector) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('Intercepted request' + request.url);
//     return next.handle(request).pipe(
//       tap(evt => {
//         console.log(evt)
//         // this.toastr.success("Details Entered Successfully")
//       }, err => {
//         console.log(err)
//         // alert(err.error.reason)
//         // this.toastr.error(err.error.message.description);
//       })
      
//     )
//   }
//  }

