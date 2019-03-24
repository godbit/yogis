import { Component, OnInit, Input } from '@angular/core';
import { ProfileDataService } from '../../profile-data.service';
import { Profile, ProfileState } from '../../profile';

@Component({
  selector: 'app-profile-thumb',
  templateUrl: './profile-thumb.component.html',
  styleUrls: ['./profile-thumb.component.css']
})
export class ProfileThumbComponent implements OnInit {

  @Input() key: string;
  profile: Profile;
  state: ProfileState = ProfileState.Void;

  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.stateLoading();
    this.profileDataService.getProfile(this.key).subscribe(
      (response) => {
        this.profile = response;
        this.stateFound();
      });
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
