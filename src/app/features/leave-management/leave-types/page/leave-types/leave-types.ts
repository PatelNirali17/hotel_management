import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { LeaveTypeService } from '../../leave-type-service';
import { MatDialog } from '@angular/material/dialog';
import { LeaveTypesDialog } from '../../component/leave-types-dialog/leave-types-dialog';

@Component({
  selector: 'app-leave-types',
  imports: [SharedModule],
  templateUrl: './leave-types.html',
  styleUrl: './leave-types.scss',
})
export class LeaveTypes {
  LeaveTypesDetails: any;
  page: any;

  constructor(private leaveTypeService: LeaveTypeService, private dialog: MatDialog) {
    this.GetLeaveTypes()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetLeaveTypes() {
    this.leaveTypeService.GetLeaveType().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.LeaveTypesDetails = result
      },
    })
  }

  OpenLeaveTypeDialog() {
    const dialogRef = this.dialog.open(LeaveTypesDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetLeaveTypes()
    });
  }

}
