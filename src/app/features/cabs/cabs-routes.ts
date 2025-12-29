import { Routes } from "@angular/router";
import { CabList } from "./cab-list/page/cab-list/cab-list";


export const CabsRoutesList: Routes = [
    { path: 'cablist', component: CabList, data: { breadcrumb: 'Cab List' } },
]