import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AllGuestService } from '../../all-guest-service';

@Component({
  selector: 'app-all-guests-dialog',
  imports: [SharedModule],
  templateUrl: './all-guests-dialog.html',
  styleUrl: './all-guests-dialog.scss',
})
export class AllGuestsDialog {
  LocationDetails: any;
  IDTypeList: any;

  constructor(public dialogRef: MatDialogRef<AllGuestsDialog>, private allGuestService: AllGuestService,
    @Inject(MAT_DIALOG_DATA) public GuestsDetails: any) {

    this.allGuestService.GetAllNationalityList().subscribe({
      next: (result: any) => {
        this.LocationDetails = result
      },
    })
    this.allGuestService.GetAllIDTypeList().subscribe({
      next: (result: any) => {
        this.IDTypeList = result
      },
    })

  }

}
