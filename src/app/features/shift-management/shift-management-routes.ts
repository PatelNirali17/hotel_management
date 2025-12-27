import { Routes } from "@angular/router";
import { ShiftList } from "./shift-list/page/shift-list/shift-list";
import { AssignShift } from "./assign-shift/page/assign-shift/assign-shift";
import { ShiftReport } from "./shift-report/page/shift-report/shift-report";

export const ShiftRoutesList: Routes = [
    { path: 'shiftlist', component: ShiftList, data: { breadcrumb: 'Shift List' } },
    { path: 'assignshift', component: AssignShift, data: { breadcrumb: 'Assign Shift' } },
    { path: 'shiftreport', component: ShiftReport, data: { breadcrumb: 'Shift Report' } },
]