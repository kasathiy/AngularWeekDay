import { IEmployeeDTO } from '../api/employee.dto';

export class EmployeeModel {


    name: string;
    dateOfBirth: Date;
    positionHeld: string;


    public static fromDTO(employeeDto:IEmployeeDTO){
        let employeeModel = new EmployeeModel;
        employeeModel.name  = employeeDto.name;
        employeeModel.dateOfBirth = new Date(employeeDto.date_of_birth);
        employeeModel.positionHeld = employeeDto.position_held;
        return employeeModel;  
    }
}