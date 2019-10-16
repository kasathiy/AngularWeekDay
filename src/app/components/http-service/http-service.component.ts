import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {

  constructor(public httpService:HttpClient) { }

  ngOnInit() {
  }

  public getEmployees(){
    return this.httpService.get("http://localhost:8081/getEmployees");
  }

}
