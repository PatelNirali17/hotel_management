import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stocks-dialog',
  imports: [SharedModule],
  templateUrl: './stocks-dialog.html',
  styleUrl: './stocks-dialog.scss',
})
export class StocksDialog {

  constructor(public dialogRef: MatDialogRef<StocksDialog>,
    @Inject(MAT_DIALOG_DATA) public StockDetails: any) {


  }
}
