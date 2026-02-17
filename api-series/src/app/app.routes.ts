import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { New } from './pages/new/new';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: Home},
    { path: 'new', component: New}
];
