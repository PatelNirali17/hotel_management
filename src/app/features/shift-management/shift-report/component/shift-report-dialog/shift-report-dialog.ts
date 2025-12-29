import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllStaffService } from '../../../../staff/all-staff/all-staff-service';
import { ShiftListService } from '../../../shift-list/shift-list-service';
import { DepartmentMasterService } from '../../../../departments/department-master/department-master-service';

@Component({
  selector: 'app-shift-report-dialog',
  imports: [SharedModule],
  templateUrl: './shift-report-dialog.html',
  styleUrl: './shift-report-dialog.scss',
})
export class ShiftReportDialog {
  StaffList: any;
  DepartmentList: any;
  ShiftList: any;

  constructor(public dialogRef: MatDialogRef<ShiftReportDialog>, private allStaffService: AllStaffService, private shiftListService: ShiftListService,
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
