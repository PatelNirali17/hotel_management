import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-room-type-dialog',
  imports: [SharedModule],
  templateUrl: './room-type-dialog.html',
  styleUrl: './room-type-dialog.scss',
})
export class RoomTypeDialog {

  constructor(public dialogRef: MatDialogRef<RoomTypeDialog>,
    @Inject(MAT_DIALOG_DATA) public RoomTypeDetails: any) {

  }

}
