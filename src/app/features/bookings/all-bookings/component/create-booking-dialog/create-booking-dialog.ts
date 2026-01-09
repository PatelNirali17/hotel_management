import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomTypeService } from '../../../../rooms/room-type/room-type-service';
import { AllRoomService } from '../../../../rooms/all-rooms/all-room-service';

@Component({
  selector: 'app-create-booking-dialog',
  imports: [SharedModule],
  templateUrl: './create-booking-dialog.html',
  styleUrl: './create-booking-dialog.scss',
})
export class CreateBookingDialog {
  RoomTypeList: any;
  RoomList: any;

  constructor(public dialogRef: MatDialogRef<CreateBookingDialog>, private roomTypeService: RoomTypeService, private allroomService: AllRoomService,
    @Inject(MAT_DIALOG_DATA) public BookingDetails: any) {

    this.roomTypeService.GetRoomTypes().subscribe({
      next: (result: any) => {
        this.RoomTypeList = result
      }
    })

  }

  onRoomTypeChange(event: any) {
    const roomtype = this.RoomTypeList.find((s: any) => s.name == event.value)
    this.allroomService.GetRoomDetails().subscribe({
      next: (result: any) => {
        this.RoomList = result?.filter((s: any) => s.RoomType == roomtype.name && s.Status == 'Open')
      },
    })
  }
}
