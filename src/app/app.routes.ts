import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { MainPage } from './features/main-page/main-page';
import { Dashboard } from './features/dashboard/page/dashboard/dashboard';
import { RoomsRoutesList } from './features/rooms/room-routes';
import { BookingsRoutesList } from './features/bookings/bookings-routes';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    {
        path: '', component: MainPage,
        children: [
            { path: 'dashboard', component: Dashboard, data: { breadcrumb: 'Dashboard' } },
            {
                path: 'rooms', data: { breadcrumb: 'Rooms' },
                children: RoomsRoutesList
            },
              {
                path: 'bookings', data: { breadcrumb: 'Bookings' },
                children: BookingsRoutesList
            },
        ]
    }
];
