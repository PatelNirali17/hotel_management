import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { AllBookingsService } from '../../all-bookings-service';
import { CreateBookingDialog } from '../../component/create-booking-dialog/create-booking-dialog';
import { MatDialog } from '@angular/material/dialog';
import { CancelBookingsDialog } from '../../../cancel-bookings/component/cancel-bookings-dialog/cancel-bookings-dialog';

@Component({
  selector: 'app-all-bookings',
  imports: [SharedModule],
  templateUrl: './all-bookings.html',
  styleUrl: './all-bookings.scss',
})
export class AllBookings {
  BookingDetails: any;
  page: any;
  constructor(private allBookingsService: AllBookingsService, private dialog: MatDialog) {
    this.GetBookingDetails()
  }

  onPageChanged(event: any) {
    this.page = event;
  }

  GetBookingDetails() {
    this.allBookingsService.GetBookingsDetails().subscribe({
      next: (result: any) => {
        this.BookingDetails = result
      },
    })
  }

  OpenCreateBookingDialog() {
    const dialogRef = this.dialog.open(CreateBookingDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetBookingDetails()
    });
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
