import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { DepartmentMasterService } from '../../department-master-service';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentMasterDialog } from '../../component/department-master-dialog/department-master-dialog';

@Component({
  selector: 'app-department-master',
  imports: [SharedModule],
  templateUrl: './department-master.html',
  styleUrl: './department-master.scss',
})
export class DepartmentMaster {
  DepartmentDetails: any;
  page: any;

  constructor(private departmentMasterService: DepartmentMasterService, private dialog: MatDialog) {
    this.GetDepartmentDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetDepartmentDetails() {
    this.departmentMasterService.GetDepartmentDetails().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.DepartmentDetails = result
      },
    })
  }

  OpenCreateDepartmentDialog() {
    const dialogRef = this.dialog.open(DepartmentMasterDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetDepartmentDetails()
    });
  }
}
