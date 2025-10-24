import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Club } from '../../models/clubs';
import { ClubDetails } from '../club-details/club-details';

@Component({
  selector: 'app-list-clubs',
  standalone: true,
  imports: [CommonModule, FormsModule, ClubDetails],
  templateUrl: './list-clubs.html',
  styleUrls: ['./list-clubs.css']
})
export class ListClubs implements OnInit {
  leagueCode = 'PL';          // default
  clubs: Club[] = [];
  filteredClubs: Club[] = [];
  selectedClub: Club | null = null;
  loading = true;
  searchTerm = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.leagueCode = params.get('code') || 'WC';
      this.loadClubs();
    });
  }

  loadClubs(): void {
    this.loading = true;
    const url = `https://api.football-data.org/v4/competitions/${this.leagueCode}/teams`;
    const headers = { 'X-Auth-Token': '4dadba718e2d4ebdadd914eecb529da2' };

    this.http.get<any>(url, { headers }).subscribe({
      next: (res) => {
        this.clubs = res.teams || [];
        this.filteredClubs = this.clubs;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading clubs:', err);
        this.loading = false;
      }
    });
  }

  searchClubs() {
    const term = this.searchTerm.toLowerCase();
    this.filteredClubs = this.clubs.filter(c => c.name.toLowerCase().includes(term));
  }

  selectClub(club: Club) {
    this.selectedClub = this.selectedClub === club ? null : club;
  }
}
