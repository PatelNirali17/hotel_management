import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { EmployeeAttendanceService } from '../../employee-attendance-service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-attendance',
  imports: [SharedModule],
  templateUrl: './employee-attendance.html',
  styleUrl: './employee-attendance.scss',
})
export class EmployeeAttendance {
  EmployeeAttendanceDetails: any;
  page: any;

  constructor(private employeeAttendanceService: EmployeeAttendanceService, private dialog: MatDialog) {
    this.GetEmployeeAttendanceDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetEmployeeAttendanceDetails() {
    this.employeeAttendanceService.GetEmployeeAttendance().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.EmployeeAttendanceDetails = result
      },
    })
  }

}
