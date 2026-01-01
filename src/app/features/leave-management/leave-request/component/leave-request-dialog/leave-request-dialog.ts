import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllStaffService } from '../../../../staff/all-staff/all-staff-service';
import { LeaveTypeService } from '../../../leave-types/leave-type-service';
import { DepartmentOverviewService } from '../../../../departments/department-overview/department-overview-service';

@Component({
  selector: 'app-leave-request-dialog',
  imports: [SharedModule],
  templateUrl: './leave-request-dialog.html',
  styleUrl: './leave-request-dialog.scss',
})
export class LeaveRequestDialog {
  EmployeeList: any;
  LeaveTypeList: any;
  ManagerList: any;

  constructor(public dialogRef: MatDialogRef<LeaveRequestDialog>, private staffService: AllStaffService, private leaveTypeServcie: LeaveTypeService,
    private departmentOverviewService: DepartmentOverviewService,
    @Inject(MAT_DIALOG_DATA) public LeaveRequestDetails: any) {

    this.staffService.GetStaffDetails().subscribe({
      next: (result: any) => {
        this.EmployeeList = result
      },
    })
    this.leaveTypeServcie.GetLeaveType().subscribe({
      next: (result: any) => {
        this.LeaveTypeList = result
      },
    })
  }

  onEmployeeChange(event: any) {
    const employee = this.EmployeeList.find((s: any) => s.id == event.value)
    this.departmentOverviewService.GetDepartmentOverviewDetails().subscribe({
      next: (result: any) => {
        this.ManagerList = result?.filter((s:any) => s.DepartmentName == employee.Department)
      },
    })
  }

}
