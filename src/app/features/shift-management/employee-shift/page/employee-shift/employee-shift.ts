import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { EmployeeShiftService } from '../../employee-shift-service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-shift',
  imports: [SharedModule],
  templateUrl: './employee-shift.html',
  styleUrl: './employee-shift.scss',
})
export class EmployeeShift {
  EmployeeShiftDetails: any;
  page: any;

  constructor(private employeeShiftService: EmployeeShiftService, private dialog: MatDialog) {
    this.GetEmployeeShiftDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetEmployeeShiftDetails() {
    this.employeeShiftService.GetEmployeeShift().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.EmployeeShiftDetails = result
      },
    })
  }

}
