import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { AllRoomService } from '../../all-room-service';

@Component({
  selector: 'app-all-rooms',
  imports: [SharedModule],
  templateUrl: './all-rooms.html',
  styleUrl: './all-rooms.scss',
})
export class AllRooms {
  RoomDetails: any;
  page: any;

  constructor(private allRoomService: AllRoomService) {
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

}
