import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { RoomTypeService } from '../../room-type-service';

@Component({
  selector: 'app-room-type',
  imports: [SharedModule],
  templateUrl: './room-type.html',
  styleUrl: './room-type.scss',
})
export class RoomType {
  RoomTypesDetails: any;
  IsActiveUser: boolean = true;
  page: any;

  constructor(private roomTypeService: RoomTypeService) {
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

}
