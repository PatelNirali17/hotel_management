import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { AssignShiftService } from '../../assign-shift-service';
import { MatDialog } from '@angular/material/dialog';
import { AssignShiftDialog } from '../../component/assign-shift-dialog/assign-shift-dialog';

@Component({
  selector: 'app-assign-shift',
  imports: [SharedModule],
  templateUrl: './assign-shift.html',
  styleUrl: './assign-shift.scss',
})
export class AssignShift {
  AssignShiftDetails: any;
  page: any;

  constructor(private assignShiftService: AssignShiftService, private dialog: MatDialog) {
    this.GetAssignShiftDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetAssignShiftDetails() {
    this.assignShiftService.GetAssignShift().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.AssignShiftDetails = result
      },
    })
  }

  OpenAssignShiftDialog() {
    const dialogRef = this.dialog.open(AssignShiftDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAssignShiftDetails()
    });
  }

}
