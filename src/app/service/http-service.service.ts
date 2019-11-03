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
  getEmployee(key): Observable<IEmployeeDTO> {
    return this.httpService
      .get("http://localhost:8081/getEmployee", { params: { param: key } })
      .pipe(
        map(response => {
          return response as IEmployeeDTO;
        })
      );
  }

  public addEmployee(dto: IEmployeeDTO) {
    return this.httpService.put("http://localhost:8081/addEmployee", dto);
  }

  public getEmployees():Observable<Array<IEmployeeDTO>>{

    return this.httpService.get("http://localhost:8081/getEmployees").pipe(
      map(response => {
        return response as Array<IEmployeeDTO>;
      })
    );
  }
}
