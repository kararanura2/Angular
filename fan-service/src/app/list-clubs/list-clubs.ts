import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ClubDetails } from '../club-details/club-details';
import { Club } from '../../models/clubs';

@Component({
  selector: 'app-list-clubs',
  standalone: true,
  imports: [CommonModule, FormsModule, ClubDetails],
  templateUrl: './list-clubs.html',
  styleUrls: ['./list-clubs.css']
})
export class ListClubs implements OnInit, OnChanges {
  @Input() leagueCode: string = 'PL'; // default from parent

  clubs: Club[] = [];
  filteredClubs: Club[] = [];
  selectedClub: Club | null = null;
  loading = false;
  searchTerm = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadClubs();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['leagueCode'] && !changes['leagueCode'].firstChange) {
      this.loadClubs();
    }
  }

  loadClubs(): void {
    this.loading = true;
    this.filteredClubs = [];
    this.selectedClub = null;

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

  searchClubs(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredClubs = this.clubs.filter((c) =>
      c.name.toLowerCase().includes(term)
    );
  }

  selectClub(club: Club): void {
    this.selectedClub = this.selectedClub === club ? null : club;
  }
}
