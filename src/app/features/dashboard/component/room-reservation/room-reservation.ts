import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexPlotOptions, ApexLegend, ApexFill } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  stroke: any,
  colors:any[]
};

@Component({
  selector: 'app-room-reservation',
  imports: [SharedModule],
  templateUrl: './room-reservation.html',
  styleUrl: './room-reservation.scss',
})
export class RoomReservation {
  chartOptions: ChartOptions = {
    series: [
      { name: "Booked", data: [44, 55, 41, 67, 22, 43, 55, 64] },
      { name: "Canceled", data: [13, 23, 20, 8, 13, 27, 12, 9] }
    ],
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: true }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%"
      }
    },
    dataLabels: { enabled: true },
    stroke: { show: true, width: 1, colors: ["#fff"] },
    xaxis: { categories: ["01 Jan", "02 Jan", "03 Jan", "O4 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan"] },
    colors: ["#6B5B95", "#C48B9F"],
    fill: { opacity: 1 },
    legend: { position: "top", horizontalAlign: "left", offsetX: 40 }
  };
}
