import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shift-list-dialog',
  imports: [SharedModule],
  templateUrl: './shift-list-dialog.html',
  styleUrl: './shift-list-dialog.scss',
})
export class ShiftListDialog {

  constructor(public dialogRef: MatDialogRef<ShiftListDialog>,
    @Inject(MAT_DIALOG_DATA) public ShiftDetails: any) {


  }

}
