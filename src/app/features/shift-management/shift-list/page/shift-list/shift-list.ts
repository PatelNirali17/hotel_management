import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { ShiftListService } from '../../shift-list-service';
import { MatDialog } from '@angular/material/dialog';
import { ShiftListDialog } from '../../component/shift-list-dialog/shift-list-dialog';

@Component({
  selector: 'app-shift-list',
  imports: [SharedModule],
  templateUrl: './shift-list.html',
  styleUrl: './shift-list.scss',
})
export class ShiftList {
  ShiftListDetails: any;
  page: any;

  constructor(private shiftListService: ShiftListService, private dialog: MatDialog) {
    this.GetShiftListDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetShiftListDetails() {
    this.shiftListService.GetShiftList().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.ShiftListDetails = result
      },
    })
  }

  OpenShiftListDialog() {
    const dialogRef = this.dialog.open(ShiftListDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetShiftListDetails()
    });
  }
}
