import { Component, OnInit, Input } from '@angular/core';
import { ProfileDataService, Profile, ProfileState } from '../profile-data.service';

@Component({
  selector: 'app-profile-thumb',
  templateUrl: './profile-thumb.component.html',
  styleUrls: ['./profile-thumb.component.css']
})
export class ProfileThumbComponent implements OnInit {

  @Input() key: string;
  currentProfile: Profile;
  state: ProfileState = ProfileState.Void;

  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.stateLoading();
    const obs = this.profileDataService.getProfile(this.key);
    obs.subscribe((response) => this.handleProfileResponse(response));
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
