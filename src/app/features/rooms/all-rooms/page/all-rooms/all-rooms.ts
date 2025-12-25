import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { AllRoomService } from '../../all-room-service';
import { MatDialog } from '@angular/material/dialog';
import { CreateRoomDialog } from '../../component/create-room-dialog/create-room-dialog';

@Component({
  selector: 'app-all-rooms',
  imports: [SharedModule],
  templateUrl: './all-rooms.html',
  styleUrl: './all-rooms.scss',
})
export class AllRooms {
  RoomDetails: any;
  page: any;

  constructor(private allRoomService: AllRoomService, private dialog: MatDialog) {
    this.GetRoomDetails()
  }

  onPageChanged(event: any) {
    this.page = event;
  }

  GetRoomDetails() {
    this.allRoomService.GetRoomDetails().subscribe({
      next: (result: any) => {
        this.RoomDetails = result
      },
    })
  }

  OpenCreateRoomDialog() {
    const dialogRef = this.dialog.open(CreateRoomDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetRoomDetails()
    });
  }

}
