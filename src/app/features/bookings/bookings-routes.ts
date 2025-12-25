import { Routes } from "@angular/router";
import { AllBookings } from "./all-bookings/page/all-bookings/all-bookings";


export const BookingsRoutesList: Routes = [
    { path: 'bookinsdetails', component: AllBookings, data: { breadcrumb: 'All Bookings' } },
]