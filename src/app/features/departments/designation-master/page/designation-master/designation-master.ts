import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { DesignationMasterService } from '../../designation-master-service';
import { MatDialog } from '@angular/material/dialog';
import { DesignationMasterDialog } from '../../component/designation-master-dialog/designation-master-dialog';

@Component({
  selector: 'app-designation-master',
  imports: [SharedModule],
  templateUrl: './designation-master.html',
  styleUrl: './designation-master.scss',
})
export class DesignationMaster {
  DesignationDetails: any;
  page: any;

  constructor(private designationMasterService: DesignationMasterService, private dialog: MatDialog) {
    this.GetDesignationDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetDesignationDetails() {
    this.designationMasterService.GetDesignationDetails().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.DesignationDetails = result
      },
    })
  }

  OpenCreateDesignationDialog() {
    const dialogRef = this.dialog.open(DesignationMasterDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetDesignationDetails()
    });
  }
}
