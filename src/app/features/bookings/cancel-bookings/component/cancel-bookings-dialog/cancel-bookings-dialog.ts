import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomTypeService } from '../../../../rooms/room-type/room-type-service';

@Component({
  selector: 'app-cancel-bookings-dialog',
  imports: [SharedModule],
  templateUrl: './cancel-bookings-dialog.html',
  styleUrl: './cancel-bookings-dialog.scss',
})
export class CancelBookingsDialog {
  RoomTypeList: any;

  constructor(public dialogRef: MatDialogRef<CancelBookingsDialog>, private roomTypeService: RoomTypeService,
    @Inject(MAT_DIALOG_DATA) public BookingDetails: any) {

    this.roomTypeService.GetRoomTypes().subscribe({
      next: (result: any) => {
        this.RoomTypeList = result
      }
    })

  }
}
