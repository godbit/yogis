import { Component } from '@angular/core';
import { ProfileDataService } from './profile/profile-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yogis';
  constructor() { }
}
