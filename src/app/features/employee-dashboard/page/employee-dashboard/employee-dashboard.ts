import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { EmployeeProfile } from '../../component/employee-profile/employee-profile';
import { ApexChart, ApexNonAxisChartSeries, ApexPlotOptions, ApexFill, ApexStroke } from "ng-apexcharts";
import { EmployeeWorkingHistory } from '../../component/employee-working-history/employee-working-history';
import { LeaveBalanceHistory } from '../../component/leave-balance-history/leave-balance-history';
import { UpcommingHolidays } from '../../component/upcomming-holidays/upcomming-holidays';
import { EmployeeTodoList } from '../../component/employee-todo-list/employee-todo-list';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  labels: string[];
};

@Component({
  selector: 'app-employee-dashboard',
  imports: [SharedModule, EmployeeProfile, EmployeeWorkingHistory,LeaveBalanceHistory,UpcommingHolidays,EmployeeTodoList],
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.scss',
})
export class EmployeeDashboard {
  total = 365;
  value = 325;

  chartOptions: ChartOptions = {
    series: [this.getPercentage()],
    chart: { type: "radialBar", height: 130 },
    plotOptions: {
      radialBar: {
        hollow: { size: "60%" },
        dataLabels: {
          name: { show: true, fontSize: "20px" },
          value: { fontSize: "17px", fontWeight: "bold", offsetY: 5, formatter: () => `/ ${this.total}` }
        }
      }
    },
    fill: {
      colors: ["#6B5B95"]
    },
    stroke: {
      lineCap: "round"
    },
    labels: [`${this.value}`]
  };
  private getPercentage(): number {
    return Math.round((this.value / this.total) * 100);
  }

  constructor() {

  }

}
