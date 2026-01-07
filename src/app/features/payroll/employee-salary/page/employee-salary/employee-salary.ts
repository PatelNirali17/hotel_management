import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { EmployeeSalaryService } from '../../employee-salary-service';

@Component({
  selector: 'app-employee-salary',
  imports: [SharedModule],
  templateUrl: './employee-salary.html',
  styleUrl: './employee-salary.scss',
})
export class EmployeeSalary {
  EmployeeSalarySlipDetails: any;
  page: any;

  constructor(private employeeSalaryService: EmployeeSalaryService) {
    this.GetEmployeeSalarySlip()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetEmployeeSalarySlip() {
    this.employeeSalaryService.GetAllEmployeeSalarySlip().subscribe({
      next: (result: any) => {
        this.EmployeeSalarySlipDetails = result?.filter((s: any) => s.employee_id == 12)
      },
    })
  }

}
