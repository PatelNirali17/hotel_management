import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { AllStaffService } from '../../all-staff-service';
import { MatDialog } from '@angular/material/dialog';
import { CreateStaffDialog } from '../../component/create-staff-dialog/create-staff-dialog';

@Component({
  selector: 'app-all-staff',
  imports: [SharedModule],
  templateUrl: './all-staff.html',
  styleUrl: './all-staff.scss',
})
export class AllStaff {
  StaffDetails: any;
  page: any;

  constructor(private allStaffService: AllStaffService, private dialog: MatDialog) {
    this.GetStaffDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetStaffDetails() {
    this.allStaffService.GetStaffDetails().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.StaffDetails = result
      },
    })
  }

  OpenCreateStaffDialog() {
    const dialogRef = this.dialog.open(CreateStaffDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetStaffDetails()
    });
  }
}
