import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-all-events-dialog',
  imports: [SharedModule],
  templateUrl: './all-events-dialog.html',
  styleUrl: './all-events-dialog.scss',
})
export class AllEventsDialog {

  constructor(public dialogRef: MatDialogRef<AllEventsDialog>,
    @Inject(MAT_DIALOG_DATA) public EventDetails: any) {

  }
}
