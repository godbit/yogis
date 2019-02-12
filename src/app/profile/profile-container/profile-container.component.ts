import { Component, OnInit } from '@angular/core';
import { ProfileDataService, Profile, ProfileState } from '../profile-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  currentProfile: Profile;
  state: ProfileState = ProfileState.Void;

  constructor(private profileDataService: ProfileDataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const name = params.get('name');
      console.log('setting profile to:' + name);
      this.stateLoading();
      const obs = this.profileDataService.getProfile(name);
      obs.subscribe((response) => this.handleProfileResponse(response));
    },
    err => {
      this.stateNotFound();
    }
    );
  }

  handleProfileResponse(response) {
    this.stateFound();
    this.currentProfile = this.profileDataService.asProfile(response);
  }

  stateLoading() {
    this.state = ProfileState.Loading;
  }

  stateFound() {
    this.state = ProfileState.Found;
  }

  stateNotFound() {
    this.state = ProfileState.NotFound;
    console.log('ProfileContainerComponent encountered an error fetching profile ' + name);
  }
}
