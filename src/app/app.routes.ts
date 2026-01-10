import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { MainPage } from './features/main-page/main-page';
import { Dashboard } from './features/dashboard/page/dashboard/dashboard';
import { RoomsRoutesList } from './features/rooms/room-routes';
import { BookingsRoutesList } from './features/bookings/bookings-routes';
import { StaffRoutesList } from './features/staff/staff-routes';
import { DepartmentsRoutesList } from './features/departments/departments-routes';
import { HousekeepingRoutesList } from './features/housekeeping/housekeeping-routes';
import { LeaveRoutesList } from './features/leave-management/leave-management-routes';
import { ShiftRoutesList } from './features/shift-management/shift-management-routes';
import { EventsRoutesList } from './features/events/events-routes';
import { GuestsRoutesList } from './features/guests/guests-routes';
import { CabsRoutesList } from './features/cabs/cabs-routes';
import { ReportsRoutesList } from './features/reports/reports-routes';
import { EmployeeAttendance } from './features/employee-attendance/page/employee-attendance/employee-attendance';
import { PayrollRoutesList } from './features/payroll/payroll-routes';
import { EmployeeDashboard } from './features/employee-dashboard/page/employee-dashboard/employee-dashboard';
import { Accommodations } from './features/accommodations/page/accommodations/accommodations';
import { MyProfile } from './features/my-profile/page/my-profile/my-profile';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    {
        path: '', component: MainPage,
        children: [
            { path: 'dashboard', component: Dashboard, data: { breadcrumb: 'Dashboard' } },
            { path: 'employeedashboard', component: EmployeeDashboard, data: { breadcrumb: 'Dashboard' } },
            { path: 'accommodations', component: Accommodations, data: { breadcrumb: 'Accommodations' } },
            { path: 'myprofile', component: MyProfile, data: { breadcrumb: 'My Profile' } },
            {
                path: 'rooms', data: { breadcrumb: 'Rooms' },
                children: RoomsRoutesList
            },
            {
                path: 'bookings', data: { breadcrumb: 'Bookings' },
                children: BookingsRoutesList
            },
            {
                path: 'staff', data: { breadcrumb: 'Staff' },
                children: StaffRoutesList
            },
            {
                path: 'departments', data: { breadcrumb: 'Departments' },
                children: DepartmentsRoutesList
            },
            {
                path: 'housekeeping', data: { breadcrumb: 'Housekeeping' },
                children: HousekeepingRoutesList
            },
            {
                path: 'leave', data: { breadcrumb: 'Leave Management' },
                children: LeaveRoutesList
            },
            {
                path: 'shift', data: { breadcrumb: 'Shift Management' },
                children: ShiftRoutesList
            },
            {
                path: 'events', data: { breadcrumb: 'Events' },
                children: EventsRoutesList
            },
            {
                path: 'guests', data: { breadcrumb: 'Guests' },
                children: GuestsRoutesList
            },
            {
                path: 'cabs', data: { breadcrumb: 'Cabs' },
                children: CabsRoutesList
            },
            {
                path: 'reports', data: { breadcrumb: 'Reports' },
                children: ReportsRoutesList
            },
            { path: 'attendance', component: EmployeeAttendance, data: { breadcrumb: 'Employee Attendance' } },
            {
                path: 'payroll', data: { breadcrumb: 'Payroll' },
                children: PayrollRoutesList
            },
        ]

    }
];
