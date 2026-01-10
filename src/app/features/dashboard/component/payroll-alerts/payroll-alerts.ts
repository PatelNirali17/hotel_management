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
  selector: 'app-payroll-alerts',
  imports: [SharedModule],
  templateUrl: './payroll-alerts.html',
  styleUrl: './payroll-alerts.scss',
})
export class PayrollAlerts {
 chartOptions: ChartOptions = {
    series: [
      { name: "Paid", data: [10, 15, 9, 8] },
      { name: "Unpaid", data: [0, 3, 3, 0] }
    ],
    chart: {
      type: "bar",
      height:250,
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
    xaxis: { categories: ["Front Office", "Housekeeping", "Kitchen", "Security"] },
    colors: ["#6B5B95", "#C48B9F"],
    fill: { opacity: 1 },
    legend: { position: "top", horizontalAlign: "left", offsetX: 40 }
  };
}
