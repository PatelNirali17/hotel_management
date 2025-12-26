import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { DepartmentOverviewService } from '../../department-overview-service';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentOverviewDialog } from '../../component/department-overview-dialog/department-overview-dialog';

@Component({
  selector: 'app-department-overview',
  imports: [SharedModule],
  templateUrl: './department-overview.html',
  styleUrl: './department-overview.scss',
})
export class DepartmentOverview {
  DepartmentOverviewDetails: any;
  page: any;

  constructor(private departmentOverviewService: DepartmentOverviewService, private dialog: MatDialog) {
    this.GetDepartmentOverviewDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetDepartmentOverviewDetails() {
    this.departmentOverviewService.GetDepartmentOverviewDetails().subscribe({
      next: (result: any) => {
        this.DepartmentOverviewDetails = result
      },
    })
  }

  OpenCreateDepartmentOverviewDialog() {
    const dialogRef = this.dialog.open(DepartmentOverviewDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetDepartmentOverviewDetails()
    });
  }

}
