import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllStaffService } from '../../../../staff/all-staff/all-staff-service';

@Component({
  selector: 'app-laundry-dialog',
  imports: [SharedModule],
  templateUrl: './laundry-dialog.html',
  styleUrl: './laundry-dialog.scss',
})
export class LaundryDialog {
  StaffList: any;

  constructor(public dialogRef: MatDialogRef<LaundryDialog>, private allStaffService: AllStaffService,
    @Inject(MAT_DIALOG_DATA) public RoomCleaningDetails: any) {

    this.allStaffService.GetStaffDetails().subscribe({
      next: (result: any) => {
        this.StaffList = result
      }
    })
  }
}
