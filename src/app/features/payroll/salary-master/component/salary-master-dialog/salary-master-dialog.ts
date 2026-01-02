import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllStaffService } from '../../../../staff/all-staff/all-staff-service';

@Component({
  selector: 'app-salary-master-dialog',
  imports: [SharedModule],
  templateUrl: './salary-master-dialog.html',
  styleUrl: './salary-master-dialog.scss',
})
export class SalaryMasterDialog {
  StaffList: any;

  constructor(public dialogRef: MatDialogRef<SalaryMasterDialog>, private allStaffService: AllStaffService,
    @Inject(MAT_DIALOG_DATA) public SalaryDetails: any) {

    this.allStaffService.GetStaffDetails().subscribe({
      next: (result: any) => {
        this.StaffList = result
      },
    })
  }
// Gross Salary = Basic + HRA + DA + Allowances
// Net Salary = Gross Salary - Deductions

}
