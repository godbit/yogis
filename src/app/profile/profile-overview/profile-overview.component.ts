import { Component, OnInit } from '@angular/core';
import { ProfileDataService, Profile } from '../profile-data.service';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent implements OnInit {

  profiles: Profile[] = [];

  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.profiles = this.profileDataService.getProfiles();
  }

}
