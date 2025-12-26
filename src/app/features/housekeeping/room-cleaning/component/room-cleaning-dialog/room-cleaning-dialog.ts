import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllStaffService } from '../../../../staff/all-staff/all-staff-service';

@Component({
  selector: 'app-room-cleaning-dialog',
  imports: [SharedModule],
  templateUrl: './room-cleaning-dialog.html',
  styleUrl: './room-cleaning-dialog.scss',
})
export class RoomCleaningDialog {
  StaffList: any;

  constructor(public dialogRef: MatDialogRef<RoomCleaningDialog>, private allStaffService: AllStaffService,
    @Inject(MAT_DIALOG_DATA) public RoomCleaningDetails: any) {

    this.allStaffService.GetStaffDetails().subscribe({
      next: (result: any) => {
        this.StaffList = result
      }
    })
  }

}
