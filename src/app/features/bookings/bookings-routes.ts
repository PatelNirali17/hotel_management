import { Routes } from "@angular/router";
import { AllBookings } from "./all-bookings/page/all-bookings/all-bookings";
import { CancelBookings } from "./cancel-bookings/page/cancel-bookings/cancel-bookings";


export const BookingsRoutesList: Routes = [
    { path: 'bookinsdetails', component: AllBookings, data: { breadcrumb: 'All Bookings' } },
    { path: 'cancelbookings', component: CancelBookings, data: { breadcrumb: 'Cancel Bookings' } },
]