import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-department-master-dialog',
  imports: [SharedModule],
  templateUrl: './department-master-dialog.html',
  styleUrl: './department-master-dialog.scss',
})
export class DepartmentMasterDialog {

  constructor(public dialogRef: MatDialogRef<DepartmentMasterDialog>,
    @Inject(MAT_DIALOG_DATA) public DesignationDetails: any) {

  }

}
