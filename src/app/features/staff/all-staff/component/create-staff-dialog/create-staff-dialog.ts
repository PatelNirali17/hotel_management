import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DesignationMasterService } from '../../../../departments/designation-master/designation-master-service';

@Component({
  selector: 'app-create-staff-dialog',
  imports: [SharedModule],
  templateUrl: './create-staff-dialog.html',
  styleUrl: './create-staff-dialog.scss',
})
export class CreateStaffDialog {
  DesignationList: any;

  constructor(public dialogRef: MatDialogRef<CreateStaffDialog>,private designationMasterService : DesignationMasterService,
    @Inject(MAT_DIALOG_DATA) public StaffDetails: any) {

      this.designationMasterService.GetDesignationDetails().subscribe({
        next:(result:any) => {
          this.DesignationList = result
        }
      })

  }
}
