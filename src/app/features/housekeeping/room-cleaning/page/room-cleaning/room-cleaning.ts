import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { RoomCleaningService } from '../../room-cleaning-service';
import { MatDialog } from '@angular/material/dialog';
import { RoomCleaningDialog } from '../../component/room-cleaning-dialog/room-cleaning-dialog';

@Component({
  selector: 'app-room-cleaning',
  imports: [SharedModule],
  templateUrl: './room-cleaning.html',
  styleUrl: './room-cleaning.scss',
})
export class RoomCleaning {
  RoomCleaningDetails: any;
  page: any;

  constructor(private roomCleaningService: RoomCleaningService, private dialog: MatDialog) {
    this.GetRoomCleaningDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetRoomCleaningDetails() {
    this.roomCleaningService.GetRoomCleaningDetails().subscribe({
      next: (result: any) => {
        this.RoomCleaningDetails = result
      },
    })
  }

  OpenCreateRoomCleaningDialog() {
    const dialogRef = this.dialog.open(RoomCleaningDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetRoomCleaningDetails()
    });
  }

}
