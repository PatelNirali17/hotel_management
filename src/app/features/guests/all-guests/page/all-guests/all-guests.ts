import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { AllGuestService } from '../../all-guest-service';
import { MatDialog } from '@angular/material/dialog';
import { AllGuestsDialog } from '../../component/all-guests-dialog/all-guests-dialog';

@Component({
  selector: 'app-all-guests',
  imports: [SharedModule],
  templateUrl: './all-guests.html',
  styleUrl: './all-guests.scss',
})
export class AllGuests {
  AllGuestsDetails: any;
  page: any;

  constructor(private allGuestService: AllGuestService, private dialog: MatDialog) {
    this.GetAllGuestsDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetAllGuestsDetails() {
    this.allGuestService.GetAllGuestsList().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.AllGuestsDetails = result
      },
    })
  }

  OpenCreateAllGuestsDialog() {
    const dialogRef = this.dialog.open(AllGuestsDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllGuestsDetails()
    });
  }

}
