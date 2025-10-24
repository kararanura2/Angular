import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Club } from '../models/clubs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://api.football-data.org/v4';
  private headers = new HttpHeaders({
    'X-Auth-Token': 'YOUR_API_KEY_HERE'
  });

  constructor(private http: HttpClient) {}

  // made default = Premier League
  getTeams(leagueCode: string = 'PL'): Observable<Club[]> {
    const url = `${this.baseUrl}/competitions/${leagueCode}/teams`;
    return this.http.get<any>(url, { headers: this.headers }).pipe(
      map(res => res.teams)
    );
  }
}
