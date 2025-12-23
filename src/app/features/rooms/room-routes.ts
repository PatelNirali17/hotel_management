import { Routes } from "@angular/router";
import { RoomType } from "./room-type/page/room-type/room-type";

export const RoomsRoutesList: Routes = [
    { path: 'roomtype', component: RoomType, data: { breadcrumb: 'Room Type' } },
]