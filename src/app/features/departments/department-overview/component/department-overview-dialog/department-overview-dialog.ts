import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DepartmentMasterService } from '../../../department-master/department-master-service';
import { AllStaffService } from '../../../../staff/all-staff/all-staff-service';

@Component({
  selector: 'app-department-overview-dialog',
  imports: [SharedModule],
  templateUrl: './department-overview-dialog.html',
  styleUrl: './department-overview-dialog.scss',
})
export class DepartmentOverviewDialog {
  DepartmentList: any;
  StaffList: any;

  constructor(public dialogRef: MatDialogRef<DepartmentOverviewDialog>, private departmentMasterService: DepartmentMasterService,
    private allStaffService: AllStaffService,
    @Inject(MAT_DIALOG_DATA) public StaffDetails: any) {

    this.departmentMasterService.GetDepartmentDetails().subscribe({
      next: (result: any) => {
        this.DepartmentList = result
      }
    })
    this.allStaffService.GetStaffDetails().subscribe({
      next: (result: any) => {
        this.StaffList = result
      }
    })
  }
}
