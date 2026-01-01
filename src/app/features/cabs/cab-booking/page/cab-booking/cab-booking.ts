import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { CabBookingService } from '../../cab-booking-service';
import { MatDialog } from '@angular/material/dialog';
import { CabBookingDialog } from '../../component/cab-booking-dialog/cab-booking-dialog';

@Component({
  selector: 'app-cab-booking',
  imports: [SharedModule],
  templateUrl: './cab-booking.html',
  styleUrl: './cab-booking.scss',
})
export class CabBooking {
  CabBookingDetails: any;
  page: any;

  constructor(private cabBookingService: CabBookingService, private dialog: MatDialog) {
    this.GetCabBookingDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetCabBookingDetails() {
    this.cabBookingService.GetCabBookingDetails().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.CabBookingDetails = result
      },
    })
  }

  OpenCreateCabBookingDialog() {
    const dialogRef = this.dialog.open(CabBookingDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetCabBookingDetails()
    });
  }

}
