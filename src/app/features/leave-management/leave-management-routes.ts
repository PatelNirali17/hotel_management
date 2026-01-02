import { Routes } from "@angular/router";
import { LeaveTypes } from "./leave-types/page/leave-types/leave-types";
import { LeaveBalance } from "./leave-balance/page/leave-balance/leave-balance";
import { LeaveRequest } from "./leave-request/page/leave-request/leave-request";
import { LeaveRequestApproval } from "./leave-request-approval/page/leave-request-approval/leave-request-approval";
import { EmployeeLeaveBalance } from "./employee-leave-balance/page/employee-leave-balance/employee-leave-balance";

export const LeaveRoutesList: Routes = [
    { path: 'leavetypes', component: LeaveTypes, data: { breadcrumb: 'Leave Type' } },
    { path: 'leavebalance', component: LeaveBalance, data: { breadcrumb: 'Leave Balance' } },
    { path: 'leaverequest', component: LeaveRequest, data: { breadcrumb: 'Leave Request' } },
    { path: 'leaverequestapproval', component: LeaveRequestApproval, data: { breadcrumb: 'Leave Request Approval' } },
    { path: 'employeeleavebalance', component: EmployeeLeaveBalance, data: { breadcrumb: 'Leave Balance' } },
]