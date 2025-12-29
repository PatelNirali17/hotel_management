import { Routes } from "@angular/router";
import { AllGuests } from "./all-guests/page/all-guests/all-guests";

export const GuestsRoutesList: Routes = [
    { path: 'allguests', component: AllGuests, data: { breadcrumb: 'All Guests' } },
]