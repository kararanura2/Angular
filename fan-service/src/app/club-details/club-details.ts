import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Club } from '../../models/clubs';

@Component({
  selector: 'app-club-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './club-details.html', 
  styleUrls: ['./club-details.css']
})
export class ClubDetails {
  @Input() club!: Club;
}
