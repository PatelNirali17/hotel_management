import { Routes } from "@angular/router";
import { RoomType } from "./room-type/page/room-type/room-type";
import { AllRooms } from "./all-rooms/page/all-rooms/all-rooms";

export const RoomsRoutesList: Routes = [
    { path: 'roomtype', component: RoomType, data: { breadcrumb: 'Room Type' } },
    { path: 'roomdetails', component: AllRooms, data: { breadcrumb: 'All Rooms' } },
]