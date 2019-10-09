import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
  employees = [
    {
      "key": 1,
      "name": "ABC",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 2,
      "name": "John",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 3,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 4,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 5,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    },
    {
      "key": 6,
      "name": "Michael",
      "date_of_birth": "10/10/2010",
      "position_held": "Manager"
    }
  ];

  ngOnInit() {
  }
  deleteEmployee(key: number) {
    let employee = this.employees.find((employee) => {
      return employee.key == key;
    });
    let employeeNo = this.employees.indexOf(employee);
    this.employees.splice(employeeNo, 1);
    console.log("Employees after delete", this.employees);
    return employee;
  }

}
