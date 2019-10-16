import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DeleteService } from 'src/app/services/delete.service';
import { HttpClient } from '@angular/common/http';
import { HttpServiceComponent } from '../http-service/http-service.component';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { EmployeeModel } from 'src/app/models/EmployeeModel';
import { IEmployeeDTO } from 'src/app/api/employee.dto';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
  //providers:[{provide:DeleteService,useClass:DeleteService}]
})
export class EmployeeListComponent implements OnInit {

  constructor(public deleteService:DeleteService, 
    public httpService:HttpServiceService) {

   }


  // employees = [
  //   {
  //     "key": 1,
  //     "name": "ABC",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   },
  //   {
  //     "key": 2,
  //     "name": "John",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   },
  //   {
  //     "key": 3,
  //     "name": "Michael",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   },
  //   {
  //     "key": 4,
  //     "name": "Michael",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   },
  //   {
  //     "key": 5,
  //     "name": "Michael",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   },
  //   {
  //     "key": 6,
  //     "name": "Michael",
  //     "date_of_birth": "10/10/2010",
  //     "position_held": "Manager"
  //   }
  // ];
  employees:Array<EmployeeModel>=[];

  ngOnInit() {
    // console.log("return",this.httpService.get("http://localhost:8081/getEmployees"));
    this.httpService.getEmployees().subscribe((data:Array<IEmployeeDTO>)=>{
      console.log("data",data);
      this.employees = data.map((employeeDto:IEmployeeDTO)=>
      {
      return EmployeeModel.fromDTO(employeeDto);
    })
      // this.employees = data;
    },(error)=>{ 
      console.log("error",error);
    },()=>{
      console.log("complete");
    })
  
  }

  deleteEmployee(key: number) {
     this.deleteService.delete(this.employees,key);
  }

}
