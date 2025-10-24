import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLeagues } from './list-leagues/list-leagues';
import { ListClubs } from './list-clubs/list-clubs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListLeagues, ListClubs],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  selectedLeagueCode = 'PL'; // default league

  onLeagueSelected(code: string) {
    this.selectedLeagueCode = code;
  }
}
