import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllStaffService } from '../../../../staff/all-staff/all-staff-service';
import { DepartmentMasterService } from '../../../../departments/department-master/department-master-service';
import { LeaveTypeService } from '../../../leave-types/leave-type-service';

@Component({
  selector: 'app-leave-balance-dialog',
  imports: [SharedModule],
  templateUrl: './leave-balance-dialog.html',
  styleUrl: './leave-balance-dialog.scss',
})
export class LeaveBalanceDialog {
  StaffList: any;
  DepartmentList: any;
  LeaveTypeList: any;

  constructor(public dialogRef: MatDialogRef<LeaveBalanceDialog>, private allStaffService: AllStaffService, private departmentMasterService: DepartmentMasterService,
    private leaveTypeService: LeaveTypeService,
    @Inject(MAT_DIALOG_DATA) public LeaveTypeDetails: any) {
    this.allStaffService.GetStaffDetails().subscribe({
      next: (result: any) => {
        this.StaffList = result
      }
    })
    this.departmentMasterService.GetDepartmentDetails().subscribe({
      next: (result: any) => {
        this.DepartmentList = result
      }
    })
    this.leaveTypeService.GetLeaveType().subscribe({
      next: (result: any) => {
        this.LeaveTypeList = result
      }
    })
  }
}
