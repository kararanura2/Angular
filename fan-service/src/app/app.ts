import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListLeagues } from './list-leagues/list-leagues';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {}

