import { Routes } from "@angular/router";
import { AllStaff } from "./all-staff/page/all-staff/all-staff";
import { StaffProfile } from "./staff-profile/page/staff-profile/staff-profile";

export const StaffRoutesList: Routes = [
    { path: 'staffdetails', component: AllStaff, data: { breadcrumb: 'All Staff' } },
    { path: 'staffprofile', component: StaffProfile, data: { breadcrumb: 'Staff Profile' } },
]