import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/service/http-service.service';
import { EmployeeModel } from 'src/app/models/EmployeeModel';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() emp: any;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  constructor(public activatedRoute:ActivatedRoute,
    public httpService:HttpServiceService) { 

  }

  ngOnInit() {
    console.log("RouteParams",this.activatedRoute);

    console.log("Employee", this.emp);
    const key = this.activatedRoute.snapshot.params.key;
    console.log("key",key);
    // if key has a value
    if (key) {
      this.httpService.getEmployee(key).subscribe(emp => {
        console.log('employee', emp);
         this.emp = EmployeeModel.fromDTO(emp);
      });
    }
  }

  deleteFn(key: number) {
    this.delete.emit(key);
  }

}
