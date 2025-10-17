import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.html',
  styleUrls: ['./pokemon-list.css']
})
export class PokemonList {
  pokemons: any[] = [];
  isLoaded = false;

  constructor(private pokemonService: PokemonService) {}

  loadPokemons() {
    this.pokemonService.getPokemons().subscribe((data) => {
      this.pokemons = data.results;
      this.isLoaded = true;
    });
  }
}
