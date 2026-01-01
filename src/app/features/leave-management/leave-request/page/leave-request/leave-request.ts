import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { LeaveRequestService } from '../../leave-request-service';
import { MatDialog } from '@angular/material/dialog';
import { LeaveRequestDialog } from '../../component/leave-request-dialog/leave-request-dialog';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-leave-request',
  imports: [SharedModule],
  templateUrl: './leave-request.html',
  styleUrl: './leave-request.scss',
})
export class LeaveRequest {
  LeaveRequestDetails: any;
  page: any;
  IsAddLeaveRequest!: boolean;

  constructor(private leaveRequestService: LeaveRequestService, private dialog: MatDialog, @Inject(PLATFORM_ID) private platformId: object) {
    this.GetLeaveRequest();
    if (isPlatformBrowser(this.platformId)) {
      const UserDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}')
      this.IsAddLeaveRequest = UserDetails.LoginType == 'Employee'
  }
}
onPageChanged(event: any) {
  this.page = event;
}
GetLeaveRequest() {
  this.leaveRequestService.GetLeaveRequests().subscribe({
    next: (result: any) => {
      console.log('result: ', result);
      // if Login Employee so only EMployee leave request show
      // If admin login so all employee leave request show
      this.LeaveRequestDetails = result
    },
  })
}

OpenLeaveRequestDialog() {
  const dialogRef = this.dialog.open(LeaveRequestDialog, {
    minWidth: '700px',
    maxWidth: '700px',
    // data: obj,
    disableClose: true
  });

  dialogRef.afterClosed().subscribe(result => {
    this.GetLeaveRequest()
  });
}


}
