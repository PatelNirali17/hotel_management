import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { StocksService } from '../../stocks-service';
import { MatDialog } from '@angular/material/dialog';
import { StocksDialog } from '../../component/stocks-dialog/stocks-dialog';

@Component({
  selector: 'app-stocks',
  imports: [SharedModule],
  templateUrl: './stocks.html',
  styleUrl: './stocks.scss',
})
export class Stocks {
  StocksDetails: any;
  page: any;

  constructor(private stocksService: StocksService, private dialog: MatDialog) {
    this.GetStocks()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetStocks() {
    this.stocksService.GetAllStocks().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.StocksDetails = result
      },
    })
  }

  OpenStocksDialog() {
    const dialogRef = this.dialog.open(StocksDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetStocks()
    });
  }

}
