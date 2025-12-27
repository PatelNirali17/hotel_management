import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllStaffService } from '../../../../staff/all-staff/all-staff-service';
import { DepartmentMasterService } from '../../../../departments/department-master/department-master-service';
import { ShiftListService } from '../../../shift-list/shift-list-service';

@Component({
  selector: 'app-assign-shift-dialog',
  imports: [SharedModule],
  templateUrl: './assign-shift-dialog.html',
  styleUrl: './assign-shift-dialog.scss',
})
export class AssignShiftDialog {
  StaffList: any;
  DepartmentList: any;
  ShiftList: any;

  constructor(public dialogRef: MatDialogRef<AssignShiftDialog>, private allStaffService: AllStaffService, private shiftListService: ShiftListService,
    private departmentMasterService: DepartmentMasterService,
    @Inject(MAT_DIALOG_DATA) public ShiftDetails: any) {

    this.allStaffService.GetStaffDetails().subscribe({
      next: (result: any) => {
        this.StaffList = result
      },
    })
    this.departmentMasterService.GetDepartmentDetails().subscribe({
      next: (result: any) => {
        this.DepartmentList = result
      },
    })
    this.shiftListService.GetShiftList().subscribe({
      next: (result: any) => {
        this.ShiftList = result
      },
    })

  }

}
