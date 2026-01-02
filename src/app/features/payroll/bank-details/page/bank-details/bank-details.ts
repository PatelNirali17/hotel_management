import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { BankDetailsService } from '../../bank-details-service';
import { MatDialog } from '@angular/material/dialog';
import { isPlatformBrowser } from '@angular/common';
import { BankDetailsDialog } from '../../component/bank-details-dialog/bank-details-dialog';

@Component({
  selector: 'app-bank-details',
  imports: [SharedModule],
  templateUrl: './bank-details.html',
  styleUrl: './bank-details.scss',
})
export class BankDetails {
  BankDetails: any;
  page: any;
  IsEmployeeLogin!: boolean;
  IsAdminLogin!: boolean;

  constructor(private bankDetailsService: BankDetailsService, private dialog: MatDialog, @Inject(PLATFORM_ID) private platformId: object) {
    this.GetBankDetails();
    if (isPlatformBrowser(this.platformId)) {
      const UserDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}')
      this.IsEmployeeLogin = UserDetails.LoginType == 'Employee'
      this.IsAdminLogin = UserDetails.LoginType == 'Admin'
    }
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetBankDetails() {
    this.bankDetailsService.GetAllBankDetails().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        // if Login Employee so only EMployee Branch Details show
        // If admin login so all employee Branch Details show
        this.BankDetails = result
      },
    })
  }

  OpenBankDetailsDialog() {
    const dialogRef = this.dialog.open(BankDetailsDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetBankDetails()
    });
  }
}
