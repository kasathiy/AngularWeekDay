import { IEmployeeDTO } from '../api/employee.dto';

function parseDate(s): Date {
    const b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
  }

  
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

    public toDto(){
        let dto = {} as IEmployeeDTO;
        dto.name = this.name;
        const dateObj: Date = parseDate(this.dateOfBirth);
        dto.date_of_birth = dateObj.toLocaleDateString();
        dto.position_held = this.positionHeld; 
        return dto;
    }
}