import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-designation-master-dialog',
  imports: [SharedModule],
  templateUrl: './designation-master-dialog.html',
  styleUrl: './designation-master-dialog.scss',
})
export class DesignationMasterDialog {

  constructor(public dialogRef: MatDialogRef<DesignationMasterDialog>, 
    @Inject(MAT_DIALOG_DATA) public DesignationDetails: any) {

  }
}
