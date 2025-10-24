import { Routes } from '@angular/router';
import { ListClubs } from './list-clubs/list-clubs';
import { ListLeagues } from './list-leagues/list-leagues';

export const routes: Routes = [
    { path: '', redirectTo: 'leagues', pathMatch: 'full' },
    { path: 'clubs', component: ListClubs},
    { path: 'leagues', component: ListLeagues},

];
