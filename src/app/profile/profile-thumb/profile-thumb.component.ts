import { Component, OnInit } from '@angular/core';
import { ProfileDataService, Profile } from '../profile-data.service';

@Component({
  selector: 'app-profile-thumb',
  templateUrl: './profile-thumb.component.html',
  styleUrls: ['./profile-thumb.component.css']
})
export class ProfileThumbComponent implements OnInit {

  currentProfile: Profile;
  _profileSubscription;

  constructor(private profileData: ProfileDataService) { }

  ngOnInit() {
    this.initSubscriptions();
    this.currentProfile = this.profileData.getCurrentProfile();
  }

  initSubscriptions() {
    this._profileSubscription = this.profileData.currentProfileChange.subscribe((profile: Profile) => {
        this.currentProfile = profile;
    });
  }

}
