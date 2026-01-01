import { Routes } from "@angular/router";
import { Stocks } from "./stocks/page/stocks/stocks";
import { Expense } from "./expense/page/expense/expense";


export const ReportsRoutesList: Routes = [
    { path: 'stocks', component: Stocks, data: { breadcrumb: 'Stocks' } },
    { path: 'expense', component: Expense, data: { breadcrumb: 'Expense' } },
]