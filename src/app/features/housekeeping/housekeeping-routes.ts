import { Routes } from "@angular/router";
import { RoomCleaning } from "./room-cleaning/page/room-cleaning/room-cleaning";
import { Laundry } from "./laundry-services/page/laundry/laundry";

export const HousekeepingRoutesList: Routes = [
    { path: 'roomcleaning', component: RoomCleaning, data: { breadcrumb: 'Room Cleaning' } },
    { path: 'laundryservices', component: Laundry, data: { breadcrumb: 'Laundry Services' } },
]