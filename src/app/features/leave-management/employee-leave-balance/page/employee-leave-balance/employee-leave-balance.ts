import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { EmployeeLeaveBalanceService } from '../../employee-leave-balance-service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-leave-balance',
  imports: [SharedModule],
  templateUrl: './employee-leave-balance.html',
  styleUrl: './employee-leave-balance.scss',
})
export class EmployeeLeaveBalance {
  EmployeeLeaveBalanceDetails: any;
  page: any;

  constructor(private employeeLeaveBalanceService: EmployeeLeaveBalanceService, private dialog: MatDialog) {
    this.GetEmployeeLeaveBalanceDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetEmployeeLeaveBalanceDetails() {
    this.employeeLeaveBalanceService.GetEmployeeLeaveBalance().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.EmployeeLeaveBalanceDetails = result
      },
    })
  }

}
