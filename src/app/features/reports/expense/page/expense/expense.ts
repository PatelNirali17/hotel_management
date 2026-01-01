import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared-module';
import { ExpenseService } from '../../expense-service';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseDialog } from '../../component/expense-dialog/expense-dialog';

@Component({
  selector: 'app-expense',
  imports: [SharedModule],
  templateUrl: './expense.html',
  styleUrl: './expense.scss',
})
export class Expense {
  ExpenseDetails: any;
  page: any;

  constructor(private expenseService: ExpenseService, private dialog: MatDialog) {
    this.GetExpense()
  }
  onPageChanged(event: any) {
    this.page = event;
  }
  GetExpense() {
    this.expenseService.GetAllExpense().subscribe({
      next: (result: any) => {
        console.log('result: ', result);
        this.ExpenseDetails = result
      },
    })
  }

  OpenExpenseDialog() {
    const dialogRef = this.dialog.open(ExpenseDialog, {
      minWidth: '700px',
      maxWidth: '700px',
      // data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.GetExpense()
    });
  }

}
