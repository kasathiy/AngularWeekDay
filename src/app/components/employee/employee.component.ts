import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() emp: any;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    console.log("Employee", this.emp);
  }

  deleteFn(key: number) {
    this.delete.emit(key);
  }

}
