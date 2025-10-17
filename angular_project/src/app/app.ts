import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <h1>Pokémon API Demo</h1>

    <nav>
      <a routerLink="/pokemon" routerLinkActive="active">Pokémon List</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>

    <hr />

    <router-outlet></router-outlet>
  `,
  styles: [`
    h1 {
      text-align: center;
      color: #222;
    }
    nav {
      text-align: center;
      margin-bottom: 15px;
    }
    nav a {
      display: inline-block;
      padding: 8px 12px;
      text-decoration: none;
      color: white;
      background-color: #007acc;
      border-radius: 4px;
      margin: 5px;
      transition: background-color 0.3s;
    }
    nav a.active {
      background-color: #005fa3;
    }
    nav a:hover {
      background-color: #006fba;
    }
  `]
})
export class App {}
