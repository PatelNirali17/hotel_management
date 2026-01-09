import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { EmployeeDashboardService } from '../../employee-dashboard-service';

@Component({
  selector: 'app-employee-working-history',
  imports: [SharedModule],
  templateUrl: './employee-working-history.html',
  styleUrl: './employee-working-history.scss',
})
export class EmployeeWorkingHistory {
  WorkingHistoryDetails: any;

  constructor(private employeeDashboardService: EmployeeDashboardService) {
    this.GetEmployeeWorkingHistory()
  }

  GetEmployeeWorkingHistory() {
    this.employeeDashboardService.GetEmployeeWorkingHistory().subscribe({
      next: (result: any) => {
        this.WorkingHistoryDetails = result
      },
    })
  }

}
