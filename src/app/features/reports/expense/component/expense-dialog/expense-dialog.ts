import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-expense-dialog',
  imports: [SharedModule],
  templateUrl: './expense-dialog.html',
  styleUrl: './expense-dialog.scss',
})
export class ExpenseDialog {

  constructor(public dialogRef: MatDialogRef<ExpenseDialog>,
    @Inject(MAT_DIALOG_DATA) public ExpenseDetails: any) {


  }

}
