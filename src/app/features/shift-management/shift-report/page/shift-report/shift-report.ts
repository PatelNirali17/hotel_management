import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { ShiftReportService } from '../../shift-report-service';
import { MatDialog } from '@angular/material/dialog';
import { ShiftReportDialog } from '../../component/shift-report-dialog/shift-report-dialog';

@Component({
  selector: 'app-shift-report',
  imports: [SharedModule],
  templateUrl: './shift-report.html',
  styleUrl: './shift-report.scss',
})
export class ShiftReport {
  ShiftReportDetails: any;
  page: any;

  constructor(private shiftReportService: ShiftReportService, private dialog: MatDialog) {
    this.GetShiftReportDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetShiftReportDetails() {
    this.shiftReportService.GetShiftReport().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.ShiftReportDetails = result
      },
    })
  }

  OpenShiftReportDialog() {
    const dialogRef = this.dialog.open(ShiftReportDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetShiftReportDetails()
    });
  }

}
