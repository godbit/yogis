import { Component, OnInit } from '@angular/core';
import { ProfileDataService, Profile } from '../profile-data.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {

  imgUrl: string;

  _profileSubscription;

  constructor(private profileData: ProfileDataService) { }

  ngOnInit() {
    this.initSubscriptions();
    this.imgUrl = this.profileData.getCurrentProfile().imgUrl;
  }

  initSubscriptions() {
    this._profileSubscription = this.profileData.currentProfileChange.subscribe((profile: Profile) => {
        this.imgUrl = profile.imgUrl;
    });
  }
}
