import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { EmployeeProfile } from '../../component/employee-profile/employee-profile';

@Component({
  selector: 'app-employee-dashboard',
  imports: [SharedModule,EmployeeProfile],
  templateUrl: './employee-dashboard.html',
  styleUrl: './employee-dashboard.scss',
})
export class EmployeeDashboard {

}
