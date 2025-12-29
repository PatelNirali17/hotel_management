import { Routes } from "@angular/router";
import { AllEvents } from "./all-events/page/all-events/all-events";

export const EventsRoutesList: Routes = [
    { path: 'allevents', component: AllEvents, data: { breadcrumb: 'All Events' } },
]