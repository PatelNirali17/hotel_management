import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle, ApexPlotOptions, ApexYAxis } from 'ng-apexcharts';
import { SharedModule } from '../../../../shared/shared-module';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  colors: any[]
};

@Component({
  selector: 'app-housekeeping-status',
  imports: [SharedModule],
  templateUrl: './housekeeping-status.html',
  styleUrl: './housekeeping-status.scss',
})
export class HousekeepingStatus {
  chartOptions: ChartOptions = {
    series: [
      { name: 'Rooms', data: [44, 23, 67] }
    ],
    chart: { type: 'bar', height: 250 },
    colors: ["#6B5B95"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%'
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: ['Pending Cleaning', 'Cleaned Today', 'In Laundry Service']
    }
  };
}
