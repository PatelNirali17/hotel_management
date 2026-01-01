import { Routes } from "@angular/router";
import { CabList } from "./cab-list/page/cab-list/cab-list";
import { CabBooking } from "./cab-booking/page/cab-booking/cab-booking";


export const CabsRoutesList: Routes = [
    { path: 'cablist', component: CabList, data: { breadcrumb: 'Cab List' } },
    { path: 'cabbooking', component: CabBooking, data: { breadcrumb: 'Cab Booking' } },
]