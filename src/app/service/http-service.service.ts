import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployeeDTO } from '../api/employee.dto';
import { map } from "rxjs/Operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor(public httpService:HttpClient) { }

  ngOnInit() {
  }

  public getEmployees():Observable<Array<IEmployeeDTO>>{

    return this.httpService.get("http://localhost:8081/getEmployees").pipe(
      map(response => {
        return response as Array<IEmployeeDTO>;
      })
    );
  }
}
