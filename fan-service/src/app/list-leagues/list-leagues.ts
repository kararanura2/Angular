import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-leagues',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-leagues.html',
  styleUrls: ['./list-leagues.css']
})
export class ListLeagues implements OnInit {
  leagues: any[] = [];
  loading = true;
  selectedLeague: string | null = null;

  @Output() leagueSelected = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'https://api.football-data.org/v4/competitions';
    const headers = { 'X-Auth-Token': '4dadba718e2d4ebdadd914eecb529da2' };

    this.http.get<any>(url, { headers }).subscribe({
      next: (res) => {
        const all = res.competitions || [];
        // Only keep major/common competitions
        const majorCodes = ['PL', 'PD', 'SA', 'BL1', 'FL1', 'CL', 'WC', 'MLS', 'DED']; 
        this.leagues = all
          .filter((l: any) => majorCodes.includes(l.code))
          .sort((a: any, b: any) => a.name.localeCompare(b.name));
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching competitions:', err);
        this.loading = false;
      }
    });
  }

  selectLeague(code: string) {
    if (!code) return;
    this.selectedLeague = code;
    this.leagueSelected.emit(code);
  }
}
