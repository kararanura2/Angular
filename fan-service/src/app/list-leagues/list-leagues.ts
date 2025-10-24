import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-leagues',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-leagues.html',
  styleUrls: ['./list-leagues.css']
})
export class ListLeagues implements OnInit {
  leagues: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'https://api.football-data.org/v4/competitions';
    const headers = { 'X-Auth-Token': '4dadba718e2d4ebdadd914eecb529da2' };
    this.http.get<any>(url, { headers }).subscribe({
      next: (res) => {
        const all = res.competitions || [];
        const major = ['PL', 'PD', 'SA', 'BL1', 'FL1', 'CL', 'WC'];
        this.leagues = all.filter((l: any) => major.includes(l.code));
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
