import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cab-list-dialog',
  imports: [SharedModule],
  templateUrl: './cab-list-dialog.html',
  styleUrl: './cab-list-dialog.scss',
})
export class CabListDialog {

  constructor(public dialogRef: MatDialogRef<CabListDialog>,
    @Inject(MAT_DIALOG_DATA) public CabDetails: any) {

  }

}
