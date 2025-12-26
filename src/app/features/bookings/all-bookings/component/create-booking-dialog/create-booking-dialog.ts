import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomTypeService } from '../../../../rooms/room-type/room-type-service';

@Component({
  selector: 'app-create-booking-dialog',
  imports: [SharedModule],
  templateUrl: './create-booking-dialog.html',
  styleUrl: './create-booking-dialog.scss',
})
export class CreateBookingDialog {
  RoomTypeList: any;

  constructor(public dialogRef: MatDialogRef<CreateBookingDialog>, private roomTypeService: RoomTypeService,
    @Inject(MAT_DIALOG_DATA) public BookingDetails: any) {

    this.roomTypeService.GetRoomTypes().subscribe({
      next: (result: any) => {
        this.RoomTypeList = result
      }
    })

  }
}
