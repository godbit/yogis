import { Component, OnInit, Input } from '@angular/core';
import { ProfileDataService } from '../../profile-data.service';
import { Profile, ProfileState } from '../../profile';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInScaleAnimation } from 'src/app/globals/animations';

@Component({
  selector: 'app-profile-thumb',
  templateUrl: './profile-thumb.component.html',
  styleUrls: ['./profile-thumb.component.css'],
  animations: [
    trigger('imageLoadedAnimation', [
      transition(
        '* => *',
        useAnimation(fadeInScaleAnimation, {
          params: {
            time: '200ms ease-in-out'
          }
        })
      )
    ])
  ]
})

export class ProfileThumbComponent implements OnInit {

  @Input() key: string;
  profile: Profile;
  state: ProfileState = ProfileState.Void;
  loaded = false;

  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.profileDataService.getProfile(this.key).subscribe(
      (response) => {
        this.profile = response;
      });
  }

  imageLoaded() {
    setTimeout(() => {
      this.loaded = true;
    }, 200);
  }

  stateNotFound() {
    console.log('ProfileContainerComponent encountered an error fetching profile ' + name);
  }
}
