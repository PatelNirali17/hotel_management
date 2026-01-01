import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { LeaveRequestApprovalService } from '../../leave-request-approval-service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-leave-request-approval',
  imports: [SharedModule],
  templateUrl: './leave-request-approval.html',
  styleUrl: './leave-request-approval.scss',
})
export class LeaveRequestApproval {
  LeaveRequestApprovalDetails: any;
  page: any;
  IsAdminLogin!: boolean;

  constructor(private leaveRequestApprovalService: LeaveRequestApprovalService, @Inject(PLATFORM_ID) private platformId: object) {
    this.GetLeaveRequestApproval();
    if (isPlatformBrowser(this.platformId)) {
      const UserDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}')
      this.IsAdminLogin = UserDetails.LoginType == 'Admin'
    }
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetLeaveRequestApproval() {
    this.leaveRequestApprovalService.GetLeaveRequestsApproval().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        // if Login Employee so only EMployee get leave request approval show
        // If admin login so all employee leave request approval  show
        this.LeaveRequestApprovalDetails = result
      },
    })
  }

}
