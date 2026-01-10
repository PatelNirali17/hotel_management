import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { LeaveRequestService } from '../../../leave-management/leave-request/leave-request-service';

@Component({
  selector: 'app-leave-overview',
  imports: [SharedModule],
  templateUrl: './leave-overview.html',
  styleUrl: './leave-overview.scss',
})
export class LeaveOverview {
  LeaveRequestDetails: any;
  PendingCount : any;
  ApprovedCount: any

  constructor(private leaveRequestService: LeaveRequestService) {
   this.GetLeaveRequest()
  }

  GetLeaveRequest() {
    this.leaveRequestService.GetLeaveRequests().subscribe({
      next: (result: any) => {
        this.LeaveRequestDetails = result?.filter((s: any) => s.status == 'Pending')?.slice(0, 7)
        this.PendingCount = this.LeaveRequestDetails?.length
        this.ApprovedCount = result?.filter((s: any) => s.status == 'Approved')?.length
      },
    })
  }
}
