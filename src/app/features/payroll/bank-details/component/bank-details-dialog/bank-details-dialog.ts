import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllStaffService } from '../../../../staff/all-staff/all-staff-service';

@Component({
  selector: 'app-bank-details-dialog',
  imports: [SharedModule],
  templateUrl: './bank-details-dialog.html',
  styleUrl: './bank-details-dialog.scss',
})
export class BankDetailsDialog {
  StaffList: any;

  constructor(public dialogRef: MatDialogRef<BankDetailsDialog>, private allStaffService: AllStaffService,
    @Inject(MAT_DIALOG_DATA) public SalaryDetails: any) {

    this.allStaffService.GetStaffDetails().subscribe({
      next: (result: any) => {
        this.StaffList = result
      },
    })
  }
}
