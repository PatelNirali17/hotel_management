import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { MainPage } from './features/main-page/main-page';
import { Dashboard } from './features/dashboard/page/dashboard/dashboard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    {
        path: '', component: MainPage,
        children: [
            { path: 'dashboard', component: Dashboard, data: { breadcrumb: 'Dashboard' } },
        ]
    }
];
