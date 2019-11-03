import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptorService implements HttpInterceptor {

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    let user = JSON.parse(localStorage.getItem('localUser'));
    console.log("User auth", user);
    console.log("User auth", user.authData);
    if (user && user.authData) {
      req = req.clone({
        setHeaders: {
          Authorization: `Basic ${user.authData}`
        }
      });
    }
    return next.handle(req);
  }
  constructor() { }


}
