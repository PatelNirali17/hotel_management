import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { RoomTypeService } from '../../room-type-service';
import { MatDialog } from '@angular/material/dialog';
import { RoomTypeDialog } from '../../component/room-type-dialog/room-type-dialog';

@Component({
  selector: 'app-room-type',
  imports: [SharedModule],
  templateUrl: './room-type.html',
  styleUrl: './room-type.scss',
})
export class RoomType {
  RoomTypesDetails: any;
  page: any;

  constructor(private roomTypeService: RoomTypeService, private dialog: MatDialog) {
    this.GetRoomTypes()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetRoomTypes() {
    this.roomTypeService.GetRoomTypes().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.RoomTypesDetails = result
      },
    })
  }

  OpenRoomTypeDialog() {
    const dialogRef = this.dialog.open(RoomTypeDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetRoomTypes()
    });
  }

}
