import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { SalaryMasterService } from '../../salary-master-service';
import { MatDialog } from '@angular/material/dialog';
import { SalaryMasterDialog } from '../../component/salary-master-dialog/salary-master-dialog';

@Component({
  selector: 'app-salary-master',
  imports: [SharedModule],
  templateUrl: './salary-master.html',
  styleUrl: './salary-master.scss',
})
export class SalaryMaster {
  SalaryMasterDetails: any;
  page: any;

  constructor(private salaryMasterService: SalaryMasterService, private dialog: MatDialog) {
    this.GetSalaryMaster()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetSalaryMaster() {
    this.salaryMasterService.GetAllSalary().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.SalaryMasterDetails = result
      },
    })
  }

  OpenSalaryMasterDialog() {
    const dialogRef = this.dialog.open(SalaryMasterDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetSalaryMaster()
    });
  }
}
