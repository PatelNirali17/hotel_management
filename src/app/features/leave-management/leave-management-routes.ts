import { Routes } from "@angular/router";
import { LeaveTypes } from "./leave-types/page/leave-types/leave-types";
import { LeaveBalance } from "./leave-balance/page/leave-balance/leave-balance";

export const LeaveRoutesList: Routes = [
    { path: 'leavetypes', component: LeaveTypes, data: { breadcrumb: 'Leave Type' } },
    { path: 'leavebalance', component: LeaveBalance, data: { breadcrumb: 'Leave Balance' } },
]