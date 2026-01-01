import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CabListService } from '../../../cab-list/cab-list-service';
import { AllRoomService } from '../../../../rooms/all-rooms/all-room-service';

@Component({
  selector: 'app-cab-booking-dialog',
  imports: [SharedModule],
  templateUrl: './cab-booking-dialog.html',
  styleUrl: './cab-booking-dialog.scss',
})
export class CabBookingDialog {
  CabList: any;
  RoomList: any;

  constructor(public dialogRef: MatDialogRef<CabBookingDialog>, private cabListService: CabListService, private allRoomService: AllRoomService,
    @Inject(MAT_DIALOG_DATA) public CabBookingDetails: any) {
    this.cabListService.GetAllCabList().subscribe({
      next: (result: any) => {
        this.CabList = result?.filter((s: any) => s.status == 'Available')
      },
    })
    this.allRoomService.GetRoomDetails().subscribe({
      next: (result: any) => {
        this.RoomList = result
      },
    })
  }

  onCabModelChange(event: any) {
    const cabdetails = this.CabList?.find((s: any) => s.cabId == event.value)
    // driverName,driverContact value patch karvani
  }

}
