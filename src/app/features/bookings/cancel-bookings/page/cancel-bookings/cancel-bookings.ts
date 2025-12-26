import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { CancelBookingService } from '../../cancel-booking-service';
import { MatDialog } from '@angular/material/dialog';
import { CancelBookingsDialog } from '../../component/cancel-bookings-dialog/cancel-bookings-dialog';

@Component({
  selector: 'app-cancel-bookings',
  imports: [SharedModule],
  templateUrl: './cancel-bookings.html',
  styleUrl: './cancel-bookings.scss',
})
export class CancelBookings {
  CancelBookingDetails: any;
  page: any;

  constructor(private cancelBookingService: CancelBookingService, private dialog: MatDialog) {
    this.GetCancelBookingsDetails()
  }

  onPageChanged(event: any) {
    this.page = event;
  }

  GetCancelBookingsDetails() {
    this.cancelBookingService.GetCancelBookingsDetails().subscribe({
      next: (result: any) => {
        this.CancelBookingDetails = result
      },
    })
  }

  EditCancelBooking(Booking: any) {
    const dialogRef = this.dialog.open(CancelBookingsDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      data: Booking,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetCancelBookingsDetails()
    });
  }
}
