import { Component } from '@angular/core';
import { CabListService } from '../../cab-list-service';
import { SharedModule } from '../../../../../shared/shared-module';
import { MatDialog } from '@angular/material/dialog';
import { CabListDialog } from '../../component/cab-list-dialog/cab-list-dialog';

@Component({
  selector: 'app-cab-list',
  imports: [SharedModule],
  templateUrl: './cab-list.html',
  styleUrl: './cab-list.scss',
})
export class CabList {
  CabListDetails: any;
  page: any;

  constructor(private cabListService: CabListService, private dialog: MatDialog) {
    this.GetCabListDetails()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetCabListDetails() {
    this.cabListService.GetAllCabList().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.CabListDetails = result
      },
    })
  }

  OpenCreateCabListDialog() {
    const dialogRef = this.dialog.open(CabListDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetCabListDetails()
    });
  }

}
