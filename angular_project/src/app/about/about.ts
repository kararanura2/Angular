import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  // Interpolation
  title = 'About Our Team';
  mission = 'We are a passionate group of developers building modern, user-friendly applications.';

  // Property binding
  photoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  // Event binding
  likes = 0;
  showThanks = false;

  // Two-way binding (for personalized greeting)
  visitorName = '';

  like() {
    this.likes++;
  }

  toggleThanks() {
    this.showThanks = !this.showThanks;
  }
}
