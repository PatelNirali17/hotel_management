import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { LeaveBalaceService } from '../../leave-balace-service';
import { MatDialog } from '@angular/material/dialog';
import { LeaveBalanceDialog } from '../../component/leave-balance-dialog/leave-balance-dialog';

@Component({
  selector: 'app-leave-balance',
  imports: [SharedModule],
  templateUrl: './leave-balance.html',
  styleUrl: './leave-balance.scss',
})
export class LeaveBalance {
  LeaveBalanceDetails: any;
  page: any;

  constructor(private leaveBalaceService: LeaveBalaceService, private dialog: MatDialog) {
    this.GetLeaveBalance()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetLeaveBalance() {
    this.leaveBalaceService.GetLeaveBalance().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.LeaveBalanceDetails = result
      },
    })
  }

  OpenLeaveBalanceDialog() {
    const dialogRef = this.dialog.open(LeaveBalanceDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetLeaveBalance()
    });
  }
}
