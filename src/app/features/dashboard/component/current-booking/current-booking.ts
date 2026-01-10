import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { AllBookingsService } from '../../../bookings/all-bookings/all-bookings-service';
import { CancelBookingsDialog } from '../../../bookings/cancel-bookings/component/cancel-bookings-dialog/cancel-bookings-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-current-booking',
  imports: [SharedModule],
  templateUrl: './current-booking.html',
  styleUrl: './current-booking.scss',
})
export class CurrentBooking {
  BookingDetails: any;

  constructor(private allBookingsService: AllBookingsService,private dialog : MatDialog) {
    this.GetBookingDetails()
  }

  GetBookingDetails() {
    this.allBookingsService.GetBookingsDetails().subscribe({
      next: (result: any) => {
        this.BookingDetails = result?.slice(0, 7)
      },
    })
  }

  OpenCancelBookingDialog(Booking: any) {
    const dialogRef = this.dialog.open(CancelBookingsDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      data: Booking,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetBookingDetails()
    });
  }
}
