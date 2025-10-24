import { Routes } from '@angular/router';
import { ListLeagues } from './list-leagues/list-leagues';
import { ListClubs } from './list-clubs/list-clubs';

export const routes: Routes = [
  { path: '', component: ListLeagues },
  { path: 'clubs/:code', component: ListClubs },
];
