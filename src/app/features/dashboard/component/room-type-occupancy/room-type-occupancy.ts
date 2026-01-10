import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';

@Component({
  selector: 'app-room-type-occupancy',
  imports: [SharedModule],
  templateUrl: './room-type-occupancy.html',
  styleUrl: './room-type-occupancy.scss',
})
export class RoomTypeOccupancy {
 chartOptions: any = {
    series: [18, 22, 20, 19, 25, 21],
    chart: {
      type: 'donut',
      width: 380,height: 260
    },
    labels: ['Deluxe', 'Super Deluxe', 'Suite', 'Single', 'Double', 'Villa'],
    colors: ['#6B5B95', '#C48B9F', '#4A7EBB', '#B89B5E', '#a12404', '#7a7a7a'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 300 },
          legend: { position: 'bottom' }
        }
      }
    ]
  };
}
