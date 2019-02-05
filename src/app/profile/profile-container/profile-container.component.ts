import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../profile-data.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.profileDataService.loadProfiles();
  }

}
