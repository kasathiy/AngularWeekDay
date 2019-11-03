import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { EmployeeModel } from 'src/app/models/EmployeeModel';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent  {

  employeeModel:EmployeeModel;
  constructor(private httpService: HttpServiceService) {
    this.employeeModel = new EmployeeModel();
    this.employeeModel.positionHeld = 'Software Engineer';
  }


  submit() {
    this.httpService.addEmployee(this.employeeModel.toDto())
      .subscribe(() => {
        console.log("Added");
      });
  }

}
