import { Routes } from '@angular/router';
import { About } from './about/about';
import { PokemonList } from './pokemon-list/pokemon-list';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'pokemon', component: PokemonList }
];
