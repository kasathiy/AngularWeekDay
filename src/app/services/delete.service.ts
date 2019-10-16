import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class DeleteService {

  constructor() {
   }

   delete(list:Array<any>,key: number) {
    //  console.log("list",obj);
    //  obj.name = "dddd";
     // name = "fdfdfdfdf";
     //delete list[0];
    let employee = list.find((employee) => {
      return employee.key == key;
    });
    let employeeNo =list.indexOf(employee);
    list.splice(employeeNo, 1);
    console.log("Employees after delete", list);
    return list;
  }

}
