import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { LaundryService } from '../../laundry-service';
import { MatDialog } from '@angular/material/dialog';
import { LaundryDialog } from '../../component/laundry-dialog/laundry-dialog';

@Component({
  selector: 'app-laundry',
  imports: [SharedModule],
  templateUrl: './laundry.html',
  styleUrl: './laundry.scss',
})
export class Laundry {
  LaundryDetails: any;
  page: any;

  constructor(private laundryService: LaundryService, private dialog: MatDialog) {
    this.GetLaundryDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetLaundryDetails() {
    this.laundryService.GetLaundryDetails().subscribe({
      next: (result: any) => {
        this.LaundryDetails = result
      },
    })
  }

  OpenCreateLaundryDialog() {
    const dialogRef = this.dialog.open(LaundryDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetLaundryDetails()
    });
  }

}
