import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {

  constructor(public http: HttpClient) {

  }

  login(username: string, password: string) {
    return this.http.post("http://localhost:8081/users/authenticate", { username, password })
      .pipe(map(user => {
        console.log("user Information", user);
        let authData = window.btoa(username + ":" + password);
        user["authData"] = authData;
        localStorage.setItem("localUser", JSON.stringify(user));
        return user;
      }))
  }
}
