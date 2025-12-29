import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { AllEventService } from '../../all-event-service';
import { MatDialog } from '@angular/material/dialog';
import { AllEventsDialog } from '../../component/all-events-dialog/all-events-dialog';

@Component({
  selector: 'app-all-events',
  imports: [SharedModule],
  templateUrl: './all-events.html',
  styleUrl: './all-events.scss',
})
export class AllEvents {
  AllEventsDetails: any;
  page: any;

  constructor(private allEventService: AllEventService, private dialog: MatDialog) {
    this.GetAllEventsDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetAllEventsDetails() {
    this.allEventService.GetAllEventList().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.AllEventsDetails = result
      },
    })
  }

  OpenCreateAllEventsDialog() {
    const dialogRef = this.dialog.open(AllEventsDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetAllEventsDetails()
    });
  }

}
