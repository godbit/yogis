import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../../profile-data.service';
import { ActivatedRoute } from '@angular/router';
import { Profile, ProfileState } from '../../profile';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  profile: Profile;
  state: ProfileState = ProfileState.Void;

  constructor(private profileDataService: ProfileDataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      this.stateLoading();
      this.profileDataService.getProfile(name).subscribe(
        (response) => {
          this.profile = response;
          this.stateFound();
        });
    },
    err => {
      this.stateNotFound();
    }
    );
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
