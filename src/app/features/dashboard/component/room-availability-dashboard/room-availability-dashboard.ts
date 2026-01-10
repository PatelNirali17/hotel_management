import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ApexLegend } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: any[];
  legend?: ApexLegend;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-room-availability-dashboard',
  imports: [SharedModule],
  templateUrl: './room-availability-dashboard.html',
  styleUrl: './room-availability-dashboard.scss',
})
export class RoomAvailabilityDashboard {
  chartOptions: ChartOptions = {
    series: [125, 87, 57, 25],
    chart: {
      type: 'pie',
      width: 380,
      height: 250
    },
    labels: ['Occupied', 'Reserved', 'Available', 'Not Ready',],
    colors: ['#6B5B95', '#C48B9F', '#4A7EBB', '#B89B5E'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 300 },
          legend: { position: 'bottom' }
        }
      }
    ],
  };
}
