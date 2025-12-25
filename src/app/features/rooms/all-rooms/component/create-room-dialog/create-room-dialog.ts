import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomTypeService } from '../../../room-type/room-type-service';

@Component({
  selector: 'app-create-room-dialog',
  imports: [SharedModule],
  templateUrl: './create-room-dialog.html',
  styleUrl: './create-room-dialog.scss',
})
export class CreateRoomDialog {
    RoomTypeList: any;

    constructor(public dialogRef: MatDialogRef<CreateRoomDialog>,private roomTypeService : RoomTypeService,
    @Inject(MAT_DIALOG_DATA) public RoomDetails: any) {

    this.roomTypeService.GetRoomTypes().subscribe({
      next:(result:any) => {
        this.RoomTypeList = result
      }
    })

  }
}
