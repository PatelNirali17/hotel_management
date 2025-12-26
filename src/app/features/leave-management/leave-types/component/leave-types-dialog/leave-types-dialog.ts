import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-types-dialog',
  imports: [SharedModule],
  templateUrl: './leave-types-dialog.html',
  styleUrl: './leave-types-dialog.scss',
})
export class LeaveTypesDialog {

    constructor(public dialogRef: MatDialogRef<LeaveTypesDialog>,
    @Inject(MAT_DIALOG_DATA) public LeaveTypeDetails: any) {


  }

}
